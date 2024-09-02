import React from "react";
import ScrollToTop from "react-scroll-up";
import TextLoop from "react-text-loop";
//listo
import FooterTwo from "./components/FooterTwo";
//listo
import { FiChevronUp} from "react-icons/fi";
import { GoArrowDown } from "react-icons/go";
//listo
import TabThree from "./components/TabThree";

//listo
import Helmet from "./components/Helmet";

//listo
import designerAvatar from "./images/dp-portfolio-01.jpg";

import HeaderTwo from "./components/HeaderTwo"

import TabTwo from "./components/TabTwo";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Lo mejor en Marketing",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

function App() {
  return (
    <div>
      <Helmet pageTitle="Designer Portfolio" />
      {/* Start Header Area  */}
      <HeaderTwo logo="symbol-dark" color="color-black"/>
      {/* End Header Area  */}

      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height"
            key={index}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="designer-thumbnail">
                    <img
                      src={"https://abogadoaescobarm.com/andres.JPG"}
                      alt="Slider Images"
                      style={{backgroundSize: "cover", backgroundPosition: "center center"}}
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt_md--40 mt_sm--40">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className="title">
                    Andrés Escobar <br />
                      <TextLoop>
                        <span> Empresa X</span>
                      </TextLoop>{" "}
                    </h1>
                    <h2>Conoce nuestro SEO <GoArrowDown/></h2>
                    {value.description ? (
                      <p className="description">{value.description}</p>
                    ) : (
                      ""
                    )}
                    {value.buttonText ? (
                      <div className="slide-btn">
                        <a
                          className="rn-button-style--2 btn-primary-color"
                          href={`${value.buttonLink}`}
                        >
                          {value.buttonText}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>

      <div className="about-area about-position-top pb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100"  alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner pt--100">
                                        <div className="section-title">
                                            <h2 className="title">dawd</h2>
                                            <p className="description">dawdwa</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

      {/* Start Designer Portfolio  */}
      <div className="designer-portfolio-area ptb--120 bg_color--1">
        <div className="wrapper plr--70 plr_sm--30 plr_md--30">
          <TabThree column="col-lg-4 col-md-6 col-sm-6 col-12" />
        </div>
      </div>
      {/* End Designer Portfolio  */}

      {/* Start Footer Style  */}
      <FooterTwo />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
}

export default App;
