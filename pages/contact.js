import styles from "../styles/Contact.module.css";
import GetStarted from "../components/GetStarted"

function contact() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>Contact Us</h1>
          <div>{/* <Image src={} alt={} width={} height={} /> */}</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <h2>Send A Message</h2>
          <div className={styles.content}>
            <form className={styles.form}>
              <div className={styles.group}>
                <div className={styles.inputgroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className={styles.inputgroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.inputgroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className={styles.inputgroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" placeholder="+234" />
                </div>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <div className={styles.btn}>
                <button>Send Message</button>
              </div>
            </form>
            <div className={styles.address}>
              <h2>Address</h2>
              <p>
                Quam elementum pulvinar etiam non quam lacus suspendisse. A
                scelerisque purus semper eget duis at Lobortisscelerisque
                fermentum dui faucibus in ornare....
              </p>
              <div className={styles.contact}>
                <p>
                  <span>Location:</span> 123 Nowhere Street off Someplace,
                  Lekki, Lagos, Nigeria.
                </p>
                <p>
                  <span>Phone:</span> +234 123456789{" "}
                </p>
                <p>
                  <span>Email:</span> info@lemonraise.com{" "}
                </p>
              </div>
            </div>
          </div>
          <GetStarted />
        </div>
      </main>
    </>
  );
}

export default contact;
