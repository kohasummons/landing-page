import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/Campaigns.module.css";

const Beneficiary = () => {
  const nameRef = useRef(),
    emailRef = useRef(),
    phoneRef = useRef();

  const router = useRouter();

  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [phoneNumber, setPhoneNumber] = useState("");

  const nameHandler = () => {
    setName(nameRef.current.value);
  };

  const emailHandler = () => {
    setEmail(emailRef.current.value);
  };

  const phoneHandler = () => {
    setPhoneNumber(phoneRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <h2>Tell donors who you&apos;re campaigning for</h2>
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
                <h3>Step 3 - Beneficiary</h3>
                <small>Add beneficiary details for the campaign</small>
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
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Beneficiary&apos;s Name</label>
                    <input
                      type="text"
                      placeholder="Enter beneficiary name"
                      ref={nameRef}
                      value={name}
                      onChange={nameHandler}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Beneficiary&apos;s Email</label>
                    <input
                      type="text"
                      placeholder="Enter beneficiary email"
                      ref={emailRef}
                      value={email}
                      onChange={emailHandler}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">
                      Beneficiary&apos;s Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter beneficiary phone number"
                      ref={phoneRef}
                      value={phoneNumber}
                      onChange={phoneHandler}
                    />
                  </div>
                  <button className={styles.btn}>
                    <Link href="proxy/target-amount">Next</Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beneficiary;
