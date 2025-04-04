import Image from "next/image";
import React from "react";
import empower1 from "@/public/images/empower-one.png";
import empower2 from "@/public/images/empower-two.png";
import Link from "next/link";
const Empower = () => {
  return (
    <section className="empowering-investors pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div data-aos="fade-in" className="col-md-5 col-lg-4">
            <Image src={empower1} className="img-fluid" alt="" />
          </div>
          <div data-aos="fade-in" className="col-md-7 col-lg-8">
            <h2 className="display-4 mb-3 mb-lg-4 text-white fw-semibold ps-md-5 ms-md-4 mt-3">Empowering Investors with Reliable Broker Information</h2>
            <div className="d-flex gap-3 gap-xl-5 flex-column flex-lg-row align-items-start">
              <Image src={empower2} className="img-fluid" alt="" />
              <div>
                <p className="m-text text-white mb-40">
                  Welcome to BrokR! We&apos;re dedicated to helping you find the perfect broker to meet your financial goals. Our mission is to provide you with comprehensive, unbiased comparisons of brokerage services, making your search effortless and efficient.
                </p>
                <div className="mb-40 d-flex align-items-center">
                  <div className="pe-3 pe-xl-4 br-dashed">
                    <p className="l-text fw-medium mb-2 text-white">Active Brokers</p>
                    <h2 className="fw-semibold text-white">
                      7<span className="text-secondary">M</span>
                    </h2>
                  </div>
                  <div className="ps-3 ps-xl-4">
                    <p className="l-text fw-medium mb-2 text-white">Active Clients</p>
                    <h2 className="fw-semibold text-white">
                      20<span className="text-secondary">M</span>
                    </h2>
                  </div>
                </div>
                <Link href="/broker-review/oanda" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                  Read More <i className="ph ph-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
