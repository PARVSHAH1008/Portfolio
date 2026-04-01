import { useEffect, useState } from "react";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document.getElementById("work")!.getBoundingClientRect().bottom;
      setIsVisible(scrollY > threshold / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    "Financial Statement Analysis",
    "Business Model Analysis",
    "Equity Research",
    "Sector Analysis",
    "Investment Research",
    "Market Trend Analysis",
    "Microsoft Excel",
    "PowerPoint",
    "Financial Reports & Presentations",
    "Analytical Thinking",
    "Data Interpretation"
  ];

  return (
    <div className="techstack" style={{ height: "auto", minHeight: "60vh", paddingBottom: "100px", marginTop: "250px" }}>
      <h2 style={{ position: "relative", top: "0", marginBottom: "60px" }}>My Skills</h2>
      
      <div 
        style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          gap: "20px", 
          maxWidth: "900px", 
          margin: "0 auto",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.8s ease-out"
        }}
      >
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{
              padding: "15px 30px",
              border: "1px solid var(--accentColor)",
              borderRadius: "4px",
              fontSize: "18px",
              color: "#eae5ec",
              backgroundColor: "rgba(10, 17, 40, 0.5)",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s ease, transform 0.3s ease",
              cursor: "default"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--accentColor)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
