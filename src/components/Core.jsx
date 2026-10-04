import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import skateboard from "../images/skateboard.png";

gsap.registerPlugin(ScrollTrigger);

function Core() {
  const sectionRef = useRef(null);
  const boardRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const board = boardRef.current;
    const benefits = gsap.utils.toArray(section.querySelectorAll(".benefit"));

    const ctx = gsap.context(() => {
      gsap.set(board, {
        y: 0,
      });

      gsap.set(benefits, {
        opacity: 0,
        y: 30,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          pin: false,
        },
      });

      timeline.to(
        board,
        {
          y: 550,
          duration: 4,
          ease: "none",
        },
        0,
      );

      benefits.forEach((benefit, index) => {
        timeline.to(
          benefit,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.5 + index * 0.9,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="core-section" ref={sectionRef}>
      <div className="core-heading">
        <h2>MADE TO MOVE YOU FORWARD.</h2>
      </div>

      <div className="skateboard-stage">
        <img
          ref={boardRef}
          src={skateboard}
          alt="UPSHIFT skateboard"
          className="skateboard"
        />

        <div className="benefits-container">
          <div className="benefit">
            <span>STRATEGY</span>
            <h3>Think Bigger.</h3>
            <p>Turn bold ideas into clear, purposeful strategies.</p>
          </div>

          <div className="benefit">
            <span>CREATIVITY</span>
            <h3>Stand Out.</h3>
            <p>Build a brand people notice and remember.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Core;
