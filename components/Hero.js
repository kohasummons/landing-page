import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css"

function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          <span className={styles.colored}>Bridging</span> the gap.
          <span className={styles["lower-header"]}> Making a difference</span>
        </h1>
        <p className={styles.paragraph}>Launch your campaign in minutes.</p>
        <Link href="/campaigns"><a><button className={styles.btn}>Start a campaign</button></a></Link>
        <Image src="/header-image.png" alt="lemonraise banner" width={1000} height={350} />
      </div>
    </header>
  );
}

export default Hero;
