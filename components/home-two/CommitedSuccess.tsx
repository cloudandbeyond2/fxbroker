import Image from "next/image";
import React from "react";
import success1 from "@/public/images/home-two-success-1.png";
import success2 from "@/public/images/home-two-success-2.png";
import success3 from "@/public/images/home-two-success-3.png";
import check from "@/public/images/check-yellow.png";

const CommitedSuccess = () => {
  return (
    <section className="pt-120 pb-120 committed-success">
      <div className="container">
        <div className="row gy-4 align-items-end">
          <div data-aos="fade-up" className="col-lg-5">
            <Image src={success1} className="img-fluid" alt="" />
          </div>
          <div data-aos="fade-up" className="col-lg-7 col-xl-6 offset-xl-1">
            <h2 className="display-4 text-white fw-semibold mb-3 mb-lg-4">Committed to Your Investment Success</h2>
            <p className="text-white mb-3 mb-lg-4">At BrokR, we strive to be your go-to platform for all things related to brokerage comparison and investment decision-making. We provide detailed and unbiased comparisons of a wide range of brokers.</p>
            <div className="d-flex flex-column gap-4 flex-md-row">
              <div className="d-flex flex-column gap-4">
                <ul className="d-flex flex-column gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <Image src={check} alt="" className="img-fluid" />
                    <p className="l-text text-white fw-medium">Brokers Comparisons</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <Image src={check} alt="" />
                    <p className="l-text text-white fw-medium">User-Friendly Platform</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <Image src={check} alt="" />
                    <p className="l-text text-white fw-medium">Community Support</p>
                  </li>
                </ul>
                <Image src={success2} alt="" className="img-fluid" />
              </div>
              <Image src={success3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitedSuccess;
