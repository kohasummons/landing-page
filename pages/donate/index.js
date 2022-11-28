import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Donate.module.css";

function Donate() {
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountRef = useRef();

  const handleChange = () => {
    setEnteredAmount(amountRef.current.value);
  };

  const handleClick = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Donate.</h1>
          <div>
            <Image src="/donateheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.donationForm}>
              <h3>Donate</h3>
              <hr />
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <span className={styles.currency}>₦</span>
                  <input
                    type="text"
                    value={enteredAmount}
                    ref={amountRef}
                    onChange={handleChange}
                    placeholder="Enter Amount"
                  />
                </div>
                <div className={styles.priceBtns}>
                  <input type="button" value={1000} onClick={handleClick} />
                  <input type="button" value={2000} onClick={handleClick} />
                  <input type="button" value={5000} onClick={handleClick} />
                  <input type="button" value={10000} onClick={handleClick} />
                  <input type="button" value={20000} onClick={handleClick} />
                  <input type="button" value={50000} onClick={handleClick} />
                </div>
                <div>
                  <h3>Payment Method</h3>
                  <div className={styles.cards}>
                    <button type="button" className={styles.card}>
                      <Image
                        src="/flutterwave.png"
                        alt="flutterwave"
                        width={100}
                        height={80}
                      />
                    </button>
                    <button type="button" className={styles.card}>
                      <Image
                        src="/paystack.png"
                        alt="paystack"
                        width={100}
                        height={80}
                      />
                    </button>
                    <button
                      type="button"
                      className={styles.card}
                      disabled="true"
                    >
                      <Image
                        src="/fluidcoins.png"
                        alt="fluidcoins"
                        width={100}
                        height={80}
                      />
                    </button>
                  </div>
                  <hr />
                </div>
                <div>
                  <h3>Optional Details</h3>
                  <div className={styles.confirm}>
                    <input type="checkbox" />
                    <label>
                      Don&apos;t display my name publicly{" "}
                      <em>
                        (If checked, your name will not be visible to the
                        organizer, any team members or the beneficiary).
                      </em>
                    </label>
                  </div>
                  <button className={styles.donateBtn}>Donate Now</button>
                  <small className={styles.attribution}>
                    By continuing, you agree with Lemonraise{" "}
                    <Link href="/terms">terms</Link> and{" "}
                    <Link href="/privacy">privacy notice</Link>.
                  </small>
                </div>
              </form>
            </div>
            <div className={styles.donationInfo}>
              <Image
                src="/childrenlooking.png"
                alt=""
                width={650}
                height={400}
              />
              <h2>Food and Toiletries</h2>
              <p>
                Your donation will help the impoverished kids in the Makoko
                community. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Blandit nulla odio scelerisque mus interdum vitae,
                praesent lorem venenatis. Arcu cras purus quam netus tristique
                volutpat mattis sed. Sodales quis sed sit cursus congue purus eu
                consequat. Arcu et ultrices pulvinar sit pellentesque
                sollicitudin. Imperdiet viverra vitae vulputate ultricies amet,
                arcu elit. Augue ac, ipsum tincidunt porta suscipit mattis
                libero. Lectus blandit adipiscing ut turpis pulvinar commodo
                posuere.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Donate;
