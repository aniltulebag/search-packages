import React, { FC, useState } from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import styles from "./RepositoriesList.module.css";

const RepositoriesList: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchRepositories } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    searchRepositories(searchTerm.trim());
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles["repositories-container"]}>
      <form className={styles["repositories-form"]} onSubmit={onSubmit}>
        <input
          value={searchTerm}
          onChange={onChange}
          type="text"
          placeholder="Enter your search term"
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
