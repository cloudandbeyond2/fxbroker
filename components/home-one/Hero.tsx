"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import heroEl from "@/public/images/hero-el.png";
import heroImg from "@/public/images/home-one-hero.png";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="hero overflow-x-hidden">
      <Image className="hero-el one" src={heroEl} alt="" />
      <Image className="hero-el two" src={heroEl} alt="" />
      <Image className="hero-el three" src={heroEl} alt="" />
      <div className="container">
        <div className="row g-4 align-items-center">
          <div data-aos="fade-in" className="col-lg-6">
            <h1 className="display-1 mb-3 mb-xl-4 text-white fw-bold">
              Get Matched with <span className="text-secondary">Trusted</span> Online Brokers
            </h1>
            <p className="text-white xl-text mb-4 mb-xl-5">Discover the perfect brokerage platform to match your trading style and financial goals.</p>
            <div className="d-flex flex-wrap align-items-center gap-4">
              <Link href="/compare-brokers" className="btn btn-secondary fw-semibold d-flex align-items-center gap-2">
                Match Me <i className="ph ph-arrow-right"></i>
              </Link>
              <div onClick={() => setOpen(true)} className="text-white d-flex align-items-center gap-3 hero-video">
                <button className="play-btn">
                  <i className="ph ph-play-fill"></i>
                </button>
                How It Works
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-lg-6">
            <Image src={heroImg} priority className="hero-img" alt="" />
          </div>
        </div>
      </div>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="fDgzr5xSYNE" onClose={() => setOpen(false)} />
    </section>
  );
};

export default Hero;
