import React from 'react';
import ReactDOM from 'react-dom/client';
import CatanPage from '../src/components/Page';

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <CatanPage />
    </React.StrictMode>
  );
}