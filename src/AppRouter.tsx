import React, { Component, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import RenovationApp from './App';
import WebsiteApp from './website/App';
import Construction from './website/projects/Construction';
import Fitness from './website/projects/Fitness';
import Restaurant from './website/projects/Restaurant';
import EcoStore from './website/projects/EcoStore';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class WebsiteErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Website ErrorBoundary caught an error:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h2>Что-то пошло не так при загрузке страницы.</h2>
          <p style={{ color: '#666' }}>{this.state.error?.message}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#bcf824',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Перезагрузить страницу
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function LocationAwareApp() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const hash = location.hash.toLowerCase();

  const isWebsiteRoute =
    path.startsWith('/website') ||
    hash.startsWith('#/website') ||
    hash.startsWith('#website');

  if (isWebsiteRoute) {
    return (
      <WebsiteErrorBoundary>
        <Routes>
          <Route path="/website/projects/construction" element={<Construction />} />
          <Route path="/website/projects/fitness" element={<Fitness />} />
          <Route path="/website/projects/restaurant" element={<Restaurant />} />
          <Route path="/website/projects/ecostore" element={<EcoStore />} />
          <Route path="/website/*" element={<WebsiteApp />} />
          <Route path="*" element={<WebsiteApp />} />
        </Routes>
      </WebsiteErrorBoundary>
    );
  }

  return <RenovationApp />;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/website/*" element={<LocationAwareApp />} />
        <Route path="/*" element={<LocationAwareApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
