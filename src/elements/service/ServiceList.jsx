import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiCode, FiTablet } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Sistemas IT',
        link: '#',
        description: 'Desarrollo e implementación de sistemas de información a la medida de tu negocio.'
    },
    {
        icon: <FiCode />,
        title: 'Desarrollo Web',
        link: '#',
        description: 'Diseño de sitios WEB profesionales, desarrollo, mantenimiento, actualizaciones y mejoras.'
    },
    { 
        icon: <FiTablet />,
        title: 'Desarrollo Apps',
        link: '#',
        description: 'Diseño, desarrollo, mantenimiento, actualizaciones y mejoras de apps para dispositivos móviles.'
    },
    {
        icon: <FiLayers />,
        title: 'Soporte IT',
        link: '#',
        description: 'Soporte técnico integral en sistemas de información.'
    },
    {
        icon: <FiUsers />,
        title: 'Consultoría IT',
        link: '#',
        description: 'Asesorías integrales en tecnologías de información para invertir en el manejo de tu información.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Marketing WEB y SEO',
        link: '#',
        description: 'Optimización de sitio web, posicionamiento orgánico y publicidad.'
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
                            <a href={val.link}>
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
