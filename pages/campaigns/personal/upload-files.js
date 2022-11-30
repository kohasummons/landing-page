import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Campaigns.module.css";
import DragDrop from "../../../components/DragDrop";

const UploadFile = () => {
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
            <h2>Tell your story with pictures or videos</h2>
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
                <h3>Step 4 - Add Photos/Videos</h3>
                <small>Add photos or videos to show to aid your campaign</small>
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
                <DragDrop />
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

export default UploadFile;
