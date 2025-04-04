import BestBrokers from "@/components/home-one/BestBrokers";
import Clients from "@/components/home-one/Clients";
import DownloadApps from "@/components/home-one/DownloadApps";
import Expertise from "@/components/home-one/Expertise";
import Faq from "@/components/home-one/Faq";
import FilterBrokers from "@/components/home-one/FilterBrokers";
import Footer from "@/components/home-one/Footer";
import GetAlert from "@/components/home-one/GetAlert";
import Header from "@/components/home-one/Header";
import Hero from "@/components/home-one/Hero";
import JoinDiscussion from "@/components/home-one/JoinDiscussion";
import MatchBroker from "@/components/home-one/MatchBroker";
import Trustpilot from "@/components/home-one/Trustpilot";
const formatString = (str: string) => {
  return str.split(" ").join("-").toLowerCase();
};
console.log(formatString("OANDA"));
export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
