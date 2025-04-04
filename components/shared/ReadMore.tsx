"use client";
import React, { useState } from "react";
type Props = {
  top: React.ReactNode;
  more: React.ReactNode;
  btnText: string;
};
const ReadMore = ({ btnText, top, more }: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {top}
      <div className={`more-content ${showMore ? "show" : ""}`}>{more}</div>
      <button onClick={() => setShowMore(!showMore)} className="d-flex bg-transparent mt-4 more-btn align-items-center gap-2 fw-semibold text-primary m-text">
        <span className="btn-text text-primary">Show {showMore ? "Less" : "More"}</span> {btnText} <i className="ph ph-caret-down"></i>
      </button>
    </>
  );
};

export default ReadMore;
