import React, { StrictMode, Component, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Construction from "./projects/Construction.tsx";
import Fitness from "./projects/Fitness.tsx";
import Restaurant from "./projects/Restaurant.tsx";
import EcoStore from "./projects/EcoStore.tsx";
import "./index.css";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
          <h2>Что-то пошло не так при загрузке страницы.</h2>
          <p style={{ color: "#666" }}>{this.state.error?.message}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#bcf824",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project/construction" element={<Construction />} />
          <Route path="/project/fitness" element={<Fitness />} />
          <Route path="/project/restaurant" element={<Restaurant />} />
          <Route path="/project/ecostore" element={<EcoStore />} />
          <Route path="*" element={<App />} />
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>,
);
