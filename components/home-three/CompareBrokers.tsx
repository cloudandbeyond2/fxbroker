import Image from "next/image";
import React from "react";
import compare1 from "@/public/images/compare-1.png";
import compare2 from "@/public/images/compare-2.png";
const CompareBrokers = () => {
  return (
    <section className="compare-brokers pt-120 pb-120">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div data-aos="fade-in-up" className="col-lg-6 col-xl-5 left-side">
            <Image src={compare1} alt="" />
            <Image src={compare2} className="compare-two" alt="" />
            <div className="award d-flex align-items-center gap-3 bg-success">
              <span className="icon">
                <i className="ph ph-medal text-success"></i>
              </span>
              <div>
                <h4 className="mb-1 text-white">12+</h4>
                <p className="text-white s-text">Award Winning</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-in-down" className="col-lg-6 offset-xl-1">
            <h2 className="display-4 fw-semibold mb-3 mb-lg-4">Find and Compare Brokers Easily</h2>
            <p className="mb-40 l-text">Finding the right broker can be overwhelming with so many options available. Our Filter and Compare tool is designed to simplify this process.</p>
            <div className="accordion d-flex flex-column gap-4" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button h4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How do I use your comparison tool?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button h4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I trust the security of your platform?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button h4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Are your comparisons unbiased?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button h4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Do you recommend specific brokers?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareBrokers;
