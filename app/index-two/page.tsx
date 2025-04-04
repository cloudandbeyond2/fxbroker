import BestBrokers from "@/components/home-two/BestBrokers";
import CommitedSuccess from "@/components/home-two/CommitedSuccess";
import CustomerFeedback from "@/components/home-two/CustomerFeedback";
import DownloadApp from "@/components/home-two/DownloadApp";
import Empower from "@/components/home-two/Empower";
import Footer from "@/components/home-two/Footer";
import Header from "@/components/home-two/Header";
import Hero from "@/components/home-two/Hero";
import HighestRatedBroker from "@/components/home-two/HighestRatedBroker";
import SearchTool from "@/components/home-two/SearchTool";
import React from "react";

const HomeTwo = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* hero */}
      <Hero />

      {/* <!-- broker search tools --> */}
      <SearchTool />

      {/* <!-- empowering investors --> */}
      <Empower />

      {/* <!-- Highest rated brokers --> */}
      <HighestRatedBroker />

      {/* <!-- committed success --> */}
      <CommitedSuccess />

      {/* <!-- best brokers by asset type --> */}
      <BestBrokers />

      {/* <!-- download app --> */}
      <DownloadApp />

      {/* <!-- customer feedback --> */}
      <CustomerFeedback />
      {/* <!-- footer --> */}
      <Footer />
    </>
  );
};

export default HomeTwo;
