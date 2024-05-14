import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventStore from './storage/EventStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={ {events: new EventStore()} }>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
