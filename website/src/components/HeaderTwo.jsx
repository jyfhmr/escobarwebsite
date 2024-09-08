import React, { Component } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import logoDefault from "../assets/images/logo.png";
import logoSyles from "./logoStyles.css";

const SocialShare = [
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/spacemarketingve/",
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  handleNavigation = (e, targetId, targetRoute = "/") => {
    e.preventDefault();

    const { navigate, location } = this.props;

    if (location.pathname !== targetRoute) {
      // Si no estamos en la ruta deseada, redirigimos a esa ruta y luego desplazamos
      navigate(targetRoute, { state: { scrollToId: targetId } });
    } else {
      // Si ya estamos en la ruta deseada, simplemente hacemos scroll al elemento
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  componentDidMount() {
    // Revisar si hay un estado de "scrollToId" para hacer scroll al cargar la página
    const { location } = this.props;
    if (location.state && location.state.scrollToId) {
      const targetId = location.state.scrollToId;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    logoUrl = (
      <img
        src={logoDefault}
        className="logoStyles"
        alt="Digital Agency"
        width={"100px"}
      />
    );

    return (
      <header
        className={`header-area header-style-two header--transparent ${color}`}
      >
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="/">Inicio</Link>
                  <ul className="submenu">
                    <li>
                      <a
                        href="#principio"
                        onClick={(e) =>
                          this.handleNavigation(e, "principio", "/")
                        }
                      >
                        Principio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#conoceNuestroSeo"
                        onClick={(e) =>
                          this.handleNavigation(e, "conoceNuestroSeo", "/")
                        }
                      >
                        Sobre Nuestro CEO
                      </a>
                    </li>
                    <li>
                      <a
                        href="#servicios"
                        onClick={(e) =>
                          this.handleNavigation(e, "servicios", "/")
                        }
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ebook"
                        onClick={(e) =>
                          this.handleNavigation(e, "ebook", "/")
                        }
                      >
                        Adquiere nuestro E-BOOK
                      </a>
                    </li>
                    <li>
                      <a
                        href="#clientes"
                        onClick={(e) =>
                          this.handleNavigation(e, "clientes", "/")
                        }
                      >
                        Clientes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#empresas"
                        onClick={(e) =>
                          this.handleNavigation(e, "empresas", "/")
                        }
                      >
                        Información de la Empresa
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a
                    href="#cursos"
                    onClick={(e) => this.handleNavigation(e, "cursos", "/")}
                  >
                    Cursos
                  </a>
                  <ul className="submenu">
                    <li>
                      <Link to="/courses">Inscribirse</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-btn">
              <a
                className="rn-btn"
                href="https://api.whatsapp.com/send?phone=584244560374"
              >
                <span>CONTÁCTANOS VÍA WHATSAPP</span>
              </a>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

// Componente funcional para envolver el componente de clase
function HeaderWithRouter(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return <Header {...props} navigate={navigate} location={location} />;
}

export default HeaderWithRouter;
