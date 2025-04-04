import Image from "next/image";
import Link from "next/link";
import { brokers } from "../home-two/HighestRatedBroker";
import { formatString } from "@/app/(common)/broker-review/[title]/page";
const TopRankedBroker = () => {
  return (
    <section className="high-rated-brokers pt-120 pb-120">
      <div className="container">
        <div data-aos="zoom-in" className="row mb-60">
          <div className="col-md-6">
            <h2 className="display-4 fw-semibold">Top-Ranked Brokers Worldwide for You</h2>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <p className="m-text mb-40">BrokR could focus specifically on cryptocurrencies, providing tools and resources for buying.</p>
            <Link href="/best-brokers-one" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              See All Brokers <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="row g-3 g-xxl-4">
          {brokers.map(({ image, rating, title, users, aosDelay }) => (
            <div key={title} className="col-lg-6">
              <div data-aos="fade-in" data-aos-delay={aosDelay} className="broker-box">
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
                            {rating}/<span className="fw-normal">5</span>
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
                        <span className="fw-medium">234,548</span> people chose this broker
                      </p>
                    </div>
                  </div>
                  <div className="bb-n40 row">
                    <div className="pe-3 col-sm-6 br-n30">
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <td className="w-75 py-1">
                              <p className="m-text fw-medium">Fee Level:</p>
                            </td>
                            <td className="w-25 py-1">
                              <p className="m-text fw-medium whitespace-nowrap">
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
                        </tbody>
                      </table>
                    </div>
                    <div className="col-sm-6">
                      <table className="px-3">
                        <tbody>
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
                              <p className="m-text fw-medium whitespace-nowrap">
                                Yes <span className="text-brown">4.7</span>/5
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-4 align-items-center">
                    <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                      Visit Broker <i className="ph ph-arrow-right"></i>
                    </a>
                    <Link href={`/broker-review/${formatString(title)}`} className="text-primary fw-semibold f-center gap-2">
                      Details Review <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRankedBroker;
