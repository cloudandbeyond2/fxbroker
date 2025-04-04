import Image from "next/image";
import React from "react";
import appImg from "@/public/images/home-two-app.png";
import check from "@/public/images/check.png";
import googlePlay from "@/public/images/googleplay-white.png";
import appStore from "@/public/images/appstore-white.png";

const DownloadApp = () => {
  return (
    <section className="download-apps home-two-app mx-2">
      <div className="inner py-4">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div data-aos="zoom-in" className="col-lg-6 col-xl-5">
              <Image src={appImg} alt="" />
            </div>
            <div data-aos="zoom-in" className="col-lg-6 col-xl-6 offset-xl-1">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-xl-4">Get Download Our Apps</h2>
              <p className="l-text mb-3 mb-lg-4 text-white">Take advantage of our convenient mobile apps to access our services anytime, anywhere. Download our apps today.</p>
              <div className="mb-40 d-flex align-items-center">
                <div className="pe-3 pe-xl-4 br-dashed text-white">
                  <p className="l-text text-white fw-medium mb-2">Active Users</p>
                  <h2 className="fw-semibold text-white">
                    20<span className="text-secondary">M</span>
                  </h2>
                </div>
                <ul className="d-flex flex-column text-white gap-2 ps-3 ps-xl-4">
                  <li className="d-flex align-items-center gap-2">
                    <Image src={check} alt="" />
                    <p className="l-text text-white fw-medium">User-Friendly Interface</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <Image src={check} alt="" />
                    <p className="l-text text-white fw-medium">Secure and Reliable</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <Image src={check} alt="" />
                    <p className="l-text text-white fw-medium">Sync Across Devices</p>
                  </li>
                </ul>
              </div>
              <div className="d-flex gap-4">
                <a href="#">
                  <Image src={googlePlay} alt="" />
                </a>
                <a href="#">
                  <Image src={appStore} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
