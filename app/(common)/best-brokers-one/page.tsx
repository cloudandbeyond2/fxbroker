"use client";
import Image from "next/image";
import React from "react";
import { brokers } from "@/components/home-two/HighestRatedBroker";
import Link from "next/link";
import { formatString } from "../broker-review/[title]/page";
const BestBrokerOne = () => {
  const [filter, setFilter] = React.useState(false);
  return (
    <main>
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Style 01</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Best Brokers</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Style 01
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- best brokers --> */}
      <section className="pt-120 pb-120">
        <div className="container">
          <button onClick={() => setFilter(!filter)} className="filter-btn btn-primary btn d-flex align-items-center gap-2 mb-3 d-lg-none">
            <i className="ph ph-faders-horizontal"></i>
            filter
          </button>
          <div className="row g-4">
            <div className={`col-lg-4 filter-column ${filter ? "active" : ""}`}>
              <div className="filter">
                <div className="inner">
                  <h4 className="fw-semibold bb-dashed">Filter</h4>
                  <form className="bb-dashed search">
                    <input type="text" placeholder="Search" />
                    <button className="f-center">
                      <i className="ph-magnifying-glass"></i>
                    </button>
                  </form>
                  <p className="xl-text fw-medium mb-3 mb-lg-4">Types of Categories</p>
                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="begginer" defaultChecked />
                        <label htmlFor="begginer" className="m-text">
                          Best brokers for beginners
                        </label>
                      </div>
                      <p className="m-text fw-medium">3215</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="stock" />
                        <label htmlFor="stock" className="m-text">
                          Best forex brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">152</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="forex" defaultChecked />
                        <label htmlFor="forex" className="m-text">
                          Best stock brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">152</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="cfd" />
                        <label htmlFor="cfd" className="m-text">
                          Best CFD brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">152</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="future" defaultChecked />
                        <label htmlFor="future" className="m-text">
                          Best futures brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">152</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="low-spread" defaultChecked />
                        <label htmlFor="low-spread" className="m-text">
                          Best low spread forex brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">152</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="crypto" />
                        <label htmlFor="crypto" className="m-text">
                          Best crypto brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">52</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="trading" />
                        <label htmlFor="trading" className="m-text">
                          Best stock trading apps
                        </label>
                      </div>
                      <p className="m-text fw-medium">252</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="discount" />
                        <label htmlFor="discount" className="m-text">
                          Best discount brokers
                        </label>
                      </div>
                      <p className="m-text fw-medium">342</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="bont" />
                        <label htmlFor="bont" className="m-text">
                          Best brokers for bonds
                        </label>
                      </div>
                      <p className="m-text fw-medium">962</p>
                    </div>
                  </div>
                  <a href="#" className="h6 bb-dashed text-primary fw-semibold d-flex gap-1 align-items-center">
                    See All <i className="ph ph-arrow-right"></i>
                  </a>
                  <h4 className="fw-semibold bb-dashed mb-4">Star Category</h4>
                  <div className="d-flex flex-column bb-dashed gap-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="5star" defaultChecked />
                        <label htmlFor="5star" className="m-text d-flex align-items-center gap-1">
                          {" "}
                          <i className="ph ph-star-fill text-secondary"></i> 5 Star
                        </label>
                      </div>
                      <p className="m-text fw-medium">3215</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="4star" />
                        <label htmlFor="4star" className="m-text d-flex align-items-center gap-1">
                          {" "}
                          <i className="ph ph-star-fill text-secondary"></i> 4 Star
                        </label>
                      </div>
                      <p className="m-text fw-medium">3215</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="3star" />
                        <label htmlFor="3star" className="m-text d-flex align-items-center gap-1">
                          {" "}
                          <i className="ph ph-star-fill text-secondary"></i> 3 Star
                        </label>
                      </div>
                      <p className="m-text fw-medium">3215</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="2star" />
                        <label htmlFor="2star" className="m-text d-flex align-items-center gap-1">
                          {" "}
                          <i className="ph ph-star-fill text-secondary"></i> 2 Star
                        </label>
                      </div>
                      <p className="m-text fw-medium">3215</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="1star" />
                        <label htmlFor="1star" className="m-text d-flex align-items-center gap-1">
                          {" "}
                          <i className="ph ph-star-fill text-secondary"></i> 1 Star
                        </label>
                      </div>
                      <p className="m-text fw-medium">3215</p>
                    </div>
                  </div>
                  <h4 className="fw-semibold mb-4">Popular Tags</h4>
                  <div className="d-flex gap-3 flex-wrap mb-4">
                    <a href="#" className="tag">
                      Stock Brokers
                    </a>
                    <a href="#" className="tag">
                      Forex Brokers
                    </a>
                    <a href="#" className="tag">
                      CFD Brokers
                    </a>
                    <a href="#" className="tag">
                      Discount Brokers
                    </a>
                    <a href="#" className="tag">
                      Future Brokers
                    </a>
                    <a href="#" className="tag">
                      Crypto Brokers
                    </a>
                  </div>
                  <a href="#" className="h6 bb-dashed text-primary fw-semibold d-flex gap-1 align-items-center">
                    More Tag <i className="ph ph-arrow-right"></i>
                  </a>
                  <button className="btn btn-secondary w-100 f-center gap-2">
                    <i className="ph ph-arrow-clockwise-bold"></i> Reset Filters
                  </button>
                </div>
              </div>
            </div>
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
        </div>
      </section>
    </main>
  );
};

export default BestBrokerOne;
