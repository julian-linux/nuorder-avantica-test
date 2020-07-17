import "fontsource-roboto";
// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Service Worker
import * as serviceWorker from "./serviceWorker";

// Material Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// Components
import App from "./App";

// Store
import store from "./config/store";

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
