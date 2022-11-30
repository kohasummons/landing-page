import Image from "next/image";
import Link from "next/link";
import styles from "../styles/GetStarted.module.css";

function GetStarted() {
  return (
    <div className={styles.cta}>
      <div>
        <h3>Ready to get started?</h3>
        <h4>Join thousands of others today.</h4>
        <div className={styles.btns}>
          <button className={styles.startBtn}>
            <Link href="/campaigns">Start a campaign</Link>{" "}
          </button>
          <button className={styles.normalBtn}><Link href="/register">Join Lemonraise</Link></button>
        </div>
      </div>
      <Image
        src="/helping-hands-hd.png"
        alt="hands supporting hands"
        width={544}
        height={280}
      />
    </div>
  );
}

export default GetStarted;
