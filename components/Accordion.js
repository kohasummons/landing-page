import { useState } from "react";
import styles from "../styles/Accordion.module.css"

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle} onClick={accordionHandler}>
        <div>{title}</div>
        <div className={styles.btn}>{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}

export default Accordion;
