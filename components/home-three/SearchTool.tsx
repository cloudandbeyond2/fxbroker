import React from "react";
import tool1 from "@/public/images/tools/tool-1.png";
import tool2 from "@/public/images/tools/tool-2.png";
import tool3 from "@/public/images/tools/tool-3.png";
import tool4 from "@/public/images/tools/tool-4.png";
import tool5 from "@/public/images/tools/tool-5.png";
import tool6 from "@/public/images/tools/tool-6.png";
import tool7 from "@/public/images/tools/tool-7.png";
import tool8 from "@/public/images/tools/tool-8.png";
import Image from "next/image";
import Link from "next/link";
const SearchTool = () => {
  return (
    <section className="search-tool pt-120 pb-120">
      <div className="container">
        <div data-aos="zoom-in" className="row g-3 mb-60">
          <div className="col-md-6">
            <h2 className="display-4 fw-semibold">Simplify Your Broker Search Journey</h2>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <p className="m-text mb-40">BrokR could focus specifically on cryptocurrencies, providing tools and resources for buying.</p>
            <Link href="/best-brokers-one" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              See All Brokers <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/best-brokers-one" data-aos="zoom-in" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool1} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Best List</h5>
                <p className="text-n500 s-text max-two-line">Explore and browse top broker lists categorized for easy comparison.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/compare-brokers" data-aos="zoom-in" data-aos-delay="100" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool2} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Compare Brokers</h5>
                <p className="text-n500 s-text max-two-line">Save hours of research with our in-depth comparison Tool.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/broker-review/oanda" data-aos="zoom-in" data-aos-delay="200" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool3} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Broker Reviews</h5>
                <p className="text-n500 s-text max-two-line">Choose a Broker on your own from more than 100 reviews.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/scam-broker-shield" data-aos="zoom-in" data-aos-delay="300" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool4} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Scam Shield</h5>
                <p className="text-n500 s-text max-two-line">Check if a broker can be trusted and it’s not a scam.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/find-my-broker" data-aos="zoom-in" data-aos-delay="400" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool5} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Find My Broker</h5>
                <p className="text-n500 s-text max-two-line">Create a profile to search and find your favorite Brokers.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/my-first-stock-trade-guide" data-aos="zoom-in" data-aos-delay="500" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool6} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Stock Trade Guide</h5>
                <p className="text-n500 s-text max-two-line">Discuss your questions and concerns with experts and fellow traders.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/asset-compass" data-aos="zoom-in" data-aos-delay="600" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool7} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">Asset Compass</h5>
                <p className="text-n500 s-text max-two-line">Find out what assets fit your goals and which brokers offer them.</p>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link href="/fx-fee-calculator" data-aos="zoom-in" data-aos-delay="700" className="tool-box two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
              <Image src={tool8} className="mb-4" alt="" />
              <div>
                <h5 className="fw-semibold mb-3">FX Fee Calculator</h5>
                <p className="text-n500 s-text max-two-line">Calculate the fee of an FX trade at Different brokers.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTool;
