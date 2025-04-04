"use client";
// hooks/useAOS.js or hooks/useAOS.ts
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InitAOS = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);

  return null;
};

export default InitAOS;
