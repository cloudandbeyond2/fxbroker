import Image from "next/image";
import React from "react";
import { brokers } from "./HighestRatedBroker";
import Link from "next/link";
import { formatString } from "@/app/(common)/broker-review/[title]/page";

const BestBrokers = () => {
  return (
    <section className="best-brokers pt-120 pb-120">
      <div className="container">
        <div data-aos="fade-in-down" className="title-section text-center">
          <h2 className="display-4 fw-semibold mb-3 mb-lg-4">Best Brokers by Asset Type in This 2024</h2>
          <p className="l-text mb-60 text-n500">Choosing the right broker is essential for successful trading and investing. At BrokR, we&apos;ve carefully reviewed and selected</p>
        </div>
        <div data-aos="fade-up" className="tabs">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                <i className="ph ph-stack-bold"></i> Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                <i className="ph ph-detective-bold"></i> Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                <i className="ph ph-chart-pie-bold"></i> Contact
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="row g-3 g-xl-4">
                {brokers.map(({ image, title }) => (
                  <div key={title} className="col-md-6">
                    <Link href={`/broker-review/${formatString(title)}`} className="broker-card d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="img f-center rounded-circle">
                          <Image src={image} alt="" />
                        </div>
                        <div>
                          <h4 className="fw-semibold mb-2">{title}</h4>
                          <p className="text-n500">Commission-free trading on stocks and ETFs.</p>
                        </div>
                      </div>
                      <button className="arrow-btn text-secondary fs-4 f-center rounded-circle border border-secondary">
                        <i className="ph ph-arrow-up-right"></i>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="row g-3 g-xl-4">
                {brokers.map(({ image, title }) => (
                  <div key={title} className="col-md-6">
                    <Link href={`/broker-review/${formatString(title)}`} className="broker-card d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="img f-center rounded-circle">
                          <Image src={image} alt="" />
                        </div>
                        <div>
                          <h4 className="fw-semibold mb-2">{title}</h4>
                          <p className="text-n500">Commission-free trading on stocks and ETFs.</p>
                        </div>
                      </div>
                      <button className="arrow-btn text-secondary fs-4 f-center rounded-circle border border-secondary">
                        <i className="ph ph-arrow-up-right"></i>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="row g-3 g-xl-4">
                {brokers.map(({ image, title }) => (
                  <div key={title} className="col-md-6">
                    <Link href={`/broker-review/${formatString(title)}`} className="broker-card d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="img f-center rounded-circle">
                          <Image src={image} alt="" />
                        </div>
                        <div>
                          <h4 className="fw-semibold mb-2">{title}</h4>
                          <p className="text-n500">Commission-free trading on stocks and ETFs.</p>
                        </div>
                      </div>
                      <button className="arrow-btn text-secondary fs-4 f-center rounded-circle border border-secondary">
                        <i className="ph ph-arrow-up-right"></i>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBrokers;
