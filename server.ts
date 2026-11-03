import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint for Telegram lead submission
  app.post('/api/telegram', async (req, res) => {
    try {
      const { name, phone, message, service } = req.body;
      const botToken = '9282002540:AAHtKUAyqkqXyzmFOjTZEQlVpPG8vC-U_Mo';
      const chatId = '324919537';

      const text = `🔔 *Новая заявка с сайта Febby!*\n\n` +
                   `👤 *Имя:* ${name || 'Не указано'}\n` +
                   `📞 *Телефон / Контакт:* ${phone || 'Не указано'}\n` +
                   `🛠 *Услуга / Пакет:* ${service || 'Не указано'}\n` +
                   `💬 *Сообщение:* ${message || 'Без описания'}`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      const data = await response.json();
      if (!data.ok) {
        return res.status(400).json({ success: false, error: data.description || 'Telegram API error' });
      }

      res.json({ success: true });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
