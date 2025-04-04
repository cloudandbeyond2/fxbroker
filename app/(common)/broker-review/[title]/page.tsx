import Image from "next/image";
import invest5 from "@/public/images/investment/investment-5.png";
import withdrawal from "@/public/images/withdrawal.png";
import globe from "@/public/images/globe.png";
import createAccount from "@/public/images/create-account.png";
import lookAndFeel from "@/public/images/look-and-feel.png";
import newOrder from "@/public/images/new-order.png";
import desktopApp from "@/public/images/desktop-app.png";
import currencyPair from "@/public/images/currency-pair.png";
import cheetSheet from "@/public/images/cheat-sheet.png";
import author from "@/public/images/author.png";
import ReadMore from "@/components/shared/ReadMore";
import Hero from "@/components/broker-review/Hero";
import Chart from "@/components/broker-review/Chart";
import { brokers } from "@/components/home-two/HighestRatedBroker";
import { Metadata } from "next";
import Link from "next/link";
export const formatString = (str: string) => {
  return str.split(" ").join("-").toLowerCase();
};

export function generateStaticParams() {
  return brokers.map((post) => ({
    title: formatString(post.title),
  }));
}

const BrokerReview = ({ params }: { params: { title: string } }) => {
  const broker = brokers.find((broker) => formatString(broker.title) === params.title);
  if (!broker) {
    return "post not found"; // or return an error component
  }
  return (
    <main>
      <Hero title={broker.title} />

      {/* review */}
      <section className="broker-reviews overflow-visible">
        <div className="nav-wrapper position-sticky">
          <div className="container">
            <ul className="navigation-top" id="review-nav">
              <li>
                <a href="#key-data">Key data</a>
              </li>
              <li>
                <a href="#fees">Fees</a>
              </li>
              <li>
                <a href="#safety">Safety</a>
              </li>
              <li>
                <a href="#deposit">Deposit and withdrawals</a>
              </li>
              <li>
                <a href="#account-open">Account opening</a>
              </li>
              <li>
                <a href="#mobile-app">Mobile app</a>
              </li>
              <li>
                <a href="#desktop-platform">Desktop platform</a>
              </li>
              <li>
                <a href="#product-selection">Product selection</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">
            <div className="row g-4 ">
              <div data-bs-spy="scroll" data-bs-root-margin="0px 0px -40%" data-bs-target="#review-nav" className="col-lg-8">
                <div className="main-content mb-4">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#key-data" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Key Data</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="key-data" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <ul className="mb-32 d-flex flex-column gap-3">
                            <li className="d-flex align-content-center gap-2">
                              <span className="f-center text-primary fs-5">
                                <i className="ph ph-shield-check-fill"></i>
                              </span>{" "}
                              <span className="fw-medium l-text">Regulated and trusted. Tested via live trading.</span>
                            </li>
                            <li className="d-flex align-content-center gap-2">
                              <span className="f-center text-primary fs-5">
                                <i className="ph ph-users-three-fill"></i>
                              </span>{" "}
                              <span className="fw-medium l-text">18,972 people chose this broker</span>
                            </li>
                            <li className="d-flex align-content-center gap-2">
                              <span className="f-center text-primary fs-5">
                                <i className="ph ph-map-pin-bold"></i>
                              </span>{" "}
                              <span className="fw-medium l-text">Available in Bangladesh</span>
                            </li>
                          </ul>
                          <h4 className="fw-semibold mb-3">Why choose Oanda</h4>
                          <p className="m-text text-n500 mb-32">
                            If you take your forex trading seriously, Oanda is a smart pick. It&apos;s an established US-based broker with lots of sophisticated platform features and research tools. As an algo trader, I was mightily impressed by Oanda&apos;s API options. Forex trading fees are also
                            low, though not always the best on the market. You can choose from a variety of well-known platforms catering to all needs, including MetaTrader, TradingView, as well as Oanda&apos;s own neat mobile app.
                          </p>
                          <div className="box-lg mb-32">
                            <div className="row">
                              <div className="col-sm-6">
                                <p className="l-text mb-4 fw-medium">Pros</p>
                                <ul className="d-flex flex-column gap-3">
                                  <li className="d-flex align-items-center gap-2">
                                    <span className="text-success fs-5 f-center">
                                      <i className="ph ph-check-circle-fill"></i>
                                    </span>
                                    <span className="m-text text-n500">Great trading platforms</span>
                                  </li>
                                  <li className="d-flex align-items-center gap-2">
                                    <span className="text-success fs-5 f-center">
                                      <i className="ph ph-check-circle-fill"></i>
                                    </span>
                                    <span className="m-text text-n500">Great trading platforms</span>
                                  </li>
                                  <li className="d-flex align-items-center gap-2">
                                    <span className="text-success fs-5 f-center">
                                      <i className="ph ph-check-circle-fill"></i>
                                    </span>
                                    <span className="m-text text-n500">Great trading platforms</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-sm-6">
                                <p className="l-text mb-4 fw-medium">Cons</p>
                                <ul className="d-flex flex-column gap-3">
                                  <li className="d-flex align-items-start gap-2">
                                    <span className="text-danger fs-5 f-center">
                                      <i className="ph ph-x-circle-fill"></i>
                                    </span>
                                    <span className="m-text text-n500">Only FX and CFD available for most clients (stocks only in EU)</span>
                                  </li>
                                  <li className="d-flex align-items-start gap-2">
                                    <span className="text-danger fs-5 f-center">
                                      <i className="ph ph-x-circle-fill"></i>
                                    </span>
                                    <span className="m-text text-n500">No stock exchange listing and banking background</span>
                                  </li>
                                  <li className="d-flex align-items-start gap-2">
                                    <span className="text-danger fs-5 f-center">
                                      <i className="ph ph-x-circle-fill"></i>
                                    </span>
                                    <span className="m-text text-n500">Customer support is not 24/7</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="box-lg mb-32">
                            <div className="broker-box p-0 border-0">
                              <div className="inner border-0 p-0">
                                <div className="d-flex align-items-center gap-3 bb-n40">
                                  <div className="img f-center">
                                    <Image width="52" height="52" src={invest5} alt="" />
                                  </div>
                                  <div>
                                    <h4 className="fw-semibold mb-3">Oanda</h4>
                                    <div className="d-flex align-items-center justify-content-between">
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
                                            <p className="m-text fw-medium text-end whitespace-nowrap">$0</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="w-75 py-1">
                                            <p className="m-text fw-medium">Inactivity Fee:</p>
                                          </td>
                                          <td className="w-25 py-1">
                                            <p className="m-text fw-medium text-end">Low</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="w-75 py-1">
                                            <p className="m-text fw-medium">Index CFD Fee:</p>
                                          </td>
                                          <td className="w-25 py-1">
                                            <p className="m-text fw-medium text-end">Low</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <div className="col-sm-6">
                                    <table className="px-3 w-100">
                                      <tbody>
                                        <tr>
                                          <td className="w-75 py-1">
                                            <p className="m-text fw-medium">Investor Protection:</p>
                                          </td>
                                          <td className="w-25 py-1">
                                            <p className="m-text fw-medium text-end">$0</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="w-75 py-1">
                                            <p className="m-text fw-medium">Mobile Platform:</p>
                                          </td>
                                          <td className="w-25 py-1">
                                            <p className="m-text fw-medium whitespace-nowrap text-end">1-3 days</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <a href="#" className="btn btn-secondary fw-semibold f-center gap-2">
                                  Visit Oanda <i className="ph ph-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <h4 className="fw-semibold mb-4">See how the best brokers in Bangladesh compare to Oanda</h4>
                          <div className="box-lg">
                            <div className="mb-40 radius-8">
                              <select name="sortby" id="sortby" className="select">
                                <option value="newest">EURUSD Spread</option>
                                <option value="oldest">S&P 500 CFD Spread</option>
                                <option value="oldest">Minimum deposit</option>
                                <option value="oldest">Withdrawal fee</option>
                                <option value="oldest">Inactivity fee</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <Chart />
                            </div>
                            <a href="#" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                              Visit Oanda <i className="ph ph-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#fees" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Fees</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="fees" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about fees"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-32">Oanda has low forex and CFD fees. Withdrawal fees are low but not in all cases, while there&apos;s also a small inactivity fee.</p>

                                <div className="box-lg mb-32">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Pros</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Great trading platforms</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Great trading platforms</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Great trading platforms</span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Cons</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Only FX and CFD available for most clients (stocks only in EU)</span>
                                        </li>
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">No stock exchange listing and banking background</span>
                                        </li>
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Customer support is not 24/7</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <p className="m-text text-n500 mb-32">
                                  We compared Oanda&apos;s fees with two similar brokers we selected, Pepperstone and FXCM. These competitors were selected based on objective factors like products offered, client profile, fee structure, etc. See a more detailed comparison of Oanda alternatives.
                                </p>
                              </>
                            }
                            more={
                              <>
                                <h4 className="fw-semibold mb-4">Low FX fees</h4>
                                <p className="m-text text-n500 mb-32">All fees are built into the spread, so there is no separate commission charged. For example, the EUR/USD spread is 1.0.</p>
                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest">EURUSD Spread</option>
                                            <option value="oldest">GBPUSD Spread</option>
                                            <option value="oldest">AUDUSD Spread</option>
                                            <option value="oldest">JPYUSD Spread</option>
                                            <option value="oldest">USDCAD Spread</option>
                                          </select>
                                        </div>
                                      </th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest">FX Commision Per Lot</option>
                                            <option value="oldest">GBPUSD Spread</option>
                                            <option value="oldest">AUDUSD Spread</option>
                                            <option value="oldest">JPYUSD Spread</option>
                                            <option value="oldest">USDCAD Spread</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">1.0</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No commission is charged</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">0.1</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">$3.50 commission per lot</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">0.7</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No commission is charged</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <h4 className="fw-semibold mb-4">Low index CFD fees</h4>
                                <p className="m-text text-n500 mb-32">All index CFD fees are built into the spread. The spread for S&P 500 index CFDs is 0.3.</p>
                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest">EURUSD Spread</option>
                                            <option value="oldest">GBPUSD Spread</option>
                                            <option value="oldest">AUDUSD Spread</option>
                                            <option value="oldest">JPYUSD Spread</option>
                                            <option value="oldest">USDCAD Spread</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">1.0</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">0.1</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">0.1</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <h4 className="fw-semibold mb-4">Low Stock CFD fees</h4>
                                <p className="m-text text-n500 mb-32">The commission for stock CFD trading is the following: 0.06% commission.</p>
                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest">Apple CFD</option>
                                            <option value="oldest">Vodafone CFD</option>
                                            <option value="oldest">Apple CFD Spread</option>
                                            <option value="oldest">Vodafone CFD Spread</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">1.0</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">0.1</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">0.1</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                {/* <!-- low inactivity fee --> */}
                                <h4 className="fw-semibold mb-4">Low inactivity fee, no withdrawal fee</h4>
                                <p className="m-text text-n500 mb-32">There is no account or deposit fee. Oanda charges a reasonable $14 (£10) monthly inactivity fee if you don&apos;t use your account for trading for more than one year.</p>
                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest">Inactivity Fee</option>
                                            <option value="oldest">Custody Fee</option>
                                            <option value="oldest">Conversion Fee</option>
                                            <option value="oldest">Account Fee</option>
                                            <option value="oldest">Deposit Fee</option>
                                          </select>
                                        </div>
                                      </th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest">Inactivity Fee</option>
                                            <option value="oldest">Withdrawal Fee</option>
                                            <option value="oldest">Custody Fee</option>
                                            <option value="oldest">Account Fee</option>
                                            <option value="oldest">Deposit Fee</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          <i className="ph ph-check-circle-fill"></i>
                                        </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">$0</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-danger">
                                          <i className="ph ph-x-circle-fill"></i>
                                        </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">$0</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          <i className="ph ph-check-circle-fill"></i>
                                        </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">$0</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="m-text text-n500">The first debit/credit card withdrawal in each calendar month is free, but there&apos;s a charge for subsequent withdrawals. The withdrawal fee is rather high for bank transfers and PayPal (GBP, EUR, USD only).</p>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#safety" aria-expanded="true" aria-controls="collapseOne">
                          <h3 className="fw-semibold">Safety</h3>
                        </button>
                      </h2>
                      <div id="safety" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about safety"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-32">Oanda is regulated by top-tier authorities, but it doesn&apos;t have a banking license and is not listed on a stock exchange</p>

                                <div className="box-lg mb-32">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Pros</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Majority of clients belong to a top-tier financial authority</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Negative balance protection</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Financial information is publicly available</span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Cons</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Does not hold a banking license</span>
                                        </li>
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Not listed on stock exchange</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <h4 className="fw-semibold mb-3">Is Oanda regulated?</h4>
                                <p className="m-text text-n500 mb-32">Yes, it is regulated by several financial authorities worldwide, including top-tier regulators like the UK&apos;s Financial Conduct Authority (FCA).</p>

                                <h4 className="fw-semibold mb-4">Is Oanda safe?</h4>
                                <p className="m-text text-n500">To be certain that a brokerage is safe, we highly advise that you check two facts:.</p>
                              </>
                            }
                            more={
                              <>
                                <ul className="mb-32">
                                  <li>how you are protected if something goes wrong</li>
                                  <li>the background of the broker.</li>
                                </ul>
                                <p className="l-text mb-3">How you are protected</p>
                                <p className="m-text text-n500 mb-32">Oanda has several legal entities, each serving clients from different parts of the world. This is important because the investor protection amount and the regulator differ from entity to entity.</p>

                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Client Country</th>
                                      <th className="py-4 px-3">Investor Protection Amount</th>
                                      <th className="py-4 px-3">Regulator</th>
                                      <th className="py-4 px-3">Legal Entity</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">UK</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">£85,000</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Financial Conduct Authority (FCA)</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Europe Ltd</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">EU</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">£20,000</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Malta Financial Services Authority</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Europe Markets Ltd</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">US</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No Protection</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Commodity Trading Futures, Commission, National Futures Association</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Corporation</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Canada</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">CAD 1,000,000</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Canadian Investment Regulatory Organization (CIRO)</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA (Canada) Corporation</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Australia</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No protection </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Australian Securities and Investment Commission (ASIC) </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Europe Ltd</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Singapore </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No protection </span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Monetary Authority of Singapore (MAS)</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Asia Pacific Pte Ltd</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Japan</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No protection</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Financial Futures Association of Japan (FFAJ)</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Europe Ltd</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Other countries</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">No protection</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">British Virgin Islands Financial Services Commission</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">OANDA Europe Ltd</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="m-text text-n500 fw-medium mb-32">Oanda provides negative balance protection for forex spot and CFD trading, but only for retail clients from the European Union. Professional and non-EU clients are not covered by any negative balance protection.</p>
                                <p className="l-text mb-3">Background</p>
                                <p className="m-text text-n500 mb-32 pb-32 bb-n40">
                                  Oanda is based in the USA and was founded in 1996. The longer track record a broker has, the more proof we have that it has successfully weathered previous financial crises. Oanda publishes its annual financial statements and is regulated by a top-tier regulator.
                                  All of these are great markers of Oanda&apos;s safety.
                                </p>
                                <a href="#" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                                  Finde your safe broker <i className="ph ph-arrow-right"></i>
                                </a>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#deposit" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Deposit and withdrawal</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="deposit" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about deposit"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-40">Oanda charges no deposit and account fees. You can withdraw your money free of charge to a debit/credit card, but bank transfer withdrawals are quite costly.</p>

                                <div className="box-lg mb-32">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Pros</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Credit/Debit card available</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Free withdrawal</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">No deposit fee</span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Cons</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">High withdrawal fee for bank transfers</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <h4 className="fw-semibold mb-4">Account base currencies</h4>
                                <p className="m-text text-n500 mb-32">At Oanda, you can choose from the following 9 base currencies:</p>
                              </>
                            }
                            more={
                              <>
                                <table className="w-100 bordered-table mb-32">
                                  <thead>
                                    <tr className="bg-white">
                                      <th colSpan={3} className="py-4 px-3">
                                        Oanda base currencies
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">EUR</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">USD</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">GBP</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">AUD</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">CAD</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">CHF</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">HKD</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">JPY</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">SGD</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <p className="mb-32">This selection is average compared to competing brokers.</p>
                                <table className="w-100 bordered-table mb-32">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3 w-50">Broker</th>
                                      <th className="py-4 px-3 w-50">Number of base currencies</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">9</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">10</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">4</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="m-text mb-4">
                                  Why does this matter? For two reasons. If you fund your trading account in the same currency as your bank account or you trade assets in the same currency as your trading account base currency, you won&apos;t have to pay a conversion fee. A convenient way to save on
                                  currency
                                </p>
                                <p className="m-text mb-32">
                                  conversion fees is by opening a multi-currency bank account at a digital bank. These usually offer bank accounts in several currencies with great currency exchange rates, as well as free or cheap international bank transfers. Opening an account only takes a few
                                  minutes on your phone.
                                </p>
                                <h4 className="fw-semibold mb-4">Deposit fees and options</h4>
                                <p className="mb-32 m-text">Oanda charges no deposit fees.</p>

                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th className="w-50">
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="bank">Bank Transfer</option>
                                            <option value="card">Credit/Debit Cards</option>
                                            <option value="wallet">Electronic Wallets</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          <i className="ph ph-check-circle-fill"></i>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          <i className="ph ph-check-circle-fill"></i>
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          <i className="ph ph-check-circle-fill"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="m-text text-n500 mb-32">A bank transfer can take several business days, while payment with a credit/debit card is instant. You can only deposit money from accounts that are in your name.</p>

                                <p className="m-text text-n500 mb-32">There are a lot of deposit options at Oanda, including electronic wallets such as PayPal, Skrill, Neteller.</p>

                                <p className="m-text text-n500 mb-32">
                                  <span className="fw-medium">Deposit options varydepending on your residency</span> and your account currency. Make sure to check the Oanda website to see the exact details that apply to you.
                                </p>

                                <table className="w-100 bordered-table mb-32">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3 w-50">Broker</th>
                                      <th className="py-4 px-3 w-50">Number of base currencies</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">9</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">10</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text">4</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <p className="m-text text-n500 mb-32">
                                  Why does this matter? For two reasons. If you fund your trading account in the same currency as your bank account or you trade assets in the same currency as your trading account base currency, you won&apos;t have to pay a conversion fee.
                                </p>
                                <p className="m-text text-n500 mb-32">
                                  A convenient way to save on currency conversion fees is by opening a multi-currency bank account at a digital bank. These usually offer bank accounts in several currencies with great currency exchange rates, as well as free or cheap international bank transfers.
                                  Opening an account only takes a few minutes on your phone.
                                </p>

                                <Image src={withdrawal} className="img-fluid mb-32" alt="" />
                                <h4 className="fw-semibold mb-4">Oanda withdrawal fees and options</h4>

                                <p className="m-text text-n500 mb-32">Withdrawal options and fees vary depending on your residency and your account base currency. The main withdrawal options are the same as those for deposits.</p>
                                <p className="m-text text-n500 mb-32">As for fees, withdrawal to credit/debit cards is typically free, as is withdrawal to PayPal or other electronic wallets.</p>
                                <p className="m-text text-n500 mb-32">However, withdrawal via bank transfer is quite expensive in most cases.</p>
                                <p className="m-text text-n500 mb-32">For example, withdrawals from USD or EUR accounts cost $/€20; while in many regions, subsequent withdrawals in the same calendar month cost even more, typically $/€35.</p>

                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th className="w-50">
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="bank">Bank Transfer</option>
                                            <option value="credit">Credit/Debit Card</option>
                                            <option value="wallet">Electronic Wallets</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          {" "}
                                          <i className="ph ph-check-circle-fill"></i>{" "}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          {" "}
                                          <i className="ph ph-check-circle-fill"></i>{" "}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="f-center fs-4 text-success">
                                          {" "}
                                          <i className="ph ph-check-circle-fill"></i>{" "}
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="m-text text-n500 mb-32">You can only withdraw money to accounts in your name.</p>
                                <p className="m-text text-n500 mb-32">How long does it take to withdraw money from Oanda? Oanda says it can take anywhere between one and six business days, depending on the withdrawal method and your residency.</p>
                                <p className="m-text text-n500 fw-medium bb-n40">In our tests, it took one business day using a debit card.</p>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#account-open" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Account Opening</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="account-open" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about account"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-40">Oanda&apos;s account opening is straightforward and no initial minimum deposit is required.</p>

                                <div className="box-lg mb-32">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Pros</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Fully digital</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">No minimum deposit</span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Cons</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="m-text text-n500">None</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <h4 className="fw-semibold mb-4">Can you open an account?</h4>

                                <div className="d-flex flex-wrap align-items-center gap-4 mb-32">
                                  <Image src={globe} className="img-fluid" alt="" />
                                  <div>
                                    <p className="m-text fw-medium mb-4">Yes, you can open an account at Oanda if you live in Bangladesh!</p>
                                    <div className="radius-8 mb-4 white-bg rounded-3">
                                      <select name="sortby" className="select">
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
                                    <a href="#" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                                      Visit Brokers <i className="ph ph-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </>
                            }
                            more={
                              <>
                                <h4 className="fw-semibold mb-3">Oanda in USA and Canada</h4>
                                <p className="m-text text-n500 mb-32">Oanda is deeply rooted in the North American continent. The broker was founded in Canada and has its headquarters in New York.</p>
                                <p className="m-text mb-32 text-n500">Both US and Canadian citizens can open an account at Oanda, in additon to many countries globally.</p>
                                <h4 className="fw-semibold mb-3">What is the minimum deposit at Oanda?</h4>

                                <p className="fw-medium mb-32">The required Oanda minimum deposit is $0.</p>

                                <h4 className="fw-semibold mb-3">Account types</h4>

                                <p className="m-text mb-32 text-n500">
                                  <span className="fw-medium">There is only one type of trading account</span> at Oanda (in addition to a demo and a corporate account). However, you can open up to 19 sub-accounts.
                                </p>

                                <p className="m-text mb-32 text-n500">These are great if you want to have different base currencies under one account. E.g. you can have a USD account with EUR and GBP subaccounts.</p>
                                <p className="m-text mb-32 text-n500">Oanda also provides API possibility for exchanges - it might come in handy if you&apos;d like to develop your own platform.</p>

                                <h4 className="fw-semibold mb-3">How to open your account</h4>

                                <p className="l-text fw-medium mb-3">How long does Oanda account approval take?</p>

                                <p className="mb-32 m-text text-n500">
                                  From start to finish, you can open an account in less than 10 minutes. Account approval, though, can take multiple days, as we were asked to send some of our verification documents in email; but it&apos;s still quick if you respond to their emails in time.
                                </p>

                                <p className="m-text mb-32">You can open an account at Oanda in 8 steps:</p>

                                <ul className="mb-32 m-text">
                                  <ol>
                                    <span className="fw-medium">Account Details: </span>
                                    set your username and password.
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Personal Details: </span>
                                    enter basic personal information like your name, address and birth data.
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Nationality: </span>
                                    fill in your nationality
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Home address: </span>
                                    enter your home address
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Employment: </span>
                                    fill in information about your employment status, income and wealth
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Trading experience: </span>
                                    answer questions about your trading experience
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Customer knowledge: </span>
                                    fill out a short quiz to test your knowledge (e.g. Does changing leverage from 50:1 to 100:1 increase or decrease your potential profit/loss?)
                                  </ol>
                                  <ol>
                                    <span className="fw-medium">Verify your identity: </span>
                                    upload a copy of your ID/passport to verify your identity, and a bank statement or utility bill to verify your residency
                                  </ol>
                                </ul>
                                <Image src={createAccount} className="img-fluid mb-32" alt="" />
                                <h4 className="fw-semibold mb-4">Oanda demo account</h4>
                                <p className="m-text mb-32">Oanda offers a demo account. It can be opened in minutes and you&apos;ll be able to try out and learn Oanda&apos;s desktop platform without risking your money.</p>
                                <h4 className="fw-semibold mb-4">How to delete an Oanda account?</h4>
                                <p className="m-text mb-32 bb-n40">To delete your account, you have to “cancel your subscription” on Oanda. You need to submit a separate form to request the removal of your account.</p>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#mobile-app" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Mobile App</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="mobile-app" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about mobile app"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-40">Oanda&apos;s mobile platform is similar to the web trading platform in functionality, and as a plus, you can also set price alerts.</p>

                                <div className="box-lg mb-32">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Pros</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">User-friendly</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Two-step (safer) login</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Good search function</span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Cons</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">No Touch/Face ID login</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <h4 className="fw-semibold mb-4">Oanda fxTrade for Android</h4>

                                <p className="m-text text-n500 mb-32">
                                  Oanda&apos;s mobile trading platform is <span className="fw-semibold">available for both iOS and Android.</span> We tested it on Android in English.
                                </p>
                                <p className="m-text text-n500 mb-32">
                                  The mobile trading platform is <span className="fw-semibold">available in several languages.</span>
                                </p>
                              </>
                            }
                            more={
                              <>
                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th colSpan={3} className="py-4 px-3">
                                        Oanda available languages on mobile platform
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Arabic</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center">Chinese</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center">Deutsch</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">English</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center">Japanese</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center">Russian</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <h4 className="fw-semibold mb-3">Look and feel</h4>
                                <p className="m-text text-n500 mb-32">
                                  The Oanda mobile trading platform is <span className="fw-semibold">user-friendly</span>. The chart tab is great, you can customize it well. This is not something you usually find at other brokers.
                                </p>

                                <Image src={lookAndFeel} className="img-fluid mb-32" alt="" />

                                <h4 className="fw-semibold mb-3">Login and security</h4>
                                <p className="m-text text-n500 mb-32">
                                  <span className="fw-semibold">Oanda provides a safer, two-step login</span> for its mobile platform.
                                </p>
                                <p className="m-text mb-32 text-n500">You can&apos;t log in using biometric authentication. Providing this feature would be more convenient.</p>

                                <h4 className="fw-semibold mb-3">Search functions</h4>

                                <p className="fw-medium mb-32">The search functions are good.</p>

                                <h4 className="fw-semibold mb-3">Placing orders</h4>

                                <p className="m-text mb-32 text-n500">You can use the following order types on the mobile trading platform:</p>

                                <ul className="mb-32">
                                  <li>Market</li>
                                  <li>Stop loss</li>
                                  <li>Trailing stop</li>
                                  <li>Upper bound</li>
                                </ul>

                                <p className="m-text mb-32 text-n500">There is a single order time limit you can use: Good &apos;til Date (GTD).</p>

                                <Image src={newOrder} className="img-fluid mb-32" alt="" />

                                <h4 className="fw-semibold mb-3">Alerts and notifications</h4>

                                <p className="l-text fw-medium mb-3">How long does Oanda account approval take?</p>

                                <p className="mb-32 m-text text-n500">
                                  <span className="fw-semibold bb-n40"> You can set alerts and notifications</span> on the Oanda mobile platform.
                                </p>

                                <p className="m-text mb-32">You can open an account at Oanda in 8 steps:</p>

                                <a href="#" className="btn btn-secondary fw-semibold d-inline-flex mb-4 align-items-center gap-2">
                                  Visit Broker <i className="ph ph-arrow-right"></i>
                                </a>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#desktop-platform" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Desktop Platform</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="desktop-platform" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about desktop app"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-40">Oanda&apos;s desktop platform mimics the web platform in terms of functionality, meaning lots of user-friendly functions but no price alerts.</p>

                                <div className="box-lg mb-32">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Pros</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">User-friendly</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Clear fee report</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                          <span className="text-success fs-5 f-center">
                                            <i className="ph ph-check-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">Good customizability (for charts, workspace)</span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-sm-6">
                                      <p className="l-text mb-4 fw-medium">Cons</p>
                                      <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2">
                                          <span className="text-danger fs-5 f-center">
                                            <i className="ph ph-x-circle-fill"></i>
                                          </span>
                                          <span className="m-text text-n500">No price alerts</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </>
                            }
                            more={
                              <>
                                <p className="m-text text-n500 mb-32">
                                  <span className="fw-semibold">Oanda&apos;s desktop platform is similar to the web trading platform</span> in terms of customizability, login, order types and portfolio reports. While the design is generally fine, it could use some brush-up.
                                </p>

                                <p className="m-text text-n500 mb-32">Like its browser counterpart, the desktop platform doesn&apos;t allow you to set price alerts.</p>

                                <Image src={desktopApp} className="img-fluid mb-32 pb-32 bb-n40" alt="" />

                                <a href="#" className="btn btn-secondary fw-semibold d-inline-flex mb-4 align-items-center gap-2">
                                  Visit Broker <i className="ph ph-arrow-right"></i>
                                </a>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#product-selection" aria-expanded="true" aria-controls="collapseOne">
                          <div>
                            <h3 className="fw-semibold mb-3">Product Selection</h3>
                            <p className="s-text">
                              Score: <span className="text-primary fw-semibold">4.1</span>/5
                            </p>
                          </div>
                        </button>
                      </h2>
                      <div id="product-selection" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about product"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <p className="m-text text-n500 mb-32">At Oanda, clients from most countries can trade only forex, CFDs and crypto. For EU clients, stock trading is also available.</p>

                                <h4 className="fw-semibold mb-3">CFDs, indices &apos; forex on Oanda</h4>
                                <p className="m-text text-n500 mb-32">Oanda has a wide selection of CFD products (including stock index, bond, commodity, ETF and individual stocks CFDs), and it offers a reasonable amount of currency pairs, too.</p>
                                <p className="m-text text-n500 mb-32">The product lineup lacks futures CFDs, though.</p>

                                <div className="overflow-x-auto">
                                  <table className="w-100 bordered-table mb-40">
                                    <thead>
                                      <tr className="bg-white">
                                        <th className="py-4 px-3"></th>
                                        <th className="py-4 px-3">Oanda</th>
                                        <th className="py-4 px-3">Pepperstone</th>
                                        <th className="py-4 px-3">FXCM</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">Currency pairs (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">68</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">97</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">45</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">Stock index CFDs (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">15</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">19</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">14</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">Stock CFDs (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">1600</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">1400</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">219</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">ETF CFDs (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">68</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">97</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">-</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">Commodity CFDs (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">31</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">40</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">4</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">Bond CFDs (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">6</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">-</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">1</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="py-4 px-3">
                                          <span className="m-text">Cryptos (#)</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">6</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">7</span>
                                        </td>
                                        <td className="py-4 px-3">
                                          <span className="m-text">18</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </>
                            }
                            more={
                              <>
                                <div className="box mb-32">
                                  <h4 className="fw-semibold bb-dashed">Which currency pair do you want to trade?</h4>
                                  <div className="d-flex gap-4 flex-wrap flex-lg-nowrap align-items-center">
                                    <Image src={currencyPair} className="flex-shrink-0" alt="" />
                                    <div className="flex-grow-1">
                                      <p className="l-text fw-medium mb-3">Brokers</p>
                                      <div className="radius-8 mb-4 white-bg rounded-3">
                                        <select name="sortby" className="select">
                                          <option value="bd">Bangladesh</option>
                                          <option value="in">India</option>
                                          <option value="pk">Pakistan</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="flex-grow-1">
                                      <p className="l-text fw-medium mb-3">Currency</p>
                                      <div className="radius-8 mb-4 white-bg rounded-3">
                                        <select name="sortby" className="select">
                                          <option value="bd">USD</option>
                                          <option value="in">AUD</option>
                                          <option value="pk">JPY</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <p className="m-text text-n500 mb-32">Disclaimer: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 78.3% of retail investor accounts lose money when trading CFDs with this provider.</p>
                                <p className="m-text text-n500 mb-32">You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
                                <p className="m-text text-n500 mb-32">The UK&apos;s Financial Conduct Authority (FCA) banned the sale of crypto-derivatives to UK retail consumers as of January 2024.</p>
                                <p className="m-text text-n500 mb-32">We really liked the fact that you can set the leverage manually. At many other brokers, including some of Oanda&apos;s closest competitors, this feature is not supported.</p>
                                <p className="m-text text-n500 mb-32">To set the leverage, go to the &apos;Manage Funds&apos; tab.</p>
                                <p className="m-text text-n500 mb-32">Changing the leverage is a very useful feature when you want to lower the risk of your trade. Always be careful with forex and CFD trading, as preset leverage levels may be too high.</p>
                                <h4 className="fw-semibold mb-3">Real stocks and ETFs</h4>
                                <p className="m-text text-n500 mb-32">For EU clients, Oanda also provides trading in real stocks. Trading in US stocks is commission-free on EUR accounts.</p>

                                <table className="w-100 bordered-table mb-40">
                                  <thead>
                                    <tr className="bg-white">
                                      <th className="py-4 px-3">Broker</th>
                                      <th>
                                        <div className="radius-8 px-3">
                                          <select name="sortby" className="select">
                                            <option value="newest"># Stock marteter</option>
                                            <option value="oldest"># ETFS</option>
                                          </select>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Oanda</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">5</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">Pepperstone</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">-</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="py-4 px-3">
                                        <span className="m-text">FXCM</span>
                                      </td>
                                      <td className="py-4 px-3">
                                        <span className="m-text text-center justify-content-center d-flex">-</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <h4 className="fw-semibold mb-3">Currency cheat sheet</h4>
                                <p className="m-text text-n500 mb-32">Oanda used to have a so-called “Currency cheat sheet”. It is a pocket-sized piece of paper, detailing the exchange rates between two currencies on a day for fast calculations.</p>
                                <Image src={cheetSheet} className="img-fluid mb-32" alt="" />

                                <h4 className="fw-semibold mb-3">Oanda Currency Converter</h4>
                                <p className="m-text text-n500 mb-32">A better alternative to a paper-based currency cheat sheet is Oanda&apos;s online currency converter. It has a clean, responsive design with plenty of pairs to compare.</p>
                                <p className="m-text text-n500 mb-32">It uses its own data sources like Oanda Rates and touchstone FX.</p>
                                <p className="m-text text-n500 mb-32">Apart from prices, it shows the average and min-max spreads between currencies.</p>

                                <h4 className="fw-semibold mb-3">Historical exchange rates</h4>
                                <p className="m-text text-n500 mb-32">Another feature at Oanda is a historical exchange rate calculator. It has plenty of settings such as range selection and data source selection (Oanda Exchange Rates, central banks).</p>
                                <p className="m-text text-n500 mb-32">Most of the features, however, are tied to the Pro Account, which has a monthly fee of $75, or an annual fee of $750.</p>

                                <h4 className="fw-semibold mb-3">Live forex rates</h4>
                                <p className="m-text text-n500 mb-32 bb-dashed">
                                  There&apos;s a separate page on Oanda for live spreads and forex rates for most pairs, indices, commodities, and metals. If you don&apos;t see a pair on the list, you can also check their own pages, for example, see here the live exchange rate of XAU/USD.
                                </p>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-content mb-4">
                  <div className="accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq" aria-expanded="true" aria-controls="collapseOne">
                          <h3 className="fw-semibold">FAQ</h3>
                        </button>
                      </h2>
                      <div id="faq" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          <ReadMore
                            btnText="about faq"
                            top={
                              <>
                                <div className="bb-n40 pb-0"></div>
                                <h4 className="fw-semibold mb-3">What are Oanda&apos;s fees?</h4>
                                <p className="m-text text-n500 mb-32">We detailed this in our Oanda fees article.</p>
                                <h4 className="fw-semibold mb-3">Is this broker good for beginners?</h4>
                                <p className="m-text text-n500 mb-32">We checked it in Is Oanda good for beginners.</p>
                                <h4 className="fw-semibold mb-3">Is Oanda legit or scam?</h4>
                                <p className="m-text text-n500 mb-32">Take a look at the corporate background of Oanda in this article.</p>
                                <h4 className="fw-semibold mb-3">What is the minimum deposit?</h4>
                                <p className="m-text text-n500 mb-32">Our ultimate guide to the Oanda minimum deposit is updated regularly.</p>
                              </>
                            }
                            more={
                              <>
                                <p className="m-text text-n500 mb-32">Check out the current account balance requirements at Oanda in our What is the minimum account balance at Oanda article.</p>
                                <h4 className="fw-semibold mb-3">How to withdraw money from Oanda?</h4>
                                <p className="m-text text-n500 mb-32">We tested it and collected the options and costs in How to withdraw money on Oanda.</p>
                                <h4 className="fw-semibold mb-3">How to start your Oanda account?</h4>
                                <p className="m-text text-n500 mb-32">Look no further than our evaluation of Oanda account opening.</p>
                                <h4 className="fw-semibold mb-3">How good is Oanda&apos;s trading app?</h4>
                                <p className="m-text text-n500 mb-32">Here&apos;s our expert view after checking the Oanda trading app.</p>
                                <h4 className="fw-semibold mb-3">Can I trade options and silver on Oanda?</h4>
                                <p className="m-text text-n500 mb-32">We explored the topic in Can you trade options on Oanda and buying silver on Oanda guide.</p>
                                <h4 className="fw-semibold mb-3">Who are Oanda&apos;s competitors and alternatives?</h4>
                                <p className="m-text text-n500 mb-32 bb-dashed">We have created an overview of Oanda competitors here including a comparsion with FXCM, IG, Forex.com, Hugo&apos;s Way .</p>
                              </>
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box primary d-flex align-items-center gap-4 mb-4">
                  <div>
                    <h4 className="fw-semibold mb-3">Got Questions?</h4>
                    <p className="m-text text-n500">Engage with our growing community of traders and investors like you to find your answers.</p>
                  </div>
                  <Link href="/sign-up" className="btn btn-secondary fw-semibold">
                    Join Now
                  </Link>
                </div>
                <div className="box primary d-flex align-items-center gap-4 flex-column flex-md-row">
                  <div className="d-flex flex-column align-items-center text-center">
                    <Image src={author} className="img-fluid mb-3 mb-lg-4" alt="" />
                    <h4 className="fw-semibold mb-3">Adam Nasil</h4>
                    <p className="mb-3 mb-lg-4">Trading • Safety • Market Analysis</p>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="ph ph-facebook-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ph ph-pinterest-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ph ph-twitch-logo"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ph ph-linkedin-logo"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="fw-semibold mb-3 mb-lg-4">Author of this review</h4>
                    <p className="m-text text-n500 mb-4">
                      I bring extensive financial expertise as one of BrokR&apos;s earliest team members. Personally, I tested nearly all 100+ brokers on our site, opening real-money accounts, executing trades, assessing customer services, and providing firsthand assessment. My professional
                      background includes roles in the banking sector and a degree from Central European University, where I teach finance.
                    </p>
                    <p className="m-text text-n500">Everything you find on BrokR is based on reliable data and unbiased information. We combine our 10+ years finance experience with readers feedback.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box primary left-bar">
                  <h4 className="fw-semibold bb-dashed">Best brokers in World</h4>
                  <div className="tabs">
                    <ul className="nav nav-pills left bg-white mb-4" id="pills-tab" role="tablist">
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
                    </ul>

                    <div className="tab-content bb-dashed" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                        <div className="d-flex flex-column gap-3">
                          {brokers.slice(0, 4).map(({ image, rating, title }) => (
                            <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three d-flex justify-content-between align-items-center">
                              <div className="d-flex gap-2 align-items-center">
                                <div className="img f-center rounded-circle">
                                  <Image src={image} alt="" />
                                </div>
                                <div>
                                  <h5 className="fw-semibold mb-2">{title}</h5>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="f-center fs-5 text-secondary">
                                      <i className="ph ph-star-fill"></i>
                                    </span>
                                    <span className="fw-medium">{rating}</span>/5
                                  </div>
                                </div>
                              </div>
                              <button className="arrow-btn text-secondary fs-4 f-center rounded-circle border border-secondary">
                                <i className="ph ph-arrow-up-right"></i>
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                        <div className="d-flex flex-column gap-3">
                          {brokers.slice(0, 4).map(({ image, rating, title }) => (
                            <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three d-flex justify-content-between align-items-center">
                              <div className="d-flex gap-2 align-items-center">
                                <div className="img f-center rounded-circle">
                                  <Image src={image} alt="" />
                                </div>
                                <div>
                                  <h5 className="fw-semibold mb-2">{title}</h5>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="f-center fs-5 text-secondary">
                                      <i className="ph ph-star-fill"></i>
                                    </span>
                                    <span className="fw-medium">{rating}</span>/5
                                  </div>
                                </div>
                              </div>
                              <button className="arrow-btn text-secondary fs-4 f-center rounded-circle border border-secondary">
                                <i className="ph ph-arrow-up-right"></i>
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                        <div className="d-flex flex-column gap-3">
                          {brokers.slice(0, 4).map(({ image, rating, title }) => (
                            <Link key={title} href={`/broker-review/${formatString(title)}`} className="broker-card style-three d-flex justify-content-between align-items-center">
                              <div className="d-flex gap-2 align-items-center">
                                <div className="img f-center rounded-circle">
                                  <Image src={image} alt="" />
                                </div>
                                <div>
                                  <h5 className="fw-semibold mb-2">{title}</h5>
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="f-center fs-5 text-secondary">
                                      <i className="ph ph-star-fill"></i>
                                    </span>
                                    <span className="fw-medium">{rating}</span>/5
                                  </div>
                                </div>
                              </div>
                              <button className="arrow-btn text-secondary fs-4 f-center rounded-circle border border-secondary">
                                <i className="ph ph-arrow-up-right"></i>
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href="/find-my-broker" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                      Find My Broker <i className="ph ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrokerReview;
