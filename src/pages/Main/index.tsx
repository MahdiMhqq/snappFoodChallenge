import { Link } from "react-router-dom";

import styles from "./main.module.scss";

import Button from "../../components/Button";

function MainPage() {
  return (
    <main className={styles.main}>
      <img
        className={styles.main__logo}
        src="/snappFoodLogoBig.png"
        alt={"snappFood"}
      />
      <p className={styles.main__desc}>
        To see main page of code challenge please route to{" "}
        <code>vendors page</code> by clicking the button below.
      </p>
      <Link to={"/vendors"}>
        <Button className={styles.main__btn}>دیدن لیست رستوران ها</Button>
      </Link>
    </main>
  );
}

export default MainPage;
