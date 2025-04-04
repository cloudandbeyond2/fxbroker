// import BestBrokers from "@/components/home-one/BestBrokers";
// import Clients from "@/components/home-one/Clients";
// import DownloadApps from "@/components/home-one/DownloadApps";
// import Expertise from "@/components/home-one/Expertise";
// import Faq from "@/components/home-one/Faq";
// import FilterBrokers from "@/components/home-one/FilterBrokers";
// import Footer from "@/components/home-one/Footer";
// import GetAlert from "@/components/home-one/GetAlert";
// import Header from "@/components/home-one/Header";
// import Hero from "@/components/home-one/Hero";
// import JoinDiscussion from "@/components/home-one/JoinDiscussion";
// import MatchBroker from "@/components/home-one/MatchBroker";
// import Trustpilot from "@/components/home-one/Trustpilot";
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
import TopBrokers from "@/components/home-two/TopBrokers";
const formatString = (str: string) => {
  return str.split(" ").join("-").toLowerCase();
};
console.log(formatString("OANDA"));
export default function Home() {
  return (
    <>
      {/* <Header />
      <main>
        <Hero />
        <Trustpilot />
        <BestBrokers />
        <FilterBrokers />
        <MatchBroker />
        <Expertise />
        <GetAlert />
        <Clients />
        <DownloadApps />
        <JoinDiscussion />
        <Faq />
      </main>
      <Footer /> */}
       {/* Header */}
       <Header />

{/* hero */}
<Hero />

<TopBrokers />



{/* <!-- empowering investors --> */}
<Empower />
  {/* <!-- broker search tools --> */}
<SearchTool />

{/* <!-- Highest rated brokers --> */}
{/* <HighestRatedBroker /> */}

{/* <!-- committed success --> */}
<CommitedSuccess />

{/* <!-- best brokers by asset type --> */}
<BestBrokers />

{/* <!-- download app --> */}
{/* <DownloadApp /> */}

{/* <!-- customer feedback --> */}
<CustomerFeedback />
{/* <!-- footer --> */}
<Footer />
    </>
  );
}
