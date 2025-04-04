import React from "react";
import { blogData } from "../page";
import blogDetail from "@/public/images/blog-details.png";
import blogDetailTwo from "@/public/images/blog-details-two.png";
import blog1 from "@/public/images/blog/blog-1.png";
import blog2 from "@/public/images/blog/blog-2.png";
import blog3 from "@/public/images/blog/blog-3.png";
import blog4 from "@/public/images/blog/blog-4.png";
import broker1 from "@/public/images/broker-category/broker-1.png";
import broker2 from "@/public/images/broker-category/broker-2.png";
import broker3 from "@/public/images/broker-category/broker-3.png";
import broker4 from "@/public/images/broker-category/broker-4.png";
import user2 from "@/public/images/user/user-2.png";
import user3 from "@/public/images/user/user-3.png";
import Image from "next/image";
import BlogVideo from "@/components/blog/blogVideo";
import { formatString } from "../../broker-review/[title]/page";
import Link from "next/link";

export function generateStaticParams() {
  return blogData.map((post) => ({
    title: formatString(post.title),
  }));
}

const SingleBlog = ({ params }: { params: { title: string } }) => {
  const post = blogData.find((post) => formatString(post.title) === params.title);
  if (!post) {
    return "post not found"; // or return an error component
  }

  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Blog Details</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item l-text">Blog</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog  --> */}

      <section className="pt-120 pb-120 section">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8 d-flex flex-column gap-4">
              <div className="blog-details blog-card">
                <div className="img-wrapper">
                  <Image src={blogDetail} className="img-fluid" alt="" />
                  <span className="blog-tag s-text fw-semibold">Forex</span>
                </div>
                <div className="px-3 px-xl-4 pt-40">
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-3 mb-xl-4">
                    <p className="d-flex m-text align-items-center gap-1">
                      <i className="ph ph-user-circle"></i>
                      <span className="m-text">By Admin</span>
                    </p>
                    <span>•</span>
                    <p className="d-flex m-text align-items-center gap-1">
                      <i className="ph ph-calendar"></i>
                      <span className="m-text">Jan 25, 2024</span>
                    </p>
                    <span>•</span>
                    <p className="d-flex m-text align-items-center gap-1">
                      <i className="ph ph-chat-teardrop-text"></i>
                      <span className="m-text">32 Comments</span>
                    </p>
                  </div>
                  <h2 className="mb-3">{post?.title}</h2>
                  <p className="m-text mb-32">
                    Selecting the right broker is a critical step for any investor, whether you&apos;re a novice or an experienced trader. The right broker can provide the tools, resources, and support necessary to achieve your investment goals. Here&apos;s a comprehensive guide to help you choose
                    the right broker for your specific needs.
                  </p>
                  <h3 className="mb-3">Define Your Investment Goals</h3>
                  <p className="m-text mb-3 pb-1">
                    Before you start comparing brokers, it&apos;s essential to have a clear understanding of your investment goals. Are you looking to build a retirement fund, generate passive income, trade actively, or save for a specific future expense? Your goals will significantly influence the
                    type of broker you need.
                  </p>
                </div>
                <div className="row g-4 align-items-center">
                  <div className="col-sm-6">
                    <Image src={blogDetailTwo} className="rounded-2" alt="" />
                  </div>
                  <div className="col-sm-6">
                    <div className="pe-4">
                      <h4 className="mb-3">Types of Brokers</h4>
                      <p className="m-text mb-4">There are several types of brokers to consider, each catering to different investment styles and needs:</p>
                      <ul className="list-disc d-flex flex-column gap-3">
                        <li>Full-Service Brokers: These brokers offer a wide range of services, including financial advice, retirement planning, and portfolio management.</li>
                        <li>Discount Brokers: These brokers provide essential trading services at a lower cost, often without personalized financial advice.</li>
                        <li>Robo-Advisors: These automated platforms provide algorithm-driven financial planning with minimal human intervention.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-3 px-xl-4 py-3 py-lg-4">
                  <h5 className="mb-4">Key Factors to Consider</h5>
                  <p>
                    When choosing a broker, consider the following key factors: <br />
                    <br />
                    1. Fees and Commissions Different brokers have different fee structures. Some charge per trade, while others offer commission-free trading but may have other fees. Look for transparency in fee structures and be aware of potential hidden costs.
                    <br />
                    <br />
                    2. Account Minimums Some brokers require a minimum deposit to open an account. Ensure you choose a broker whose minimum deposit requirement aligns with your budget.
                    <br />
                    <br />
                    3. Investment Options Consider the range of investment options available. Some brokers offer stocks, bonds, mutual funds, and ETFs, while others may also include options, futures, forex, and cryptocurrencies.
                    <br />
                    <br />
                    4. Research and Tools Access to research and trading tools can significantly impact your investment decisions. Look for brokers that offer robust research, data, and analytical tools.
                    <br />
                    <br />
                    5. Educational Resources For beginners, educational resources such as webinars, tutorials, articles, and courses can be incredibly valuable. Choose a broker that offers comprehensive educational support.
                  </p>
                </div>
                {/* blog video */}
                <BlogVideo />
                <div className="px-3 px-xl-4 py-3 py-lg-4 bb-dashed">
                  <h5 className="mb-4">Top Brokers for Different Investment Goals</h5>
                  <p className="mb-4">Here&apos;s a list of top brokers tailored to specific investment goals:</p>
                  <p>For Retirement Planning</p>
                  <ul className="list-disc mb-4">
                    <li>Fidelity: Known for its robust retirement planning tools and low-cost investment options.</li>
                    <li>Vanguard: Offers a wide range of low-cost index funds and ETFs ideal for long-term investing..</li>
                  </ul>
                  <p>For Active Trading</p>
                  <ul className="list-disc mb-4">
                    <li>Fidelity: Known for its robust retirement planning tools and low-cost investment options.</li>
                    <li>Vanguard: Offers a wide range of low-cost index funds and ETFs ideal for long-term investing.</li>
                  </ul>
                  <p>For Beginners</p>
                  <ul className="list-disc mb-4">
                    <li>Robinhood: Commission-free trading with a simple, intuitive mobile app.</li>
                    <li>SoFi Invest: Combines commission-free trading with a variety of other financial services and educational resources.</li>
                  </ul>
                  <p>For Passive Investing</p>
                  <ul className="list-disc">
                    <li>Betterment: A leading robo-advisor offering automated investing with personalized portfolios.</li>
                    <li>Wealthfront: Another top robo-advisor with a range of features tailored for passive investors.</li>
                  </ul>
                </div>
                <div className="d-flex align-items-center gap-4 flex-wrap justify-content-between pb-4 px-3 px-xl-4">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <p className="l-text fw-medium">Share -</p>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="ph ph-facebook-logo"></i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="ph ph-twitter-logo"></i>
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
                      </li> */}
                      <li>
                        <a href="#">
                          <i className="ph ph-linkedin-logo"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-3">
                    <p className="l-text fw-medium">Tag -</p>
                    <div className="d-flex gap-3 flex-wrap">
                      <a href="#" className="tag white">
                        Stock
                      </a>
                      <a href="#" className="tag white">
                        Forex
                      </a>
                      <a href="#" className="tag white">
                        Crypto
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box primary">
                <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center mb-32">
                  <h4>All Comments</h4>
                  <div className="d-flex gap-2 align-items-center">
                    <span>Sort By:</span>
                    <select name="sortby" id="sortby" className="select">
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div className="comment-box">
                    <div className="d-flex align-items-center gap-3 bb-dashed">
                      <p>Mar 03, 2023</p>
                      <span className="text-primary">•</span>
                      <p>09:01 am</p>
                    </div>
                    <div className="d-flex gap-2 fs-5 text-secondary mb-3">
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-half-fill"></i>
                    </div>
                    <p className="l-text mb-3 mb-lg-4">
                      I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. I&apos;ll definitely look into consolidation options. Thank you
                    </p>
                    <div className="d-flex gap-3 align-items-center bb-dashed">
                      <Image src={user2} width="60" height="60" className="rounded-circle" alt="" />
                      <div>
                        <p className="xl-text fw-semibold mb-1">Cameron Williamson</p>
                        <p className="m-text">Actress</p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 align-items-center mb-3 mb-lg-4">
                      <button className="d-flex bg-transparent align-items-center gap-1 text-primary">
                        <i className="ph ph-thumbs-up"></i> 178
                      </button>
                      <button className="d-flex bg-transparent align-items-center gap-1 text-primary">
                        <i className="ph ph-chat-centered-text"></i> Reply
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-4">
                      <Image src={user3} width="60" height="60" className="rounded-circle" alt="" />
                      <input type="text" placeholder="Reply" />
                    </div>
                  </div>
                  <div className="comment-box">
                    <div className="d-flex align-items-center gap-3 bb-dashed">
                      <p>Mar 03, 2023</p>
                      <span className="text-primary">•</span>
                      <p>09:01 am</p>
                    </div>
                    <div className="d-flex gap-2 fs-5 text-secondary mb-3">
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-half-fill"></i>
                    </div>
                    <p className="l-text mb-3 mb-lg-4">
                      I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. I&apos;ll definitely look into consolidation options. Thank you
                    </p>
                    <div className="d-flex gap-3 align-items-center bb-dashed">
                      <Image src={user2} width="60" height="60" className="rounded-circle" alt="" />
                      <div>
                        <p className="xl-text fw-semibold mb-1">Cameron Williamson</p>
                        <p className="m-text">Actress</p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 align-items-center mb-3 mb-lg-4">
                      <button className="d-flex bg-transparent align-items-center gap-1 text-primary">
                        <i className="ph ph-thumbs-up"></i> 178
                      </button>
                      <button className="d-flex bg-transparent align-items-center gap-1 text-primary">
                        <i className="ph ph-chat-centered-text"></i> Reply
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-4">
                      <Image src={user3} width="60" height="60" className="rounded-circle" alt="" />
                      <input type="text" placeholder="Reply" />
                    </div>
                  </div>
                  <div className="comment-box mb-3">
                    <div className="d-flex align-items-center gap-3 bb-dashed">
                      <p>Mar 03, 2023</p>
                      <span className="text-primary">•</span>
                      <p>09:01 am</p>
                    </div>
                    <div className="d-flex gap-2 fs-5 text-secondary mb-3">
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-fill"></i>
                      <i className="ph ph-star-half-fill"></i>
                    </div>
                    <p className="l-text mb-3 mb-lg-4">
                      I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. I&apos;ll definitely look into consolidation options. Thank you
                    </p>
                    <div className="d-flex gap-3 align-items-center bb-dashed">
                      <Image src={user2} width="60" height="60" className="rounded-circle" alt="" />
                      <div>
                        <p className="xl-text fw-semibold mb-1">Cameron Williamson</p>
                        <p className="m-text">Actress</p>
                      </div>
                    </div>
                    <div className="d-flex gap-4 align-items-center mb-3 mb-lg-4">
                      <button className="d-flex bg-transparent align-items-center gap-1 text-primary">
                        <i className="ph ph-thumbs-up"></i> 178
                      </button>
                      <button className="d-flex bg-transparent align-items-center gap-1 text-primary">
                        <i className="ph ph-chat-centered-text"></i> Reply
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-md-4">
                      <Image src={user3} width="60" height="60" className="rounded-circle" alt="" />
                      <input type="text" placeholder="Reply" />
                    </div>
                  </div>
                  <a href="#" className="btn btn-secondary align-self-start d-inline-flex align-items-center gap-2 fw-semibold">
                    See All <i className="ph ph-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* <!-- write a comment --> */}
              <div className="d-flex flex-column gap-4 box primary">
                <h4 className="bb-dashed">Write a Comment</h4>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <label htmlFor="name" className="l-text fw-medium d-block mb-3">
                      Name
                    </label>
                    <input className="white-input" type="name" id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="l-text fw-medium d-block mb-3">
                      Email
                    </label>
                    <input className="white-input" type="email" id="email" placeholder="Jone@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="l-text fw-medium d-block mb-3">
                      Comment
                    </label>
                    <textarea className="white-input rounded-5" rows={4} name="message" id="message" placeholder="Enter your comment"></textarea>
                  </div>
                </div>
                <a href="#" className="btn btn-secondary align-self-start d-inline-flex align-items-center gap-2 fw-semibold">
                  Submit Comment <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 d-flex flex-column gap-4">
              <div className="box primary">
                <h4 className="bb-dashed">Search</h4>
                <form className="blog-search">
                  <input type="text" placeholder="Search" />
                  <button className="f-center bg-transparent fs-4">
                    <i className="ph ph-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="box primary">
                <h4 className="bb-dashed">Category</h4>
                <div className="d-flex flex-column gap-3 category-list">
                  <div className="category-card">
                    <Image src={broker1} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Stock Brokers</p>
                  </div>
                  <div className="category-card">
                    <Image src={broker2} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Forex Brokers</p>
                  </div>
                  <div className="category-card">
                    <Image src={broker3} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">CFD Brokers</p>
                  </div>
                  <div className="category-card">
                    <Image src={broker4} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Future Brokers</p>
                  </div>
                  <div className="category-card">
                    <Image src={broker1} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Crypto Brokers</p>
                  </div>
                  <div className="category-card">
                    <Image src={broker3} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Discount Brokers</p>
                  </div>
                </div>
                <a className="d-flex align-items-center gap-2 text-primary fw-semibold mt-4" href="#">
                  See All <i className="ph ph-arrow-right"></i>
                </a>
              </div>

              <div className="box primary">
                <h4 className="bb-dashed">More Posts</h4>
                <div className="d-flex gap-3 flex-column gap-xl-4 bb-dashed">
                  {blogData.slice(1, 4).map(({ date, id, imageSrc, title }) => (
                    <Link href={`/blog/${formatString(title)}`} key={id} className="d-flex align-items-center gap-3 gap-xxl-4">
                      <Image src={imageSrc} className="rounded-3 object-fit-cover object-center" width="100" height="100" alt="" />
                      <div>
                        <p className="l-text fw-medium mb-2">{title}</p>
                        <p className="m-text fw-medium text-primary">{date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link className="d-flex align-items-center gap-2 text-primary fw-semibold mt-4" href="/blogs">
                  See All <i className="ph ph-arrow-right"></i>
                </Link>
              </div>

              <div className="box primary">
                <h4 className="bb-dashed">Popular Tags</h4>
                <div className="d-flex gap-3 flex-wrap bb-dashed">
                  <a href="#" className="tag white">
                    Stock
                  </a>
                  <a href="#" className="tag white">
                    CFD
                  </a>
                  <a href="#" className="tag white">
                    Forex
                  </a>
                  <a href="#" className="tag white">
                    Crypto
                  </a>
                  <a href="#" className="tag white">
                    Futures
                  </a>
                  <a href="#" className="tag white">
                    Discount
                  </a>
                </div>
                <a className="d-flex align-items-center gap-2 text-primary fw-semibold mt-4" href="#">
                  See All <i className="ph ph-arrow-right"></i>
                </a>
              </div>
              <div className="box primary">
                <h4 className="bb-dashed">Share With</h4>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="ph ph-facebook-logo"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="ph ph-twitter-logo"></i>
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
                  </li> */}
                  <li>
                    <a href="#">
                      <i className="ph ph-linkedin-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
