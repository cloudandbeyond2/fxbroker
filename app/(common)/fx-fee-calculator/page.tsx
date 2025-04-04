import React from "react";
import heroEl from "@/public/images/hero-el.png";
import Image from "next/image";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";
const FxFeeCalculator = () => {
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
                    FX Fee Calculator
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
                <h4 className="fw-semibold bb-dashed">FX Fee Calculator</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <p className="l-text mb-3 fw-medium">Currency Pair</p>
                    <div className="white-bg full-width">
                      <select name="sortby" className="select">
                        <option value="">Select Currency Pair</option>
                        <option value="eurusd">EURUSD</option>
                        <option value="eurjpy">EURJPY</option>
                        <option value="usdjpy">USDJPY</option>
                        <option value="jpyrsa">JPYRSA</option>
                        <option value="rsausd">RSAUSD</option>
                        <option value="rsaeur">RSAEUR</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="l-text mb-3 fw-medium">Trade size in lot</p>
                    <div className="amount-box">
                      <button className="btn py-1 px-3 btn-primary">Lot</button>
                      <input type="number" placeholder="5" />
                    </div>
                  </div>
                  <div className="col-12 mb-40">
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
                <h4 className="fw-semibold bb-dashed">Brokers with the lowest fees for FX trading</h4>
                <div className="overflow-x-auto whitespace-nowrap d-flex flex-column gap-4">
                  <div className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2 gap-sm-3 align-items-center">
                      <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">1</div>
                      <div className="img f-center rounded-circle">
                        <Image src={invest1} alt="" />
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">FS Markets</h5>
                        <p className="text-n500 m-text">(ZERO account)</p>
                      </div>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Total Fee</p>
                        <h5 className="fw-semibold">$3.1</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Spread</p>
                        <h5 className="fw-semibold">$0</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">FX Commission</p>
                        <h5 className="fw-semibold">$3.1</h5>
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
                        <h5 className="fw-semibold mb-2">IC Markets</h5>
                        <p className="text-n500 m-text">(spread account)</p>
                      </div>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Total Fee</p>
                        <h5 className="fw-semibold">$3.1</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Spread</p>
                        <h5 className="fw-semibold">$0</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">FX Commission</p>
                        <h5 className="fw-semibold">$3.1</h5>
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
                        <h5 className="fw-semibold mb-2">FP Markets</h5>
                        (Pro account)
                      </div>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Total Fee</p>
                        <h5 className="fw-semibold">$3.1</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Spread</p>
                        <h5 className="fw-semibold">$0</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">FX Commission</p>
                        <h5 className="fw-semibold">$3.1</h5>
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
                        <h5 className="fw-semibold mb-2">FP Markets</h5>
                        <p className="text-n500 m-text">(Raw account)</p>
                      </div>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Total Fee</p>
                        <h5 className="fw-semibold">$3.1</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">Spread</p>
                        <h5 className="fw-semibold">$0</h5>
                      </div>
                      <div className="px-3 px-xxl-4">
                        <p className="mb-1">FX Commission</p>
                        <h5 className="fw-semibold">$3.1</h5>
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
                  <h4 className="mb-3">Exchange rates used for your fee calculation</h4>
                  <p className="m-text">Rates are updated every hour based on APILayer data</p>
                </div>
                <div className="box-sm d-flex justify-content-between gap-4">
                  <div>
                    <p className="m-text mb-2">1 USD</p>
                    <p className="l-text fw-medium">GBPUSD</p>
                  </div>
                  <div>
                    <p className="m-text mb-2">1.271278</p>
                    <p className="l-text fw-medium">≈ 0.79 GBP</p>
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

export default FxFeeCalculator;
