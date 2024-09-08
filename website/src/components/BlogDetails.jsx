import React, { Component } from "react";
import Helmet from "./Helmet";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderTwo from "./HeaderTwo";
import imagen1 from "../assets/images/imagenpago.jpg";

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { completed } = this.props;

    if(completed === true){
      const link = document.createElement("a");
      link.href = "https://spacemarketing.abogadoaescobarm.com/a.pdf"; // Ruta del PDF
      link.download = "a.pdf"; // Nombre del archivo descargado
      link.click()
      document.body.appendChild(link);
      document.body.removeChild(link);
    }

   
    return (
      <React.Fragment>
        <Helmet pageTitle="Space Marketing" />
        <HeaderTwo logo="symbol-dark" color="color-white" />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190"
          data-black-overlay="7"
          style={{
            height: "100vh",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('${imagen1}')`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="blog-single-page-title text-center pt--100"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "80vh",
                    justifyContent: "center",
                  }}
                >

                  {completed  ?  (<h2 className="title theme-gradient">
                    ¡Hemos recibido <br /> su pago!
                  </h2>) :   <h3 className="title theme-gradient">
                    Su pago no se procesó correctamente, por favor, comunicarse con soporte <br /><br/>
                    <a href="https://api.whatsapp.com/send?phone=584244560374">Escribe a soporte haciendo click Aquí</a>
                  </h3>}
                

                  {/* Condicional para mostrar el contenido basado en el prop 'completed' */}
                  {completed  && (
                    <div className="blog-meta d-flex justify-content-center align-items-center flex-col" style={{ flexDirection: "column", height: "30vh" }}>
                      <div style={{ fontSize: "24px", color: "white", fontWeight: "bolder" }}>
                        <a href="https://spacemarketing.abogadoaescobarm.com/a.pdf" download>
                          Haga click aquí para descargar contenido si no ha comenzado la descarga, también hemos enviado el contenido a su correo
                        </a>
                      </div>
                      <div>
                        <Link className="rn-button-style--2 btn-solid" to="https://api.whatsapp.com/send?phone=584244560374">
                          <span style={{ fontSize: "14px" }}>Contactar a nuestro equipo</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </React.Fragment>
    );
  }
}

export default BlogDetails;
