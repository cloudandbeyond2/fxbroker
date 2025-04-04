"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroEl from "@/public/images/hero-el.png";
import user1 from "@/public/images/user/user-1.png";
import user2 from "@/public/images/user/user-2.png";
import breadCrumbImg from "@/public/images/breadcrumb-img.png";
import OutsideClickHandler from "react-outside-click-handler";
import { brokers } from "@/components/home-two/HighestRatedBroker";
import Link from "next/link";
import { formatString } from "../broker-review/[title]/page";

const BestBrokerTwo = () => {
  const [openedPopover, setOpenedPopover] = useState<null | number>(null);
  return (
    <main>
      {/* <!-- hero  --> */}
      <section className="hero-breadcrumb-two overflow-visible">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <div className="mb-60">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb text-white">
                    <li className="breadcrumb-item">
                      <a href="#" className="l-text">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item l-text">Best Brokers</li>
                    <li className="breadcrumb-item active l-text" aria-current="page">
                      Style 02
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="display-4 mb-40 fw-semibold text-white">Best brokers for beginners</h2>
              <div className="d-flex align-items-sm-center flex-column flex-sm-row  gap-3 flex-wrap">
                <div className="position-relative">
                  <div onClick={() => setOpenedPopover((p) => (p == 1 ? null : 1))} className="d-flex align-items-center gap-4" role="button">
                    <Image src={user1} width="56" height="56" className="rounded-circle" alt="" />
                    <div>
                      <p className="text-white m-text mb-1">Written by</p>
                      <h5 className="text-white fw-semibold d-flex align-items-center gap-1">
                        <span className="text-white">Adam Nasli </span> <i className="ph ph-caret-down"></i>
                      </h5>
                    </div>
                  </div>
                  <OutsideClickHandler onOutsideClick={() => setOpenedPopover(null)}>
                    {openedPopover === 1 && (
                      <div className="p-4 rounded-4 shadow-lg bg-white position-absolute top-100 custom-popover">
                        <div className="d-flex gap-4 align-items-center mb-4">
                          <Image src={user1} alt="" />
                          <div>
                            <p className="m-text mb-2">Written By</p>
                            <h3 className="fw-semibold mb-3">Adam Nasli, CFA</h3>
                            <p>Forex • Derivatives • Market Analysis</p>
                          </div>
                        </div>
                        <p className="m-text mb-4">
                          During my professional career, I have traded many currency pairs on behalf of mutual funds, both as a speculative investment and as a hedging tool; racking up trades worth billions of dollars. I combine that experience with my active role in testing forex broker platforms
                          to steer users to the best brokers for their needs.
                        </p>
                        <p>
                          Learn more about{" "}
                          <a href="#" className="text-primary">
                            Our Methodology
                          </a>
                        </p>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
                <div className="vr d-none d-sm-block opacity-25 bg-white"></div>

                <div className="position-relative">
                  <div onClick={() => setOpenedPopover((p) => (p == 2 ? null : 2))} data-bs-trigger="hover focus" role="button" className="d-flex align-items-center gap-4">
                    <Image src={user2} width="56" height="56" className="rounded-circle" alt="" />
                    <div>
                      <p className="m-text text-white mb-1">Fact Checked by</p>
                      <h5 className="fw-semibold d-flex text-white align-items-center gap-1">
                        <span className="text-white">Edith Balazs </span> <i className="ph ph-caret-down"></i>
                      </h5>
                    </div>
                  </div>
                  <OutsideClickHandler onOutsideClick={() => setOpenedPopover(null)}>
                    {openedPopover === 2 && (
                      <div className="p-4 rounded-4 shadow-lg bg-white custom-popover position-absolute top-100">
                        <div className="d-flex gap-4 align-items-center mb-4">
                          <Image src={user2} alt="" />
                          <div>
                            <p className="m-text mb-2">Fact Checked By</p>
                            <h3 className="fw-semibold mb-3">Edith Balazis, CFA</h3>
                            <p>Forex • Derivatives • Market Analysis</p>
                          </div>
                        </div>
                        <p className="m-text mb-4">
                          During my professional career, I have traded many currency pairs on behalf of mutual funds, both as a speculative investment and as a hedging tool; racking up trades worth billions of dollars. I combine that experience with my active role in testing forex broker platforms
                          to steer users to the best brokers for their needs.
                        </p>
                        <p>
                          Learn more about{" "}
                          <a href="#" className="text-primary">
                            Our Methodology
                          </a>
                        </p>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
                <div className="vr d-none d-sm-block opacity-25 bg-white"></div>
                <div className="position-relative">
                  <div onClick={() => setOpenedPopover((p) => (p == 3 ? null : 3))} className="d-flex align-items-center gap-4" role="button">
                    <div className="text-white">
                      <p className="m-text mb-1 text-white">Updated</p>
                      <h5 className="fw-semibold text-white d-flex align-items-center gap-1">
                        <span className="text-white">2w ago </span> <i className="ph ph-caret-down"></i>
                      </h5>
                    </div>
                  </div>
                  <OutsideClickHandler onOutsideClick={() => setOpenedPopover(null)}>
                    {openedPopover === 3 && (
                      <div className="p-4 rounded-4 shadow-lg right-0 bg-white position-absolute top-100 custom-popover third">
                        <h4 className="fw-semibold mb-4">Always up to date</h4>
                        <p className="m-text bb-n40">Our experts continuously verify broker data to provide the most up-to-date information.</p>
                        <p>
                          Last updated on <span className="fw-medium">May 13, 2024</span>
                        </p>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-3 offset-xl-2">
              <Image src={breadCrumbImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- best brokers --> */}
      <section className="best-broker-two pt-120 pb-120">
        <div className="container">
          <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-40">
            <p className="m-text text-n500">Showing 1-8 of 100 results</p>
            <div className="d-flex gap-2 align-items-center">
              <span>Sort By:</span>
              <select name="sortby" id="sortby" className="select">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          <div className="row g-4 mb-40">
            {brokers.map(({ image, rating, title, aosDelay }, index) => (
              <div key={title} data-aos="fade-in" data-aos-delay={aosDelay} className="col-lg-6">
                <Link href={`/broker-review/${formatString(title)}`} className="broker-card style-two d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2 gap-sm-3 align-items-center">
                    <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                    <div className="img f-center rounded-circle">
                      <Image className="img-fluid rounded-circle" src={image} alt="" />
                    </div>
                    <div>
                      <h4 className="fw-semibold mb-2">{title}</h4>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Beginner score:
                        <span className="d-flex align-items-center gap-2">
                          <span className="f-center fs-5 text-secondary">
                            <i className="ph ph-star-fill"></i>
                          </span>{" "}
                          <span className="fw-medium">{rating}</span>/5
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="arrow-btn text-secondary d-none d-sm-flex fs-4 f-center rounded-circle border border-secondary">
                    <i className="ph ph-arrow-up-right"></i>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* <!-- pagination --> */}
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
      </section>
    </main>
  );
};

export default BestBrokerTwo;
