import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/Campaigns.module.css";

const AboutCampaign = () => {
  const titleRef = useRef(),
    contentRef = useRef(),
    startRef = useRef(),
    endRef = useRef();

  const router = useRouter();

  const [title, setTitle] = useState(""),
    [content, setContent] = useState(""),
    [startDate, setStartDate] = useState(""),
    [endDate, setEndDate] = useState("");

  const titleHandler = () => {
    setTitle(titleRef.current.value);
  };

  const contentHandler = () => {
    setContent(contentRef.current.value);
  };

  const startDateHandler = () => {
    setStartDate(startRef.current.value);
  };

  const endDateHandler = () => {
    setEndDate(endRef.current.value);
  };

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault;
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
            <h2>Tell donors why you&apos;re campaigning</h2>
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
                <h3>Step 5 - Title & Story</h3>
                <small>Add a campaign title and tell your story</small>
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
                    <label htmlFor="title">Campaign Title</label>
                    <input
                      type="text"
                      placeholder="Enter a campaign title"
                      ref={titleRef}
                      value={title}
                      onChange={titleHandler}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="title">Tell your story</label>
                    <textarea
                      type="text"
                      ref={contentRef}
                      placeholder={`Tips: \r\n Introduce yourself and your reason for raising funds \r\n Explain why it is important to you \r\n Explain how the funds would be used`}
                      value={content}
                      onChange={contentHandler}
                    />
                  </div>
                  <div className={styles.dates}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="start-date">Start Date</label>
                      <input
                        type="date"
                        name="start-date"
                        ref={startRef}
                        value={startDate}
                        min={today}
                        onChange={startDateHandler}
                      />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.endDate}`}>
                      <label htmlFor="end-date">End Date</label>
                      <input
                        type="date"
                        name="end-date"
                        ref={endRef}
                        value={endDate}
                        onChange={endDateHandler}
                      />
                    </div>
                  </div>
                  <button className={styles.btn}>
                    <Link href="success">Next</Link>
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

export default AboutCampaign;
