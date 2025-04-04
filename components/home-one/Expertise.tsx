import Image from "next/image";
import React from "react";
import heroEl from "@/public/images/hero-el.png";
import expertiseHomeOne from "@/public/images/home-one-expertise.png";
import Link from "next/link";
const Expertise = () => {
  return (
    <section className="acknowledged-expertise pt-4 position-relative overflow-x-hidden">
      <Image className="expertise-el" src={heroEl} alt="" />
      <div className="container">
        <div className="row g-4 g-lg-0 align-items-center">
          <div data-aos="zoom-in-up" className="col-lg-6">
            <h2 className="display-4 text-white fw-semibold mb-3 mb-xl-4">Globally Acknowledged Expertise</h2>
            <p className="l-text text-white mb-40">We understand that when it comes to choosing a brokerage comparison service, you have many options. Our evaluations are based...</p>
            <div className="row g-3 mb-40">
              <div className="col-sm-6">
                <div className="expertise-box d-flex align-items-center gap-3">
                  <h2 className="display-4 fw-semibold text-white">
                    10<span className="text-secondary">+</span>
                  </h2>
                  <p className="s-text text-white">Years in matching people with trusted brokers</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="expertise-box d-flex align-items-center gap-3">
                  <h2 className="display-4 fw-semibold text-white">
                    2.7<span className="text-secondary">k</span>
                  </h2>
                  <p className="s-text text-white">In matches made in the last 6 months</p>
                </div>
              </div>
            </div>
            <Link href="/about-us" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              Check Our Press Highlights <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
          <div data-aos="fade-in" className="col-lg-6 col-xxl-5 offset-xxl-1">
            <Image src={expertiseHomeOne} className="max-unset" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
