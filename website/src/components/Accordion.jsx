import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


class Accordion01 extends Component {
    render(){
        return(
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Todo Sobre Logo
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            El diseño de un logo es el corazón visual de tu marca. Un logo debe ser más que solo un símbolo, debe transmitir la identidad, valores y esencia de tu negocio en una sola imagen. Creamos logos que capturan la atención y generan reconocimiento inmediato, asegurando que tu marca se distinga en un mercado competitivo.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
        
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Marketing Digital
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            El marketing digital es esencial para cualquier empresa que quiera destacar en la era moderna. A través de estrategias personalizadas, ayudamos a mejorar la visibilidad de tu marca en línea, atraer clientes potenciales y aumentar las ventas. Desde campañas en redes sociales hasta posicionamiento SEO, hacemos que tu negocio crezca.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
        
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Community Manager
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Un community manager es el puente entre tu marca y tus clientes. Nos encargamos de gestionar y potenciar tus redes sociales, creando contenido relevante que fomente la interacción con tu audiencia y construya una comunidad sólida alrededor de tu marca. Tu presencia en línea estará siempre activa y conectada.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        )
        
    }
}

export default Accordion01;





