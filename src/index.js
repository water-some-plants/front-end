import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./styles/index.scss";
import reducer from "./redux-store/reducer";
import { BrowserRouter as Router } from "react-router-dom";

//setting up the store

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
            <App />
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


