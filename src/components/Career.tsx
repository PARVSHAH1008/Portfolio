import { useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the timeline height relative to scrolling through the section
    gsap.to(".career-timeline", {
      maxHeight: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%", // start animation when top of career section hits 50% of screen
        end: "bottom 80%", // end animation when bottom hits 80%
        scrub: 1, // smooth scrub
      },
    });

    // Fade up the career entries as they come into view
    const entries = gsap.utils.toArray(".career-info-box");
    entries.forEach((entry: any) => {
      gsap.fromTo(
        entry,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: entry,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className="career-section section-container" ref={containerRef}>
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          
          {/* Animated Timeline Center Line */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Research Intern</h4>
                <h5>Balkrushna Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Conducted market research and lead generation using LinkedIn and digital platforms.
              Identified potential business opportunities by analyzing company profiles and industry segments.
              Researched logistics and technology sectors to understand demand patterns and market positioning.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Testing & Research Intern</h4>
                <h5>Balkrushna Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Performed manual testing of company software products and reported bugs and usability issues.
              Evaluated system functionality and user workflows to improve platform reliability.
              Assisted in documenting product features and testing processes.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
