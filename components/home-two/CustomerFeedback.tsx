"use client";
import Image from "next/image";
import React from "react";
import feedBackImg from "@/public/images/home-two-feedback.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CustomerFeedback = () => {
  return (
    <section className="customer-feedback pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div data-aos="zoom-in" className="col-md-5 col-lg-6">
            <Image src={feedBackImg} alt="" />
          </div>
          <div data-aos="zoom-in" className="col-md-7 col-lg-6 col-xl-5 offset-xl-1">
            <h2 className="display-4 fw-semibold mb-40" style={{left: "291px"}}> Customer Feedback That Makes Us Proud</h2>
            <Swiper loop autoplay={{ delay: 3500 }} slidesPerView={1} navigation={{ nextEl: ".feedback-next", prevEl: ".feedback-prev" }} modules={[Autoplay, Navigation]} className="swiper feedback-slider mb-40">
              <SwiperSlide className="swiper-slide">
                <div className="feedback-card">
                  <div className="content">
                    <div className="d-flex gap-2 fs-4 text-secondary mb-3 mb-lg-4">
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-half-fill"></i>
                    </div>
                    <p className="l-text fw-medium mb-3 mb-lg-4">“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”</p>
                    <h5 className="fw-semibold mb-2">Courtney Henry</h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="feedback-card">
                  <div className="content">
                    <div className="d-flex gap-2 fs-4 text-secondary mb-3 mb-lg-4">
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-half-fill"></i>
                    </div>
                    <p className="l-text fw-medium mb-3 mb-lg-4">“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”</p>
                    <h5 className="fw-semibold mb-2">Courtney Henry</h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="feedback-card">
                  <div className="content">
                    <div className="d-flex gap-2 fs-4 text-secondary mb-3 mb-lg-4">
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-half-fill"></i>
                    </div>
                    <p className="l-text fw-medium mb-3 mb-lg-4">“I was skeptical about using a brokerage comparison service at first. The comparison tools are comprehensive and easy to use.”</p>
                    <h5 className="fw-semibold mb-2">Courtney Henry</h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="d-flex gap-4">
              <button className="feedback-prev fs-5 f-center rounded-circle border border-secondary">
                <i className="ph ph-arrow-left"></i>
              </button>
              <button className="feedback-next fs-5 f-center rounded-circle border border-secondary">
                <i className="ph ph-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
