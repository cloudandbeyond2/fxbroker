import React from "react";
import commit1 from "@/public/images/home-three-commitment-1.png";
import commit2 from "@/public/images/home-three-commitment-2.png";
import user1 from "@/public/images/user/user-1.png";
import user2 from "@/public/images/user/user-2.png";
import user3 from "@/public/images/user/user-3.png";
import user4 from "@/public/images/user/user-4.png";
import user5 from "@/public/images/user/user-5.png";
import check from "@/public/images/check-yellow.png";
import Image from "next/image";
const SuccessCommit = () => {
  return (
    <section className="success-commitment mx-2">
      <div className="inner pt-120 pb-120">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div data-aos="fade-in" className="col-lg-6">
              <div className="row g-4 left-side">
                <div className="col-sm-6 f-center flex-column gap-5">
                  <Image src={commit1} alt="" />
                  <div className="brokers d-flex justify-content-between gap-4 align-items-center">
                    <div className="users">
                      <Image src={user1} alt="" />
                      <Image src={user2} alt="" />
                      <Image src={user3} alt="" />
                      <Image src={user4} alt="" />
                      <Image src={user5} alt="" />
                      <div className="plus">+</div>
                    </div>
                    <div className="ps-4">
                      <h4 className="text-white fw-semibold">
                        20<span className="text-secondary">k</span>
                      </h4>
                      <p className="text-white m-text">Brokers</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 d-flex flex-column gap-4">
                  <div className="row gx-4 text-center">
                    <div className="col-6">
                      <div className="bg-secondary p-3 d-flex flex-column align-items-center gap-2">
                        <h2 className="fw-semibold">10+</h2>
                        <p className="m-text fw-medium">Years of experience</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-success p-3 d-flex flex-column align-items-center gap-2">
                        <h2 className="fw-semibold text-white">1.2k</h2>
                        <p className="m-text fw-medium text-white">Happy Customers</p>
                      </div>
                    </div>
                  </div>
                  <Image src={commit2} alt="" />
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="col-lg-6">
              <h2 className="display-4 text-white fw-semibold mb-3 mb-lg-4">Our Commitment to Your Success</h2>
              <p className="l-text text-white mb-40">Welcome to BrokR! We are dedicated to revolutionizing the way you find and compare brokers. Our mission is to provide you.</p>
              <div className="mb-40">
                <ul className="nav nav-tabs mb-3 d-flex gap-3" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link secondary active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link secondary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                      Our Vission
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade text-white show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                    At BrokR, our mision is to become the leading resource for investors seeking trustworthy and detailed broker comparisons.
                  </div>
                  <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                    At BrokR, our vision is to become the leading resource for investors seeking trustworthy and detailed broker comparisons. .
                  </div>
                </div>
              </div>
              <ul className="d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text text-white fw-medium">Comprehensive Comparisons</p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text text-white fw-medium">Unbiased Reviews</p>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="" />
                  <p className="l-text text-white fw-medium">Community Support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCommit;
