"use client";
import React, { useState } from "react";
import heroEl from "@/public/images/hero-el.png";
import breadCrumbImg from "@/public/images/breadcrumb-img.png";
import Image from "next/image";
import RangeSlider from "@/components/shared/RangeSlider";
import authorImg from "@/public/images/author.png";
import prepare from "@/public/images/prepare.png";
import mobile from "@/public/images/mobile.png";
import documents from "@/public/images/documents.png";
import bankAccount from "@/public/images/bank-account.png";
import time from "@/public/images/time.png";
import stepAccountCreate from "@/public/images/step-account-create.png";
import stepProvideData from "@/public/images/step-provide-data.png";
import stepExperience from "@/public/images/step-experience.png";
import user2 from "@/public/images/user/user-2.png";
import user3 from "@/public/images/user/user-3.png";
import stepInvestment from "@/public/images/step-investment.png";
import stepId from "@/public/images/step-id.png";
import stepSubmitProof from "@/public/images/step-submit-proof.png";
import stepPending from "@/public/images/step-pending.png";
import stepReady from "@/public/images/step-ready.png";
import stepVerified from "@/public/images/step-verified.png";
import stepChoosing from "@/public/images/step-choosing.png";
import stepForm from "@/public/images/step-form.png";
import stepFirstTrade from "@/public/images/step-first-trade.png";
import stepFirstStock from "@/public/images/step-first-stock.png";
import AnimateHeight from "react-animate-height";

const TradeGuide = () => {
  const [stepFirst, setStepFirst] = useState(1);
  const [stepSecond, setStepSecond] = useState(1);
  const [stepThird, setStepThird] = useState(1);
  const [opened, setOpened] = useState<null | number>(1);
  const [stepFirstCompleted, setStepFirstCompleted] = useState(false);
  const [stepSecondCompleted, setStepSecondCompleted] = useState(false);
  return (
    <main>
      {/* <!-- hero  --> */}
      <section className="hero-breadcrumb-two">
        <Image className="hero-el one" src={heroEl} alt="" />
        <Image className="hero-el two" src={heroEl} alt="" />
        <Image className="hero-el three" src={heroEl} alt="" />
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <div className="pt-80">
                <h2 className="display-4 mb-4 fw-semibold text-white">My First Stock Trade Quest</h2>
                <p className="m-text text-white mb-32">A step-by-step guide that helps beginners to successfully buy their first stocks within a few days.</p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-3 offset-xl-2">
              <Image src={breadCrumbImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Stock trade guide --> */}
      <section className="pt-60 pb-60 trade-guide">
        <div className="container">
          <div className="accordion d-flex flex-column gap-4" id="accordionExample">
            <div className={`accordion-item multistep-guide ${stepFirstCompleted ? "border-success" : ""}`}>
              <div className="accordion-header">
                <button onClick={() => setOpened((p) => (p == 1 ? null : 1))} className={`accordion-button ${opened == 1 ? "collapsed" : ""}`} type="button">
                  <div>
                    <span className={`fw-semibold d-block mb-2 h4 ${stepFirstCompleted ? "text-success" : ""}`}>1. Where to buy your first stock</span>
                    {stepFirstCompleted ? (
                      <div className="d-flex align-items-center gap-1">
                        <i className="ph ph-check-circle text-success"></i> <span className="text-success fw-semibold">Completed</span>
                      </div>
                    ) : (
                      <span className="s-text step-value fw-medium d-flex align-items-center gap-1 text-primary">Step {stepFirst}/3</span>
                    )}
                  </div>
                </button>
              </div>
              <AnimateHeight duration={300} height={opened == 1 ? "auto" : 0}>
                <div className={`accordion-collapse collapse show`}>
                  <div className="accordion-body">
                    <div className={`step ${stepFirst === 1 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 1</p>
                      <p className="xl-text fw-semibold mb-2">We recommend that you buy your first stock at eToro</p>
                      <div>
                        <p className="s-text mb-3">Why eToro? Based on our research and testing, in 2024 eToro is our winner as the best broker for beginners with little to zero trading experience.</p>
                        <p className="s-text">eToro offers what most beginner investors need:</p>
                        <ul className="list-disc mb-3">
                          <li className="s-text">transparent, low fees with zero commission</li>
                          <li className="s-text">an easy-to-use mobile trading platform</li>
                          <li className="s-text">and good educational material</li>
                        </ul>
                        <p className="s-text mb-4">Important note: Our partnerships with the brokers we test and review do not affect our scoring and recommendations.</p>
                        <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                          <div className="d-flex flex-column align-items-center gap-2">
                            <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                            <p className="m-text fw-medium">Adam Nasli</p>
                          </div>
                          <div>
                            <p className="s-text">It&apos;s possible that eToro is not available in your country, or you want to do your first trade at another broker. In this case, we suggest that you:</p>
                            <ul className="list-disc mb-3">
                              <li className="s-text">try our Find My Broker tool, which helps you choose a broker that suits your needs,</li>
                              <li className="s-text">or read our Best Brokers for Beginners article, which lists the best available brokers in your location.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={3} value={1} />
                        <button onClick={() => setStepFirst(2)} className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className={`step ${stepFirst === 2 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 2</p>
                      <p className="xl-text fw-semibold mb-2">Why trade and invest in stocks?</p>
                      <div>
                        <ul className="list-disc mb-3">
                          <li className="s-text">Stocks have a long track record of providing higher annualized returns over the long term than bonds or cash.</li>
                          <li className="s-text">Many stocks trade publicly on major stock exchanges, making it easy to buy and sell them.</li>
                          <li className="s-text">
                            You can <span className="fw-medium">start with small amounts,</span> even as low as $50.
                          </li>
                        </ul>
                        <p className="s-text mb-4">Important note: Our partnerships with the brokers we test and review do not affect our scoring and recommendations.</p>
                        <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                          <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                            <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                            <p className="m-text fw-medium">Adam Nasli</p>
                          </div>
                          <div>
                            <p className="s-text">
                              A stock is a security that represents the <span className="fw-semibold">ownership of a fraction of a corporation.</span> One unit of stock is called a share. Holding a particular company&apos;s share makes you a shareholder. When the value of the company increases, so
                              does the value of your shares, giving you the opportunity to build your wealth.  When the value of the company increases, so does the value of your shares, giving you the opportunity to <span className="fw-semibold">build your wealth.</span>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={3} value={2} />

                        <div className="d-flex gap-3 gap-md-4">
                          <button onClick={() => setStepFirst(1)} className="btn prev-step btn-outline-secondary fw-semibold d-inline-flex align-items-center gap-2">
                            <i className="ph ph-arrow-left"></i> Prev
                          </button>
                          <button onClick={() => setStepFirst(3)} className="btn next-step btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                            Next <i className="ph ph-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`step ${stepFirst === 3 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 3</p>
                      <p className="xl-text fw-semibold mb-2">What stock to trade</p>
                      <div>
                        <ul className="list-disc mb-3">
                          <li className="s-text">We can&apos;t give specific advice on what to trade; you should always do your own research or seek investment advice. But for inspiration and ideas on what stock to pick, you can check the most actively traded stocks, for example.</li>
                        </ul>
                        <p className="s-text mb-4">In any case, it may be a good idea to make your first trade with a small amount only.</p>
                        <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                          <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                            <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                            <p className="m-text fw-medium">Adam Nasli</p>
                          </div>
                          <div>
                            <p className="s-text">
                              Later on, you should consider <span className="fw-semibold">building a portfolio</span> of many different stocks - you know, that old saying about <span className="fw-semibold">not putting all your eggs in one basket</span>. A great way to reduce your risk! Later on,
                              you should consider building a portfolio of many different stocks - you know, that old saying about not putting all your eggs in one basket. A great way to reduce your risk!
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={3} value={3} />
                      </div>
                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepFirst(2)} className="btn prev-step btn-outline-secondary fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button
                          onClick={() => {
                            setOpened(2), setStepFirstCompleted(true);
                          }}
                          className="btn btn-secondary open-next fw-semibold d-inline-flex align-items-center gap-2"
                        >
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
            </div>
            <div className={`accordion-item multistep-guide ${stepSecondCompleted ? "border-success" : ""}`}>
              <div className="accordion-header">
                <button onClick={() => setOpened((p) => (p === 2 ? null : 2))} className={`accordion-button ${opened == 2 ? "collapsed" : ""}}`} type="button">
                  <div>
                    <span className={`fw-semibold d-block mb-2 h4 ${stepSecondCompleted ? "text-success" : ""}`}>2. Prepare for registration</span>
                    {stepSecondCompleted ? (
                      <div className="d-flex align-items-center gap-1">
                        <i className="ph ph-check-circle text-success"></i> <span className="text-success fw-semibold">Completed</span>
                      </div>
                    ) : (
                      <span className="s-text step-value fw-medium d-flex align-items-center gap-1 text-primary">Step {stepSecond}/5</span>
                    )}
                  </div>
                </button>
              </div>
              <AnimateHeight height={opened == 2 ? "auto" : 0}>
                <div className={`accordion-collapse collapse show`}>
                  <div className="accordion-body">
                    <div className={`step ${stepSecond === 1 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 1</p>
                      <p className="xl-text fw-semibold mb-2">What you&apos;ll need before starting</p>
                      <div>
                        <p className="s-text mb-3 mb-lg-4">The first step of buying your first stock is registering an account at eToro.</p>
                        <p className="s-text">For a smooth registration, make sure that everything you&apos;ll need is at hand:</p>
                        <ul className="list-disc mb-3">
                          <li className="s-text">a mobile phone with internet access (desktop works too)</li>
                          <li className="s-text">documents to identify yourself</li>
                          <li className="s-text">a bank account in your name (to make your deposit)</li>
                          <li className="s-text">ca. 45 min free time</li>
                        </ul>
                        <p className="s-text mb-4">Important note: Our partnerships with the brokers we test and review do not affect our scoring and recommendations.</p>
                        <div className="mb-4">
                          <Image src={prepare} className="img-fluid" alt="" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={5} value={1} />
                        <button onClick={() => stepFirstCompleted && setStepSecond(2)} data-next-step="2" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className={`step ${stepSecond === 2 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 2</p>
                      <p className="xl-text fw-semibold mb-2">Have your mobile at hand</p>
                      <div>
                        <p className="s-text mb-4">Make sure you have a mobile phone or desktop PC with internet access.</p>
                        <p className="s-text mb-4">In this guide, we&apos;ll take you through the trade on a mobile browser, but the process is quite similar on desktop.</p>
                        <p className="s-text mb-4">eToro also offers a great mobile application that you can find in the app stores.</p>
                        <Image src={mobile} className="img-fluid mb-4" alt="" />
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={5} value={2} />
                        <div className="d-flex gap-3 gap-md-4">
                          <button onClick={() => setStepSecond(1)} data-prev-step="1" className="btn prev-step btn-outline-secondary fw-semibold d-inline-flex align-items-center gap-2">
                            <i className="ph ph-arrow-left"></i> Prev
                          </button>
                          <button onClick={() => setStepSecond(3)} data-next-step="3" className="btn next-step btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                            Next <i className="ph ph-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={`step ${stepSecond === 3 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 3</p>
                      <p className="xl-text fw-semibold mb-2">Gather the documents you&apos;ll need</p>
                      <p className="s-text mb-3 mb-lg-4">To be able to open an account with eToro, you are required to provide proof of identity and proof of residency. Make sure you have these documents at hand (in printed or digital version) before you start the registration process.</p>

                      <div>
                        <p className="s-text mb-1">eToro accepts the following documents for identification purposes:</p>
                        <ul className="list-disc mb-3">
                          <li className="s-text">
                            <span className="fw-medium">Proof of identity:</span> passport / government-issued ID
                          </li>
                          <li className="s-text">
                            <span className="fw-medium">Proof of residency:</span> utility bill or bank statement (from the last 3 months)
                          </li>
                        </ul>
                        <p className="s-text mb-4">Account opening at eToro is fully digital, so you can go through the entire identification process in the mobile app (or on the company&apos;s web platform).</p>
                        <Image src={documents} className="img-fluid mb-3 mb-lg-4" alt="" />
                        <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                          <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                            <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                            <p className="m-text fw-medium">Adam Nasli</p>
                          </div>
                          <div>
                            <p className="s-text">
                              The utility bills or bank statement should state your name, address, date and the issuing company in order to be accepted. Check the detailed requirements! The utility bills or bank statement should state your name, address, date and the issuing company in order to be
                              accepted. Check the detailed requirements! The utility bills or bank statement should state your name, address, date and the issuing company in order to be accepted. Check the detailed requirements!
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={5} value={3} />
                      </div>
                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepSecond(2)} className="btn prev-step btn-outline-secondary fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepSecond(4)} className="btn next-step btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className={`step ${stepSecond === 4 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 4</p>
                      <p className="xl-text fw-semibold mb-2">Have a bank account that is in your name</p>
                      <p className="s-text mb-3 mb-lg-4">
                        After successful registration, you&apos;ll be able to deposit money to your eToro account. For the deposit you&apos;ll need a bank account that is in your name. This means that you are the owner of the bank account you&apos;ll deposit from!
                      </p>
                      <p className="s-text mb-3 mb-lg-4">You can deposit via credit card or bank transfer and some other methods as well.</p>

                      <div>
                        <p className="s-text mb-1">eToro accepts the following documents for identification purposes:</p>
                        <ul className="list-disc mb-3">
                          <li className="s-text">
                            <span className="fw-medium">Proof of identity:</span> passport / government-issued ID
                          </li>
                          <li className="s-text">
                            <span className="fw-medium">Proof of residency:</span> utility bill or bank statement (from the last 3 months)
                          </li>
                        </ul>
                        <p className="s-text mb-4">Account opening at eToro is fully digital, so you can go through the entire identification process in the mobile app (or on the company&apos;s web platform).</p>
                        <Image src={bankAccount} className="img-fluid mb-3 mb-lg-4" alt="" />
                        <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                          <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                            <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                            <p className="m-text fw-medium">Adam Nasli</p>
                          </div>
                          <div>
                            <p className="s-text">
                              Since eToro operates in USD, it&apos;s best to deposit in USD. However, you can deposit in any of their supported currencies, but in that case they&apos;ll charge you a small fee to convert the funds to USD. Since eToro operates in USD, it&apos;s best to deposit in USD.
                              However, you can deposit in any of their supported currencies, but in that case they&apos;ll charge you a small fee to convert the funds to USD.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={5} value={4} />
                      </div>
                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepSecond(3)} data-prev-step="3" className="btn prev-step btn-outline-secondary fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepSecond(5)} data-next-step="5" className="btn next-step btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className={`step ${stepSecond === 5 ? "" : "d-none"}`}>
                      <p className="fw-medium text-primary s-text mb-2">Step 5</p>
                      <p className="xl-text fw-semibold mb-2">Time required</p>
                      <p className="s-text mb-3 mb-lg-4">Registration, account verification and making your first deposit takes about 45 minutes to complete. After that, it usually takes a few days for eToro to approve your registration.</p>
                      <p className="s-text mb-3 mb-lg-4">You can initiate your first stock purchase once eToro has approved your account.</p>

                      <div>
                        <p className="s-text mb-1">eToro accepts the following documents for identification purposes:</p>
                        <ul className="list-disc mb-3">
                          <li className="s-text">
                            <span className="fw-medium">Proof of identity:</span> passport / government-issued ID
                          </li>
                          <li className="s-text">
                            <span className="fw-medium">Proof of residency:</span> utility bill or bank statement (from the last 3 months)
                          </li>
                        </ul>
                        <p className="s-text mb-4">Account opening at eToro is fully digital, so you can go through the entire identification process in the mobile app (or on the company&apos;s web platform).</p>
                        <Image src={time} className="img-fluid mb-3 mb-lg-4" alt="" />
                        <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                          <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                            <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                            <p className="m-text fw-medium">Adam Nasli</p>
                          </div>
                          <div>
                            <p className="s-text">
                              You can exit the registration process any time and continue later from where you stopped. The data you filled in will be saved. You can exit the registration process any time and continue later from where you stopped. The data you filled in will be saved. You can exit
                              the registration process any time and continue later from where you stopped. The data you filled in will be saved.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                          <a href="#" className="fw-semibold underline">
                            Need Some Help
                          </a>
                          <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                            Visit Site <i className="ph ph-arrow-right"></i>
                          </a>
                        </div>
                        <RangeSlider max={5} value={5} />
                      </div>
                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepSecond(4)} data-prev-step="4" className="btn prev-step btn-outline-secondary fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button
                          onClick={() => {
                            setOpened(3), setStepSecondCompleted(true);
                          }}
                          data-next-step="6"
                          className="btn btn-secondary open-next fw-semibold d-inline-flex align-items-center gap-2"
                        >
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
            </div>
            <div className={`accordion-item multistep-guide ${stepThird == 14 ? "border-success" : ""}`}>
              <div className="accordion-header">
                <button onClick={() => setOpened((p) => (p == 3 ? 0 : 3))} className={`accordion-button ${opened == 3 ? "collapsed" : ""}`} type="button">
                  <div>
                    <span className={`fw-semibold d-block mb-2 h4 ${stepThird == 14 ? "text-success" : ""}`}>3. Step-by-step account opening and trading</span>
                    {stepThird == 14 ? (
                      <div className="d-flex align-items-center gap-1">
                        <i className="ph ph-check-circle text-success"></i> <span className="text-success fw-semibold">Completed</span>
                      </div>
                    ) : (
                      <span className="s-text step-value fw-medium d-flex align-items-center gap-1 text-primary">Step {stepThird}/14</span>
                    )}
                  </div>
                </button>
              </div>
              <AnimateHeight height={opened == 3 ? "auto" : 0}>
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <div className={`step ${stepThird == 1 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 1</p>
                          <p className="xl-text fw-semibold mb-2">Registration with email address</p>
                          <p className="s-text mb-3 mb-lg-4">To start the registration process, visit the eToro signup page in your browser.</p>
                          <ol className="mb-3">
                            <li className="s-text">
                              First, add your <span className="fw-medium">username, email</span> and <span className="fw-medium">password</span>, check the legal and privacy conditions, and accept if you agree.
                            </li>
                            <li className="s-text">
                              Next, you can log in. You will get an <span className="fw-medium">email with the verification link; click the link</span>, and you are good to go.
                            </li>
                          </ol>
                          <p className="s-text mb-4 fw-medium">Now you are logged in to your eToro account! Woo-hoo!</p>
                          <p className="s-text mb-4">You can move on to complete the profile you have just created successfully.</p>
                          <div className="box primary gap-4 d-flex align-items-center flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                If you don&apos;t find the verification link in your inbox, check your spam folder, maybe it landed there. If you don&apos;t find the verification link in your inbox, check your spam folder, maybe it landed there. If you don&apos;t find the verification link in your
                                inbox, check your spam folder, maybe it landed there.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepAccountCreate} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={1} />

                      <button onClick={() => stepSecondCompleted && setStepThird(2)} data-next-step="2" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                        Next <i className="ph ph-arrow-right"></i>
                      </button>
                    </div>

                    <div className={`step ${stepThird == 2 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 2</p>
                          <p className="xl-text fw-semibold mb-2">Provide your personal data</p>
                          <p className="s-text mb-3 mb-lg-4">After you click the &apos;continue&apos; button in &quot;Complete your profile&quot;, the first question you will be asked is whether you allow eToro to track your activity.</p>
                          <p className="s-text">The next registration steps are easy and quick to complete.</p>
                          <ol className="mb-3 list-number">
                            <li className="s-text">
                              Fill in some <span className="fw-medium">personal information</span>
                            </li>
                            <li className="s-text">
                              Verify your <span className="fw-medium">phone number.</span>
                            </li>
                          </ol>
                          <p className="s-text mb-4">
                            When you enter your phone number, you will be sent a <span className="fw-medium">verification code via SMS.</span>
                          </p>
                          <div className="box primary gap-4 d-flex align-items-center flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                Accepting activity tracking is optional. eToro uses this data to improve their product, but you can access all features even if you disable it. Accepting activity tracking is optional. eToro uses this data to improve their product, but you can access all features even
                                if you disable it.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepProvideData} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={2} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(1)} data-prev-step="1" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(3)} data-next-step="3" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 3 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 3</p>
                          <p className="xl-text fw-semibold mb-2">Investing experience and financial knowledge</p>
                          <p className="s-text mb-3 mb-lg-4">
                            Next you will get questions about your <span className="fw-medium">investing experience</span> and <span className="fw-medium">financial knowledge</span>.
                          </p>
                          <p className="s-text mb-3 mb-lg-4">
                            These questions are about the frequency of your earlier investments. Just <span className="fw-medium">choose &quot;never&quot;</span> if you are an absolute beginner.
                          </p>
                          <p className="s-text mb-3 mb-lg-4">After a few introductory questions, you will be asked to fill out a trading knowledge assessment.</p>

                          <p className="s-text mb-4">
                            When you enter your phone number, you will be sent a <span className="fw-medium">verification code via SMS.</span>
                          </p>
                          <div className="box primary gap-4 d-flex align-items-center flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                Answer these questions based on your <span className="fw-medium">actual experience.</span> eToro has to make this assessment to decide (for your own protection) whether to limit your access to instruments or trading forms that might be too risky for you. You will be
                                able to trade shares regardless of your answers.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepExperience} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={3} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(2)} data-prev-step="2" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(4)} data-next-step="4" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 4 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 4</p>
                          <p className="xl-text fw-semibold mb-2">Planned investments</p>

                          <p className="s-text mb-3 mb-lg-4">When you have completed the questionnaire, they&apos;ll ask you about your planned investments, your purpose of trading and your attitude to risk.</p>

                          <ol className="list-number">
                            <li className="s-text">
                              <span className="fw-medium">Planned investments:</span> They&apos;ll ask you about what instruments you plan to trade, for example, stocks, cryptos etc.
                            </li>
                            <li className="s-text">
                              <span className="fw-medium">Purpose of trading:</span>This question is about your primary purpose of trading with eToro. Your options here include “short-term returns” or “future planning”, among others.
                            </li>
                            <li className="s-text">
                              <span className="fw-medium">Your Attitude to Risk:</span> Here, the broker would like to know how much you&apos;re willing to invest - and potentially lose - so that they can help you with your trading strategies in the future.
                            </li>
                          </ol>

                          <p className="s-text mb-4">
                            When you enter your phone number, you will be sent a <span className="fw-medium">verification code via SMS.</span>
                          </p>
                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                This was the part of the registration that <span className="fw-medium">took me the longest</span> to fill out, because I thought about my answers carefully; I wasn&apos;t sure how this would affect my future activities and I wasn&apos;t 100% sure about my answers.
                                This was the part of the registration that took me the longest to fill out, because I thought about my answers carefully.
                              </p>
                            </div>
                          </div>
                          <div className="box primary gap-4 d-flex align-items-center flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={user2} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Rebeka</p>
                            </div>
                            <div>
                              <p className="s-text">
                                This was the part of the registration that <span className="fw-medium">took me the longest</span> to fill out, because I thought about my answers carefully; I wasn&apos;t sure how this would affect my future activities and I wasn&apos;t 100% sure about my answers.
                                This was the part of the registration that took me the longest to fill out, because I thought about my answers carefully.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepInvestment} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={4} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(3)} data-prev-step="3" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(5)} data-next-step="5" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 5 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 5</p>
                          <p className="xl-text fw-semibold mb-2">Scan and upload your ID</p>

                          <p className="s-text mb-3 mb-lg-4">You&apos;re almost there!</p>
                          <p className="s-text mb-3 mb-lg-4">
                            Now you&apos;ll need to <span className="fw-medium">upload some documents.</span>
                          </p>
                          <p className="s-text mb-3 mb-lg-4">
                            First, you&apos;ll need your <span className="fw-medium">ID card or passport.</span> If you go with your ID, you must take a photo of the front and back of the card as well. You can upload an <span className="fw-medium">existing photo,</span> or simply enable your phone
                            camera and take a <span className="fw-medium">fresh picture.</span>
                          </p>

                          <ol className="list-number">
                            <li className="s-text">
                              <span className="fw-medium">Planned investments:</span> They&apos;ll ask you about what instruments you plan to trade, for example, stocks, cryptos etc.
                            </li>
                            <li className="s-text">
                              <span className="fw-medium">Purpose of trading:</span>This question is about your primary purpose of trading with eToro. Your options here include “short-term returns” or “future planning”, among others.
                            </li>
                            <li className="s-text">
                              <span className="fw-medium">Your Attitude to Risk:</span> Here, the broker would like to know how much you&apos;re willing to invest - and potentially lose - so that they can help you with your trading strategies in the future.
                            </li>
                          </ol>

                          <p className="s-text mb-4">
                            When you enter your phone number, you will be sent a <span className="fw-medium">verification code via SMS.</span>
                          </p>
                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                When uploading a document, please ensure that the file format is one of the following: JPG, PNG, GIF, TIF, or PDF. The resolution of the document should be at least 300 DPI (dots per inch) to guarantee high quality and clarity. Additionally, make sure the document is
                                properly scanned and legible, with all important information clearly visible.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepId} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={5} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(4)} data-prev-step="4" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(6)} data-next-step="6" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 6 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 6</p>
                          <p className="xl-text fw-semibold mb-2">Submit proof of address</p>

                          <p className="s-text mb-3 mb-lg-4">
                            At this step, eToro will ask you to upload a legible copy of a recent <span className="fw-medium">utility bill</span> or <span className="fw-medium">bank statement.</span>
                          </p>

                          <p className="s-text mb-1">Your document must include the following:</p>

                          <ul className="list-disc mb-3 mb-lg-4">
                            <li className="s-text">Your full name</li>
                            <li className="s-text">Current home address</li>
                            <li className="s-text">Issuing institution (name or logo)</li>
                            <li className="s-text">
                              Date of issue <span className="fw-medium">(must be within last 3 months)</span>
                            </li>
                          </ul>

                          <p className="s-text mb-1">eToro accepts:</p>
                          <ul className="list-disc mb-3 mb-lg-4">
                            <li className="s-text">Bank statement</li>
                            <li className="s-text">Credit card statement</li>
                            <li className="s-text">Electricity bill</li>
                            <li className="s-text">Councel Tax bill</li>
                            <li className="s-text">Tax letter/bill</li>
                            <li className="s-text">Televesion Service bill</li>
                            <li className="s-text">Internet bill</li>
                            <li className="s-text">Tax Statement</li>
                            <li className="s-text">Work permit (showing residential address)</li>
                            <li className="s-text">Landline phone bill</li>
                          </ul>

                          <p className="s-text mb-4">
                            Next, you&apos;ll need to enter your <span className="fw-semibold">tax identification number</span> and answer a few questions about your <span className="fw-medium">financial status </span> and sources of income as the last step of your registration.
                          </p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                Important! Do not edit the uploaded documents (e.g. by blurring some parts); otherwise, they will not be accepted. The only thing eToro will want to see is whether you are an existing person registered at an existing address. So no need to hide any information.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepSubmitProof} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={6} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(5)} data-prev-step="5" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(7)} data-next-step="7" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 7 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 7</p>
                          <p className="xl-text fw-semibold mb-2">Pending verification</p>

                          <p className="s-text fw-medium mb-3 mb-lg-4">Your account registration is ready! Woo-hoo!</p>

                          <p className="s-text mb-1">
                            Now you just have to wait for <span className="fw-medium">eToro to accept your registration.</span> It takes about <span className="fw-medium">1-3 working days</span> for them to check that the documents you have uploaded match the information you have provided.
                          </p>
                          <p className="s-text mb-1">
                            If they find something wrong, <span className="fw-medium">they will send you an email</span>asking for clarification and/or additional documents.
                          </p>
                          <p className="s-text mb-1">
                            <span className="fw-medium"> You can&apos;t trade until the account is approved,</span> but you can make a deposit.
                          </p>
                          <p className="s-text mb-1">Let&apos;s see how to do that! First, click the “Deposit Funds” button.</p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                Important! Do not edit the uploaded documents (e.g. by blurring some parts); otherwise, they will not be accepted. The only thing eToro will want to see is whether you are an existing person registered at an existing address. So no need to hide any information.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepPending} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={7} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(6)} data-prev-step="6" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(8)} data-next-step="8" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 8 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 8</p>
                          <p className="xl-text fw-semibold mb-2">Hurray, your account is ready to deposit!</p>

                          <p className="s-text mb-3 mb-lg-4">
                            After you tap the &apos;Deposit funds&apos; button, the app will navigate you to an easy-to-use interface where you can <span className="fw-medium">add your credit card data</span> and the <span className="fw-medium">amount you would like to deposit.</span>
                          </p>

                          <p className="s-text mb-1">
                            Please note that in most countries, the <span className="fw-medium">minimum deposit at eToro is $50</span> if you use a credit card. Deposits via bank transfer must be at least $500.
                          </p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                Since I deposited via <span className="fw-medium">credit card,</span> all I had to do was approve the transaction in the other app. After that, the <span className="fw-medium">amount appeared immediately</span> on the eToro interface. Since I deposited via credit
                                card, all I had to do was approve the transaction in the other app. After that, the amount appeared immediately on the eToro interface.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepReady} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={8} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(7)} data-prev-step="7" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(9)} data-next-step="9" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 9 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 9</p>
                          <p className="xl-text fw-semibold mb-2">Successful deposit</p>

                          <p className="s-text mb-3 mb-lg-4">Now all you have to do is wait until eToro verifies your account, after which you can start trading.</p>
                          <p className="s-text mb-3 mb-lg-4 fw-medium">Once your account has been accepted, come back and we&apos;ll help you through the steps of your first stock purchase!</p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                If by any chance your account doesn&apos;t get approved, you&apos;ll get your deposited money back to the bank account you sent it from in about 2 weeks. If by any chance your account doesn&apos;t get approved, you&apos;ll get your deposited money back to the bank
                                account you sent it from in about 2 weeks.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepReady} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={9} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(8)} data-prev-step="8" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(10)} data-next-step="10" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 10 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 10</p>
                          <p className="xl-text fw-semibold mb-2">Is your account verified? Let&apos;s trade!</p>

                          <p className="s-text mb-3 mb-lg-4">
                            You can see a magnifying glass in the bottom right corner called “discover”. Here you can find <span className="fw-medium">all the investment options</span> you can choose at eToro
                          </p>
                          <p className="s-text mb-3 mb-lg-4">In this guide, we&apos;ll show you how to buy a stock.</p>
                          <p className="s-text mb-3 mb-lg-4">
                            Now you&apos;ll need to decide <span className="fw-medium">what stock you want</span> to buy and click the chosen one. We are going to use the <span className="fw-medium">Amazon stock as an example.</span>
                          </p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={authorImg} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">I chose Amazon here.</p>
                            </div>
                          </div>
                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={user3} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                To get a feel for the process of buying stocks, any stock will do. But please make sure that you invest only a small amount first that you can afford to lose if things go wrong. We also have a nice article to give you some thoughts about how to start. To get a feel
                                for the process of buying stocks, any stock will do.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepVerified} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={10} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(9)} data-prev-step="9" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(11)} data-next-step="11" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 11 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 11</p>
                          <p className="xl-text fw-semibold mb-2">How to buy the chosen stock</p>

                          <p className="s-text mb-3 mb-lg-4">At this stage, you can check all the information about the chosen stock. You can see an overview and also check stats and charts.</p>
                          <p className="s-text mb-3 mb-lg-4">In case you have decided to buy the stock, you need to tap the green &apos;Invest&apos; button in the bottom right corner.</p>
                          <p className="s-text mb-3 mb-lg-4">Before you can buy the stock, you have to fill out a W-8BEN Form. We will show you what that is in the next step.</p>
                        </div>
                        <Image src={stepChoosing} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={11} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(10)} data-prev-step="10" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(12)} data-next-step="12" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 12 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 12</p>
                          <p className="xl-text fw-semibold mb-2">W-8BEN Form</p>

                          <p className="s-text mb-3 mb-lg-4">If non-US users want to trade on eToro and invest in US stocks, they need to sign IRS form W-8BEN to be able to do that.</p>

                          <p className="s-text mb-3 mb-lg-4">It&apos;s not complicated at all:</p>
                          <ul className="mb-4 list-disc s-text">
                            <li>just check that all personal data is correct,</li>
                            <li>fill the checkboxes</li>
                            <li>and click &apos;submit&apos;.</li>
                          </ul>
                          <p className="s-text mb-3 mb-lg-4">After you have submitted the form, you&apos;ll get a signed version of it in an email.</p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={user3} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                A W-8BEN form is a tax document used to certify that your country of residence for tax purposes is outside of the United States. Its purpose is to avoid double taxation. The form only needs to be filled out once every three years. A W-8BEN form is a tax document used
                                to certify that your country of residence.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepForm} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={12} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(11)} data-prev-step="11" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                        <button onClick={() => setStepThird(13)} data-next-step="13" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 13 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 13</p>
                          <p className="xl-text fw-semibold mb-2">Make your first trade</p>

                          <p className="s-text mb-3 mb-lg-4">
                            Okay. So, after the form, <span className="fw-medium">you can actually buy your first stock.</span>
                          </p>

                          <p className="s-text mb-3 mb-lg-4">Here you have two options:</p>
                          <ol className="mb-4 list-number s-text">
                            <li>
                              You enter the <span className="fw-medium">number of stocks</span> you&apos;d like to buy
                            </li>
                            <li>
                              You enter the exact <span className="fw-medium">USD amount</span> you want to buy stocks for.
                            </li>
                          </ol>
                          <p className="s-text mb-3 mb-lg-4">
                            Please note that there are companies where there is a <span className="fw-medium">minimum amount</span> you have to buy. For example, in Amazon&apos;s case the minimum amount is $10.
                          </p>
                          <p className="s-text mb-3 mb-lg-4">
                            Once you&apos;ve chosen the stock that&apos;s right for you and specified how much you want to buy, <span className="fw-medium">just click &apos;Open Trade&apos;.</span>
                          </p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={user3} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                In case leveraged trading is enabled for you (based on your answers to the assessment questions at registration), <span className="fw-medium">make sure you are not using leverage</span> when you make your first trades. Leave leverage at 1x. In case leveraged trading
                                is enabled for you (based on your answers to the assessment questions at registration).
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepFirstTrade} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={13} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(12)} data-prev-step="12" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          Prev
                        </button>
                        <button onClick={() => setStepThird(14)} data-next-step="14" className="btn btn-secondary open-next next-step fw-semibold d-inline-flex align-items-center gap-2">
                          Next <i className="ph ph-arrow-right"></i>
                        </button>
                      </div>
                    </div>

                    <div className={`step ${stepThird == 14 ? "" : "d-none"}`}>
                      <div className="d-flex flex-column flex-md-row gap-40 mb-4">
                        <div>
                          <p className="fw-medium text-primary s-text mb-2">Step 14</p>
                          <p className="xl-text fw-semibold mb-2">You just bought your first stock!</p>

                          <p className="s-text mb-3 mb-lg-4">After that, your stock(s) will appear in your portfolio.</p>

                          <p className="s-text fw-medium mb-3 mb-lg-4">👏 You did it! 👏</p>
                          <p className="s-text fw-medium mb-3 mb-lg-4">Congratulations, you have just bought your first stock!</p>

                          <p className="s-text mb-3 mb-lg-4">
                            This is a <span className="fw-medium"> great accomplishment</span> and demonstrates your growing knowledge and understanding of how you can take your financials in your own hands. <span className="fw-medium">Keep up the good work and smart decision making!</span>🍾🚀📈
                          </p>

                          <p className="s-text mb-3 mb-lg-4">
                            Once you&apos;ve chosen the stock that&apos;s right for you and specified how much you want to buy, <span className="fw-medium">just click &apos;Open Trade&apos;.</span>
                          </p>

                          <div className="box primary gap-3 gap-md-4 d-flex align-items-center mb-4 flex-wrap">
                            <div className="d-flex flex-column align-items-center gap-2 flex-shrink-0">
                              <Image src={user3} width="48" height="48" className="rounded-circle" alt="" />
                              <p className="m-text fw-medium">Adam Nasli</p>
                            </div>
                            <div>
                              <p className="s-text">
                                If you want to <span className="fw-medium">learn more about investing in stocks,</span> check our articles about investing in equity markets. After your first successful stock trade on your own, regular investing might be a good next step. It is an easy and popular
                                strategy for new stock investors.
                              </p>
                            </div>
                          </div>
                        </div>
                        <Image src={stepFirstStock} className="img-fluid flex-shrink-0" alt="" />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 gap-md-4">
                        <a href="#" className="fw-semibold underline">
                          Need Some Help
                        </a>
                        <a href="#" className="btn btn-outline-primary d-flex gap-2 align-items-center">
                          Visit Site <i className="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <RangeSlider max={14} value={14} />

                      <div className="d-flex gap-3 gap-md-4">
                        <button onClick={() => setStepThird(12)} data-prev-step="12" className="btn btn-outline-secondary prev-step fw-semibold d-inline-flex align-items-center gap-2">
                          <i className="ph ph-arrow-left"></i> Prev
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TradeGuide;
