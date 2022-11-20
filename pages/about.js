import Image from "next/image";
import GetStarted from "../components/GetStarted"
import AboutCard from "../components/ui/AboutCard";
const AboutData = require("../utils/about.json");
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1>About Us</h1>
          <div>{/* <Image src={} alt={} width={} height={} /> */}</div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <section>
            <h2 className={styles.heading}>
              An equal experience for <span>everyone</span>
            </h2>

            <div className={styles.cards}>
              {AboutData.map(({ id, image, heading, desc }) => (
                <AboutCard
                  key={id}
                  image={image}
                  heading={heading}
                  desc={desc}
                />
              ))}
            </div>
          </section>
          <section id={styles.info}>
            <div className={styles.image}>
              <Image src="/hand-of-God.png" alt="hand stretched out" width={430} height={290} />
            </div>
            <div className={styles.details}>
              <h2 className={styles.infoTitle}>About Lemonraise</h2>
              <p>
                Lemonraise is a fundraising platform where individuals,
                underserved communities amongst others can raise funds for their
                various needs in Africa and other continents.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
                blandit non gravida odio. Sit dolor venenatis vestibulum ac
                blandit. Eu imperdiet venenatis enim odio sed urna tortor enim
                dictum. Ac lectus vulputate in amet adipiscing. Odio auctor
                turpis at ac arcu sodales cursus. Sit quam laoreet at
                suspendisse non. Consequat.
              </p>
            </div>
          </section>
          <section id={styles.developed}>
            <h2>
              Developed for <span>real people</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              fames sem non mi. Est mauris sapien porttitor tincidunt integer
              ipsum ornare ullamcorper pulvinar. Semper dolor sed vel blandit
              risus sit. Id enim neque nisl scelerisque a pretium diam bibendum.
            </p>
            <Image
              src="/women-carrryinng-stuff.png"
              alt="women carrying palliatives"
              width={1600}
              height={500}
            />
            <div className={styles.individuals}>
              <h3>For Individuals and Communities</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                pharetra pulvinar erat pellentesque proin. Faucibus velit tortor
                tristique tincidunt lobortis tincidunt libero pretium augue.
                Rhoncus eget nisl volutpat magnis. Adipiscing auctor egestas
                mauris enim, proin.
              </p>
            </div>
          </section>
                <GetStarted />
        </div>
      </main>
    </>
  );
}
