import Image from "next/image";
import GetStarted from "../components/GetStarted";
import styles from "../styles/HowItWorksPage.module.css";

export default function Howitworks() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>How it Works</h1>
          <div>
            <Image
              src="/howitworksheader.png"
              alt=""
              width={150}
              height={150}
            />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <section className={styles.content}>
            <div className={styles.steps}>
              <div className={styles.details}>
                <h2>Begin with the essentials</h2>
                <p>
                  Tell us a bit about yourself e.g name, location, reason for
                  campaign etc.
                </p>
              </div>
              <div>
                <Image
                  src="/BeginEssentials.png"
                  alt="begin with the essentials"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className={styles.steps}>
              <div className={styles.details}>
                <h2>Share your Story</h2>
                <p>
                  Not a lot of work, we promise! We&apos;ll guide you through
                  it.{" "}
                </p>
              </div>
              <div>
                <Image
                  src="/AfricaUnite.png"
                  alt="Share your story"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className={styles.steps}>
              <div className={styles.details}>
                <h2>Promote your Campaign</h2>
                <p>
                  Spread your campaign to as much people as possible. People out
                  there want to help you.
                </p>
              </div>
              <div>
                <Image
                  src="/WorkingTogether.png"
                  alt="begin with the essentials"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          <GetStarted />
        </div>
      </main>
    </>
  );
}
