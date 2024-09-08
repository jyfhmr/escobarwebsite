import React, { Component } from "react";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";


import HeaderTwo from "./HeaderTwo";
import FooterTwo from "./FooterTwo";
import ContactTwo from "./ContactTwo";
import BrandTwo from "./BrandTwo";
import PageHelmet from "./Helmet";

import imagen1 from "../assets/images/imagencourses1.jpg"


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>
                
                <HeaderTwo headertransparent="header--transparent" colorblack="color--white" logoname="/logo.jpg" />

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190"  data-black-overlay="6" style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${imagen1}')`, backgroundSize: "cover"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">¡Suscríbete de manera gratuita!</h2>
                                    <p>
                                        Suscríbete ya para mantenerte actualizado con lo último en Marketing, obtener ofertas especiales y contenido gratuito
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

              
              
            
               

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterTwo />
                
            </React.Fragment>
        )
    }
}
export default Contact