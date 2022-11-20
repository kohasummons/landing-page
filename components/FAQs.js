import { useState } from "react";
import Image from "next/image";
import styles from "../styles/FAQs.module.css";
import Accordion from "./Accordion";
const FaqContent = require("../utils/FAQ.json").homepage;

function FAQs() {

  return (
    <div className={styles.FAQs}>
      <div className="container">
        <p className="banner">FAQs</p>
        <div className={styles.content}>
          <div>
            <Image
              src="/FAQ.png"
              alt="Frequently asked questions"
              width={330}
              height={540}
            />
          </div>
          <div className={styles.questions}>
            <h2>Have a Question?</h2>
            <div className={styles.accordion}>
            {FaqContent.map(({ id, question, answer }) => <Accordion key={id} title={question} content={answer}  />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
