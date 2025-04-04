import Image from "next/image";
import React from "react";
import tool1 from "@/public/images/tools/tool-1.png";
import tool2 from "@/public/images/tools/tool-2.png";
import tool3 from "@/public/images/tools/tool-3.png";
import tool4 from "@/public/images/tools/tool-4.png";
import tool5 from "@/public/images/tools/tool-5.png";
import tool6 from "@/public/images/tools/tool-6.png";
import tool7 from "@/public/images/tools/tool-7.png";
import tool8 from "@/public/images/tools/tool-8.png";
import Link from "next/link";
const SearchTool = () => {
  return (
    <section className="search-tool pt-120 pb-120">
      <div className="container">
        <div className="row mb-60">
          <div data-aos="zoom-in" className="col-md-6">
            <h2 className="display-4 fw-semibold">Tool for Effortless Broker Search</h2>
          </div>
          <div data-aos="zoom-in" className="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <p className="m-text mb-40">BrokR could focus specifically on cryptocurrencies, providing tools and resources for buying.</p>
            <Link href="/best-brokers-two" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              See All Brokers <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/best-brokers-one" data-aos="zoom-in" className="tool-box">
              <Image src={tool1} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Best List</h4>
              <p className="text-n500 s-text">Explore and browse top broker lists categorized for easy comparison.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/compare-brokers" data-aos="zoom-in" data-aos-delay="50" className="tool-box">
              <Image src={tool2} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Compare Brokers</h4>
              <p className="text-n500 s-text">Save hours of research with our in-depth comparison Tool.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/broker-review/oanda" data-aos="zoom-in" data-aos-delay="100" className="tool-box">
              <Image src={tool3} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Broker Reviews</h4>
              <p className="text-n500 s-text">Choose a Broker on your own from more than 100 reviews.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/scam-broker-shield" data-aos="zoom-in" data-aos-delay="150" className="tool-box">
              <Image src={tool4} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Scam Shield</h4>
              <p className="text-n500 s-text">Check if a broker can be trusted and it’s not a scam.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/find-my-broker" data-aos="zoom-in" data-aos-delay="200" className="tool-box">
              <Image src={tool5} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Find My Broker</h4>
              <p className="text-n500 s-text">Find your borker and receive updates on your favorite Brokers.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/my-first-stock-trade-guide" data-aos="zoom-in" data-aos-delay="250" className="tool-box">
              <Image src={tool6} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Stock Broker Guide</h4>
              <p className="text-n500 s-text">Stock broker guide and concerns with experts and fellow traders.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/asset-compass" data-aos="zoom-in" data-aos-delay="300" className="tool-box">
              <Image src={tool7} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">Asset Compass</h4>
              <p className="text-n500 s-text">Find out what assets fit your goals and which brokers offer them.</p>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/fx-fee-calculator" data-aos="zoom-in" data-aos-delay="350" className="tool-box">
              <Image src={tool8} className="mb-4" alt="" />
              <h4 className="fw-semibold mb-3">FX Fee Calculator</h4>
              <p className="text-n500 s-text">Calculate the fee of an FX trade at Different brokers.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTool;
