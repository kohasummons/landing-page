import Image from "next/image";
import styles from "../../styles/BlogCard.module.css"
import {FaRegBookmark} from "react-icons/fa"

function BlogCard({ image, date, donations, title, article }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={title} width={390} height={240} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.date}>{date}</div>
          <div className={styles.donations}>{donations} donations</div>
        </div>
        <div className={styles.middle}>
          <h3>{title}</h3>
          <p>{article}</p>
        </div>
        <div className={styles.cta}>
          <button className={styles.bookmark}><FaRegBookmark/></button>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
