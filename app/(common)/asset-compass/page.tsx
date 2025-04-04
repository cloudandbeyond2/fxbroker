"use client";
import heroEl from "@/public/images/hero-el.png";
import breadCrumbImg from "@/public/images/breadcrumb-img.png";
import Image from "next/image";
import tool2 from "@/public/images/tools/tool-2.png";
import tool9 from "@/public/images/tools/tool-9.png";
import tool10 from "@/public/images/tools/tool-10.png";
import tool11 from "@/public/images/tools/tool-11.png";
import tool12 from "@/public/images/tools/tool-12.png";
import tool13 from "@/public/images/tools/tool-13.png";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";
import invest5 from "@/public/images/investment/investment-5.png";
import invest6 from "@/public/images/investment/investment-6.png";
import broker1 from "@/public/images/broker-category/broker-1.png";
import broker2 from "@/public/images/broker-category/broker-2.png";
import broker3 from "@/public/images/broker-category/broker-3.png";
import { useState } from "react";

const toolsData = [
  {
    aosDelay: 0,
    imageSrc: tool9,
    title: "Protection against inflation",
    description: "Ensure that your money does not lose its value over time due to rising prices.",
  },
  {
    aosDelay: 100,
    imageSrc: tool10,
    title: "Passive Income",
    description: "Generate regular income from investments that require little.",
  },
  {
    aosDelay: 200,
    imageSrc: tool2,
    title: "Gains From Active Trading",
    description: "Generate profits by buying and selling securities frequently.",
  },
  {
    aosDelay: 300,
    imageSrc: tool11,
    title: "High - Value Purchase",
    description: "Accumulate a significant amount of money over time to buy a high-value.",
  },
  {
    aosDelay: 400,
    imageSrc: tool12,
    title: "Save For Retirement",
    description: "Grow your savings over time to accumulate sufficient funds to support.",
  },
  {
    aosDelay: 500,
    imageSrc: tool13,
    title: "Long-Term Savings",
    description: "Increase your savings over time to have a reserve of found to provide financial.",
  },
];
const times = [
  {
    id: 1,
    title: "Less than 1 Year",
  },
  {
    id: 2,
    title: "1 - 3 Year",
  },
  {
    id: 3,
    title: "3+ Year",
  },
];
const AssetCompass = () => {
  const [toolselected, setToolSelected] = useState(false);
  const [timeSelected, setTimeSelected] = useState<null | number>(null);
  return (
    <main>
      {/* <!-- hero  --> */}
      <section className="hero-breadcrumb-two">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row gy-4">
            <div data-aos="zoom-in-down" className="col-lg-7">
              <div className="pt-80">
                <h2 className="display-4 mb-4 fw-semibold text-white">Find brokers for your goals</h2>
                <p className="m-text text-white">Choose your goal and time; we&apos;ll suggest brokers. Always research before investing.</p>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="col-lg-5 col-xl-3 offset-xl-2">
              <Image src={breadCrumbImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- investment goal --> */}
      <section className="investment-goal pt-120 pb-120">
        <div className="container">
          <h2 className="text-center mb-60">What is your investment goal?</h2>
          <div className="row g-3">
            {toolsData.map(({ aosDelay, imageSrc, title, description }, index) => (
              <div onClick={() => setToolSelected(true)} key={index} data-aos="fade-in" data-aos-delay={aosDelay} className="col-sm-6 col-xl-4 cursor-pointer">
                <div className="tool-box asset-tool two d-flex align-items-center gap-3 gap-xxl-4 align-items-start">
                  <Image src={imageSrc} className="mb-4" alt="" />
                  <div>
                    <h5 className="fw-semibold mb-3">{title}</h5>
                    <p className="text-n500 s-text max-two-line">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- time horizon --> */}
      <section className={`time-horizon pt-60 pb-60 ${toolselected ? "" : "d-none"}`}>
        <div data-aos="zoom-in" className="container">
          <h2 className="text-center mb-60">What is your time horizon?</h2>
          <form className="radio-container">
            <div className="row g-3">
              {times.map(({ id, title }) => (
                <div key={id} className="col-md-4">
                  <div className={`box ${id == timeSelected ? "border-2 border-primary" : ""}`}>
                    <div className="form-check d-flex align-items-center gap-2">
                      <input onChange={() => setTimeSelected(id)} className="form-check-input" type="radio" name="flexRadioDefault" id={id.toString()} />
                      <label className="form-check-label fw-semibold" htmlFor={id.toString()}>
                        {title}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </section>

      {/* <!-- top brokers --> */}

      <section className={`top-brokers pt-120 pb-120 ${timeSelected ? "" : "d-none"}`}>
        <div className="container">
          <h2 className="text-center mb-60 pb-60">Your investment and top broker options</h2>
          <div className="mb-60">
            <h3 className="mb-3">Options</h3>
            <p className="text-n500 s-text mb-40">You can use options to place leveraged bets on price movements for the short term. Be careful, as these are risky instruments.</p>
            <div className="row g-3 g-xxl-4 mb-40">
              <div className="col-lg-6 col-xxl-4">
                <div data-aos="zoom-in" data-aos-delay="100" className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                <div data-aos="zoom-in" data-aos-delay="100" className="broker-box recommended">
                  <div className="flag d-flex position-absolute px-3 gap-2 align-items-center py-1 top-0 bg-primary text-white">
                    <i className="ph ph-check"></i>
                    <p className="xs-text fw-semibold text-white">Recommended For You</p>
                  </div>
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                <div data-aos="zoom-in" data-aos-delay="200" className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
            </div>
          </div>
          <div className="mb-60">
            <h3 className="mb-3">CFDs</h3>
            <p className="text-n500 s-text mb-40">CFDs are used to speculate on short-term price moves in various asset classes (e.g. stocks, commodities, indexes). These are leveraged and thus risky intruments.</p>
            <div className="row g-3 g-xxl-4 mb-40">
              <div className="col-lg-6 col-xxl-4">
                <div data-aos="zoom-in" className="broker-box recommended">
                  <div className="flag d-flex position-absolute px-3 gap-2 align-items-center py-1 top-0 bg-primary text-white">
                    <i className="ph ph-check"></i>
                    <p className="xs-text fw-semibold text-white">Recommended For You</p>
                  </div>
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                <div data-aos="zoom-in" data-aos-delay="100" className="broker-box recommended">
                  <div className="flag d-flex position-absolute px-3 gap-2 align-items-center py-1 top-0 bg-primary text-white">
                    <i className="ph ph-check"></i>
                    <p className="xs-text fw-semibold text-white">Recommended For You</p>
                  </div>
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                <div data-aos="zoom-in" data-aos-delay="200" className="broker-box recommended">
                  <div className="flag d-flex position-absolute px-3 gap-2 align-items-center py-1 top-0 bg-primary text-white">
                    <i className="ph ph-check"></i>
                    <p className="xs-text fw-semibold text-white">Recommended For You</p>
                  </div>
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
            </div>
          </div>
          <div>
            <h3 className="mb-3">Forex</h3>
            <p className="text-n500 s-text mb-40">CForex is one of the largest markets globally, a popular place to speculate on global currencies. Be careful though, as these are leveraged and thus risky intruments.</p>
            <div className="row g-3 g-xxl-4">
              <div className="col-lg-6 col-xxl-4">
                <div data-aos="zoom-in" className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={broker1} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Saxo</h4>
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                <div data-aos="zoom-in" data-aos-delay="100" className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={broker2} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Fusion Markets</h4>
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                <div data-aos="zoom-in" data-aos-delay="200" className="broker-box">
                  <div className="inner">
                    <div className="d-flex align-items-center gap-3 bb-n40">
                      <div className="img f-center">
                        <Image width="52" height="52" src={broker3} alt="" />
                      </div>
                      <div>
                        <h4 className="fw-semibold mb-3">Capital.com</h4>
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
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-primary fs-4 d-flex align-items-center">
                          <i className="ph ph-users-three"></i>
                        </span>
                        <p className="l-text">
                          <span className="fw-medium">234,548</span> people chose this broker
                        </p>
                      </div>
                    </div>
                    <div className="bb-n40">
                      <table className="w-100">
                        <tbody className="">
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Low <span className="text-brown">4.5</span>/5
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Inactivity Fee:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Investor Protection:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">No</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Mobile Platform:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssetCompass;
