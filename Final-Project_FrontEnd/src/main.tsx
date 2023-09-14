import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root');
const root = createRoot(container!);
const client = new QueryClient()
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
          <App />
      </QueryClientProvider>
    </Provider>
  // </React.StrictMode>
);