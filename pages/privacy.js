import styles from "../styles/Terms.module.css";
import Image from "next/image";

function Terms() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Privacy Policy.</h1>
          <div>
            <Image src="/pricingheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <p>
            At Lemonraise, accessible from lemonraise.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Lemonraise and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <h3>Log Files</h3>
          <p>
            Lemonraise follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services&apos; analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users&apos; movement on the
            website, and gathering demographic information. Our Privacy Policy
            was created with the help of the Privacy Policy Generator.
          </p>
          <h3>Cookies and Web Beacons</h3>
          <p>
            Like any other website, Lemonraise uses &apos;cookies&apos;. These
            cookies are used to store information including visitors&apos;
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users&apos;
            experience by customizing our web page content based on
            visitors&apos; browser type and/or other information.
          </p>
          <h3>Privacy Policies</h3>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Lemonraise.
          </p>
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Lemonraise, which
            are sent directly to users&apos; browser. They automatically receive
            your IP address when this occurs. These technologies are used to
            measure the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>
          <p>
            Note that Lemonraise has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
          <h3>Third Party Privacy Policies</h3>
          <p>
            Lemonraise&apos;s Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites.
          </p>
          <h3>Children&apos;s Information</h3>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            Lemonraise does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
          <h3>Online Privacy Policy</h3>
          <p>
            Only This Privacy Policy applies only to our online activities and
            is valid for visitors to our website with regards to the information
            that they shared and/or collect in Lemonraise. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>
          <h3>Consent</h3>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </main>
    </>
  );
}

export default Terms;
