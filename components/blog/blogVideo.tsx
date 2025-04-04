"use client";
import Image from "next/image";
import React, { useState } from "react";
import blogDetailVideo from "@/public/images/blog-details-video.png";
import ModalVideo from "react-modal-video";

const BlogVideo = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="blog-video f-center">
      <Image src={blogDetailVideo} className="img-fluid rounded-3" alt="" />
      <button onClick={() => setOpened(true)} className="hero-video f-center">
        <i className="ph ph-play-fill"></i>
      </button>
      <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={opened} videoId="fDgzr5xSYNE" onClose={() => setOpened(false)} />
    </div>
  );
};

export default BlogVideo;
