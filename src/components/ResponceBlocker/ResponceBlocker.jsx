"use client";

import React from "react";
import useIsDesktop from "@/helpers/useIsDesktop";

import "./ResponceBlocker.scss";

export const ResponceBlocker = () => {
  const isDesktop = useIsDesktop();

  return (
    !isDesktop && (
      <div className="responceBlock">
        <h1 className="title">
          Unfortunately, this project does not have a response design
        </h1>
        <h2>Better experience on 16/9 ratio screens.</h2>
      </div>
    )
  );
};
