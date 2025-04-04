import CompareBrokers from "@/components/home-three/CompareBrokers";
import CustomerSuccess from "@/components/home-three/CustomerSuccess";
import Footer from "@/components/home-three/Footer";
import Header from "@/components/home-three/Header";
import Hero from "@/components/home-three/Hero";
import SearchTool from "@/components/home-three/SearchTool";
import SuccessCommit from "@/components/home-three/SuccessCommit";
import TopRankedBroker from "@/components/home-three/TopRankedBroker";
import TopReasons from "@/components/home-three/TopReasons";
import TrustedPartner from "@/components/home-three/TrustedPartner";
import React from "react";

const HomeThree = () => {
  return (
    <>
      <div className="hero-three-wrapper">
        <Header />
        <Hero />
      </div>
      <main>
        {/* <!-- broker search tools --> */}
        <SearchTool />

        {/* <!-- success commitment --> */}
        <SuccessCommit />

        {/* <!-- Top Ranked Brokers --> */}
        <TopRankedBroker />

        {/* <!-- top reasons for choosing BrokR --> */}
        <TopReasons />

        {/* <!-- compare brokers --> */}
        <CompareBrokers />

        {/* <!-- customer success --> */}
        <CustomerSuccess />

        {/* <!-- trusted partner --> */}
        <TrustedPartner />

        {/* <!-- footer --> */}
        <Footer />
      </main>
    </>
  );
};

export default HomeThree;
