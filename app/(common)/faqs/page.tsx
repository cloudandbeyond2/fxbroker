import Clients from "@/components/home-one/Clients";
import DownloadApps from "@/components/home-one/DownloadApps";
import React from "react";

const FaqPage = () => {
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">FAQs</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    FAQs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- faqs --> */}
      <section className="pt-120 pb-120 faq">
        <div className="container">
          <div data-aos="zoom-in" className="title-section text-center">
            <h2 className="display-4 mb-3 fw-semibold">Find Answers to Your Questions</h2>
            <p className="m-text mb-60">Welcome to our FAQs section! Here, we&apos;ve compiled answers to some of the most common questions our users ask.</p>
          </div>

          <div className="tabs">
            <ul className="nav nav-pills bg-white mb-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  Stock
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                  Forex
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  CFD
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-crypto-tab" data-bs-toggle="pill" data-bs-target="#pills-crypto" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  Crypto
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-future-tab" data-bs-toggle="pill" data-bs-target="#pills-future" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  Future
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-discount-tab" data-bs-toggle="pill" data-bs-target="#pills-discount" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                  Discount
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionExample">
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
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionExample2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps9" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps9" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps10" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps10" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={1}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionex2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse21" className="accordion-collapse collapse show" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse22" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse23" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapse24" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapse25" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordion3">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse62" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse26" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse27" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse27" className="accordion-collapse collapse show" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse28" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse28" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps29" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps29" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps30" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps30" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={2}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionex4">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse32" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse32" className="accordion-collapse collapse" data-bs-parent="#accordionex4">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse33" className="accordion-collapse collapse" data-bs-parent="#accordionex4">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse31" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse31" className="accordion-collapse collapse show" data-bs-parent="#accordionex4">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse34" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapse34" className="accordion-collapse collapse" data-bs-parent="#accordionex4">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse35" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapse35" className="accordion-collapse collapse" data-bs-parent="#accordionex4">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordion5">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse36" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse36" className="accordion-collapse collapse" data-bs-parent="#accordion5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse37" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse37" className="accordion-collapse collapse show" data-bs-parent="#accordion5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse38" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse38" className="accordion-collapse collapse" data-bs-parent="#accordion5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps39" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps39" className="accordion-collapse collapse" data-bs-parent="#accordion5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps40" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps40" className="accordion-collapse collapse" data-bs-parent="#accordion5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-crypto" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={3}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionex5">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse43" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse43" className="accordion-collapse collapse" data-bs-parent="#accordionex5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse41" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse41" className="accordion-collapse collapse show" data-bs-parent="#accordionex5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse42" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse42" className="accordion-collapse collapse" data-bs-parent="#accordionex5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse44" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapse44" className="accordion-collapse collapse" data-bs-parent="#accordionex5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse45" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapse45" className="accordion-collapse collapse" data-bs-parent="#accordionex5">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordion6">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse46" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse46" className="accordion-collapse collapse" data-bs-parent="#accordion6">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps49" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps49" className="accordion-collapse collapse" data-bs-parent="#accordion6">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps50" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps50" className="accordion-collapse collapse" data-bs-parent="#accordion6">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse47" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse47" className="accordion-collapse collapse show" data-bs-parent="#accordion6">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse48" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse48" className="accordion-collapse collapse" data-bs-parent="#accordion6">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-future" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={4}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionex7">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse51" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse51" className="accordion-collapse collapse show" data-bs-parent="#accordionex7">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse53" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse53" className="accordion-collapse collapse" data-bs-parent="#accordionex7">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse52" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse52" className="accordion-collapse collapse" data-bs-parent="#accordionex7">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse54" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapse54" className="accordion-collapse collapse" data-bs-parent="#accordionex7">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse55" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapse55" className="accordion-collapse collapse" data-bs-parent="#accordionex7">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordion8">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps59" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps59" className="accordion-collapse collapse" data-bs-parent="#accordion8">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse56" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse56" className="accordion-collapse collapse" data-bs-parent="#accordion8">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse57" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse57" className="accordion-collapse collapse show" data-bs-parent="#accordion8">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse58" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse58" className="accordion-collapse collapse" data-bs-parent="#accordion8">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps60" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps60" className="accordion-collapse collapse" data-bs-parent="#accordion8">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-discount" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={5}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionex9">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse62" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse62" className="accordion-collapse collapse" data-bs-parent="#accordionex9">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse63" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse63" className="accordion-collapse collapse" data-bs-parent="#accordionex9">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse61" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse61" className="accordion-collapse collapse show" data-bs-parent="#accordionex9">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse64" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapse64" className="accordion-collapse collapse" data-bs-parent="#accordionex9">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse65" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapse65" className="accordion-collapse collapse" data-bs-parent="#accordionex9">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordion10">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse68" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse68" className="accordion-collapse collapse" data-bs-parent="#accordion10">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse66" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse66" className="accordion-collapse collapse" data-bs-parent="#accordion10">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse67" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse67" className="accordion-collapse collapse show" data-bs-parent="#accordion10">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps69" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps69" className="accordion-collapse collapse" data-bs-parent="#accordion10">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps70" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps70" className="accordion-collapse collapse" data-bs-parent="#accordion10">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients */}
      <Clients />

      {/* download apps */}
      <DownloadApps />
    </main>
  );
};

export default FaqPage;
