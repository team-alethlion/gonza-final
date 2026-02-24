
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Set up error handling for the application
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  console.error('Error stack:', event.error?.stack);
  console.error('Error filename:', event.filename);
  console.error('Error line:', event.lineno);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  console.error('Promise rejection stack:', event.reason?.stack);
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create root and render with StrictMode to ensure proper React initialization
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker Registration Logic
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    // Defer SW registration to browser idle to avoid competing at startup
    const registerSW = () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed: ', error);
        });
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(registerSW, { timeout: 5000 });
    } else {
      // Fallback: small delay after load
      window.addEventListener('load', () => setTimeout(registerSW, 1000));
    }
  } else {
    // Unregister SW in development
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
        console.log('ServiceWorker unregistered in development mode');
      }
    });
  }
}
