import React from "react";
import ReactDOM from "react-dom";
import App from './App';

//Import tema
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//Import colores
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";


const rootElement= document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
          <App />
    </React.StrictMode>,
        rootElement
        );
