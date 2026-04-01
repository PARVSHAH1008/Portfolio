import { FaYoutube } from "react-icons/fa6";
import "./styles/YouTubeBanner.css";

const YouTubeBanner = () => {
  return (
    <div className="youtube-section section-container">
      <div className="youtube-banner">
        <div className="youtube-content">
          <h2>Market Breakdowns & Analysis</h2>
          <p>
            Watch my latest equity research, fundamental teardowns, and deep dives on 
            listed Indian companies directly on my YouTube channel.
          </p>
        </div>
        
        <div className="youtube-action">
          <a 
            href="https://www.youtube.com/@equiedgeresearch_yt" 
            target="_blank" 
            rel="noreferrer"
            className="youtube-button"
            data-cursor="disable"
          >
            <FaYoutube className="youtube-icon" />
            <span>Watch & Subscribe</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouTubeBanner;
