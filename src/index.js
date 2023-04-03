import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        'client-id':
          'AVd6V55mEEw22lFnGgBCS1R5Tzipo9SbEXak7wPy-2_ClJgcvVdi9eNKQ5iRFsp6880LzHjcPCeTI0VD',
      }}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);
