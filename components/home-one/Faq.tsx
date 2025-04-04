import Image from "next/image";
import React from "react";
import faqImg from "@/public/images/home-one-faq.png";
const Faq = () => {
  return (
    <section className="faq pt-120 pb-120">
      <div className="container">
        <div className="title-section text-center">
          <h2 className="display-4 fw-semibold mb-3 mb-lg-4">Have Questions? Find Answers!</h2>
          <p className="text-n500 l-text mb-60">Welcome to our FAQs section, where we&apos;ve compiled answers to some of the most common questions about our services.</p>
        </div>
        <div className="row gy-4 align-items-center">
          <div data-aos="fade-in" className="col-lg-6 col-xxl-5" dir="rtl">
            <Image src={faqImg} className="max-unset" alt="" />
          </div>
          <div data-aos="fade-left" className="col-lg-6 offset-xxl-1">
            <div className="accordion d-flex flex-column gap-4" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How do I use your comparison tool?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I trust the security of your platform?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Are your comparisons unbiased?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Do you recommend specific brokers?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    How do you make money?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
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

export default Faq;
