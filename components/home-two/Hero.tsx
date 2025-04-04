"use client";
import Link from "next/link";
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero = () => {
  return (
    <section className="hero-two">
      <Swiper loop autoplay={{ delay: 5000 }} speed={2500} slidesPerView={1} effect="fade" pagination={{ el: ".banner-two-pagination", clickable: true }} modules={[Autoplay, Pagination, EffectFade]} className="swiper home-two-hero-swiper">
        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url(/images/moder.jpg)" }}></SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url(/images/home-two-hero-2.png)" }}></SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url(/images/home-two-hero-3.png)" }}></SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{ backgroundImage: "url(/images/home-two-hero-4.png)" }}></SwiperSlide>
      </Swiper>
      <div className="banner-two-pagination"></div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div data-aos="zoom-in" className="col-md-10 col-lg-8 col-xl-6 hero-content">
              <h2 className="text-white fw-semibold mb-3 display-3 mb-lg-4 pt-120">Find Your Perfect Broker in Minutes</h2>
              <p className="text-white mb-40">BrokR helps you pick the best broker platform, in a simple, personalized process taking just a few clicks.</p>
              <form className="mb-4">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center w-100">
                  <div className="pe-2 pe-md-4 d-block br-right-white transparent">
                    <select name="category" id="category" className="select">
                      <option value="stock">Stock</option>
                      <option value="forex">Forex</option>
                      <option value="cfd">CFD</option>
                      <option value="crypto">Crypto</option>
                    </select>
                  </div>
                  <div className="d-block ps-2 ps-md-4">
                    <input type="text" placeholder="Search Brokers" />
                  </div>
                </div>
                <Link href="/best-brokers-one" className="btn btn-secondary fw-semibold">
                  Search
                </Link>
              </form>
              <div className="d-flex align-items-center gap-3">
                <span className="text-secondary f-center fs-4 flex-shrink-0">
                  <i className="ph ph-info"></i>
                </span>
                <p className="l-text fw-medium text-white">Join Over 1,036,044 Happy Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
