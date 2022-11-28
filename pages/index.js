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
