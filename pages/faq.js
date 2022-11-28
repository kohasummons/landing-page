const FaqContent = require("../utils/FAQ.json").faqpage;
import Image from "next/image";
import FaqAccordion from "../components/FaqAccordion";
import GetStarted from "../components/GetStarted";
import styles from "../styles/faq.module.css";

function faq() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Frequently Asked Questions</h1>
          <div>
            <Image src="/faqheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.accordion}>
            {FaqContent.map(({ id, question, answer }) => (
              <FaqAccordion
                key={id}
                id={id}
                title={question}
                content={answer}
                faqStyle={styles.accordionItem}
              />
            ))}
          </div>
          <GetStarted />
        </div>
      </main>
    </>
  );
}

export default faq;
