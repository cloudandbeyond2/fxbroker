import Image from "next/image";
import React from "react";
import joinImg from "@/public/images/home-one-join-discussion.png";
import Link from "next/link";
const JoinDiscussion = () => {
  return (
    <section className="join-discussion mx-2">
      <div className="inner">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div data-aos="zoom-in" className="col-lg-6">
              <h2 className="display-4 text-white fw-semibold mb-3 mb-xl-4">Join The Discussions</h2>
              <p className="l-text text-white mb-40">Explore insights from fellow investors and traders to inform your decisions effectively and confidently.</p>
              <Link href="/contact-us" className="btn btn-secondary fw-semibold d-inline-flex align-items-center gap-2">
                Contact Us <i className="ph ph-arrow-right"></i>
              </Link>
            </div>
            <div data-aos="fade-left" className="col-lg-6 col-xl-5 offset-xl-1">
              <Image src={joinImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinDiscussion;
