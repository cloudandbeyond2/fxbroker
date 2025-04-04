import Image from "next/image";
import React from "react";
import heroEl from "@/public/images/hero-el.png";
import breadCrumbImg from "@/public/images/breadcrumb-img.png";
import expectOne from "@/public/images/expect-one.png";
import expectTwo from "@/public/images/expect-two.png";
import check from "@/public/images/check.png";
import feedbackImg from "@/public/images/home-two-feedback.png";
import CustomerFeedback from "@/components/home-two/CustomerFeedback";
import Link from "next/link";
const FirstStockTrade = () => {
  return (
    <main>
      {/* <!-- hero  --> */}
      <section className="hero-breadcrumb-two pb-60">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row gy-4">
            <div data-aos="fade-in" className="col-lg-7">
              <div className="pt-80">
                <h2 className="display-4 mb-4 fw-semibold text-white">My First Stock Trade Quest</h2>
                <p className="m-text text-white mb-32">A step-by-step guide that helps beginners to successfully buy their first stocks within a few days.</p>
                <div className="d-flex gap-4 flex-wrap start-guide-hero">
                  <div className="d-flex gap-3 gap-sm-4 align-items-center flex-grow-1">
                    <span className="fs-4 f-center text-secondary">
                      <i className="ph ph-lightbulb-filament"></i>
                    </span>
                    <p className="text-white">Follow this guide to buy your first stocks!</p>
                  </div>
                  <Link href="/my-first-stock-trade-guide" className="btn btn-secondary">
                    Start Guide{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="col-lg-5 col-xl-3 offset-xl-2">
              <Image src={breadCrumbImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- what can you expect --> */}
      <section className="what-expect pt-120 pb-120">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div data-aos="zoom-in-up" className="col-lg-6 col-xl-5 left-side">
              <Image src={expectOne} alt="" />
              <Image src={expectTwo} className="expect-two" alt="" />
            </div>
            <div data-aos="zoom-in-down" className="col-lg-6 offset-xl-1">
              <h2 className="display-4 fw-semibold mb-3 mb-lg-4">What can you expect?</h2>

              <div className="mb-40">
                <ul className="nav nav-tabs mb-3 d-flex gap-3" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                      Guide Info
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                      Create Info
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                    Starting your investment journey is easier and faster than beginner investors usually think. To get started, we created this step-by-step guide.
                  </div>
                  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                    Opening an account and purchasing my first stocks was surprisingly easy compared with the difficulties and hurdles I expected initially.
                  </div>
                </div>
              </div>

              <ul className="d-flex flex-column gap-3">
                <li className="d-flex align-items-start gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text">A step-by-step guide on how to complete your first stock purchase</p>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text">Each step is explained using screenshots and instructions on how to open an account, deposit money and make your first purchase</p>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text">You can track your progress toward completing the process</p>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text">We&apos;ll provide help if you are stuck or need more information</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- pick broker --> */}
      <section>
        <div data-aos="zoom-in" className="container">
          <div className="d-flex flex-wrap gap-4 align-items-center start-guide">
            <div className="flex-grow-1">
              <h4 className="mb-3 fw-semibold">Pick Your First Broker</h4>
              <p className="m-text text-n500">Let&apos;s start by picking a broker where you&apos;ll carry out your first trade.</p>
            </div>
            <Link href="/my-first-stock-trade-guide" className="btn btn-secondary">
              Go To Guide
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- customer feedback --> */}
      <CustomerFeedback />
    </main>
  );
};

export default FirstStockTrade;
