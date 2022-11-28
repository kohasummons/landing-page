import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Campaigns.module.css";
import { FaLink } from "react-icons/fa";

const Success = () => {
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
            <h2>Your campaign is ready!</h2>
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
                <h3>Congratulations</h3>
                <small>You can start getting donations</small>
                <div className={styles.arrowRight}>
                  <Image
                    src="/arrow-right.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className={styles.success}>
                <Image
                  src="/sharecampaignillustration.png"
                  alt=""
                  width={500}
                  height={300}
                />
                <div className={styles.share}>
                  <small>Share your campaign</small>
                  <div className={styles.icons}>
                    <button>
                      <Image
                        src="/social-icons/gmail.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </button>
                    <button>
                      <Image
                        src="/social-icons/whatsapp.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </button>
                    <button>
                      <Image
                        src="/social-icons/facebook.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </button>
                    <button>
                      <Image
                        src="/social-icons/twitter.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </button>
                    <button>
                      <Image
                        src="/social-icons/instagram.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </button>
                    <button>
                      <Image
                        src="/social-icons/linkedin.png"
                        alt=""
                        width={25}
                        height={25}
                      />
                    </button>
                    <button>
                      <FaLink />
                    </button>
                  </div>
                  <small>
                    Fundraisers shared on social media raise up to 5x more
                  </small>
                </div>
                <button className={styles.btn}>
                  <Link href="/">Complete</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Success;
