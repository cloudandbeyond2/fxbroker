import Image from "next/image";
import React from "react";
import check from "@/public/images/check.png";
import googleplay from "@/public/images/googleplay.png";
import appstore from "@/public/images/appstore.png";
import appsImg from "@/public/images/home-one-apps.png";
const DownloadApps = () => {
  return (
    <section className="download-apps pt-120 pb-120">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div data-aos="fade-right" className="col-lg-6 col-xl-5">
            <Image src={appsImg} alt="" />
          </div>
          <div data-aos="zoom-in" className="col-lg-6 col-xl-6 offset-xl-1">
            <h2 className="display-4 fw-semibold mb-3 mb-xl-4">Get Download Our Apps</h2>
            <p className="l-text mb-3 mb-lg-4">Take advantage of our convenient mobile apps to access our services anytime, anywhere. Download our apps today.</p>
            <div className="mb-40 d-flex align-items-center">
              <div className="pe-3 pe-xl-4 br-dashed">
                <p className="l-text fw-medium mb-2">Active Users</p>
                <h2 className="fw-semibold">
                  20<span className="text-secondary">M</span>
                </h2>
              </div>
              <ul className="d-flex flex-column gap-2 ps-3 ps-xl-4">
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text fw-medium">User-Friendly Interface</p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text fw-medium">Secure and Reliable</p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text fw-medium">Sync Across Devices</p>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-4">
              <a href="#">
                <Image src={googleplay} alt="" />
              </a>
              <a href="#">
                <Image src={appstore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApps;
