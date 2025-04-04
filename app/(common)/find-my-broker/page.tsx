"use client";
import findBroker from "@/public/images/find-broker.png";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { brokers } from "@/components/home-two/HighestRatedBroker";
import { formatString } from "../broker-review/[title]/page";
const steplist = ["Preferences", "Step 01", "Step 02", "Step 03", "Step 04", "Step 05", "Step 06", "Results"];
const assets = [
  { id: "stock", label: "Stocks and ETFs (e.g. Apple or Tesla shares)" },
  { id: "forex", label: "Forex (e.g. EURUSD or GBPUSD)" },
  { id: "option", label: "Options (e.g. Apple call option)" },
  { id: "future", label: "Futures (e.g. e-mini S&P 500 futures)" },
  { id: "bonds", label: "Funds (e.g. BlackRock Equity Dividend Fund)" },
  { id: "cfds", label: "CFDs (e.g. Apple share CFD)" },
  { id: "fund", label: "Bonds (e.g. US treasuries)" },
  { id: "crypto", label: "Cryptos (e.g. Bitcoin or Ethereum)" },
  { id: "unknown", label: "I don't know" },
];

const additionalServices = [
  { id: "penny", label: "Penny stocks" },
  { id: "real_stock", label: "Short selling of real stocks" },
  { id: "esg", label: "Great ESG services" },
  { id: "quick_stock", label: "Quick stock availability after IPO" },
  { id: "no_rule", label: 'No "Pattern Day Trading" rule' },
  { id: "margin_trading", label: "Margin trading" },
  { id: "isa", label: "ISA (for UK customers)" },
  { id: "ira", label: "IRA (for US customers)" },
  { id: "unknown-additional", label: "I don't know" },
];
const FindMyBroker = () => {
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState("");
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [familiar, setFamiliar] = useState("");
  const [cost, setCost] = useState("");
  const [dealTime, setDealTime] = useState("");
  const [money, setMoney] = useState("");
  const [additionals, setAdditionals] = useState<string[]>([]);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSelectedAssets((prevSelected) => {
      if (checked) {
        return [...prevSelected, id];
      } else {
        return prevSelected.filter((option) => option !== id);
      }
    });
  };

  const handleAdditionals = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setAdditionals((prevSelected) => {
      if (checked) {
        return [...prevSelected, id];
      } else {
        return prevSelected.filter((option) => option !== id);
      }
    });
  };
  return (
    <main>
      <section className="hero-breadcrumb extended overflow-visible">
        <div className="container">
          <div className="row g-4">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Find My Broker</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Tools</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Find My Broker
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="find-broker overflow-visible">
        <div className="container">
          <div className="steps">
            <div className="inner">
              {steplist.map((currentStep, i) => (
                <div key={currentStep} className="step-box">
                  <div className={`icon f-center ${step == i + 1 ? "" : step >= i + 1 ? "check" : "empty"}`}>
                    <span></span>
                    <i className="ph ph-check"></i>
                  </div>
                  <p className="s-text fw-medium">{currentStep}</p>
                </div>
              ))}
            </div>
          </div>
          <form id="multiStepForm">
            {/* <!-- basic preferences --> */}
            <div data-step="1" className={`row step g-4 align-items-center pb-120 pt-5 pt-xl-0 ${step === 1 ? "" : "d-none"}`}>
              <div data-aos="zoom-in-down" className="col-lg-6 position-relative z-2">
                <h1 className="fw-semibold mb-3 mb-lg-4">Get a personalized broker recommendation</h1>
                <div className="bar d-flex align-items-center gap-2 mb-4">
                  <span className="f-center text-primary fs-4">
                    <i className="ph ph-users-three"></i>
                  </span>
                  <p className="fw-medium m-text">125,500 people already found a broker via this tool!</p>
                </div>
                <p className="m-text mb-4">Your broker toplist will be selected based on your answers.</p>
                <h4 className="fw-semibold mb-3">Get a personalized broker recommendation</h4>
                <p className="m-text mb-32">Yes, you can open an account at Oanda if you live in Bangladesh!</p>
                <div className="radius-8 mb-32 bg-white rounded-3">
                  <select name="sortby" onChange={(e) => setCountry(e.target.value)} className="select">
                    <option value="">Select Country</option>
                    <option value="bd">Bangladesh</option>
                    <option value="in">India</option>
                    <option value="pk">Pakistan</option>
                    <option value="uae">UAE</option>
                    <option value="usa">USA</option>
                    <option value="dbi">Dubai</option>
                    <option value="au">Australia</option>
                    <option value="eg">Egypt</option>
                  </select>
                </div>
                <button onClick={() => setStep(2)} type="button" data-next-step="2" className="btn btn-secondary next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={country === ""}>
                  Find the best broker for me <i className="ph ph-arrow-right"></i>
                </button>
              </div>
              <div data-aos="zoom-in-up" className="col-lg-6 col-xl-5 offset-xl-1">
                <Image src={findBroker} className="img-fluid" alt="" />
              </div>
            </div>

            {/* <!-- step 2 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 2 ? "" : "d-none"}`} data-step="2">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">Choose the most important assets for you!</h2>
                  <div className="d-flex align-items-center gap-1 mb-40">
                    <i className="ph ph-info"></i> More Info
                  </div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    {assets.map(({ id, label }) => (
                      <div key={id} className="custom-checkbox">
                        <input type="checkbox" id={id} checked={selectedAssets.includes(id)} onChange={handleCheckboxChange} />
                        <label htmlFor={id} className="m-text">
                          {label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => setStep(3)} type="button" className="btn btn-secondary mb-3 next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={selectedAssets.length == 0}>
                    Next Step <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => setStep(1)} type="button" className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(2, 6).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- step 3 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 3 ? "" : "d-none"}`} data-step="3">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">How familiar are you with trading and investing?</h2>
                  <div className="d-flex align-items-center gap-1 mb-40">
                    <i className="ph ph-info"></i> More Info
                  </div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setFamiliar(e.target.value)} value={"first"} id="first" name="experience" />
                      <label htmlFor="first" className="m-text fw-medium">
                        I am a first-timer with no experience
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setFamiliar(e.target.value)} value={"simple"} id="simple" name="experience" />
                      <label htmlFor="simple" className="m-text fw-medium">
                        I&apos;ve already made a few simple transactions
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setFamiliar(e.target.value)} value={"expert"} id="expert" name="experience" />
                      <label htmlFor="expert" className="m-text fw-medium">
                        I have experience with various products and different trading strategies
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setFamiliar(e.target.value)} value={"professional"} id="professional" name="experience" />
                      <label htmlFor="professional" className="m-text fw-medium">
                        I am a professional and fully confident
                      </label>
                    </div>
                  </div>

                  <button onClick={() => setStep(4)} type="button" className="btn btn-secondary mb-3 next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={!familiar}>
                    Next Step <i className="ph ph-arrow-right"></i>
                  </button>
                  <button type="button" onClick={() => setStep(2)} className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(3, 7).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- step 4 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 4 ? "" : "d-none"}`} data-step="4">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">Brokers charge fees, not just for trading. How cost conscious are you?</h2>
                  <div className="d-flex align-items-center gap-1 mb-40">
                    <i className="ph ph-info"></i> More Info
                  </div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setCost(e.target.value)} value={"resonable"} id="resonable" name="fee" />
                      <label htmlFor="resonable" className="m-text fw-medium">
                        I&apos;m fine with reasonable fees if the services are exceptional
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setCost(e.target.value)} value={"basic"} id="basic" name="fee" />
                      <label htmlFor="basic" className="m-text fw-medium">
                        I want to in fees, I only need basic functions
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setCost(e.target.value)} value={"zero"} id="zero" name="fee" />
                      <label htmlFor="zero" className="m-text fw-medium">
                        I want a zero-commission broker, I only want to pay what&apos;s absolutely necessary
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setCost(e.target.value)} value={"not-know"} id="not-know" name="fee" />
                      <label htmlFor="not-know" className="m-text fw-medium">
                        I Don&apos;t Know
                      </label>
                    </div>
                  </div>

                  <button onClick={() => setStep(5)} type="button" className="btn btn-secondary mb-3 next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={!cost}>
                    Next Step <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => setStep(3)} type="button" className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(4, 7).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- step 5 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 5 ? "" : "d-none"}`} data-step="5">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">How often do you want to deal with your investments and trades?</h2>
                  <div className="d-flex align-items-center gap-1 mb-40">
                    <i className="ph ph-info"></i> More Info
                  </div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setDealTime(e.target.value)} value={"daily"} id="daily" name="often" />
                      <label htmlFor="daily" className="m-text fw-medium">
                        Daily
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setDealTime(e.target.value)} value={"weekly"} id="weekly" name="often" />
                      <label htmlFor="weekly" className="m-text fw-medium">
                        Weekly
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setDealTime(e.target.value)} value={"monthly"} id="monthly" name="often" />
                      <label htmlFor="monthly" className="m-text fw-medium">
                        Monthly
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setDealTime(e.target.value)} value={"yearly"} id="yearly" name="often" />
                      <label htmlFor="yearly" className="m-text fw-medium">
                        Yearly
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setDealTime(e.target.value)} value={"not-know"} id="not-know-often" name="often" />
                      <label htmlFor="not-know-often" className="m-text fw-medium">
                        I Don&apos;t Know
                      </label>
                    </div>
                  </div>

                  <button onClick={() => setStep(6)} type="button" className="btn btn-secondary mb-3 next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={!dealTime}>
                    Next Step <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => setStep(4)} type="button" className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(4, 8).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- step 6 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 6 ? "" : "d-none"}`} data-step="6">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">How much money would you like to deposit?</h2>
                  <div className="d-flex align-items-center gap-1 mb-40">
                    <i className="ph ph-info"></i> More Info
                  </div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="less50" value="less50" name="deposit" />
                      <label htmlFor="less50" className="m-text fw-medium">
                        Less than $50
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="50_100" value="50_100" name="deposit" />
                      <label htmlFor="50_100" className="m-text fw-medium">
                        $51-$200
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="201_500" value="201_500" name="deposit" />
                      <label htmlFor="201_500" className="m-text fw-medium">
                        $201-$500
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="501_1000" value="501_1000" name="deposit" />
                      <label htmlFor="501_1000" className="m-text fw-medium">
                        $501-$1,000
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="1001_2000" value="1001_2000" name="deposit" />
                      <label htmlFor="1001_2000" className="m-text fw-medium">
                        $1,001-$2,000
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="more_then_2000" value="more_then_2000" name="deposit" />
                      <label htmlFor="more_then_2000" className="m-text fw-medium">
                        More than $2,000
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="radio" onChange={(e) => setMoney(e.target.value)} id="not_know" value="not_know" name="deposit" />
                      <label htmlFor="not-know-deposit" className="m-text fw-medium">
                        I Don&apos;t Know
                      </label>
                    </div>
                  </div>

                  <button onClick={() => setStep(7)} type="button" className="btn btn-secondary mb-3 next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={!money}>
                    Next Step <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => setStep(5)} type="button" className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(2, 5).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- step 7 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 7 ? "" : "d-none"}`} data-step="7">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">What additional products/services are important to you?</h2>
                  <div className="d-flex align-items-center gap-1 mb-40">
                    <i className="ph ph-info"></i> More Info
                  </div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    {additionalServices.map(({ id, label }) => (
                      <div key={id} className="custom-checkbox">
                        <input type="checkbox" id={id} checked={additionals.includes(id)} onChange={handleAdditionals} />
                        <label htmlFor={id} className="m-text">
                          {label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => setStep(8)} type="button" className="btn btn-secondary mb-3 next-step fw-semibold d-inline-flex align-items-center gap-2" disabled={additionals.length == 0}>
                    Next Step <i className="ph ph-arrow-right"></i>
                  </button>
                  <button onClick={() => setStep(6)} type="button" className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(4, 7).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- step 8 --> */}
            <div className={`step pt-5 pt-xl-0 pb-120 ${step === 8 ? "" : "d-none"}`} data-step="8">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h2 className="h1 mb-3 mb-lg-4 fw-semibold">Ta-da! 🎉</h2>
                  <div className="d-flex align-items-center fw-medium gap-1 mb-40">Here is a personalized list of brokers that best suit your individual preferences.</div>

                  <div className="d-flex flex-column gap-3 mb-40">
                    <p className="d-flex align-items-center gap-2 fw-medium">
                      <span className="f-center fs-5 text-primary">
                        <i className="ph ph-arrow-circle-right"></i>
                      </span>
                      Visit their websites to learn more and open an account.
                    </p>
                    <p className="d-flex align-items-center gap-2 fw-medium">
                      <span className="f-center fs-5 text-primary">
                        <i className="ph ph-download-simple"></i>
                      </span>
                      Or save your list, so you can dig deeper later.
                    </p>
                  </div>

                  <button type="button" className="btn btn-secondary mb-3 fw-semibold d-inline-flex align-items-center gap-2">
                    <i className="ph ph-bookmark-simple"></i> Save My Toplist
                  </button>
                  <button onClick={() => setStep(7)} type="button" className="bg-transparent prev-step d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                    <i className="ph ph-arrow-left"></i> Previous Step
                  </button>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="box primary">
                    <h4 className="fw-semibold bb-n40">Your broker toplist</h4>
                    <div className="d-flex flex-column gap-3 gap-lg-4 bb-n40">
                      {brokers.slice(3, 6).map(({ image, rating, title }, index) => (
                        <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three bg-white d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 gap-sm-3 align-items-center">
                            <div className="bg-success text-white h-100 px-1 d-none d-sm-block rounded-5 fw-semibold py-3">{index + 1}</div>
                            <div className="img f-center rounded-circle">
                              <Image src={image} alt="" />
                            </div>
                            <div>
                              <h4 className="fw-semibold mb-2">{title}</h4>
                              <p className="text-n500 m-text d-flex align-items-center gap-4">
                                Beginner score:
                                <span className="d-flex align-items-center gap-2">
                                  <span className="f-center fs-5 text-secondary">
                                    <i className="ph ph-star-fill"></i>
                                  </span>{" "}
                                  <span className="fw-medium">{rating}</span>/5
                                </span>
                              </p>
                            </div>
                          </div>
                          <button type="button" className="arrow-btn d-none d-sm-flex text-secondary fs-4 f-center rounded-circle border border-secondary">
                            <i className="ph ph-arrow-up-right"></i>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <Link href="/compare-brokers" type="button" className="bg-transparent d-flex align-items-center gap-2 fw-semibold text-primary m-text">
                      Compare This Brokers <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FindMyBroker;
