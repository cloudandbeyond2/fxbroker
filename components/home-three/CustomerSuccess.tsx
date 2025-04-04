"use client";
import React from "react";
import customerImg from "@/public/images/home-three-customer.png";
import user1 from "@/public/images/user/user-1.png";
import user2 from "@/public/images/user/user-2.png";
import user3 from "@/public/images/user/user-3.png";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CustomerSuccess = () => {
  return (
    <section className="customer-success mx-2">
      <div className="inner pt-120 pb-120">
        <div className="container">
          <div data-aos="fade-up" className="section-title text-center">
            <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Customer Success Stories</h2>
            <p className="text-white mb-60 l-text">At BrokR, our users satisfaction is our top priority. Here are some testimonials from our valued clients who have found success.</p>
          </div>
          <div className="row g-4 align-items-center">
            <div data-aos="fade-in-down" className="col-lg-5 col-xl-4">
              <Image src={customerImg} className="img-fluid" alt="" />
            </div>
            <div data-aos="fade-in-up" className="col-lg-7 offset-xl-1">
              <Swiper loop autoplay={{ delay: 3500 }} slidesPerView={1} navigation={{ nextEl: ".customer-next", prevEl: ".customer-prev" }} modules={[Autoplay, Navigation]} className="swiper customer-slider">
                <SwiperSlide className="swiper-slide">
                  <div className="customer-box">
                    <div className="content">
                      <div className="d-flex gap-2 fs-4 text-secondary mb-3 mb-lg-4">
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-half-fill"></i>
                      </div>
                      <p className="desc fw-medium mb-3 mb-lg-4 text-white">“Finding the right broker was always a challenge until I discovered BrokR. Their comprehensive comparison tool and unbiased reviews helped me make an informed decision quickly.”</p>
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                        <Image src={user1} width="60" height="60" alt="" />
                        <div>
                          <h5 className="text-white fw-semibold mb-2">Courtney Henry</h5>
                          <p className="text-white">Project Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-box">
                    <div className="content">
                      <div className="d-flex gap-2 fs-4 text-secondary mb-3 mb-lg-4">
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-half-fill"></i>
                      </div>
                      <p className="desc fw-medium mb-3 mb-lg-4 text-white">“Finding the right broker was always a challenge until I discovered BrokR. Their comprehensive comparison tool and unbiased reviews helped me make an informed decision quickly.”</p>
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                        <Image src={user2} width="60" height="60" alt="" />
                        <div>
                          <h5 className="text-white fw-semibold mb-2">Courtney Henry</h5>
                          <p className="text-white">Project Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="customer-box">
                    <div className="content">
                      <div className="d-flex gap-2 fs-4 text-secondary mb-3 mb-lg-4">
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-fill"></i>
                        <i className="ph ph-star-half-fill"></i>
                      </div>
                      <p className="desc fw-medium mb-3 mb-lg-4 text-white">“Finding the right broker was always a challenge until I discovered BrokR. Their comprehensive comparison tool and unbiased reviews helped me make an informed decision quickly.”</p>
                      <div className="d-flex align-items-center gap-2 gap-sm-3">
                        <Image src={user3} width="60" height="60" alt="" />
                        <div>
                          <h5 className="text-white fw-semibold mb-2">Courtney Henry</h5>
                          <p className="text-white">Project Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="d-flex gap-2 gap-sm-3 customer-nav">
                  <button className="customer-prev f-center">
                    <i className="ph ph-arrow-left"></i>
                  </button>
                  <button className="customer-next f-center">
                    <i className="ph ph-arrow-right"></i>
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccess;
