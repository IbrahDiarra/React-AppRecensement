import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import './flags.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Composant/Register/Register';
import Accueil from './Composant/Accueil/Accueil';
import VoirMarchand from './Composant/VoirMarchand/VoirMarchand';
import VoirUser from './Composant/VoirUser/VoirUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "marchands",
    element: <VoirMarchand/>,
  },
  {
    path: "recenseur",
    element: <Register/>,
  },
  {
    path: "accueil",
    element: <Accueil/>,
  },
  {
    path: "voir-recenseur",
    element: <VoirUser/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
