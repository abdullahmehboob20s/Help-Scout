import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";
import badgesImg from "assets/images/badges-img.webp";
import LinkBtn from "components/LinkBtn/LinkBtn";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="pt-90px">
        <div className="container-wrapper">
          <div className="section">
            <div className="section-left">
              <p className="fs-48px graphik-semibold darkest-blue mb-20px">
                Customer support for growing businesses
              </p>
              <p className="fs-21px darkest-blue lh-2 mb-35px">
                Simple to start, powerful to grow, and proven to build better
                customer relationships.
              </p>

              <div className="hero-input-wrapper mb-35px">
                <input type="text" placeholder="Work Email*" />
                <button className="button-wrapper bg-sharp-blue white fs-18px graphik-medium radius-4px pointer">
                  Try for free
                </button>
              </div>

              <div className="hero-badges">
                <div className="hero-badges-left">
                  <img src={badgesImg} alt="" />
                </div>
                <div className="hero-badges-right">
                  <p className="darkest-blue fs-15px graphik-medium">
                    Larger team?
                  </p>
                  <LinkBtn title="Get A Demo" />
                </div>
              </div>
            </div>
            <div className="section-right">
              <video
                autoplay=""
                height="auto"
                className="hero-video"
                loop=""
                muted=""
                playsinline=""
                poster="https://hs-marketing.imgix.net/images/videos/video--share-email.png?auto=compress&amp;fit=scale&amp;dpr=1"
                preload="auto"
                width="100%"
              >
                <source
                  src="/static/video--share-email-5d8c14f7960c2e52c5febacf0bb4bb2e.webm"
                  type="video/webm"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
