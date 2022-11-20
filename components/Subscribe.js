import styles from '../styles/Subscribe.module.css'

function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <h2 className={styles.heading}>
        <span>Be in the know.</span> Get access to the latest campaigns.
      </h2>
      <form method="post">
        <div className={styles.input__group}>
          <input
            type="text"
            placeholder="Enter your email address"
            name="email"
          />
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
