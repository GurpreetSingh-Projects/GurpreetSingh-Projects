"use client";
import React, { useEffect } from "react";
import { ReactTyped } from "react-typed";
const TypewriterEffect = (props: { typewriterText: string[] }) => {
  return (
    <ReactTyped
      strings={props?.typewriterText}
      className="typewriter text-shadow-lg"
      typeSpeed={70}
      backSpeed={10}
      loop
      smartBackspace
    />
  );
};

export default TypewriterEffect;
