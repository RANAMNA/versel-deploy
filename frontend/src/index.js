import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import {PsyAuthContextProvider} from "./context/PsyAuthContext.jsx";

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  offset: '30px',
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
};



ReactDOM.render(
  <AlertProvider template={AlertTemplate} { ...options }>
    <PsyAuthContextProvider>
<AuthContextProvider>
  <SocketContextProvider>
    <App />
    </SocketContextProvider>
			</AuthContextProvider>
			</PsyAuthContextProvider>
  </AlertProvider>,
  document.getElementById('root')
);
 