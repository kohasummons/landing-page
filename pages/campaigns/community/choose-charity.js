import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Campaigns.module.css";
import { useRef, useState } from "react";

const ChooseCharity = () => {
  const [charity, setCharity] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setCharity(e.target.value);
  };

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
            <h2>Choose your preferred charity organization</h2>
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
                <h3>Step 4 - Choose a charity</h3>
                <small>Choose your preferred nonprofit to campaign for</small>
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
                <form className={styles.form} onSubmit={handleSubmit}>
                  <label htmlFor="choose-charity">Charity</label>
                  <div className={styles.select}>
                    <select
                      name="choose-charity"
                      value={charity}
                      onChange={handleChange}
                    >
                      <option value="">Select your charity organization</option>
                      <option value="charity1">Charity1</option>
                      <option value="charity2">Charity2</option>
                      <option value="charity3">Charity3</option>
                    </select>
                  </div>
                </form>
                <button className={styles.btn}>
                  <Link href="about-campaign">Next</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChooseCharity;
