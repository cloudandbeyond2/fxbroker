"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroEl from "@/public/images/hero-el.png";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";
import invest5 from "@/public/images/investment/investment-5.png";
import invest6 from "@/public/images/investment/investment-6.png";
import invest7 from "@/public/images/investment/investment-7.png";
import invest8 from "@/public/images/investment/investment-8.png";
import user1 from "@/public/images/user/user-1.png";
import user2 from "@/public/images/user/user-2.png";
import breadCrumbImg from "@/public/images/breadcrumb-img.png";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";

interface Broker {
  image: string;
  rating: number;
  title: string;
  aosDelay: number;
  popularity: string;
  availableInIndia: boolean;
  updated: string;
}

// Sample brokers data that matches the Broker interface
const brokers: Broker[] = [
  {
    title: "IC Markets",
    image: "/images/investment/investment-1.png", // Replace with actual image path
    rating: 4.8,
    aosDelay: 100,
    popularity: "Very High",
    availableInIndia: true,
    updated: "May 2024"
  },
  {
    title: "Pepperstone",
    image: "/images/investment/investment-2.png", // Replace with actual image path
    rating: 4.7,
    aosDelay: 200,
    popularity: "High",
    availableInIndia: true,
    updated: "April 2024"
  },
  {
    title: "XM Broker",
    image: "/images/investment/investment-3.png", // Replace with actual image path
    rating: 4.5,
    aosDelay: 300,
    popularity: "High",
    availableInIndia: false,
    updated: "March 2024"
  },
  {
    title: "FP Markets",
    image: "/images/investment/investment-4.png", // Replace with actual image path
    rating: 4.6,
    aosDelay: 400,
    popularity: "Medium",
    availableInIndia: true,
    updated: "April 2024"
  },
];

const BestBrokerTwo = () => {
  const [openedPopover, setOpenedPopover] = useState<null | number>(null);
  const [selectedBroker1, setSelectedBroker1] = useState<string>('');
  const [selectedBroker2, setSelectedBroker2] = useState<string>('');
  const [comparison, setComparison] = useState<Broker[]>([]);

  const handleFilterChange1 = (brokerName: string) => {
    setSelectedBroker1(brokerName);
    if (brokerName && selectedBroker2) {
      const broker1 = brokers.find(broker => broker.title === brokerName);
      const broker2 = brokers.find(broker => broker.title === selectedBroker2);
      if (broker1 && broker2) {
        setComparison([broker1, broker2]);
      }
    }
  };

  const handleFilterChange2 = (brokerName: string) => {
    setSelectedBroker2(brokerName);
    if (brokerName && selectedBroker1) {
      const broker1 = brokers.find(broker => broker.title === selectedBroker1);
      const broker2 = brokers.find(broker => broker.title === brokerName);
      if (broker1 && broker2) {
        setComparison([broker1, broker2]);
      }
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-breadcrumb-two overflow-visible">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row gy-4">
            {/* <div className="col-lg-7">
              <div className="mb-60">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb text-white">
                    <li className="breadcrumb-item">
                      <a href="#" className="l-text">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item l-text">Best Brokers</li>
                    <li className="breadcrumb-item active l-text" aria-current="page">
                      Style 02
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="display-4 mb-40 fw-semibold text-white">Best brokers for beginners</h2>
              <div className="d-flex align-items-sm-center flex-column flex-sm-row gap-3 flex-wrap">
                <div className="position-relative">
                  <div onClick={() => setOpenedPopover((p) => (p == 1 ? null : 1))} className="d-flex align-items-center gap-4" role="button">
                    <Image src={user1} width="56" height="56" className="rounded-circle" alt="" />
                    <div>
                      <p className="text-white m-text mb-1">Written by</p>
                      <h5 className="text-white fw-semibold d-flex align-items-center gap-1">
                        <span className="text-white">Adam Nasli </span> <i className="ph ph-caret-down"></i>
                      </h5>
                    </div>
                  </div>
                  <OutsideClickHandler onOutsideClick={() => setOpenedPopover(null)}>
                    {openedPopover === 1 && (
                      <div className="p-4 rounded-4 shadow-lg bg-white position-absolute top-100 custom-popover">
                        <div className="d-flex gap-4 align-items-center mb-4">
                          <Image src={user1} alt="" />
                          <div>
                            <p className="m-text mb-2">Written By</p>
                            <h3 className="fw-semibold mb-3">Adam Nasli, CFA</h3>
                            <p>Forex • Derivatives • Market Analysis</p>
                          </div>
                        </div>
                        <p className="m-text mb-4">
                          During my professional career, I have traded many currency pairs on behalf of mutual funds, both as a speculative investment and as a hedging tool; racking up trades worth billions of dollars. I combine that experience with my active role in testing forex broker platforms
                          to steer users to the best brokers for their needs.
                        </p>
                        <p>
                          Learn more about{" "}
                          <a href="#" className="text-primary">
                            Our Methodology
                          </a>
                        </p>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
                <div className="vr d-none d-sm-block opacity-25 bg-white"></div>

                <div className="position-relative">
                  <div onClick={() => setOpenedPopover((p) => (p == 2 ? null : 2))} data-bs-trigger="hover focus" role="button" className="d-flex align-items-center gap-4">
                    <Image src={user2} width="56" height="56" className="rounded-circle" alt="" />
                    <div>
                      <p className="m-text text-white mb-1">Fact Checked by</p>
                      <h5 className="fw-semibold d-flex text-white align-items-center gap-1">
                        <span className="text-white">Edith Balazs </span> <i className="ph ph-caret-down"></i>
                      </h5>
                    </div>
                  </div>
                  <OutsideClickHandler onOutsideClick={() => setOpenedPopover(null)}>
                    {openedPopover === 2 && (
                      <div className="p-4 rounded-4 shadow-lg bg-white custom-popover position-absolute top-100">
                        <div className="d-flex gap-4 align-items-center mb-4">
                          <Image src={user2} alt="" />
                          <div>
                            <p className="m-text mb-2">Fact Checked By</p>
                            <h3 className="fw-semibold mb-3">Edith Balazis, CFA</h3>
                            <p>Forex • Derivatives • Market Analysis</p>
                          </div>
                        </div>
                        <p className="m-text mb-4">
                          During my professional career, I have traded many currency pairs on behalf of mutual funds, both as a speculative investment and as a hedging tool; racking up trades worth billions of dollars. I combine that experience with my active role in testing forex broker platforms
                          to steer users to the best brokers for their needs.
                        </p>
                        <p>
                          Learn more about{" "}
                          <a href="#" className="text-primary">
                            Our Methodology
                          </a>
                        </p>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
                <div className="vr d-none d-sm-block opacity-25 bg-white"></div>
                <div className="position-relative">
                  <div onClick={() => setOpenedPopover((p) => (p == 3 ? null : 3))} className="d-flex align-items-center gap-4" role="button">
                    <div className="text-white">
                      <p className="m-text mb-1 text-white">Updated</p>
                      <h5 className="fw-semibold text-white d-flex align-items-center gap-1">
                        <span className="text-white">2w ago </span> <i className="ph ph-caret-down"></i>
                      </h5>
                    </div>
                  </div>
                  <OutsideClickHandler onOutsideClick={() => setOpenedPopover(null)}>
                    {openedPopover === 3 && (
                      <div className="p-4 rounded-4 shadow-lg right-0 bg-white position-absolute top-100 custom-popover third">
                        <h4 className="fw-semibold mb-4">Always up to date</h4>
                        <p className="m-text bb-n40">Our experts continuously verify broker data to provide the most up-to-date information.</p>
                        <p>
                          Last updated on <span className="fw-medium">May 13, 2024</span>
                        </p>
                      </div>
                    )}
                  </OutsideClickHandler>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-5 col-xl-3 offset-xl-2">
              <Image src={breadCrumbImg} alt="" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Best Brokers Comparison Section */}
      <section className="best-broker-two pt-120 pb-120">
        <div className="container">
          <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-40">
            <div>
              <label>Select first broker:</label>
              <select 
                onChange={(e) => handleFilterChange1(e.target.value)} 
                value={selectedBroker1} 
                className="select"
              >
                <option value="">Select a broker</option>
                {brokers.map(broker => (
                  <option key={broker.title} value={broker.title}>{broker.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Select second broker:</label>
              <select 
                onChange={(e) => handleFilterChange2(e.target.value)} 
                value={selectedBroker2} 
                className="select"
              >
                <option value="">Select a broker</option>
                {brokers.map(broker => (
                  <option key={broker.title} value={broker.title}>{broker.title}</option>
                ))}
              </select>
            </div>
          </div>

          {comparison.length > 0 && (
            <div className="row g-4 mb-40">
              <div className="col-lg-6">
                <div className="broker-card style-two d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2 gap-sm-3 align-items-center">
                    <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">1</div>
                    <div className="img f-center rounded-circle">
                      <Image 
                        className="img-fluid rounded-circle" 
                        src={comparison[0].image} 
                        alt={comparison[0].title}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <h4 className="fw-semibold mb-2">{comparison[0].title}</h4>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Score: <span className="fw-medium">{comparison[0].rating}/5</span>
                      </p>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Popularity: <span className="fw-medium">{comparison[0].popularity}</span>
                      </p>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        {comparison[0].availableInIndia ? (
                          <span className="fw-medium">Available in India</span>
                        ) : (
                          <span className="fw-medium">Not available in India</span>
                        )}
                      </p>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Updated: <span className="fw-medium">{comparison[0].updated}</span>
                      </p>
                    </div>
                  </div>
                  <Link href={`/broker-review/${comparison[0].title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className="arrow-btn text-secondary d-none d-sm-flex fs-4 f-center rounded-circle border border-secondary">
                      <i className="ph ph-arrow-up-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="broker-card style-two d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2 gap-sm-3 align-items-center">
                    <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">2</div>
                    <div className="img f-center rounded-circle">
                      <Image 
                        className="img-fluid rounded-circle" 
                        src={comparison[1].image} 
                        alt={comparison[1].title}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <h4 className="fw-semibold mb-2">{comparison[1].title}</h4>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Score: <span className="fw-medium">{comparison[1].rating}/5</span>
                      </p>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Popularity: <span className="fw-medium">{comparison[1].popularity}</span>
                      </p>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        {comparison[1].availableInIndia ? (
                          <span className="fw-medium">Available in India</span>
                        ) : (
                          <span className="fw-medium">Not available in India</span>
                        )}
                      </p>
                      <p className="text-n500 m-text d-flex align-items-center gap-4">
                        Updated: <span className="fw-medium">{comparison[1].updated}</span>
                      </p>
                    </div>
                  </div>
                  <Link href={`/broker-review/${comparison[1].title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className="arrow-btn text-secondary d-none d-sm-flex fs-4 f-center rounded-circle border border-secondary">
                      <i className="ph ph-arrow-up-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {/* <div className="d-flex justify-content-center pagination-list">
            <button>
              <i className="ph ph-caret-left-bold"></i>
            </button>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">
              <i className="ph ph-dots-three-bold"></i>
            </a>
            <button>
              <i className="ph ph-caret-right-bold"></i>
            </button>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default BestBrokerTwo;