import Image from "next/image";
import styles from "../../styles/Failure.module.css";

function Success() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Donate.</h1>
          <div>
            <Image src="/donateheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h2>Sorry! An error occured during your transaction.</h2>
            <Image
              src={"/failurepage.png"}
              alt="collection of toys"
              width={650}
              height={510}
            />
            <button>Try Again</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Success;
