import Image from "next/image";
import React from "react";
import invest1 from "@/public/images/investment/investment-1.png";
import invest2 from "@/public/images/investment/investment-2.png";
import invest3 from "@/public/images/investment/investment-3.png";
import invest4 from "@/public/images/investment/investment-4.png";
import invest5 from "@/public/images/investment/investment-5.png";
import invest6 from "@/public/images/investment/investment-6.png";
import invest7 from "@/public/images/investment/investment-7.png";
import invest8 from "@/public/images/investment/investment-8.png";
import { formatString } from "@/app/(common)/broker-review/[title]/page";
import Link from "next/link";

export const brokers = [
  {
    title: "Fidelity Investments",
    image: invest1,
    rating: "4.9",
    users: "234,548",
  },
  {
    title: "Interactive Brokers",
    image: invest2,
    rating: "4.9",
    users: "234,548",
    aosDelay: 100,
  },
  {
    title: "NinjaTrader Brokerage",
    image: invest3,
    rating: "4.9",
    users: "234,548",
    aosDelay: 200,
  },
  {
    title: "ADM Investor Services",
    image: invest4,
    rating: "4.9",
    users: "234,548",
    aosDelay: 300,
  },
  {
    title: "OANDA",
    image: invest5,
    rating: "4.9",
    users: "234,548",
    aosDelay: 400,
  },
  {
    title: "Admirals",
    image: invest6,
    rating: "4.9",
    users: "234,548",
    aosDelay: 500,
  },
  {
    title: "Robinhood",
    image: invest7,
    rating: "4.9",
    users: "234,548",
    aosDelay: 500,
  },
  {
    title: "Ally Invest",
    image: invest8,
    rating: "4.9",
    users: "234,548",
    aosDelay: 500,
  },
];
const HighestRatedBroker = () => {
  return (
    <section className="high-rated-brokers pt-120 pb-120">
      <div className="container">
        <div data-aos="zoom-in" className="row mb-60">
          <div className="col-md-6">
            <h2 className="display-4 fw-semibold">Highest Rated Brokers In This Worlds</h2>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <p className="m-text mb-40">BrokR could focus specifically on cryptocurrencies, providing tools and resources for buying.</p>
            <Link href="/best-brokers-one" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              See All Brokers <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="row g-3 g-xxl-4">
          {brokers.slice(0, 6).map(({ image, rating, title, users, aosDelay }) => (
            <div key={title} data-aos="fade-in" data-aos-delay="" className="col-md-6 col-xxl-4">
              <div className="broker-box">
                <div className="inner">
                  <div className="d-flex align-items-center gap-3 bb-n40">
                    <div className="img f-center">
                      <Image width="52" height="52" src={image} alt="" />
                    </div>
                    <div>
                      <h4 className="fw-semibold mb-3">{title}</h4>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-1">
                          <span className="text-secondary d-flex align-items-center fs-4">
                            <i className="ph ph-star-fill"></i>
                          </span>
                          <p className="l-text fw-medium">
                            4.9/<span className="fw-normal">5</span>
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <span className="text-primary d-flex align-items-center fs-4">
                            <i className="ph ph-bookmark-simple"></i>
                          </span>
                          <p className="l-text">Save Wishlist&apos;s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bb-n40">
                    <div className="d-flex align-items-center gap-1">
                      <span className="text-primary fs-4 d-flex align-items-center">
                        <i className="ph ph-users-three"></i>
                      </span>
                      <p className="l-text">
                        <span className="fw-medium">{users}</span> people chose this broker
                      </p>
                    </div>
                  </div>
                  <div className="bb-n40">
                    <table className="w-100">
                      <tbody className="">
                        <tr>
                          <td className="w-75 py-1">
                            <p className="m-text fw-medium">Fee Level:</p>
                          </td>
                          <td className="w-25 py-1">
                            <p className="m-text fw-medium">
                              Low <span className="text-brown">4.5</span>/5
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-75 py-1">
                            <p className="m-text fw-medium">Inactivity Fee:</p>
                          </td>
                          <td className="w-25 py-1">
                            <p className="m-text fw-medium">No</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-75 py-1">
                            <p className="m-text fw-medium">Investor Protection:</p>
                          </td>
                          <td className="w-25 py-1">
                            <p className="m-text fw-medium">No</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-75 py-1">
                            <p className="m-text fw-medium">Mobile Platform:</p>
                          </td>
                          <td className="w-25 py-1">
                            <p className="m-text fw-medium">
                              Yes <span className="text-brown">{rating}</span>/5
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                    Visit Broker <i className="ph ph-arrow-right"></i>
                  </a>
                  <Link href={`/broker-review/${formatString(title)}`} className="text-primary pt-3 fw-semibold f-center gap-2">
                    Details Review <i className="ph ph-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighestRatedBroker;
