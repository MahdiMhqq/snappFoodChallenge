import React from "react";
import { Link } from "react-router-dom";

import styles from "./main.module.scss";

import Button from "../../components/Button";

function MainPage() {
  return (
    <main className={styles.main}>
      <Link to={"/vendors"}>
        <Button className={styles.main__btn}>دیدن لیست رستوران ها</Button>
      </Link>
    </main>
  );
}

export default MainPage;
