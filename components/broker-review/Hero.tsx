"use client";
import React, { useState } from "react";
import heroEl from "@/public/images/hero-el.png";
import user1 from "@/public/images/user/user-1.png";
import user2 from "@/public/images/user/user-2.png";
import breadCrumbImg from "@/public/images/breadcrumb-img.png";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";

const Hero = ({ title }: { title: string }) => {
  const [openedPopover, setOpenedPopover] = useState<null | number>(null);
  return (
    <section className="hero-breadcrumb-two overflow-visible">
      <Image className="hero-el one" src={heroEl} alt="" />
      <Image className="hero-el two" src={heroEl} alt="" />
      <Image className="hero-el three" src={heroEl} alt="" />
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-8">
            <div className="mb-60">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <Link href="/" className="l-text">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Broker Review
                  </li>
                </ol>
              </nav>
            </div>
            <h2 className="display-4 mb-40 fw-semibold text-white">{title} Review</h2>
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
                        During my professional career, I have traded many currency pairs on behalf of mutual funds, both as a speculative investment and as a hedging tool; racking up trades worth billions of dollars. I combine that experience with my active role in testing forex broker platforms to
                        steer users to the best brokers for their needs.
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
                        During my professional career, I have traded many currency pairs on behalf of mutual funds, both as a speculative investment and as a hedging tool; racking up trades worth billions of dollars. I combine that experience with my active role in testing forex broker platforms to
                        steer users to the best brokers for their needs.
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
          <div className="col-lg-5 col-xl-3 offset-xl-1">
            <Image src={breadCrumbImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
