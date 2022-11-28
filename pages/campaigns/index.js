import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Campaigns.module.css";

const Campaigns = () => {
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
            <h2>Let&apos;s begin your campaign journey</h2>
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
                <h3>Step 1 - Category</h3>
                <small>What best describes why you are fundraising</small>
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
                <h3>
                  Category <span>(1 max.)</span>
                </h3>
                <div className={styles.category}>
                  <button>Medical</button>
                  <button>Animals</button>
                  <button>Education</button>
                  <button>Food</button>
                  <button>Business</button>
                  <button>Event</button>
                  <button>Memorial</button>
                  <button>Sports</button>
                  <button>Travel</button>
                  <button>Competition</button>
                  <button>Creative</button>
                  <button>Volunteer</button>
                </div>
                <button className={styles.btn}>
                  <Link href="campaigns/campaign-option">Next</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Campaigns;
