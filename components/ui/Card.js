import Image from "next/image";
import styles from "../../styles/Card.module.css";

export default function Card({
  image,
  title,
  translate,
  progress,
  targetAmount,
  amountRaised,
  category,
}) {
  const progressBarStyles = {
    width: "100%",
    backgroundColor: "rgba(248, 244, 240, 1)",
    height: 6,
    borderRadius: 8,
    position: "relative",
  };

  const progressStyles = {
    backgroundColor: "rgba(173, 248, 2, 1)",
    width: `${progress}%`,
    height: 8,
    position: "absolute",
    top: -1.2,
    left: 0,
    borderRadius: 8,
  };

  return (
    <div
      className={styles.card}
      style={{ transform: `translate(-${translate}%)` }}
    >
      <div className={styles.imageBox}>
        <Image src={`/${image}`} alt={title} width={325} height={260} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.progressBar}>
          <p>{progress}%</p>
          <div style={progressBarStyles}>
            <div style={progressStyles}></div>
          </div>
        </div>
        <p className={styles.targetMessage}>
          <span>{amountRaised}</span> raised of <span>{targetAmount}</span>{" "}
          target
        </p>
        <small className={styles.category}>{category}</small>
        <div className={styles.donate}>
          <button>Donate</button>
        </div>
      </div>
    </div>
  );
}
