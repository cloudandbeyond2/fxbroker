import Image from "next/image";
import React from "react";
import heroEl from "@/public/images/hero-el.png";
import matchImg from "@/public/images/home-one-match.png";
const MatchBroker = () => {
  return (
    <section className="match-broker position-relative pt-120 pb-120 overflow-x-hidden">
      <Image className="match-el" src={heroEl} alt="" />
      <div className="container">
        <div className="row">
          <div data-aos="fade-right" className="col-lg-6 col-xl-5">
            <Image src={matchImg} className="img-fluid" alt="" />
          </div>
          <div data-aos="fade" className="col-lg-6 offset-xl-1">
            <h2 className="display-4 mb-3 mb-xl-4 fw-semibold">We Match You With Brokers We Trust</h2>
            <p className="l-text mb-40">Your trusted source for comprehensive broker comparisons and financial insights. Founded with a passion for empowering traders and investors of all levels, we strive to provide unbiased guidance and valuable resources.</p>
            <div className="quote d-flex align-items-start gap-3 mb-40">
              <span className="fs-1 text-secondary">
                <i className="ph ph-quotes"></i>
              </span>
              <p className="l-text fw-medium">BrokR helps you pick the best broker platform, in a simple, personalized process taking just a few clicks.</p>
            </div>
            <div className="features d-flex flex-column flex-md-row gap-4 gap-md-0">
              <div className="single-feature">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="arrow f-center bg-secondary text-white rounded-circle">
                    <i className="ph ph-arrow-right"></i>
                  </span>
                  <h5 className="fw-semibold text-n700">Expertise and Insight</h5>
                </div>
                <p className="s-text text-n500">Our team of experienced analysts and industry experts brings.</p>
              </div>
              <div className="single-feature">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="arrow f-center bg-secondary text-white rounded-circle">
                    <i className="ph ph-arrow-right"></i>
                  </span>
                  <h5 className="fw-semibold text-n700">Commitment to Excellence</h5>
                </div>
                <p className="s-text text-n500">We are committed to excellence in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchBroker;
