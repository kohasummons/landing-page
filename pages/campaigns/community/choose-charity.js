import Image from "next/image";
import styles from "../../../styles/Campaigns.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCharity } from "../../../redux/campaign/campaignAction";
import { campaignCharity } from "../../../utils/selectors/campaignSelectors";
import { useShallowEqualSelector } from "../../../utils/hooks";
import { useRouter } from "next/router";

const ChooseCharity = () => {
  const [charity, setCharity] = useState(
    useShallowEqualSelector(campaignCharity)
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCharity(charity));
    router.push("about-campaign");
  };

  const handleChange = (e) => {
    setCharity(e.target.value);
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
            <h2>Choose your preferred charity organization</h2>
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
                <h3>Step 4 - Choose a charity</h3>
                <small>Choose your preferred nonprofit to campaign for</small>
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
                  <label htmlFor="choose-charity">Charity</label>
                  <div className={styles.select}>
                    <select
                      name="choose-charity"
                      value={charity}
                      onChange={handleChange}
                    >
                      <option value="">Select your charity organization</option>
                      <option value="charity1">Charity1</option>
                      <option value="charity2">Charity2</option>
                      <option value="charity3">Charity3</option>
                    </select>
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

export default ChooseCharity;
