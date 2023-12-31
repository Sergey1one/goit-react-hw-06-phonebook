import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from './theme'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from './redux/store'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <App />
        </ThemeProvider>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
