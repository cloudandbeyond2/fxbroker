"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  user_name: string;
  user_email: string;
  contact_number: string;
  message: string;
};
const ContactUsPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submitbtnText, setSubmitbtnText] = useState("Send Message");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ contact_number, message, user_email, user_name }) => {
    if (!process.env.NEXT_PUBLIC_PUBLIC_KEY || !process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID) {
      toast.error("Fill up PUBLIC_KEY, SERVICE_ID and TEMPLATE_ID", { position: "top-right", duration: 4000 });
      return;
    }
    if (!contact_number || !message || !user_name || !user_email) {
      return;
    }
    setSubmitbtnText("Sending... Please wait");
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current!, { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string }).then(
      function () {
        console.log("SUCCESS!");
        toast.success("Your Message has been sent to site owner", { position: "top-right", duration: 4000 });
        form.current?.reset();
        setTimeout(() => {
          setSubmitbtnText("Send Message");
        }, 400);
      },
      function (error) {
        console.log("FAILED...", error);
        toast.error("Failed to send message", { position: "top-right", duration: 4000 });
      },
    );
  };
  return (
    <main>
      {/* <!-- breadcrumb --> */}
      <section className="hero-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col position-relative z-2">
              <h2 className="display-4 fw-semibold text-white mb-3 mb-lg-4">Contact Us</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item">
                    <a href="#" className="l-text">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item l-text">Pages</li>
                  <li className="breadcrumb-item active l-text" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- contact us --> */}
      <section className="contact-us pt-120 pb-120">
        <div className="container">
          <div className="text-center mb-60">
            <h5 className="fw-semibold text-primary mb-3">Contact Us</h5>
            <h2 className="display-4 fw-semibold">Let Me Helping You</h2>
          </div>
          <div className="row g-4 g-xl-4 pb-120">
            <div className="col-md-6 col-lg-4">
              <div className="contact-box box-lg primary d-flex gap-3 gap-xl-4">
                <span className="icon f-center fs-3">
                  <i className="ph ph-map-pin-bold"></i>
                </span>
                <div>
                  <h4 className="fw-semibold mb-2">Main Office</h4>
                  <p className="mb-3">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  <a href="#">Find Location</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-box box-lg primary d-flex gap-3 gap-xl-4">
                <span className="icon f-center fs-2">
                  <i className="ph ph-envelope-open"></i>
                </span>
                <div>
                  <h4 className="fw-semibold mb-2">Email Address</h4>
                  <p className="mb-3">infoexample@gmail.com example@gmail.com</p>
                  <a href="#">Get in Touch</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-box box-lg primary d-flex gap-3 gap-xl-4">
                <span className="icon f-center fs-3">
                  <i className="ph ph-phone-call-bold"></i>
                </span>
                <div>
                  <h4 className="fw-semibold mb-2">Phone Number</h4>
                  <p className="mb-3">
                    (505) 555-0125 <br />
                    (406) 555-0120
                  </p>
                  <a href="#">Contact Us Today</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <form ref={form} onSubmit={handleSubmit(onSubmit)} className="box-lg contact-form" id="contact-form">
                <h4 className="fw-semibold bb-dashed">Get In Touch</h4>
                <div className="mb-3 mb-lg-4 form-group">
                  <label htmlFor="name" className="d-block mb-3">
                    Your Name
                  </label>
                  <input {...register("user_name", { required: true })} minLength={2} type="text" id="name" placeholder="Enter Name" />
                  {errors.user_name && <p className="text-danger mt-2">Name is required</p>}
                </div>
                <div className="mb-3 mb-lg-4 form-group">
                  <label htmlFor="number" className="d-block mb-3">
                    Your Nubmer
                  </label>
                  <input {...register("contact_number", { required: true })} minLength={11} type="number" id="number" placeholder="Enter Number" />
                  {errors.contact_number && <p className="text-danger mt-2">Number is required</p>}
                </div>
                <div className="mb-3 mb-lg-4 form-group">
                  <label htmlFor="email" className="d-block mb-3">
                    Your Email
                  </label>
                  <input
                    {...register("user_email", {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                  />
                  {errors.user_email && <p className="text-danger mt-2">Invalid Email Address</p>}
                </div>
                <div className="mb-32 form-group">
                  <label htmlFor="message" className="d-block mb-3">
                    Your Message
                  </label>
                  <textarea {...register("message", { required: true })} placeholder="Enter Message" minLength={5} rows={4} id="message"></textarea>
                  {errors.message && <p className="text-danger mt-2">Message is required</p>}
                </div>
                <button type="submit" className="btn btn-secondary fw-semibold submit-btn">
                  {submitbtnText}
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="box-lg">
                <h4 className="fw-semibold bb-dashed">Find Us in Map</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12771.527452122677!2d91.8960952955943!3d22.394027924453322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1721047839354!5m2!1sen!2sbd"
                  width="600"
                  height="587"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-3"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
};

export default ContactUsPage;
