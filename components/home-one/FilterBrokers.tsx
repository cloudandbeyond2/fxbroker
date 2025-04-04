import Image from "next/image";
import React from "react";
import check from "@/public/images/check.png";
import filterImg from "@/public/images/home-one-filter.png";
import heroEl from "@/public/images/hero-el.png";
import Link from "next/link";
const FilterBrokers = () => {
  return (
    <section className="filter-brokers position-relative overflow-x-hidden">
      <div className="bg-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Image className="filter-el" src={heroEl} alt="" />
      <div className="container content">
        <div className="row align-items-center gy-4">
          <div data-aos="fade-up" className="col-lg-6">
            <h2 className="display-4 text-white fw-semibold mb-3 mb-xl-4">Filter and Compare 100+ Trusted Brokers</h2>
            <p className="l-text text-white mb-3 mb-xl-4">Are you searching for the perfect brokerage platform to kickstart your investment journey? Look no further! Our comprehensive broker comparison tool allows you to explore and evaluate a wide range of brokerage options.</p>
            <ul className="mb-4 mb-xl-5 d-flex flex-column gap-3">
              <li className="d-flex align-items-center gap-2">
                <Image src={check} alt="" />
                <p className="l-text fw-medium text-white">Easy To Compare</p>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Image src={check} alt="" />
                <p className="l-text fw-medium text-white">Easy To Search In Filter</p>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Image src={check} alt="" />
                <p className="l-text fw-medium text-white">Find Broker`s Very Easily</p>
              </li>
            </ul>
            <Link href="/compare-brokers" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              Start Your Comparision <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
          <div data-aos="fade-in" className="col-lg-6 col-xl-5 offset-xl-1">
            <Image src={filterImg} className="max-unset" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBrokers;
