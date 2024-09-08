import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Chat Bots',
        description: 'Automatiza la interacción con tus clientes mediante chat bots personalizados que brindan respuestas rápidas y eficientes. Mejora la atención al cliente las 24 horas del día, optimizando tiempos y recursos en tu negocio.'
    },
    {
        icon: <FiUsers />,
        title: 'Community Manager',
        description: 'Gestionamos tus redes sociales para aumentar la interacción y fidelización de tu comunidad. Con estrategias personalizadas, creamos contenido relevante que conecte con tu audiencia y potencie tu presencia digital.'
    },
    {
        icon: <FiMonitor />,
        title: 'Diseño de logos e identidad visual',
        description: 'Creamos una identidad visual única que refleje la esencia de tu marca. Desde el diseño de logos hasta la definición de colores y tipografías, nuestro enfoque está en transmitir profesionalismo y confianza.'
    },
    {
        icon: <FiLayers />,
        title: 'Creación de páginas web',
        description: 'Desarrollamos páginas web modernas y funcionales que no solo atraen, sino que también convierten visitantes en clientes. Optimizadas para todos los dispositivos y con una experiencia de usuario impecable.'
    },
    {
        icon: <FiUsers />,
        title: 'Asesoría de Marketing',
        description: 'Potencia tu negocio con estrategias de marketing efectivas y personalizadas. Analizamos tu mercado, creamos planes de acción y te acompañamos en la ejecución para maximizar tu presencia y resultados.'
    },
    {
        icon: <FiUsers />,
        title: 'Edición de videos',
        description: 'Potencia tu negocio con estrategias de marketing efectivas y personalizadas. Analizamos tu mercado, creamos planes de acción y te acompañamos en la ejecución para maximizar tu presencia y resultados.'
    }
]



class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
