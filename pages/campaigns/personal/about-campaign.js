import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Campaigns.module.css";
import { useFormNotAuth, useShallowEqualSelector } from "../../../utils/hooks";
import {
  campaignDetails,
  campaignTitle,
  campaignDescription,
  campaignStart,
  campaignEnd,
} from "../../../utils/selectors/campaignSelectors";
import { saveDetails } from "../../../redux/campaign/campaignAction";

const AboutCampaign = () => {
  const initialValues = {
    title: useShallowEqualSelector(campaignTitle),
    description: useShallowEqualSelector(campaignDescription),
    start_date: useShallowEqualSelector(campaignStart),
    end_date: useShallowEqualSelector(campaignEnd),
  };

  const dispatch = useDispatch();
  const router = useRouter();

  let details = useShallowEqualSelector(campaignDetails);

  const callback = () => {
    details = { ...values };
    dispatch(saveDetails(details));
    router.push("success");
  };

  const today = new Date().toISOString().split("T")[0];

  const { values, handleChange, handleSubmit } = useFormNotAuth(
    callback,
    initialValues
  );

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
                      name="title"
                      placeholder="Enter a campaign title"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="description">Tell your story</label>
                    <textarea
                      type="text"
                      name="description"
                      placeholder={`Tips: \r\n Introduce yourself and your reason for raising funds \r\n Explain why it is important to you \r\n Explain how the funds would be used`}
                      value={values.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.dates}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="start_date">Start Date</label>
                      <input
                        type="date"
                        name="start_date"
                        value={values.start_date}
                        min={today}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.endDate}`}>
                      <label htmlFor="end-date">End Date</label>
                      <input
                        type="date"
                        name="end_date"
                        value={values.end_date}
                        min={today}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button className={styles.btn}>
                    {/* <Link href="success">Next</Link> */}
                    Next
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
