import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./component/App";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { persistor, store } from "./redux/store";
import LoaderSpiner from "./component/loader/Loader";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoaderSpiner/>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
