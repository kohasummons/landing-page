import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Campaigns.module.css";
import { useDispatch } from "react-redux";
import { saveCategory } from "../../redux/campaign/campaignAction";
import { campaignCategory } from "../../utils/selectors/campaignSelectors";
import { useShallowEqualSelector } from "../../utils/hooks";

const Campaigns = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  let category = useShallowEqualSelector(campaignCategory)

  const handleClick = (e) => {
    category = e.target.value
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveCategory(category));
    router.push("campaigns/campaign-option")
  }


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
                  <input
                    type={"button"}
                    value="medical"
                    onClick={handleClick}
                  />
                  <input
                    type={"button"}
                    value="animals"
                    onClick={handleClick}
                  />
                  <input
                    type={"button"}
                    value="education"
                    onClick={handleClick}
                  />
                  <input type={"button"} value="food" onClick={handleClick} />
                  <input
                    type={"button"}
                    value="business"
                    onClick={handleClick}
                  />
                  <input type={"button"} value="event" onClick={handleClick} />
                  <input
                    type={"button"}
                    value="memorial"
                    onClick={handleClick}
                  />
                  <input type={"button"} value="sports" onClick={handleClick} />
                  <input type={"button"} value="travel" onClick={handleClick} />
                  <input
                    type={"button"}
                    value="competition"
                    onClick={handleClick}
                  />
                  <input
                    type={"button"}
                    value="creative"
                    onClick={handleClick}
                  />
                  <input
                    type={"button"}
                    value="volunteer"
                    onClick={handleClick}
                  />
                </div>
                <button className={styles.btn} onClick={handleSubmit}>
                  {/* <Link href="campaigns/campaign-option">Next</Link> */}
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
