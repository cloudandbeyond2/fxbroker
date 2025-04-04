import React from "react";
import heroEl from "@/public/images/hero-el.png";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";

import Image from "next/image";
const BrokerageFeeCalculator = () => {
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb-three">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Tools</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Brokerage Fee Calculator
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- brokerage calculator --> */}

      <section className="brokerage-calculator pb-60 bg-transparent">
        <div className="container">
          <div className="d-flex flex-column gap-4">
            <div className="outer-box">
              <div className="box primary">
                <h4 className="fw-semibold bb-dashed">Brokerage Fee Calculator</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <p className="l-text mb-3 fw-medium">Broker Category</p>
                    <div className="white-bg full-width">
                      <select name="sortby" className="select">
                        <option value="">Select Category</option>
                        <option value="one">Category one</option>
                        <option value="two">Category two</option>
                        <option value="three">Category three</option>
                        <option value="four">Category four</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="l-text mb-3 fw-medium">Choose Brokers</p>
                    <div className="white-bg full-width">
                      <select name="sortby" className="select">
                        <option value="interactive">Interactive Broker</option>
                        <option value="oanda">Oanda</option>
                        <option value="admirals">Admirals</option>
                        <option value="forex">Forex</option>
                        <option value="ninjatrader">NinjaTrader</option>
                        <option value="ig">IG</option>
                        <option value="fxcm">FXCM</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="l-text mb-3 fw-medium">Amount</p>
                    <div className="amount-box">
                      <div className="primary-bg content-width">
                        <select name="sortby" className="select">
                          <option value="usd">USD</option>
                          <option value="bdt">BDT</option>
                          <option value="gbp">GBP</option>
                          <option value="jpy">JPY</option>
                        </select>
                      </div>
                      <input type="number" placeholder="Enter Amount" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-40">
                    <p className="l-text mb-3 fw-medium">Country</p>
                    <div className="white-bg full-width">
                      <select name="sortby" className="select">
                        <option value="">Select Country</option>
                        <option value="bd">Bangladesh</option>
                        <option value="usa">USA</option>
                        <option value="egypt">Egypt</option>
                        <option value="lb">Lebanon</option>
                        <option value="in">India</option>
                        <option value="pk">Pakistan</option>
                        <option value="np">Nepal</option>
                        <option value="bl">Belarus</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex gap-4 mt-0">
                    <button className="btn btn-secondary">Calculate</button>
                    <button className="btn btn-outline-secondary">Clear All</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-box">
              <div className="box primary">
                <h4 className="fw-semibold bb-dashed">Brokers with the lowest commission</h4>
                <div className="overflow-x-auto whitespace-nowrap d-flex flex-column gap-4">
                  <div className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 gap-sm-3 align-items-center">
                      <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">1</div>
                      <div className="img f-center rounded-circle">
                        <Image src={invest1} alt="" />
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">Fidelity Investments</h5>
                        <p className="text-n500 m-text d-flex align-items-center gap-4">
                          Beginner score:
                          <span className="d-flex align-items-center gap-2">
                            <span className="f-center fs-5 text-secondary">
                              <i className="ph ph-star-fill"></i>
                            </span>{" "}
                            <span className="fw-medium">4.9</span>/5
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-5">
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee $</p>
                        <h5 className="fw-semibold">$0.00</h5>
                      </div>
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee %</p>
                        <h5 className="fw-semibold">0%</h5>
                      </div>
                    </div>
                    <a href="#" className="d-flex align-items-center gap-2 btn btn-secondary">
                      Visit Site
                      <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                  <div className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 gap-sm-3 align-items-center">
                      <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">2</div>
                      <div className="img f-center rounded-circle">
                        <Image src={invest2} alt="" />
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">Interactive Brokers</h5>
                        <p className="text-n500 m-text d-flex align-items-center gap-4">
                          Beginner score:
                          <span className="d-flex align-items-center gap-2">
                            <span className="f-center fs-5 text-secondary">
                              <i className="ph ph-star-fill"></i>
                            </span>{" "}
                            <span className="fw-medium">4.9</span>/5
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-5">
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee $</p>
                        <h5 className="fw-semibold">$0.00</h5>
                      </div>
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee %</p>
                        <h5 className="fw-semibold">0%</h5>
                      </div>
                    </div>
                    <a href="#" className="d-flex align-items-center gap-2 btn btn-secondary">
                      Visit Site
                      <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                  <div className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 gap-sm-3 align-items-center">
                      <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">3</div>
                      <div className="img f-center rounded-circle">
                        <Image src={invest3} alt="" />
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">NinjaTrader Brokerage</h5>
                        <p className="text-n500 m-text d-flex align-items-center gap-4">
                          Beginner score:
                          <span className="d-flex align-items-center gap-2">
                            <span className="f-center fs-5 text-secondary">
                              <i className="ph ph-star-fill"></i>
                            </span>{" "}
                            <span className="fw-medium">4.9</span>/5
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-5">
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee $</p>
                        <h5 className="fw-semibold">$0.00</h5>
                      </div>
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee %</p>
                        <h5 className="fw-semibold">0%</h5>
                      </div>
                    </div>
                    <a href="#" className="d-flex align-items-center gap-2 btn btn-secondary">
                      Visit Site
                      <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                  <div className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 gap-sm-3 align-items-center">
                      <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">4</div>
                      <div className="img f-center rounded-circle">
                        <Image src={invest4} alt="" />
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">ADM Investor Services</h5>
                        <p className="text-n500 m-text d-flex align-items-center gap-4">
                          Beginner score:
                          <span className="d-flex align-items-center gap-2">
                            <span className="f-center fs-5 text-secondary">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <span className="fw-medium">4.9</span>/5
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-5">
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee $</p>
                        <h5 className="fw-semibold">$0.00</h5>
                      </div>
                      <div className="px-3 px-xxl-5">
                        <p className="mb-1">Fee %</p>
                        <h5 className="fw-semibold">0%</h5>
                      </div>
                    </div>
                    <a href="#" className="d-flex align-items-center gap-2 btn btn-secondary">
                      Visit Site
                      <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-box">
              <div className="box primary d-flex align-items-center justify-content-between flex-wrap gap-4">
                <div>
                  <h4 className="mb-3">Need more information to choose the right broker?</h4>
                  <p className="m-text">Dig deeper by comparing the brokers listed above.</p>
                </div>
                <button className="d-flex align-items-center gap-2 btn btn-secondary fw-semibold">
                  <i className="ph ph-arrows-left-right-bold"></i>
                  Compare These Brokers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrokerageFeeCalculator;
