import React from "react";

const Trustpilot = () => {
  return (
    <section className="trustpilot">
      <div className="container">
        <div data-aos="zoom-in" className="row gap-4 gap-lg-0">
          <div className="col-md-5 d-flex gap-3 flex-wrap align-items-center">
            <p className="l-text">
              Rated <span className="fw-medium">Excellent</span> on
            </p>
            <div className="d-flex align-items-center gap-2">
              <span className="fs-4 text-success d-flex align-items-center">
                <i className="ph ph-star-fill"></i>
              </span>
              Trustpilot
            </div>
            <div className="d-flex align-items-center gap-1">
              <span className="star-box bg-success text-white">
                <i className="ph ph-star-fill"></i>
              </span>
              <span className="star-box bg-success text-white">
                <i className="ph ph-star-fill"></i>
              </span>
              <span className="star-box bg-success text-white">
                <i className="ph ph-star-fill"></i>
              </span>
              <span className="star-box bg-success text-white">
                <i className="ph ph-star-fill"></i>
              </span>
              <span className="star-box bg-success text-white">
                <i className="ph ph-star-fill"></i>
              </span>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row justify-content-between gap-4 gap-lg-0">
              <div className="col-md-6 col-lg-4 d-flex align-items-center gap-2">
                <span className="fs-4 d-flex align-items-center">
                  <i className="ph ph-users"></i>
                </span>
                <p className="l-ltext d-flex">
                  <span className="fw-medium">32 Million +</span> Clients
                </p>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-center gap-2">
                <span className="fs-4 d-flex align-items-center">
                  <i className="ph ph-users-three"></i>
                </span>
                <p className="l-ltext">
                  <span className="fw-medium">6 Million +</span> Brokers
                </p>
              </div>
              <div className="col-md-6 col-lg-4 d-flex align-items-center gap-2">
                <span className="fs-4 d-flex align-items-center">
                  <i className="ph ph-globe"></i>
                </span>
                <p className="l-ltext">
                  <span className="fw-medium">195 +</span> Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trustpilot;
