import Image from "next/image";
import React from "react";
import blog1 from "@/public/images/blog/blog-1.png";
import blog2 from "@/public/images/blog/blog-2.png";
import blog3 from "@/public/images/blog/blog-3.png";
import blog4 from "@/public/images/blog/blog-4.png";
import blog5 from "@/public/images/blog/blog-5.png";
import blog6 from "@/public/images/blog/blog-6.png";
import broker1 from "@/public/images/broker-category/broker-1.png";
import broker2 from "@/public/images/broker-category/broker-2.png";
import broker3 from "@/public/images/broker-category/broker-3.png";
import broker4 from "@/public/images/broker-category/broker-4.png";
import Link from "next/link";
import { formatString } from "../broker-review/[title]/page";
export const blogData = [
  {
    imageSrc: blog1,
    tag: "Forex",
    title: "Top 10 Brokers for Beginner Investors in 2024",
    author: "Admin",
    date: "Jan 25, 2024",
    description: "Additionally, conduct thorough research to provide valuable and accurate information...",
    id: 1,
  },
  {
    imageSrc: blog2,
    tag: "Forex",
    title: "How to Choose the Right Broker Investment Goals",
    author: "Admin",
    date: "Jan 25, 2024",
    description: "Additionally, conduct thorough research to provide valuable and accurate information...",
    id: 2,
  },
  {
    imageSrc: blog3,
    tag: "Forex",
    title: "A Beginner's Guide to Understanding Brokerage",
    author: "Admin",
    date: "Jan 25, 2024",
    description: "Additionally, conduct thorough research to provide valuable and accurate information...",
    id: 3,
  },
  {
    imageSrc: blog4,
    tag: "Forex",
    title: "Top Features to Look for in a Brokerage Account",
    author: "Admin",
    date: "Jan 25, 2024",
    description: "Additionally, conduct thorough research to provide valuable and accurate information...",
    id: 4,
  },
  {
    imageSrc: blog5,
    tag: "Forex",
    title: "The Pros and Cons of Full Service vs. Discount Brokers",
    author: "Admin",
    date: "Jan 25, 2024",
    description: "Additionally, conduct thorough research to provide valuable and accurate information...",
    id: 5,
  },
  {
    imageSrc: blog6,
    tag: "Forex",
    title: "Top 5 Brokers with the Best Customer Support",
    author: "Admin",
    date: "Jan 25, 2024",
    description: "Additionally, conduct thorough research to provide valuable and accurate information...",
    id: 5,
  },
];

const BlogPage = () => {
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Blog</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Blog
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
            <div className="col-xl-8">
              <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center mb-40">
                <p className="m-text text-n500">Showing 1-8 of 100 results</p>
                <div className="d-flex gap-2 align-items-center">
                  <span>Sort By:</span>
                  <select name="sortby" id="sortby" className="select">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
              <div className="row g-4 mb-40">
                {blogData.map((blog, index) => (
                  <div key={index} className="col-md-6">
                    <div className="blog-card">
                      <div className="img-wrapper">
                        <Image src={blog.imageSrc} alt="" />
                        <span className="blog-tag s-text fw-semibold">{blog.tag}</span>
                      </div>
                      <div className="content">
                        <Link href={`/blog/${formatString(blog.title)}`} className="mb-3 h4 d-block mb-xl-4">
                          {blog.title}
                        </Link>
                        <div className="d-flex align-items-center gap-2 mb-3 mb-xl-4">
                          <p className="d-flex m-text align-items-center gap-1">
                            <i className="ph ph-user-circle"></i>
                            <span className="m-text">By {blog.author}</span>
                          </p>
                          <span>•</span>
                          <p className="d-flex m-text align-items-center gap-1">
                            <i className="ph ph-calendar"></i>
                            <span className="m-text">{blog.date}</span>
                          </p>
                        </div>
                        <p className="m-text max-two-line mb-3 mb-xl-4">{blog.description}</p>
                        <Link className="d-flex align-items-center gap-2 text-primary fw-semibold" href={`/blog/${formatString(blog.title)}`}>
                          Read More <i className="ph ph-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center pagination-list">
                <button>
                  <i className="ph ph-caret-left-bold"></i>
                </button>
                <a href="#">1</a>
                <a href="#" className="active">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">
                  <i className="ph ph-dots-three-bold"></i>
                </a>
                <button>
                  <i className="ph ph-caret-right-bold"></i>
                </button>
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
                  <a href="#" className="category-card">
                    <Image src={broker1} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Stock Brokers</p>
                  </a>
                  <a href="#" className="category-card">
                    <Image src={broker2} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Forex Brokers</p>
                  </a>
                  <a href="#" className="category-card">
                    <Image src={broker3} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">CFD Brokers</p>
                  </a>
                  <a href="#" className="category-card">
                    <Image src={broker4} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Future Brokers</p>
                  </a>
                  <a href="#" className="category-card">
                    <Image src={broker1} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Crypto Brokers</p>
                  </a>
                  <a href="#" className="category-card">
                    <Image src={broker3} className="rounded-circle" width="48" height="48" alt="" />
                    <p className="l-text font-medium">Discount Brokers</p>
                  </a>
                </div>
                <a className="d-flex align-items-center gap-2 text-primary fw-semibold mt-4" href="#">
                  See All <i className="ph ph-arrow-right"></i>
                </a>
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
                <h4 className="bb-dashed">Share with</h4>
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="ph ph-facebook-logo"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="ph ph-x-logo"></i>
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

export default BlogPage;
