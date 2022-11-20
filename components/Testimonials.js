import Image from "next/image";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={`${styles.testimonials} container`}>
      <p className="banner">Testimonials</p>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>What our users are saying about us</h2>
          <div className={styles.quote}>
            <p>
              &quot;With Lemonraise, I was able to easily set up a campaign and
              promote it to thousands of people&quot;
            </p>
            <h3>Susan Johnson</h3>
          </div>
        </div>
        <div>
          <div className={styles.carousel}>
            <div className={styles.leftArrow}>{"<"}</div>
            <div className={styles.carouselImage}>
              <Image
                src="/Lady-folding-hands.png"
                width={500}
                height={550}
                alt="Woman folding hands"
              />
            </div>

            <div className={styles.rightArrow}>{">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
