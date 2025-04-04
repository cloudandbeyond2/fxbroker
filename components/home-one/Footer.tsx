import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer pt-120">
      <div className="container">
        <div data-aos="fade-in" className="row g-3 pb-120">
          <div className="col-md-6 col-xl-3">
            <Link href="/" className="d-inline-flex mb-3 mb-lg-4">
              <Image src={logo} alt="" />
            </Link>
            <p className="m-text text-n30 mb-32">BrokR sounds like it could be related to brokerage services or financial exploration. If you&apos;re looking for ideas or information for BrokR</p>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="ph ph-facebook-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-twitter-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-pinterest-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-twitch-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph ph-linkedin-logo"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-3">
            <h4 className="text-white mb-3 mb-lg-4 fw-semibold">Quick Link</h4>

            <ul className="d-flex flex-column gap-2 text-n30">
              <li>
                <Link className="menu-link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="/compare-brokers">
                  Broker Comparision
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="/faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="menu-link" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-3">
            <h4 className="text-white mb-3 mb-lg-4 fw-semibold">Contact</h4>
            <div className="d-flex flex-column gap-3 text-n30">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box">
                  <i className="ph ph-phone-call"></i>
                </div>
                <p className="text-white m-text">(316) 555-0116</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box">
                  <i className="ph ph-envelope-open"></i>
                </div>
                <p className="text-white m-text">info@brokr.com</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box">
                  <i className="ph ph-map-pin"></i>
                </div>
                <p className="text-white m-text">123 Main Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <h4 className="text-white mb-3 mb-lg-4 fw-semibold">Newsletter</h4>
            <p className="text-n30 m-text mb-32">Subscribe our newsletter to get our latest update &amp; news</p>
            <form>
              <input type="text" placeholder="Email Address" />
              <button>
                <i className="ph ph-paper-plane-right fs-4"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="row g-3 g-md-0 copyright">
          <div className="col-md-6">
            <p className="m-text text-n30">
              Copyright © {new Date().getFullYear()}{" "}
              <Link href="/" className="text-secondary">
                BrokR
              </Link>
              . All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="text-n30 d-flex flex-wrap gap-3 justify-content-md-end">
              <li>
                <Link href="#">Help &amp; Support</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
