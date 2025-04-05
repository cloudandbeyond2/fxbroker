import React from "react";
import { brokers } from "@/components/home-two/HighestRatedBroker";
import Image from "next/image";
// import React from "react";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";
import invest5 from "@/public/images/investment/investment-5.png";
import invest6 from "@/public/images/investment/investment-6.png";
import invest7 from "@/public/images/investment/investment-7.png";
import invest8 from "@/public/images/investment/investment-8.png";
import { formatString } from "@/app/(common)/broker-review/[title]/page";
import Link from "next/link";
// import Image from "next/image";
const CompareBrokerPage = () => {
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Compare brokers</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Tools</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Compare Brokers
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-120 pb-120">
        <div className="container">

      <div className="col-lg-8">
              <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center mb-40">
                <p className="m-text text-n500">Showing 1-8 of 100 results</p>
                <div className="d-flex gap-2 align-items-center">
                  <span>Sort By:</span>
                  <select name="sortby" id="sortby" className="select">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 g-xxl-4 mb-40">
                {brokers.slice(0, 6).map(({ image, rating, title, users }) => (
                  <div key={title} data-aos="fade-in" className="col-xxl-6">
                    <div className="broker-box">
                      <div className="inner">
                        <div className="d-flex align-items-center gap-3 bb-n40">
                          <div className="img f-center">
                            <Image width="52" height="52" src={image} alt="" />
                          </div>
                          <div>
                            <h4 className="fw-semibold mb-3">{title}</h4>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                              <div className="d-flex align-items-center gap-1">
                                <span className="text-secondary d-flex align-items-center fs-4">
                                  <i className="ph ph-star-fill"></i>
                                </span>
                                <p className="l-text fw-medium">
                                  {rating}/<span className="fw-normal">5</span>
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
                              <span className="fw-medium">{users}</span> people chose this broker
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
                        <Link href={`/broker-review/${formatString(title)}`} className="text-primary pt-3 fw-semibold f-center gap-2">
                          Details Review <i className="ph ph-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center pagination-list">
                <button>
                  <i className="ph ph-caret-left-bold"></i>
                </button>
                <a href="#">1</a>
                <a href="#" className="active">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">
                  <i className="ph ph-dots-three-bold"></i>
                </a>
                <button>
                  <i className="ph ph-caret-right-bold"></i>
                </button>
              </div>
            </div>

            </div>
            </section>

      {/* <!-- compare brokers --> */}
      <section className="pt-120 pb-120 compare-brokers">
        <div className="container d-flex flex-column gap-4">
          <div className="outer-box">
            <div className="box primary">
              <h4 className="mb-3 fw-semibold">Compare Brokers</h4>
              <p className="l-text text-n500 mb-32">(3 Broker selected)</p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="white-bg full-width">
                    <select name="sortby" className="select">
                      <option value="oldest">Category one</option>
                      <option value="oldest">Category two</option>
                      <option value="oldest">Category three</option>
                      <option value="oldest">Category four</option>
                      <option value="oldest">Category five</option>
                      <option value="oldest">Category six</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="white-bg full-width">
                    <select name="sortby" className="select">
                      <option value="oldest">Bangladesh</option>
                      <option value="oldest">USA</option>
                      <option value="oldest">Egypt</option>
                      <option value="oldest">Lebanon</option>
                      <option value="oldest">India</option>
                      <option value="oldest">Pakistan</option>
                      <option value="oldest">France</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 mb-3 mb-xl-4">
                  <div className="search-bar">
                    <input type="text" placeholder="Type of broker" />
                    <button className="bg-transparent fs-5 f-center">
                      <i className="ph ph-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <button className="btn btn-secondary">Add More</button>
                  <button className="btn btn-outline-secondary">Clear All</button>
                </div>
              </div>
            </div>
          </div>
          <div className="outer-box">
            <div className="box primary">
              <div className="bb-dashed d-flex justify-content-between align-items-center flex-wrap gap-4">
                <h4 className="fw-semibold">Compare Information</h4>
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" className="btn btn-outline-primary d-flex align-items-center gap-2">
                    <i className="ph ph-faders-horizontal fs-5"></i>
                    Filter
                  </button>
                  <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header bb-dashed">
                      <h4 className="offcanvas-title fw-semibold" id="offcanvasWithBothOptionsLabel">
                        Filters
                      </h4>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <div className="bb-dashed">
                        <p className="l-text fw-medium mb-3">Your Country</p>
                        <div className="white-bg full-width">
                          <select name="sortby" id="Country" className="select">
                            <option value="bd">Bangladesh</option>
                            <option value="in">India</option>
                            <option value="pk">Pakistan</option>
                            <option value="pk">Nepal</option>
                            <option value="pk">Spain</option>
                            <option value="eg">Egypt</option>
                            <option value="sd">Sudan</option>
                            <option value="mc">Morocco</option>
                          </select>
                        </div>
                      </div>
                      <p className="l-text fw-medium mb-3 mb-lg-4">Asset Types</p>
                      <div className="d-flex flex-wrap gap-3 bb-dashed">
                        <a href="#" className="tag">
                          Stock
                        </a>
                        <a href="#" className="tag">
                          EFT
                        </a>
                        <a href="#" className="tag">
                          Bonds
                        </a>
                        <a href="#" className="tag">
                          CFD
                        </a>
                        <a href="#" className="tag">
                          Crypto
                        </a>
                        <a href="#" className="tag">
                          Option
                        </a>
                        <a href="#" className="tag">
                          Futures
                        </a>
                        <a href="#" className="tag">
                          Forex
                        </a>
                        <a href="#" className="tag">
                          Funds
                        </a>
                      </div>
                      <div className="bb-dashed">
                        <p className="l-text fw-medium mb-3">Feature</p>
                        <div className="d-flex flex-column gap-3">
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="fee-score" />
                            <label className="form-check-label" htmlFor="fee-score">
                              Fees score
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="stock-fee" defaultChecked />
                            <label className="form-check-label" htmlFor="stock-fee">
                              US stock fee
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="euro-usd" defaultChecked />
                            <label className="form-check-label" htmlFor="euro-usd">
                              EURUSD spread
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="us-index" />
                            <label className="form-check-label" htmlFor="us-index">
                              US index options fee
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="cfd" defaultChecked />
                            <label className="form-check-label" htmlFor="cfd">
                              S&P 500 CFD spread
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="withdrawal-fee" />
                            <label className="form-check-label" htmlFor="withdrawal-fee">
                              Withdrawal fee
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="deposit-fee" defaultChecked />
                            <label className="form-check-label" htmlFor="deposit-fee">
                              Deposit fee
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="inactivity-fee" />
                            <label className="form-check-label" htmlFor="inactivity-fee">
                              Inactivity fee
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="top-tier" />
                            <label className="form-check-label" htmlFor="top-tier">
                              Top-tier regulators
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="foundation" defaultChecked />
                            <label className="form-check-label" htmlFor="foundation">
                              Foundation date
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="investor-protection" />
                            <label className="form-check-label" htmlFor="investor-protection">
                              Investor protection
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="minimum-deposit" />
                            <label className="form-check-label" htmlFor="minimum-deposit">
                              Minimum deposit
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="bank-transfer" defaultChecked />
                            <label className="form-check-label" htmlFor="bank-transfer">
                              Bank transfer for deposit
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="bank-transfer-withdrawal" />
                            <label className="form-check-label" htmlFor="bank-transfer-withdrawal">
                              Bank transfer for withdrawal
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="credit-deposit" defaultChecked />
                            <label className="form-check-label" htmlFor="credit-deposit">
                              Credit/debit for deposit
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="credit-withdrawal" />
                            <label className="form-check-label" htmlFor="credit-withdrawal">
                              Credit/debit for withdrawal
                            </label>
                          </div>
                          <div className="form-check form-switch form-switch-lg">
                            <input className="form-check-input" type="checkbox" role="switch" id="paypal" />
                            <label className="form-check-label" htmlFor="paypal">
                              PayPal for deposit
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-4">
                        <button className="btn btn-secondary d-flex align-items-center gap-2 fw-semibold">
                          <i className="ph ph-eye"></i>
                          Show Result
                        </button>
                        <button className="btn btn-secondary d-flex align-items-center gap-2 fw-semibold">
                          <i className="ph ph-arrow-clockwise"></i>
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <span>Sort By:</span>
                    <div className="white-bg">
                      <select name="sortby" id="sortby" className="select">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-100">
                  <thead>
                    <tr className="fw-semibold">
                      <th>Feature</th>
                      <th>
                        <div className="d-flex align-items-center gap-2">
                          <p>Interactive Brokers</p>
                          <button className="f-center bg-transparent fs-5 text-danger">
                            <i className="ph ph-trash"></i>
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center gap-2">
                          <p>Oanda</p>
                          <button className="f-center bg-transparent fs-5 text-danger">
                            <i className="ph ph-trash"></i>
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="d-flex align-items-center gap-2">
                          <p>Forex.com</p>
                          <button className="f-center bg-transparent fs-5 text-danger">
                            <i className="ph ph-trash"></i>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Fees Score</td>
                      <td>4.3/5</td>
                      <td>4.1/5</td>
                      <td>4.2/5</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">US stock fee</td>
                      <td>$1.0</td>
                      <td>$0.0</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">EURUSD spread</td>
                      <td>1.2</td>
                      <td>0.2</td>
                      <td>1.2</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">US index options fee</td>
                      <td>$6.5</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">S&P 500 CFD spread</td>
                      <td>0.3</td>
                      <td>0.1</td>
                      <td>0.2</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Withdrawal fee</td>
                      <td>$0</td>
                      <td>$0</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Deposit fee</td>
                      <td>$0</td>
                      <td>$0</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Inactivity fee</td>
                      <td className="text-danger">No</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Top-tier regulators</td>
                      <td>FCA in the UK, SEC in the US, and ASIC in Australia</td>
                      <td>FCA in the UK, CIRO in Canada, and ASIC in Australia</td>
                      <td>CFTC in the US, FCA in the UK, and ASIC in Australia</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Investor protection</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Minimum deposit</td>
                      <td>$0</td>
                      <td>$0</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Bank transfer for deposit</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Bank transfer for withdrawal</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Credit/debit for deposit</td>
                      <td className="text-danger">No</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Credit/debit for withdrawal</td>
                      <td className="text-danger">No</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">PayPal for deposit</td>
                      <td className="text-danger">No</td>
                      <td className="text-primary">Yes</td>
                      <td className="text-primary">Yes</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold"></td>
                      <td className="text-danger">
                        <a href="#" className="text-primary d-flex align-items-center gap-2">
                          Read Review <i className="ph ph-arrow-right"></i>
                        </a>
                      </td>
                      <td className="text-primary">
                        <a href="#" className="text-primary d-flex align-items-center gap-2">
                          Read Review <i className="ph ph-arrow-right"></i>
                        </a>
                      </td>
                      <td className="text-primary">
                        <a href="#" className="text-primary d-flex align-items-center gap-2">
                          Read Review <i className="ph ph-arrow-right"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-semibold"></td>
                      <td className="text-danger">
                        <a href="#" className="btn btn-secondary d-inline-flex align-items-center gap-2">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </td>
                      <td className="text-primary">
                        <a href="#" className="btn btn-secondary d-inline-flex align-items-center gap-2">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </td>
                      <td className="text-primary">
                        <a href="#" className="btn btn-secondary d-inline-flex align-items-center gap-2">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompareBrokerPage;
