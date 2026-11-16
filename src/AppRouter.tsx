import React, { Component, Suspense, lazy, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const RenovationApp = lazy(() => import('./App'));
const WebsiteApp = lazy(() => import('./website/App'));
const Construction = lazy(() => import('./website/projects/Construction'));
const Fitness = lazy(() => import('./website/projects/Fitness'));
const Restaurant = lazy(() => import('./website/projects/Restaurant'));
const EcoStore = lazy(() => import('./website/projects/EcoStore'));

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
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/website/projects/construction" element={<Construction />} />
            <Route path="/website/projects/fitness" element={<Fitness />} />
            <Route path="/website/projects/restaurant" element={<Restaurant />} />
            <Route path="/website/projects/ecostore" element={<EcoStore />} />
            <Route path="/website/*" element={<WebsiteApp />} />
            <Route path="*" element={<WebsiteApp />} />
          </Routes>
        </Suspense>
      </WebsiteErrorBoundary>
    );
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <RenovationApp />
    </Suspense>
  );
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
