"use client";
import { useIntl } from "react-intl";

import HeroBanner from "@/components/materne/HeroBanner";
import Features from "@/components/materne/Features";
import HowItWorks from "@/components/materne/HowItWorks";
import Policies from "@/components/materne/Policies";
import Footer from "@/components/materne/Footer";

const Materne = () => {
  const { formatMessage } = useIntl();

  console.log(
    'AXEL formatMessage({id: "home.title"}): ',
    formatMessage({ id: "home.title" }),
  );

  return (
    <section className="flex flex-col items-center justify-center background gap-4 py-8 md:py-10">
      <HeroBanner />
      <Features />
      <HowItWorks />
      <Policies />
      <Footer />
    </section>
  );
};

export default Materne;
