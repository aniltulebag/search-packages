import React from "react";

import RepositoriesList from "./components/RepositoriesList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </div>
  );
}

export default App;
