"use client";
import React, { useState } from "react";
import signUp from "@/public/images/sign-up.png";
import Image from "next/image";
import Link from "next/link";
const SignInPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Sign In</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Sign In
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sign in --> */}

      <section className="signup pt-120 pb-120">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="box-lg primary">
                <h3 className="mb-3">Welcome Back!</h3>
                <p className="m-text mb-40">Sign in to your account and join us</p>
                <div className="row g-3 g-xl-4">
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
                      <input className="bg-transparent" type={showPass ? "text" : "password"} id="password" placeholder="Enter Password" />
                      <button onClick={() => setShowPass(!showPass)} className="f-center">
                        {showPass ? <i className="ph ph-eye"></i> : <i className="ph ph-eye-closed"></i>}
                      </button>
                    </div>
                    <a href="#" className="text-end d-block mt-3 text-primary s-text">
                      Forget Password
                    </a>
                  </div>
                  <div>
                    <p className="mb-32 m-text">
                      Don&apos;t have an account?{" "}
                      <Link href="/sign-up" className="text-primary fw-semibold">
                        Sign Up
                      </Link>
                    </p>
                    <button className="btn btn-secondary fw-semibold">Sign In</button>
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

export default SignInPage;
