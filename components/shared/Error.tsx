import React from "react";
import errorImg from "@/public/images/404.png";
import Image from "next/image";
import Link from "next/link";
const FourZeroFourPage = () => {
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">404 Error</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <Link href="#" className="l-text">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    404 Error
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sign up --> */}

      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="max-636 text-center d-flex flex-column align-items-center">
                <Image src={errorImg} className="img-fluid mb-60" alt="" />
                <h2 className="display-4 fw-semibold mb-3 mb-xl-4">Oops! Page Not Found</h2>
                <p className="m-text mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className="btn btn-secondary d-inline-flex fw-semibold align-items-center gap-2" href="/">
                  {" "}
                  Back To Home <i className="ph ph-arrow-right"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FourZeroFourPage;
