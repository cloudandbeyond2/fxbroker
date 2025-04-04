"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import brokerCat1 from "@/public/images/broker-category/broker-category-1.png";
import brokerCat2 from "@/public/images/broker-category/broker-category-2.png";
import brokerCat3 from "@/public/images/broker-category/broker-category-3.png";
import brokerCat4 from "@/public/images/broker-category/broker-category-4.png";
import brokerCat5 from "@/public/images/broker-category/broker-category-5.png";
import brokerCat6 from "@/public/images/broker-category/broker-category-6.png";
import brokerCat7 from "@/public/images/broker-category/broker-category-7.png";
import brokerCat8 from "@/public/images/broker-category/broker-category-8.png";
import brokerCat9 from "@/public/images/broker-category/broker-category-9.png";
import brokerCat10 from "@/public/images/broker-category/broker-category-10.png";
import usa from "@/public/images/country/usa.png";
import australia from "@/public/images/country/australia.png";
import germany from "@/public/images/country/germany.png";
import uae from "@/public/images/country/uae.png";
import uk from "@/public/images/country/uk.png";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import user from "@/public/images/user/user-1.png";

const Header = () => {
  const [megaMenu, setMegaMenu] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [mobileSearch, setMobileSearch] = React.useState(false);

  useEffect(() => {
    if (window != undefined) {
      const dropdownItems = document.querySelectorAll(".dropdown-item");

      const handleItemClick = (event: any) => {
        const submenu = event.currentTarget.querySelector(".dropdown-list");
        if (submenu) {
          const allSubmenus = document.querySelectorAll(".dropdown-item .dropdown-list");
          allSubmenus.forEach((sub) => {
            if (sub !== submenu) {
              sub.classList.remove("active");
            }
          });
          submenu.classList.toggle("active");
        }
      };

      dropdownItems.forEach((item) => {
        item.addEventListener("click", handleItemClick);
      });

      // Cleanup function to remove event listeners
      return () => {
        dropdownItems.forEach((item) => {
          item.removeEventListener("click", handleItemClick);
        });
      };
    }
  }, []);
  return (
    <header className="header position-fixed top-0 w-100">
      <div className="header-container">
        <div className="d-flex gap-2 gap-lg-3 gap-xxxl-4 justify-content-between">
          <Link href="/" className="d-flex align-items-center">
            <Image src={logo} alt="site logo" />
          </Link>
          <OutsideClickHandler onOutsideClick={() => setMegaMenu(false)}>
            <div className="brokers-dropdown">
              <div className="d-flex gap-2 align-items-center brokers-dropdown-btn" onClick={() => setMegaMenu(!megaMenu)}>
                <i className="ph ph-squares-four"></i>
                <span className="font-medium d-none d-md-block text-white">Best Brokers</span>
                <i className="ph ph-caret-down d-none d-md-block"></i>
              </div>

              <div className={`best-brokers-mega-menu ${megaMenu ? "active" : ""}`}>
                <div className="container-fluid mx-auto">
                  <div className="row justify-content-between">
                    <div className="category col-lg-8 col-xl-9">
                      <h5 className="fw-semibold mb-4 text-capitalize">Best brokers by categories</h5>
                      <div className="row g-2 g-md-3 gx-xl-4">
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat1} alt="" />
                            <p className="m-text fw-medium">Best Stock Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat2} alt="" />
                            <p className="m-text fw-medium">Best Forex Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat3} alt="" />
                            <p className="m-text fw-medium">Best CFD Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat4} alt="" />
                            <p className="m-text fw-medium">Best Brokers for Beginners</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat5} alt="" />
                            <p className="m-text fw-medium">Best Stock Trading Apps</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat6} alt="" />
                            <p className="m-text fw-medium">Best discount brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat7} alt="" />
                            <p className="m-text fw-medium">Best Crypto Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat8} alt="" />
                            <p className="m-text fw-medium">Best Futures Brokers</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat9} alt="" />
                            <p className="m-text fw-medium">Best Brokers for bonds</p>
                          </Link>
                        </div>
                        <div onClick={() => setMegaMenu(false)} className="col-12 col-sm-6">
                          <Link href="/best-brokers-one" className="category-item">
                            <Image src={brokerCat10} alt="" />
                            <p className="m-text fw-medium">Best low spread forex brokers</p>
                          </Link>
                        </div>
                        <div className="col-12">
                          <a className="d-flex align-items-center fw-semibold text-primary gap-2" href="#">
                            BrokR Awards 2024 <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="country col-lg-4 col-xl-3">
                      <h5 className="fw-semibold mb-4 text-capitalize">country recommendation</h5>
                      <div className="country-list">
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={usa} alt="" />
                          <p>United States</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={uk} alt="" />
                          <p>United Kingdom</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={australia} alt="" />
                          <p>Autralia</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={uae} alt="" />
                          <p>United Arab Emirates</p>
                        </Link>
                        <Link onClick={() => setMegaMenu(false)} href="/best-brokers-two" className="country-item">
                          <Image src={germany} alt="" />
                          <p>Germany</p>
                        </Link>
                      </div>
                      <div className="mt-4">
                        <a className="d-flex align-items-center fw-semibold text-primary gap-2" href="#">
                          More Countries <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
          <div className="d-flex gap-2 gap-lg-3 gap-xxxl-4 align-items-center">
            <ul className={`menu ${mobileMenu ? "active" : ""}`}>
              <Link href="/" className="d-flex mb-4 d-xl-none px-2 pt-2">
                <Image src={logo} alt="site logo" />
              </Link>
              <button onClick={() => setMobileMenu(false)} className="close-btn bg-transparent border-0 position-absolute">
                <i className="ph ph-x"></i>
              </button>
              <li className="dropdown-item">
                <button>
                  Home <i className="ph ph-caret-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/">Home One</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/index-two">Home Two</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/index-three">Home Three</Link>
                  </li>
                </ul>
              </li>
              <li className="broker-review dropdown-item">
                <button className="broker-review-dropdown-btn">
                  Broker Reviews <i className="ph ph-caret-down"></i>
                </button>
                <div className={`broker-review-mega-menu dropdown-list`}>
                  <div className="row g-4">
                    <div className="col-12 col-xl-3 col-xxl-5col">
                      <h5 className="mb-3 mb-lg-4 fw-semibold">Best stock brokers</h5>
                      <ul>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Charles Schwab
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Fidelity Investments
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            TD Ameeritrade
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            E Trade
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Interactive Brokers
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-xl-3 col-xxl-5col">
                      <h5 className="mb-3 mb-lg-4 fw-semibold">Best forex brokers</h5>
                      <ul>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            IG Group
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Oanda
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Forex.com
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            CMC Markets
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Saxo Bank
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-xl-3 col-xxl-5col">
                      <h5 className="mb-3 mb-lg-4 fw-semibold">Best CFD brokers</h5>
                      <ul>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Plus500
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            IG Group
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            CMC Markets
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            eToro
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Saxo Bank
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-xl-3 col-xxl-5col">
                      <h5 className="mb-3 mb-lg-4 fw-semibold">Best crypto brokers</h5>
                      <ul>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Coinbase
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Binance
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Kraken
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Gemini
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Revolut
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-xl-3 col-xxl-5col">
                      <h5 className="mb-3 mb-lg-4 fw-semibold">Best futures brokers</h5>
                      <ul>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            TD Ameritrade
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            Interactive Brokers
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            TradeStation
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            E Trade
                          </Link>
                        </li>
                        <li onClick={() => setMobileMenu(false)}>
                          <Link className="menu-link blue" href="/broker-review/oanda">
                            NinjaTrader
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="d-flex align-items-center fw-semibold text-primary gap-2" href="#">
                    More Broker Reviews <i className="ph ph-arrow-right"></i>
                  </a>
                </div>
              </li>
              <li className="dropdown-item">
                <button>
                  Tools <i className="ph ph-caret-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/find-my-broker">Find My broker</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/compare-brokers">Compare brokers</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/brokerage-fee-calculator">Stock fee calculator</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/fx-fee-calculator">FX fee calculator</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/my-first-stock-trade">My First Stock Trade</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/asset-compass">Asset Compass</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/scam-broker-shield">Scam Broker Shield</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-item">
                <button>
                  Pages <i className="ph ph-caret-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/blog/top-10-brokers-for-beginner-investors-in-2024">Blog Details</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/best-brokers-one">Best Brokers 1</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/best-brokers-two">Best Brokers 2</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/faqs">Faqs</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/sign-in">Sign In</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/sign-up">Sign Up</Link>
                  </li>
                  <li onClick={() => setMobileMenu(false)}>
                    <Link href="/404">404 Error</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div onClick={() => setMobileMenu(false)} className="menu-overlay d-xl-none"></div>
            <form className="search">
              <input placeholder="Search" type="search" />
              <button className="search-btn">
                <i className="ph ph-magnifying-glass-bold"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex menu-dropdown-container">
          <OutsideClickHandler onOutsideClick={() => setMobileSearch(false)}>
            <div className="search-mobile d-xxl-none">
              <button onClick={() => setMobileSearch(!mobileSearch)} className="mobile-search-btn">
                <i className="ph ph-magnifying-glass"></i>
              </button>
              <form className={`mobile-search-form ${mobileSearch ? "active" : ""}`}>
                <input placeholder="Search" type="search" />
                <span>
                  <i className="ph ph-magnifying-glass-bold"></i>
                </span>
              </form>
            </div>
          </OutsideClickHandler>
          <div className="language-dropdown dropdown d-sm-flex d-none">
            <button data-bs-toggle="dropdown" className="globe-btn">
              <i className="ph ph-globe"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link href="#">English</Link>
              </li>
              <li>
                <Link href="#">Arabic</Link>
              </li>
              <li>
                <Link href="#">German</Link>
              </li>
              <li>
                <Link href="#">French</Link>
              </li>
            </ul>
          </div>
          <div className="position-relative compare-link d-sm-flex d-none">
            <Link href="/compare-brokers" className="link cursor-pointer">
              <i className="ph ph-arrows-left-right"></i>
            </Link>
            <span>1</span>
          </div>
          <div className="profile-dropdown dropdown">
            <button data-bs-toggle="dropdown" className="profile-dropdown-btn">
              <i className="ph ph-user-circle"></i>
            </button>
            <ul className="dropdown-menu shadow">
              <div className="user-info border-bottom pb-3 mb-3 d-flex align-items-start gap-2">
                <Image src={user} className="rounded-circle" width={48} height={48} alt="" />
                <div>
                  <h5 className="h5 mb-1">Peter Parker</h5>
                  <p className="s-text">Los Angeles, CA</p>
                </div>
              </div>
              <li>
                <Link className="d-flex align-items-center gap-2" href="#">
                  <i className="ph fs-5 ph-user-circle-fill"></i>
                  My Account
                </Link>
              </li>
              <li>
                <Link className="d-flex align-items-center gap-2" href="#">
                  <i className="ph fs-5 ph-heart"></i>
                  Favorites
                </Link>
              </li>
              <li>
                <Link className="d-flex align-items-center gap-2" href="#">
                  <i className="ph fs-5 ph-lifebuoy"></i>
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="d-flex align-items-center gap-2" href="#">
                  <i className="ph fs-5 ph-gear"></i>
                  Settings
                </Link>
              </li>
              <li>
                <Link className="d-flex align-items-center gap-2" href="#">
                  <i className="ph fs-5 ph-sign-out"></i>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/compare-brokers" className="btn cursor-pointer fw-semibold d-none d-lg-flex btn-secondary align-items-center gap-2">
            Match Me <i className="ph ph-arrow-right"></i>
          </Link>
          <button className="d-xl-none mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
            <i className="ph ph-list"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
