"use client";
import React, { useEffect } from "react";

import { usePathname } from "next/navigation";
const Bootstrap = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  useEffect(() => {
    // Dynamically import bootstrap and Choices
    const loadDependencies = async () => {
      await import("bootstrap");
      const Choices = (await import("choices.js")).default;

      const choices = document.querySelectorAll(".select");
      if (choices) {
        choices.forEach((choice) => {
          new Choices(choice, {
            searchEnabled: false,
            silent: true,
            itemSelectText: "",
          });
        });
      }
    };

    loadDependencies();
  }, [path]);

  return <>{children}</>;
};

export default Bootstrap;
