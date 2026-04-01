import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";
import gsap from "gsap";

const Landing = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // Elegant fade-up animation for the center text
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
    tl.fromTo(".landing-centered h2", { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2 })
      .fromTo(".landing-centered h1", { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8")
      .fromTo(".landing-centered h3", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.8");
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-centered">
            <h2>Hello, I'm</h2>
            <h1>PARV SHAH</h1>
            <h3>Equity Research Analyst</h3>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
