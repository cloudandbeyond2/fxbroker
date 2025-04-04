import React from "react";
import discord from "@/public/images/clients/discord-black.png";
import dropbox from "@/public/images/clients/dropbox-black.png";
import feedly from "@/public/images/clients/feedly-black.png";
import google from "@/public/images/clients/google.png";
import loom from "@/public/images/clients/loom-black.png";
import shopify from "@/public/images/clients/shopify-black.png";
import lattice from "@/public/images/clients/lattice.png";
import airtable from "@/public/images/clients/airtable.png";
import jotform from "@/public/images/clients/jotform.png";
import Image from "next/image";
const TrustedPartner = () => {
  return (
    <section className="trusted-partner pt-80 pb-80">
      <div className="container">
        <div data-aos="zoom-in" className="row">
          <h5 className="text-center mb-60">TRUSTED BY OVER 12,500 BEST PARTNER</h5>
          <div className="d-flex flex-wrap gap-4 gap-xxl-5 justify-content-center">
            <Image src={discord} alt="" />
            <Image src={dropbox} alt="" />
            <Image src={feedly} alt="" />
            <Image src={google} alt="" />
            <Image src={loom} alt="" />
            <Image src={shopify} alt="" />
            <Image src={discord} alt="" />
            <Image src={lattice} alt="" />
            <Image src={airtable} alt="" />
            <Image src={jotform} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
