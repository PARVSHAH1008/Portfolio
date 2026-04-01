import { useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WhatIDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up animation for title and cards when reaching the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // when top of section hits 80% screen
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(".what-header", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(
        ".what-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 },
        "-=0.4"
      );
  }, { scope: containerRef });

  return (
    <div className="whatIDO section-container" id="whatido" ref={containerRef}>
      
      <div className="what-header">
        <h2 className="title">
          W<span className="hat-h2">HAT</span> I<span className="do-h2"> DO</span>
        </h2>
      </div>

      <div className="what-grid">
        
        {/* Card 1 */}
        <div className="what-card">
          <h3>FUNDAMENTAL ANALYSIS</h3>
          <p className="what-desc">
            Evaluating business models, analyzing financial statements, and assessing
            long-term growth drivers to determine intrinsic value and investment opportunities.
          </p>
          <div className="what-skills">
            <span className="what-tag">Financial Modeling</span>
            <span className="what-tag">Valuation</span>
            <span className="what-tag">Balance Sheets</span>
            <span className="what-tag">Income Statements</span>
            <span className="what-tag">Cash Flow Analysis</span>
            <span className="what-tag">Capital Allocation</span>
            <span className="what-tag">Excel</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="what-card">
          <h3>MARKET RESEARCH</h3>
          <p className="what-desc">
            Researching industries, analyzing supply chains (like logistics and railway freight), 
            and understanding macroeconomic and sectoral trends to form actionable insights.
          </p>
          <div className="what-skills">
            <span className="what-tag">Sector Analysis</span>
            <span className="what-tag">Market Trends</span>
            <span className="what-tag">Lead Generation</span>
            <span className="what-tag">Data Interpretation</span>
            <span className="what-tag">PPT Presentations</span>
            <span className="what-tag">Research Reports</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatIDo;
