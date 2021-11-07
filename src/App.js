import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";
import badgesImg from "assets/images/badges-img.webp";
import LinkBtn from "components/LinkBtn/LinkBtn";
import company1 from "assets/images/company-1.webp";
import company2 from "assets/images/company-2.webp";
import company3 from "assets/images/company-3.webp";
import company4 from "assets/images/company-4.webp";
import company5 from "assets/images/company-5.webp";
import company6 from "assets/images/company-6.webp";
import SideBySideSection from "components/SideBySideSection/SideBySideSection";
import platformImg from "assets/images/platform-img.webp";
import integrationImg from "assets/images/integration-img.webp";

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

      <div className="container-wrapper">
        <div className="companies">
          <p className="text-center fs-24px dark-blue mb-40px">
            Trusted by more than 12,000 businesses in 140 countries.
          </p>

          <div className="companies-images">
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
            <img src={company4} alt="" />
            <img src={company5} alt="" />
            <img src={company6} alt="" />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-wrapper">
        <p className="cards-title fs-36px text-center graphik-medium darkest-blue">
          What you can do with Help Scout
        </p>
      </div>

      <SideBySideSection
        headline="Platform"
        title="Every support tool you need, out of the box"
        subtitle="With features like shared email, live chat, knowledge base, reports, and much more, Help Scout gives growing companies the flexibility and visibility to support customers at scale."
        linkTitle="How it works"
        identity={true}
        img={platformImg}
      />
      <SideBySideSection
        headline="Integrations"
        title="Connect the tools you already use"
        subtitle="Explore 50+ integrations that make your day-to-day workflow more efficient and familiar. Our extensive developer tools might also strike your fancy"
        linkTitle="See all Integrations"
        img={integrationImg}
      />
    </div>
  );
}

export default App;
