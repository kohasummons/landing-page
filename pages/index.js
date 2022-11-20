import Head from "next/head";
import Blog from "../components/Blog";
import FAQs from "../components/FAQs";
import FeaturedCampaign from "../components/FeaturedCampaign";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemonraise | Making a difference</title>
        <meta
          name="description"
          content="Lemonraise is a fundraising platform where individuals, underserved communities amongst others can raise funds for their various needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <HowItWorks />
        <FeaturedCampaign />
        <Testimonials />
        <FAQs />
        <Blog />
      </main>
    </>
  );
}
