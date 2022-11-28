import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/Campaigns.module.css";

const CampaignOption = () => {
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
                <h3>Step 2 - Campaign Type</h3>
                <small>Who are you fundraising for?</small>
                <div className={styles.arrowRight}>
                  <Image
                    src="/arrow-right.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              <div className={styles.options}>
                <Link href="personal">
                  <div className={styles.option}>
                    <Image
                      src="/personalcampaign.png"
                      alt="arrow"
                      width={104}
                      height={117}
                    />
                    <div className={styles.text}>
                      <h3>Yourself</h3>
                      <small>
                        Funds are delivered to your bank account for your own
                        use
                      </small>
                    </div>
                    <div className={styles.chevron}>
                      <FaChevronRight />
                    </div>
                  </div>
                </Link>
                <Link href="proxy">
                  <div className={styles.option}>
                    <Image
                      src="/proxycampaign.png"
                      alt="arrow"
                      width={104}
                      height={117}
                    />
                    <div className={styles.text}>
                      <h3>Someone Else</h3>
                      <small>
                        You&apos;ll invite a beneficiary to receive funds or
                        distribute them yourself
                      </small>
                    </div>
                    <div className={styles.chevron}>
                      <FaChevronRight />
                    </div>
                  </div>
                </Link>
                <Link href="community">
                  <div className={styles.option}>
                    <Image
                      src="/communitycampaign.png"
                      alt="arrow"
                      width={104}
                      height={117}
                    />
                    <div className={styles.text}>
                      <h3>Community</h3>
                      <small>
                        Funds are delivered to your chosen nonprofit for you
                      </small>
                    </div>
                    <div className={styles.chevron}>
                      <FaChevronRight />
                    </div>
                  </div>
                </Link>

                {/* <button className={styles.btn}>
                  <Link href="/">Next</Link>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CampaignOption;
