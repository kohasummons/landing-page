import Image from "next/image";
import styles from "../../styles/AboutCard.module.css";

function AboutCard({ image, heading, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={heading} width={50} height={50} />
      </div>
      <div className={styles.details}>
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default AboutCard;
