import Image from "next/image";
import styles from "../styles/HowItWorks.module.css"

function HowItWorks() {
  return (
    <div className={`${styles.howItWorks} container`}>
        <p className="banner">How it Works</p>
        <h2 className={styles.heading}>How to Create a Campaign</h2>
        <div className={styles.content}>
            <div className={styles.link}>
                <Image src="/Chain-link.png" alt="link" width={10} height={235} />
            </div>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <h2>Begin with the essentials</h2>
                    <p>Tell us a bit about yourself e.g name, location, reason for campaign etc.</p>
                </div>
                <div className={styles.step}>
                    <h2>Share your story</h2>
                    <p>Not a lot of work, we promise! We`ll guide you through it.</p>
                </div>
                <div className={styles.step}>
                    <h2>Promote your campaign</h2>
                    <p>Spread your campaign to as much people as possible. People out there want to help you.</p>
                </div>
            </div>
            <div className={styles.image}>
                <Image src="/helping-hand.png" alt="helping with love" width={400} height={270} />
            </div>
        </div>
    </div>
  )
}

export default HowItWorks;