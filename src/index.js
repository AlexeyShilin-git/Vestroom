import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import styles from './styles/styles.css'

ReactDOM.render(
  <React.StrictMode className={styles.body}>
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
