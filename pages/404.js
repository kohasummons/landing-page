import Image from "next/image";
import styles from "../styles/404.module.css";

function my404() {
  return (
    <>
        <div className="container">
      <header className={styles.header}>
          <h1>Error 404.</h1>
          <div>
            <Image src="/errorheader.png" alt="" width={150} height={150} />
          </div>
      </header>
        </div>
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
