import React from "react";
import topReason1 from "@/public/images/top-reason-1.png";
import topReason2 from "@/public/images/top-reason-2.png";
import Image from "next/image";
import Link from "next/link";
const TopReasons = () => {
  return (
    <section className="pt-120 pb-120 top-reason">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div data-aos="fade-up" className="col-lg-6">
            <h2 className="display-4 text-white fw-semibold mb-3 mb-lg-4">Top Reasons to Choose BrokR</h2>
            <p className="text-white mb-3 mb-lg-4">At BrokR, we are dedicated to providing you with the best tools and resources to make informed decisions about your investments.</p>
            <div className="d-flex align-items-center rating-box mb-40">
              <h2 className="display-4 text-white fw-semibold pe-3 br-n30">
                4.9<span className="text-secondary">K</span>
              </h2>
              <div className="ps-3">
                <p className="l-text text-white mb-2">Rating Based On 2500+ Reviews</p>
                <div className="d-flex gap-2 fs-5 text-secondary">
                  <i className="ph ph-star-fill"></i>
                  <i className="ph ph-star-fill"></i>
                  <i className="ph ph-star-fill"></i>
                  <i className="ph ph-star-fill"></i>
                  <i className="ph ph-star-half-fill"></i>
                </div>
              </div>
            </div>
            <Link href="/find-my-broker" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
              Find My broker <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
          <div data-aos="fade-down" className="col-lg-6">
            <div className="d-flex align-items-end gap-3">
              <div>
                <Image src={topReason1} className="img-fluid" alt="" />
              </div>
              <div>
                <Image src={topReason2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopReasons;
