import styles from "../../styles/BlogPage.module.css";
import Image from "next/image";
import GetStarted from "../../components/GetStarted";

function BlogPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <div className={styles.info}>
            <p className="date">Nov. 20, 2022</p>
            <p className="category">Category</p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <div>
            <Image
              src="/shopping-carton.png"
              alt="carton of fruits"
              width={1596}
              height={500}
            />
          </div>
          <article className={styles.article}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nibh
              volutpat proin auctor malesuada semper. Non cursus imperdiet enim
              suspendisse eu. Tincidunt arcu non tellus sed sed suspendisse
              amet, elementum at. Molestie sem in augue quam viverra viverra in
              pellentesque. Nam at non proin ac gravida sem. At vel integer id
              potenti vel venenatis. Tellus eu laoreet ridiculus lacus massa
              porttitor risus habitant sollicitudin. Mattis nunc tellus ut
              laoreet senectus eget porttitor pellentesque pharetra. Risus
              consequat placerat eget fermentum. Mollis facilisi ipsum morbi non
              ultrices ultricies. Donec netus amet turpis ante sed scelerisque
              iaculis enim. Diam morbi congue lobortis ullamcorper sapien turpis
              ipsum ullamcorper. Urna, vitae magna elit venenatis mi enim sed.
              Blandit dui elementum eget pharetra quis feugiat vel lobortis
              nisl. Suspendisse quam feugiat eget nulla lectus pulvinar lacinia.
              Ipsum lacinia pharetra eu posuere in. Viverra tortor sed nulla
              volutpat tempor egestas aenean lectus neque. Pharetra at aliquam
              lorem vestibulum viverra consectetur. Aenean aliquam commodo,
              pharetra, duis mollis venenatis nulla. Consequat, vulputate
              fermentum fermentum praesent volutpat scelerisque. Dignissim felis
              pretium, facilisis eget ornare id fermentum euismod. Vel at neque
              enim condimentum eget. Elit aliquam morbi non diam eu in. Cum
              ullamcorper blandit id vitae amet, molestie sit justo. Ullamcorper
              phasellus eget turpis elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nibh
              volutpat proin auctor malesuada semper. Non cursus imperdiet enim
              suspendisse eu. Tincidunt arcu non tellus sed sed suspendisse
              amet, elementum at. Molestie sem in augue quam viverra viverra in
              pellentesque. Nam at non proin ac gravida sem. At vel integer id
              potenti vel venenatis. Tellus eu laoreet ridiculus lacus massa
              porttitor risus habitant sollicitudin. Mattis nunc tellus ut
              laoreet senectus eget porttitor pellentesque pharetra. Risus
              consequat placerat eget fermentum. Mollis facilisi ipsum morbi non
              ultrices ultricies. Donec netus amet turpis ante sed scelerisque
              iaculis enim. Diam morbi congue lobortis ullamcorper sapien turpis
              ipsum ullamcorper. Urna, vitae magna elit venenatis mi enim sed.
              Blandit dui elementum eget pharetra quis feugiat vel lobortis
              nisl. Suspendisse quam feugiat eget nulla lectus pulvinar lacinia.
              Ipsum lacinia pharetra eu posuere in. Viverra tortor sed nulla
              volutpat tempor egestas aenean lectus neque. Pharetra at aliquam
              lorem vestibulum viverra consectetur. Aenean aliquam commodo,
              pharetra, duis mollis venenatis nulla. Consequat, vulputate
              fermentum fermentum praesent volutpat scelerisque. Dignissim felis
              pretium, facilisis eget ornare id fermentum euismod. Vel at neque
              enim condimentum eget. Elit aliquam morbi non diam eu in. Cum
              ullamcorper blandit id vitae amet, molestie sit justo. Ullamcorper
              phasellus eget turpis elit.
            </p>
          </article>
          <GetStarted />
          <section className={styles.more}>
            <h2>More Articles</h2>
            <div className={styles.newsarticles}>
            <div className={styles.newsfeed}>
              <div className={styles.image}>
                <Image
                  src="/volunteer.png"
                  alt="volunteer"
                  width={750}
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
                  width={750}
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default BlogPage;
