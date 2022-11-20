import { useState } from "react";
import styles from "../styles/FaqAccordion.module.css"

function FaqAccordion({ id, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };

  const accordionStyle = isOpen ? `${styles.accordionItem} ${styles.open}`: styles.accordionItem;
  const accordionContentStyle = isOpen ? `${styles.accordionContent} ${styles.show}`: styles.accordionContent
  return (
    <div className={accordionStyle}>
      <div style={{display: "flex", width: "100%", gap: 10, alignItems: "center"}}>
      <h2 style={{padding: "1rem", width: 50, marginInline: 10, textAlign: "center"}}>{id}</h2>
      <div className={styles.accordionTitle} onClick={accordionHandler}>
        <div><h2 className={isOpen && styles.open}>{title}</h2></div>
        <div className={styles.btn}>{isOpen ? "-" : "+"}</div>
      </div>
      </div>
      <div className={accordionContentStyle} onClick={accordionHandler}>{content}</div>
    </div>
  );
}

export default FaqAccordion;
