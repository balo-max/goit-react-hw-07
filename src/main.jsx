import { PersistGate } from 'redux-persist/integration/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { persistor } from './redux/store.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </StrictMode>
  </Provider>
);
