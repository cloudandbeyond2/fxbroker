import Image from "next/image";
import React from "react";
import Link from "next/link";
import { brokers } from "../home-two/HighestRatedBroker";
import { formatString } from "@/app/(common)/broker-review/[title]/page";

const BestBrokers = () => {
  return (
    <section className="best-broker overflow-x-hidden">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div data-aos="fade-in" className="col-lg-6">
            <div className="box-lg">
              <h4 className="fw-semibold bb-dashed">Top Broker list</h4>
              <div className="investment-list overflow-x-auto">
                <table className="w-100 whitespace-nowrap">
                  <tbody>
                    {brokers.slice(0, 5).map(({ image, rating, title }) => (
                      <tr key={title}>
                        <td>
                          <div className="px-2">01</div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3 px-3 px-lg-4 py-2 py-lg-3">
                            <Image src={image} className="img-fluid" alt="" />
                            <p className="m-text fw-medium">{title}</p>
                          </div>
                        </td>
                        <td>
                          <div className="f-center gap-2 px-4">
                            <span className="text-secondary fs-4 f-center">
                              <i className="ph ph-star-fill"></i>
                            </span>
                            <p className="m-text fw-medium">{rating}</p>
                          </div>
                        </td>
                        <td>
                          <Link href={`/broker-review/${formatString(title)}`} className="btn-sm btn btn-outline-secondary rounded-5 py-2 px-4">
                            View Link
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-lg-6 col-xl-5 offset-xl-1">
            <h2 className="display-4 mb-3 mb-xl-4 fw-bold">Check Out The Best Brokers in Worlds</h2>
            <p className="mb-4 mb-xl-5">Trust is the cornerstone of our platform. Count on us to be your reliable companion on your financial journey.</p>
            <Link href="/best-brokers-one" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              See All Brokers <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBrokers;
