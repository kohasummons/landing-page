import styles from "../styles/Partnerships.module.css";
import formStyles from "../styles/Contact.module.css";
import GetStarted from "../components/GetStarted"

const svgIcon = (
  <svg
    width="97"
    height="97"
    viewBox="0 0 97 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="48.5" cy="48.5" r="48" fill="#F5F7FA" />
    <path
      d="M52.0502 72.7231C52.122 65.3802 50.2604 59.409 47.8924 59.3858C45.5243 59.3628 43.5463 65.2965 43.4747 72.6393C43.4028 79.9821 45.2644 85.9535 47.6324 85.9765C50.0006 85.9997 51.9785 80.066 52.0502 72.7231Z"
      fill="black"
    />
    <path
      d="M38.3144 71.0555C42.345 64.9173 44.0075 58.8875 42.028 57.5877C40.0483 56.2878 35.1762 60.2101 31.1458 66.3483C27.1152 72.4865 25.4526 78.5161 27.4322 79.8161C29.4118 81.116 34.2838 77.1937 38.3144 71.0555Z"
      fill="black"
    />
    <path
      d="M27.6459 62.2492C34.3554 59.2649 39.0141 55.0914 38.0515 52.9276C37.0891 50.7638 30.8699 51.429 24.1605 54.4135C17.4511 57.3978 12.7924 61.5713 13.7548 63.7351C14.7173 65.899 20.9366 65.2337 27.6459 62.2492Z"
      fill="black"
    />
    <path
      d="M37.2462 46.8595C37.6065 44.5188 32.015 41.7158 24.7574 40.5987C17.4996 39.4815 11.324 40.4735 10.9637 42.8142C10.6035 45.1548 16.195 47.9577 23.4527 49.0748C30.7103 50.1919 36.886 49.1999 37.2462 46.8595Z"
      fill="black"
    />
    <path
      d="M39.8522 41.2829C41.4205 39.5085 38.2314 34.1278 32.7291 29.265C27.2269 24.4021 21.4951 21.8985 19.9268 23.673C18.3585 25.4475 21.5476 30.8282 27.0499 35.691C32.5522 40.5539 38.284 43.0574 39.8522 41.2829Z"
      fill="black"
    />
    <path
      d="M45.043 38.0241C47.3217 37.3793 47.5481 31.1286 45.5487 24.0629C43.5494 16.9972 40.0812 11.792 37.8025 12.4368C35.5238 13.0816 35.2974 19.3322 37.2967 26.3981C39.2961 33.4637 42.7642 38.6689 45.043 38.0241Z"
      fill="black"
    />
    <path
      d="M59.1336 26.6184C61.272 19.5935 61.1689 13.3396 58.9033 12.65C56.6377 11.9603 53.0676 17.0961 50.9292 24.1211C48.791 31.1459 48.894 37.3999 51.1596 38.0895C53.4252 38.7791 56.9953 33.6434 59.1336 26.6184Z"
      fill="black"
    />
    <path
      d="M69.2032 36.1101C74.7995 31.3557 78.0933 26.0385 76.5598 24.2337C75.0265 22.4289 69.2469 24.8201 63.6507 29.5743C58.0544 34.3287 54.7608 39.646 56.2941 41.4508C57.8273 43.2556 63.607 40.8645 69.2032 36.1101Z"
      fill="black"
    />
    <path
      d="M72.5312 49.5431C79.8096 48.5693 85.4552 45.8772 85.1411 43.5298C84.8272 41.1826 78.6723 40.0692 71.3939 41.0428C64.1157 42.0165 58.4699 44.7087 58.784 47.056C59.0981 49.4032 65.2528 50.5168 72.5312 49.5431Z"
      fill="black"
    />
    <path
      d="M81.9204 64.406C82.9254 62.2617 78.3499 57.9972 71.7006 54.8811C65.0515 51.7649 58.8465 50.9772 57.8415 53.1216C56.8366 55.266 61.4121 59.5305 68.0614 62.6467C74.7105 65.7627 80.9155 66.5505 81.9204 64.406Z"
      fill="black"
    />
    <path
      d="M67.9333 80.2275C69.9381 78.967 68.3947 72.9056 64.4861 66.6891C60.5774 60.4726 55.7835 56.4552 53.7787 57.7157C51.7739 58.9762 53.3173 65.0376 57.2259 71.2541C61.1346 77.4706 65.9285 81.4882 67.9333 80.2275Z"
      fill="black"
    />
  </svg>
);

function Partnerships() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>Partnerships.</h1>
          <div>{/* <Image src={} alt={} width={} height={} /> */}</div>
        </div>
      </header>
      <div className={styles.headingSection}>
        <h2>
          <strong>Trusted</strong> by <br /> leading impact organizations
        </h2>
        <p>
          The easiest way for organizations to support local communities on a
          national scale.
        </p>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.infocards}>
            <div className={styles.card}>
              {svgIcon}
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus pellentesque mauris suspendisse sit condimentum eget.
                Lectus aliquam vitae ridiculus ornare consequat enim magnis at.
              </p>
            </div>
            <div className={styles.card}>
              {svgIcon}
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus pellentesque mauris suspendisse sit condimentum eget.
                Lectus aliquam vitae ridiculus ornare consequat enim magnis at.
              </p>
            </div>
            <div className={styles.card}>
              {svgIcon}
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus pellentesque mauris suspendisse sit condimentum eget.
                Lectus aliquam vitae ridiculus ornare consequat enim magnis at.
              </p>
            </div>
            <div className={styles.card}>
              {svgIcon}
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus pellentesque mauris suspendisse sit condimentum eget.
                Lectus aliquam vitae ridiculus ornare consequat enim magnis at.
              </p>
            </div>
            <div className={styles.card}>
              {svgIcon}
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus pellentesque mauris suspendisse sit condimentum eget.
                Lectus aliquam vitae ridiculus ornare consequat enim magnis at.
              </p>
            </div>
            <div className={styles.card}>
              {svgIcon}
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus pellentesque mauris suspendisse sit condimentum eget.
                Lectus aliquam vitae ridiculus ornare consequat enim magnis at.
              </p>
            </div>
          </div>
          <section className={styles.partner}>
            <h2>Partner with Lemonraise</h2>
            <p>
              Want to host a crowdfunding on your site or refer traffic to
              lemonraise? Start now with Lemonraise&apos;s Crowdfunding Partner
              Program.
            </p>
            <form className={formStyles.form} style={{width: "55vw", marginInline: "auto", textAlign: "start"}}>
              <div className={formStyles.group}>
                <div className={formStyles.inputgroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className={formStyles.inputgroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className={formStyles.inputgroup}>
                <label htmlFor="company-name">Company Name</label>
                <input type="text" placeholder="Your company name" />
              </div>
              <div className={formStyles.group}>
                <div className={formStyles.inputgroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className={formStyles.inputgroup}>
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
              <div className={formStyles.btn}>
                <button>Send Message</button>
              </div>
            </form>
          </section>
          <GetStarted />
        </div>
      </main>
    </>
  );
}

export default Partnerships;
