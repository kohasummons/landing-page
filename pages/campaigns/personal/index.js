import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import styles from "../../../styles/Campaigns.module.css";

const Personal = () => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountRef = useRef();
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Campaign.</h1>
          <div>
            <Image src="/campaignheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h2>Choose a starting goal</h2>
            <div className={styles.box}>
              <div className={styles.headingSection}>
                <div className={styles.arrowLeft}>
                  <Image
                    src="/arrow-left.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>Step 3 - Target Amount</h3>
                <small>How much would you like to raise</small>
                <div className={styles.arrowRight}>
                  <Image
                    src="/arrow-right.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <div className={styles.selections}>
                <form className={styles.form}>
                  <label htmlFor="target Amount">Target Amount</label>
                  <div className={styles.inputGroup}>
                  <input
                    type="text"
                    value={enteredAmount}
                    name="target amount"
                    ref={amountRef}
                    onChange={() => setEnteredAmount(amountRef.current.value)}
                    placeholder="Enter your target amount"
                  />
                  <span className={styles.currency}>
                    NGN
                  </span>
                  </div>
                </form>
                <button className={styles.btn}>
                  <Link href="personal/upload-files">Next</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Personal;
