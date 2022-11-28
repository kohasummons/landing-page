import Image from "next/image";
import Link from "next/link";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="subscribe">
          <Subscribe />
        </div>
        <div className="middle">
          <div className="middle__left">
            <div className="footer__logo">
              <Link href="/">
                <a>
                  <Image
                    src="/Lemonraise_logo.png"
                    width={130}
                    height={130}
                    alt="Lemonraise"
                  />
                </a>
              </Link>
            </div>
            <div className="footer__socials">
              <div className="social_icon">
                <Link href="https://facebook.com/lemonraise">
                  <a target="_blank">
                    <Image
                      src="/facebook.svg"
                      width={25}
                      height={25}
                      alt="facebook"
                    />
                  </a>
                </Link>
              </div>
              <div className="social_icon">
                <Link href="https://twitter.com/lemonraise">
                  <a target="_blank">
                    <Image
                      src="/twitter.svg"
                      width={25}
                      height={25}
                      alt="twitter"
                    />
                  </a>
                </Link>
              </div>
              <div className="social_icon">
                <Link href="https://instagram.com/lemonraise">
                  <a target="_blank">
                    <Image
                      src="/instagram.svg"
                      width={25}
                      height={25}
                      alt="instagram"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="middle__right">
            <div className="submenu">
              <h4>Links</h4>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/personal-campaign">Personal Campaigns</Link>
                </li>
                <li>
                  <Link href="/community-campaign">Community Campaigns</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="submenu">
              <h4>Get help</h4>
              <ul>
                <li>
                  <Link href="/blog">Blog</Link>{" "}
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>{" "}
                </li>
                <li>
                  <Link href="/partnership">Partnership</Link>{" "}
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="submenu">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="/terms">Terms of service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/campaigns">Start a campaign</Link>
                </li>
              </ul>
            </div>
            <div className="submenu">
              <h4>Contact</h4>
              <ul>
                <li>ABC street, Lagos, Nigeria</li>
                <li>
                  Email: <span>help@lemonraise.com</span>
                </li>
                <li>
                  Tel: <span>+234 809 057 1581</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="attribution">
          <small>
            Copyright © 2022. Lemonraise |{" "}
            <Link href="/privacy">Privacy Policy</Link> |{" "}
            <Link href="/terms">Terms of Use</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
