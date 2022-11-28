import Image from "next/image";
import styles from "../../styles/Blogs.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export default function Howitworks() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Blog</h1>
          <div>
            <Image src="/blogheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <section className={styles.heading}>
            <div className={styles.headline}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                vulputate odio magna non. Faucibus ultricies eget pretium
                pharetra. Magna scelerisque venenatis dui justo. Sed vulputate
                fermentum auctor augue neque. Curabitur laoreet sit vitae
                montes, lectus est placerat et.
              </p>
              <div className={styles.info}>
                <p className="date">Nov. 20, 2022</p>
                <p className="category">Category</p>
              </div>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.image}>
              <Image
                src="/afronatural.png"
                alt="afro woman"
                width={750}
                height={440}
              />
            </div>
          </section>
          <section className={styles.otherNews}>
            <div className={styles.newsfeed}>
              <div className={styles.image}>
                <Image
                  src="/women-carrryinng-stuff.png"
                  alt="happy women"
                  width={700}
                  height={350}
                />
              </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                vulputate odio magna non. Faucibus ultricies eget pretium
                pharetra. Magna scelerisque venenatis dui justo. Sed vulputate
                fermentum auctor augue neque. Curabitur laoreet sit vitae
                montes, lectus est placerat et.
              </p>
              <div className={styles.info}>
                <p className="date">Nov. 20, 2022</p>
                <p className="category">Category</p>
              </div>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.newsfeed}>
              <div className={styles.image}>
                <Image
                  src="/charity2.png"
                  alt="charity"
                  width={700}
                  height={350}
                />
              </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                vulputate odio magna non. Faucibus ultricies eget pretium
                pharetra. Magna scelerisque venenatis dui justo. Sed vulputate
                fermentum auctor augue neque. Curabitur laoreet sit vitae
                montes, lectus est placerat et.
              </p>
              <div className={styles.info}>
                <p className="date">Nov. 20, 2022</p>
                <p className="category">Category</p>
              </div>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.newsfeed}>
              <div className={styles.image}>
                <Image
                  src="/volunteer.png"
                  alt="volunteer"
                  width={700}
                  height={350}
                />
              </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                vulputate odio magna non. Faucibus ultricies eget pretium
                pharetra. Magna scelerisque venenatis dui justo. Sed vulputate
                fermentum auctor augue neque. Curabitur laoreet sit vitae
                montes, lectus est placerat et.
              </p>
              <div className={styles.info}>
                <p className="date">Nov. 20, 2022</p>
                <p className="category">Category</p>
              </div>
              <button className={styles.btn}>Read More</button>
            </div>
            <div className={styles.newsfeed}>
              <div className={styles.image}>
                <Image
                  src="/sanitation.png"
                  alt="sanitation"
                  width={700}
                  height={350}
                />
              </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                vulputate odio magna non. Faucibus ultricies eget pretium
                pharetra. Magna scelerisque venenatis dui justo. Sed vulputate
                fermentum auctor augue neque. Curabitur laoreet sit vitae
                montes, lectus est placerat et.
              </p>
              <div className={styles.info}>
                <p className="date">Nov. 20, 2022</p>
                <p className="category">Category</p>
              </div>
              <button className={styles.btn}>Read More</button>
            </div>
          </section>
          <div className={styles.pagination}>
            <div className={styles.leftarrow}>
              <BsArrowLeftShort />
            </div>
            <div className={styles.pages}>
              <button className={styles.pageNumber}>1</button>
              <button className={styles.pageNumber}>2</button>
              <button className={styles.pageNumber}>3</button>
            </div>
            <div className={styles.rightarrow}>
              <BsArrowRightShort />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
