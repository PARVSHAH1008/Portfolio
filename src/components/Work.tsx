import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Equity Research Study",
    category: "Logistics Sector",
    tools: "Financial Modeling, Excel, Data Interpretation",
    desc: "Analyzed drivers such as DFC, double-stack trains, container traffic growth, and operational metrics like NTKM to understand infrastructure impact on profitability.",
    img: import.meta.env.BASE_URL + "images/train.jpg"
  },
  {
    title: "Independent Market Research",
    category: "Fundamental Analysis",
    tools: "Annual Reports, Earnings Calls",
    desc: "Regularly analyze Indian listed companies, focusing on capital allocation, competitive advantage, revenue growth drivers, and industry structure.",
    img: import.meta.env.BASE_URL + "images/nse-bse.png"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      if (translateX < 0) translateX = 0; // Prevent reverse scrolling if items are too few
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX > 0 ? translateX : 100}`, // Ensure it has a valid end
        scrub: true,
        pin: translateX > 0, // Only pin if there's enough to scroll horizontally
        id: "work",
      },
    });

    if (translateX > 0) {
      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    }

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Research</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "1rem", fontSize: "14px", color: "#ccc" }}>
                  {project.desc}
                </p>
              </div>
              <WorkImage image={project.img} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
