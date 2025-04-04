"use client";
import React, { useState } from "react";
import signUp from "@/public/images/sign-up.png";
import Image from "next/image";
import Link from "next/link";
const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Sign Up</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item fw-semibold active l-text" aria-current="page">
                    Sign Up
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sign up --> */}

      <section className="signup pt-120 pb-120">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="box-lg primary">
                <h3 className="mb-3">Let&apos;s Get Started!</h3>
                <p className="m-text mb-40">Please Enter your Email Address to Start your Online Application</p>
                <div className="row g-3 g-xl-4">
                  <div className="col-md-6">
                    <label htmlFor="fname" className="l-text fw-medium d-block mb-3">
                      First Name
                    </label>
                    <input className="white-input" type="text" id="fname" placeholder="Jone" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname" className="l-text fw-medium d-block mb-3">
                      Last Name
                    </label>
                    <input className="white-input" type="text" id="lname" placeholder="Fisher" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="l-text fw-medium d-block mb-3">
                      Enter Email
                    </label>
                    <input className="white-input" type="email" id="email" placeholder="Jone@example.com" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="l-text fw-medium d-block mb-3">
                      Enter Password
                    </label>
                    <div className="white-input password-input">
                      <input className="bg-transparent" type={showPass ? "text" : "password"} id="password" placeholder="Enter Your Password..." />
                      <button onClick={() => setShowPass(!showPass)} className="f-center">
                        {showPass ? <i className="ph ph-eye"></i> : <i className="ph ph-eye-closed"></i>}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-32 m-text">
                      Have an accounts?{" "}
                      <Link href="/sign-in" className="text-primary fw-semibold">
                        Sign In
                      </Link>
                    </p>
                    <button className="btn btn-secondary">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5 offset-xxl-1">
              <Image src={signUp} className="max-unset" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
