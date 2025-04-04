import Image from "next/image";
import React from "react";
import heroEl from "@/public/images/hero-el.png";
import alertImg from "@/public/images/home-one-alert.png";
import Link from "next/link";
const GetAlert = () => {
  return (
    <section className="personalized-alert pt-120 pb-120 position-relative">
      <Image className="alert-el one" src={heroEl} alt="" />
      <Image className="alert-el two" src={heroEl} alt="" />
      <Image className="alert-el three" src={heroEl} alt="" />
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div data-aos="fade-in" className="col-lg-6 col-xl-5">
            <Image src={alertImg} alt="" />
          </div>
          <div data-aos="fade-in" className="col-lg-6 col-xl-6 offset-xl-1">
            <h2 className="display-4 mb-3 mb-xl-4 text-n700 fw-semibold">Get Personalized Alerts</h2>
            <p className="l-text text-n500 mb-40">Receive broker notifications by setting up your personal dashboard</p>
            <div className="alert-list mb-40 d-flex flex-column">
              <div className="alert-item d-flex align-items-start gap-4">
                <span className="number f-center flex-shrink-0">
                  <h6 className="fw-semibold text-white">01</h6>
                </span>
                <div>
                  <h5 className="fw-semibold mb-2 text-n700">Price Alerts with News Alerts</h5>
                  <p className="s-text text-n500">Allow users to set alerts for specific price levels of assets they are interested in trading. Users can receive notifications...</p>
                </div>
              </div>
              <div className="alert-item d-flex align-items-start gap-4">
                <span className="number f-center flex-shrink-0">
                  <h6 className="fw-semibold text-white">02</h6>
                </span>
                <div>
                  <h5 className="fw-semibold mb-2 text-n700">Technical Analysis Alerts</h5>
                  <p className="s-text text-n500">Provide alerts based on technical analysis indicators, such as moving averages, RSI, MACD, etc. Users can receive notifications...</p>
                </div>
              </div>
              <div className="alert-item d-flex align-items-start gap-4">
                <span className="number f-center flex-shrink-0">
                  <h6 className="fw-semibold text-white">03</h6>
                </span>
                <div>
                  <h5 className="fw-semibold mb-2 text-n700">Social Media Mentions Alerts</h5>
                  <p className="s-text text-n500">Allow users to track social media mentions of specific assets or companies. Users can receive alerts when there is a significant increase in social media activity.</p>
                </div>
              </div>
            </div>
            <Link href="/sign-up" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              Sign Up Now <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAlert;
