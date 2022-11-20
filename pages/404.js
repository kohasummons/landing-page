import Image from "next/image";
import styles from "../styles/404.module.css";

function my404() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>Error 404.</h1>
          <div>{/* <Image src={} alt={} width={} height={} /> */}</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.image}>
            <Image
              src="/sad-face.png"
              alt="Error404"
              width={975}
              height={415}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default my404;
