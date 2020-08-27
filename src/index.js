import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import {HashRouter} from "react-router-dom";

library.add(fab,faBars);

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
