import { useEffect, useRef } from "react";
import gsap from "gsap";
import Card from "./Card";

const Hero = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    const heading = heroRef.current.querySelector("h1");
    const cards = heroRef.current.querySelectorAll(".stat-box");

    const tl = gsap.timeline();

    tl.fromTo(
      heading,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      cards,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        ease: "power2.out",
      },
      "-=0.5",
    );
  }, []);
  return (
    <>
      <div className="hero" ref={heroRef}>
        <div className="min-vh-100  text-secondary px-4 py-5 text-center">
          <div className="py-5">
            <h1>
              WELCOME <span>ITZFIZZ</span>
            </h1>
          </div>
          <div className="cards-container">
            <Card number="250%+" description="Revenue Growth" />
            <Card number="120+" description="Brands Scaled" />
            <Card number="85%" description="Client Retention" />
            <Card number="3.5×" description="Average ROI" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
