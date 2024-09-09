import React from "react";
import ScrollToTop from "react-scroll-up";
import TextLoop from "react-text-loop";
//listo
import FooterTwo from "./components/FooterTwo";
//listo
import { FiChevronUp } from "react-icons/fi";
import { GoArrowDown } from "react-icons/go";
//listo
import TabThree from "./components/TabThree";

//listo
import Helmet from "./components/Helmet";

//listo
import designerAvatar from "./images/dp-portfolio-01.jpg";

import HeaderTwo from "./components/HeaderTwo";

import TabTwo from "./components/TabTwo";

import ServiceList from "./components/ServiceList";

import Accordion01 from "./components/Accordion";

import PortfolioList from "./components/PortfolioList";

import Swal from "sweetalert2";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import CallAction from "./components/CallAction";

import logo from "./assets/images/logoNegro.jpeg"

const SlideList = [
  {
    textPosition: "text-left",
    category: "Lo mejor en Marketing",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

function procesandoPago() {
  Swal.fire({
    title: "Procesando pago",
    text: "Se te redirigirá a PayPal",
    icon: "success",
    confirmButtonText: "Ok",
  }).then(() => {
    // Definir los datos que enviarás al backend
    const data = {
      monto: 0.01, // Monto que estás enviando al backend
    };

    // Realizar la solicitud POST al backend
    (async () => {
      try {
        const response = await fetch("https://spacemarketing.abogadoaescobarm.com/paypalHandler.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            monto: 0.01, // Ajusta el monto según sea necesario
          }),
        });
    
        const responseData = await response.json();
        console.log("Respuesta de la solicitud:", responseData);
    
        if (responseData) {
          // Redirigir a la URL de aprobación de PayPal
          window.location.href = responseData.links[1].href;
        } else {
          console.error("Error: No se encontró el enlace de aprobación en la respuesta.");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    })();

    
  });
}


function App() {
  return (
    <div>
      <Helmet pageTitle="Space Marketing" />
      {/* Start Header Area  */}
      <HeaderTwo logo="symbol-dark" color="color-black" />
      {/* End Header Area  */}

      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height"
            key={index}
            id="principio"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="designer-thumbnail">
                    <img
                      src={logo}
                      alt="Slider Images"
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt_md--40 mt_sm--40">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className="title">
                   
                      <TextLoop>
                        <span style={{color: "#ffbf1a"}}>Space Marketing</span>
                      </TextLoop>{" "}
                    </h1>
                    <h3 >
                      Conoce nuestro CEO <GoArrowDown />
                    </h3>
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

      <div
        className="about-area about-position-top pb--120  bg_color--1"
        style={{ paddingBottom: "30px !important" }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div
                  className="thumbnail"
                  style={{
                    marginTop: "5vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="w-50"
                    src="https://abogadoaescobarm.com/newImg2.jpeg"
                    alt="About Images"
                    style={{}}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner pt--100">
                  <div className="section-title">
                    <h3 className="title" id="conoceNuestroSeo" style={{ textAlign: "center" }}>
                      Conoce más sobre mí
                    </h3>
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

      {/* Servicios */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="section-title text-left mb--30">
              <h2 id="servicios">Nuestros servicios</h2>
              <p>
                Ofrecemos servicios integrales de marketing digital y desarrollo
                web diseñados para impulsar tu negocio en el mundo digital.
                Desde la creación de estrategias personalizadas que aumentan la
                visibilidad de tu marca, hasta el desarrollo de sitios web
                optimizados y atractivos.
              </p>
            </div>
          </div>
        </div>
        <div className="row creative-service">
          <div className="col-lg-12">
            <ServiceList
              item="6"
              column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
            />
          </div>
        </div>
      </div>
      {/* Servicios */}

      {/*compra a través del sitio */}
      <div className="rn-about-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src={
                    "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt="About Images"
                />
              </div>
            </div>
            <div className="col-lg-6" id="ebook">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title" style={{ fontSize: "40px" }}>
                    Adquiere nuestros E-Books digitales
                  </h2>
                  <p>
                    Con una oferta de tiempo limitado, sólamente por{" "}
                    <span style={{ color: "rgb(255, 191, 26)" }}>1.99$</span> podrás
                    aprender sobre:
                  </p>
                </div>
                <div className="accordion-wrapper mt--30">
                  <Accordion01 />
                </div>
                <div className="about-button mt--50">
                  <a
                    className="rn-button-style--2 btn-solid"
                    onClick={procesandoPago}
                  >
                    COMPRA YA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*compra a través del sitio */}

      {/* Start Designer Portfolio  */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title" id="clientes">Clientes</h2>
                    <p>
                      Nuestros proyectos más recientes con clientes satisfechos
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="https://api.whatsapp.com/send?phone=584244560374">
                      <span>Haz una consulta</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Designer Portfolio  */}

      {/* SUSCRIBETE A LOS CURSOS */}
      <CallAction />
      {/* SUSCRIBETE A LOS CURSOS */}

      {/* INFO DE LA EMPRESA */}
      <div className="rn-contact-top-area ptb--120 bg_color--5" id="empresas">
        <div className="container">
          <div className="row">
            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rn-address">
                <div className="inner">
                  <div
                    className="icon"
                    style={{
                      position: "relative",
                      margin: "auto",
                      left: 0,
                      right: 0,
                    }}
                  >
                    <FiHeadphones />
                  </div>

                  <h4 className="title">Número de Teléfono</h4>
                  <p>
                    <a href="tel:+057 254 365 456"> +58 424 4449567</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
              <div className="rn-address">
                <div className="inner">
                  <div
                    className="icon"
                    style={{
                      position: "relative",
                      margin: "auto",
                      left: 0,
                      right: 0,
                    }}
                  >
                    <FiMail />
                  </div>

                  <h4 className="title">Correo Electrónico</h4>
                  <p style={{ width: "100%", overflowX: "auto" }}>
                    <a href="mailto:Spacemarketing60@gmail.com">
                      Spacemarketing60@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
              <div className="rn-address">
                <div className="inner">
                  <div
                    className="icon"
                    style={{
                      position: "relative",
                      margin: "auto",
                      left: 0,
                      right: 0,
                    }}
                  >
                    <FiMapPin />
                  </div>

                  <h4 className="title">Ubicación</h4>
                  <p>Valencia, Estado Carabobo </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      {/* info de la empresa */}

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
