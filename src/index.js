import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// Get a reference to the HTML element with the ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app component into the root element
root.render(
  // Wrap the App component with the Provider component from react-redux
  // to provide the Redux store to all components in the App
  <Provider store={store}>
    <App />
  </Provider>
);
