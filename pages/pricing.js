import Image from "next/image";
import styles from "../styles/pricing.module.css";
import GetStarted from "../components/GetStarted";

export default function Pricing() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Pricing</h1>
          <div>
            <Image src="/pricingheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <h2 className={styles.heading}>
            Simple pricing, powerful{" "}
            <span style={{ borderBottom: "3px solid var(--lemon)" }}>
              fundraising
            </span>
          </h2>
          <p>
            A small transaction fee is automatically deducted per donation —
            that&apos;s it. Everything else goes directly to your cause, because
            that&apos;s what matters most.
          </p>
          <div className={styles.prices}>
            <div className={styles.card}>
              <p>No fee to create a campaign</p>
              <div className={styles.price}>
                <p>
                  ₦ <span>0.00</span>
                </p>
              </div>
              <p>There&apos;s no fee to start or manage your fundraiser.</p>
            </div>
            <div className={styles.card}>
              <p>Donor contributions to Lemonraise are optional</p>
              <div className={styles.price}>
                <p>
                  ₦ <span>0.00</span>
                </p>
              </div>
              <p>
                Donors can help power Lemonraise with an optional contribution,
                but it&apos;s never required.
              </p>
            </div>
            <div className={styles.card}>
              <p>One transaction fee</p>
              <div className={styles.price}>
                <p>
                  <span>2.9% + ₦50</span>
                </p>
              </div>
              <p>
                Automatically deducted from each donation, so you never have to
                worry about paying a bill.
              </p>
            </div>
          </div>
          <section className={styles.transaction}>
            <div className={styles.headingSection}>
              <div className={styles.arrowLeft}>
                <Image
                  src="/arrow-left.png"
                  alt="arrow"
                  width={75}
                  height={80}
                />
              </div>
              <h2>What&apos;s a transaction fee?</h2>
              <div className={styles.arrowRight}>
                <Image
                  src="/arrow-right.png"
                  alt="arrow"
                  width={75}
                  height={80}
                />
              </div>
            </div>
            <div className={styles.blue}>
              <p>
                Safe and secure fundraising is our top priority. That&apos;s why
                we partner with industry-leading payment processors like
                flutterwave to accept and deliver your donations.
              </p>

              <p>
                The transaction fee is automatically deducted from each
                donation. It covers the costs of credit and debit charges,
                safely delivering donations, and helps us offer more ways to
                donate. This is the only fee deducted on Lemonraise to cover all
                your fundraising needs.
              </p>
            </div>
          </section>
          <section className={styles.transaction}>
            <div className={styles.headingSection}>
              <div className={styles.arrowLeft}>
                <Image
                  src="/arrow-left.png"
                  alt="arrow"
                  width={75}
                  height={80}
                />
              </div>
              <h2>Donor contributions to Lemonraise are always optional</h2>
              <div className={styles.arrowRight}>
                <Image
                  src="/arrow-right.png"
                  alt="arrow"
                  width={75}
                  height={80}
                />
              </div>
            </div>
            <div className={styles.blue}>
              <p>
                It&apos;s important to us that everyone is able to get the help
                they need—which is why we don&apos;t charge a fee to start a
                campaign. Instead, we accept optional contributions from donors
                that are always appreciated, but never required. Donor
                contributions help make it possible for us to offer powerful and
                trusted fundraising tools, customer support, and a global team
                of Trust & Safety experts.
              </p>
            </div>
          </section>
          <GetStarted />
        </div>
      </main>
    </>
  );
}
