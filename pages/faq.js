const FaqContent = require("../utils/FAQ.json").faqpage;
import FaqAccordion from "../components/FaqAccordion";
import GetStarted from "../components/GetStarted";
import styles from "../styles/faq.module.css";

function faq() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div>{/* <Image src={} alt={} width={} height={} /> */}</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.accordion}>
            {FaqContent.map(({ id, question, answer }) => (
              <FaqAccordion key={id} id={id} title={question} content={answer} faqStyle={styles.accordionItem} />
            ))}
          </div>
          <GetStarted />
        </div>
      </main>
    </>
  );
}

export default faq;
