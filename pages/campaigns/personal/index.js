import Image from "next/image";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Campaigns.module.css";
import { saveAmount } from "../../../redux/campaign/campaignAction";
import { campaignAmount } from "../../../utils/selectors/campaignSelectors";
import { useShallowEqualSelector } from "../../../utils/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { notifier } from "../../../utils/helpers";

const Personal = () => {
  const [target_amount, setTargetAmount] = useState(
    useShallowEqualSelector(campaignAmount)
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setTargetAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!target_amount || target_amount === null) {
      notifier("Target amount cannot be empty")
      return;
    } else {
      dispatch(saveAmount(target_amount));
      router.push("personal/upload-files");
    }
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
            <h2>Choose a starting goal</h2>
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
                <h3>Step 3 - Target Amount</h3>
                <small>How much would you like to raise</small>
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
                  <label htmlFor="target_amount">Target Amount</label>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="target_amount"
                      value={target_amount}
                      onChange={handleChange}
                      placeholder="Enter your target amount"
                    />
                    <span className={styles.currency}>NGN</span>
                  </div>
                  <button className={styles.btn}>Next</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Personal;
