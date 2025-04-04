"use client";
import Image from "next/image";
import React from "react";
import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import client3 from "@/public/images/client-3.png";
import google from "@/public/images/clients/google.png";
import discord from "@/public/images/clients/discord.png";
import dropbox from "@/public/images/clients/dropbox.png";
import feedly from "@/public/images/clients/feedly.png";
import loom from "@/public/images/clients/loom.png";
import shopify from "@/public/images/clients/shopify.png";
import heroEl from "@/public/images/hero-el.png";
const slides = [google, discord, dropbox, feedly, loom, shopify, google, discord];

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const clientSlider = [client1, client2, client3];
const Clients = () => {
  return (
    <section className="clients pt-120 pb-120 position-relative">
      <div className="bg-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Image className="el" src={heroEl} alt="" />
      <div className="container content">
        <div className="row gy-4">
          <div data-aos="fade-in" className="col-lg-5 col-xl-6 col-xxl-5">
            <h2 className="display-4 text-white fw-semibold mb-3 mb-xl-4">
              Hear What Our <span className="text-secondary">Clients</span> Have to Say
            </h2>
            <p className="l-text text-white mb-40">Welcome to our testimonials section, where you can discover what our satisfied clients have to say...</p>
            <div className="d-flex align-items-center stat">
              <h2 className="text-white display-4 fw-semibold pe-4">
                2.7<span className="text-secondary">K</span>
              </h2>
              <p className="s-text text-white ps-4">Here are some testimonials from our valued clients</p>
            </div>
          </div>
          <div data-aos="fade-in" className="col-lg-7 col-xl-6 offset-xxl-1">
            <div className="position-relative">
              <Swiper
                slidesPerView={1}
                autoplay
                loop
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".client-prev",
                  nextEl: ".client-next",
                }}
                className="swiper clients-slider position-relative"
              >
                {clientSlider.map((client, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="client-slider-box d-flex flex-column flex-sm-row align-items-sm-center">
                      <Image src={client} className="img-fluid w-100" alt="" />
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
                ))}
              </Swiper>
              <div className="client-nav-buttons">
                <button className="client-prev f-center">
                  <i className="ph ph-arrow-left"></i>
                </button>
                <button className="client-next f-center">
                  <i className="ph ph-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-120">
          <Swiper
            modules={[Autoplay]}
            autoplay
            loop
            breakpoints={{
              1400: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
            }}
            data-aos="zoom-in"
            className="swiper logo-slider"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i} className="swiper-slide d-flex justify-content-center align-items-center">
                <Image src={slide} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
