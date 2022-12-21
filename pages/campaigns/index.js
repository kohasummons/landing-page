import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Campaigns.module.css";
import { useDispatch } from "react-redux";
import { saveCategory } from "../../redux/campaign/campaignAction";
import { campaignCategory } from "../../utils/selectors/campaignSelectors";
import { useShallowEqualSelector } from "../../utils/hooks";
import { useCallback, useEffect, useState } from "react";

const categoryButtons = {
  medical: "medical",
  animals: "animals",
  education: "education",
  business: "business",
  memorial: "memorial",
  competition: "competition",
  creative: "creative",
  volunteer: "volunteer",
};

const Campaigns = () => {
  const [category, setCategory] = useState(
    useShallowEqualSelector(campaignCategory)
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const changeBg = useCallback(() => {
    if (!category) return;

    const element = document.getElementById(category);

    element.classList.add(styles.active);
  }, [category]);

  const resetBg = useCallback(() => {
    const otherElArr = Object.values(categoryButtons).filter(
      (id) => id !== category
    );

    otherElArr.forEach((elem) => {
      const element = document.querySelector(`#${elem}`);
      element.classList.remove(styles.active);
    });
  }, [category]);

  useEffect(() => {
    changeBg();
    return resetBg();
  }, [changeBg, resetBg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCategory(category));
    router.push("campaigns/campaign-option");
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
                <h3>Step 1 - Category</h3>
                <small>What best describes why you are fundraising</small>
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
                <h3>
                  Category <span>(1 max.)</span>
                </h3>
                <div className={styles.category}>
                  {Object.entries(categoryButtons).map(([key, value]) => (
                    <input
                      type={"button"}
                      key={key}
                      id={key}
                      value={value}
                      onClick={() => setCategory(value)}
                    />
                  ))}
                </div>
                <button className={styles.btn} onClick={handleSubmit}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Campaigns;
