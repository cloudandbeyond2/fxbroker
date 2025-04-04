import Image from "next/image";
import React from "react";
import heroEl from "@/public/images/hero-el.png";
import scam from "@/public/images/scam.png";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";
import invest5 from "@/public/images/investment/investment-5.png";
import invest6 from "@/public/images/investment/investment-6.png";
import invest10 from "@/public/images/investment/investment-10.png";
const ScamBrokerShield = () => {
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
                    Scam broker shield
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Scam broker shield --> */}

      <section className="brokerage-calculator pb-60 bg-transparent">
        <div className="container">
          <div className="outer-box mb-60">
            <div className="box primary">
              <div className="center-heading">
                <h3 className="mb-3 mb-lg-4 mt-4">Check whether your broker is trusted by BrokR</h3>
                <p className="m-text text-n500 mb-60">We all heard stories of people losing a lot of money to scam brokers. We are here to help you find a legit and reliable provider.</p>
              </div>
              <div className="box mb-32">
                <h5 className="mb-3">Enter broker name below</h5>
                <div className="search-box">
                  <input type="text" placeholder="Search broker..." />
                  <button className="f-center">
                    <i className="ph-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap gap-4">
                <div className="d-flex align-items-center gap-4">
                  <Image src={scam} alt="" />
                  <p className="m-text">Detect scam broker websites in real-time as you browse with our free Chrome extension.</p>
                </div>
                <a href="#" className="btn btn-outline-primary fw-semibold d-flex align-items-center gap-2">
                  {" "}
                  <i className="ph ph-google-chrome-logo"></i> Download Extension
                </a>
              </div>
            </div>
          </div>
          <div className="mb-60">
            <div className="d-flex justify-content-between flex-wrap gap-4 align-items-center mb-40">
              <p className="m-text text-n500">Showing 9-8 of 9 results</p>
              <div className="d-flex gap-2 align-items-center">
                <span>Sort By:</span>
                <select name="sortby" id="sortby" className="select">
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            <div className="row g-3 g-xxl-4 mb-40">
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest1} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Fidelity Investments</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <ul className="list-disc m-text mb-4">
                        <li>Multiple top-tier regulation, including FCA in the UK, SEC in the US, and ASIC in Australia</li>
                        <li>Founded in 1977</li>
                        <li>Investor protection available to many users, e.g. $500k (securities up to $500k, cash up to $250k) to US clients</li>
                        <li>Clean track record: no major regulatory incidents or fines</li>
                      </ul>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-4 text-success f-center">
                          <i className="ph ph-check-circle-fill"></i>
                        </span>
                        <p className="m-text fw-medium">You can open an account in Bangladesh</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest2} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Interactive Brokers</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>Regulated by the top-tier FCA in the UK</li>
                        <li>Founded in 1977</li>
                        <li>Investor protection is £85k</li>
                        <li>Clean track record: no major regulatory incidents or fines</li>
                      </ul>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-4 text-danger f-center">
                          <i className="ph ph-x-circle-fill"></i>
                        </span>
                        <p className="m-text fw-medium">Broker is not available in Bangladesh</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest3} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">NinjaTrader Brokerage</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>

                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>Regulated by the top-tier FCA in the UK</li>
                        <li>Founded in 1977</li>
                        <li>Investor protection is £85k</li>
                        <li>Clean track record: no major regulatory incidents or fines</li>
                      </ul>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-4 text-danger f-center">
                          <i className="ph ph-x-circle-fill"></i>
                        </span>
                        <p className="m-text fw-medium">Broker is not available in Bangladesh</p>
                      </div>
                    </div>

                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest4} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">ADM Investor Services</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>Regulated by the Polish KNF</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest5} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">OANDA</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>This broker is registered with the top-tier Securities &apos; Exchange Board of India (SEBI) in India.</li>
                        <li>Founded in 1972</li>
                        <li>No Investor protection</li>
                      </ul>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fs-4 text-success f-center">
                          <i className="ph ph-check-circle-fill"></i>
                        </span>
                        <p className="m-text fw-medium">You can open an account in Bangladesh</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest6} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Admirals</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>Regulated by the Monetary Authority of Singapore</li>
                        <li>Founded in 1979</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest4} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">BOC International</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>Regulated by the Polish KNF</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest5} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Bankinter</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="trusted-badge text-success fs-4 f-center gap-2">
                        <i className="ph ph-check-circle-fill"></i>
                        <p className="m-text fw-medium text-success">Trusted broker</p>
                      </div>
                    </div>
                    <div className="bb-n40 d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>This broker is registered with the top-tier Securities &apos; Exchange Board of India (SEBI) in India.</li>
                        <li>Founded in 1972</li>
                        <li>No Investor protection</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <a href="#" className="text-primary pt-3 fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={invest10} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Yuan Internationality</h4>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-secondary d-flex align-items-center fs-4">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="l-text fw-medium">
                              4.9/<span className="fw-normal">5</span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="text-primary d-flex align-items-center fs-4">
                              <i className="ph ph-bookmark-simple"></i>
                            </span>
                            <p className="l-text">Save Wishlist&apos;s</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <div className="not-trusted-badge fs-4 f-center gap-2">
                        <i className="ph ph-info"></i>
                        <p className="m-text fw-medium text-danger">Not Trusted broker</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column h-100">
                      <ul className="list-disc m-text mb-4 flex-grow-1">
                        <li>Not regulated by any top-tier financial authority, such as FCA in the UK or ASIC in Australia</li>
                        <li>Listed on IOSCO warning list since Mar 2023 (IOSCO is an international regulatory organization)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ScamBrokerShield;
