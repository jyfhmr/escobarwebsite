import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || React Multipurpose Template </title>
                    <meta name="description" content="Space Marketing es una agencia de Marketing Digital que ofrece direferentes servicios tales como Desarrollo Web, Desarrollo de Presencia Online, Logos, Cursos de Marketing, Manejo de Redes sociales, Edición de videos" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
