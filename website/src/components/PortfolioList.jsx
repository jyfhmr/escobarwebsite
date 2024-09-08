import React, { Component } from "react";
import {Link} from "react-router-dom";
import image1 from "../assets/images/website1.png"
import image2 from "../assets/images/website2.png"
import image3 from "../assets/images/website3.png"
import image4 from "../assets/images/website4.png"
import image5 from "../assets/images/website5.png"
import image6 from "../assets/images/website6.png"


const PortfolioListContent = [
    {
        image: image1,
        category: 'Web Site',
        title: 'Método Vargas',
        href: "https://www.elmetodovargas.com/"
    },
    {
        image: image2,
        category: 'Web Site',
        title: 'Go Pharma',
        href: "https://gopharma.com.ve/"
    },
    {
        image: image3,
        category: 'Web Site',
        title: 'Jersson Photography',
        href: "https://jerssonlunaphotographystudio.com/"
    },
    {
        image: image4,
        category: 'Web Site',
        title: 'Camping Fungi',
        href: "https://camping-fungi.com/"
    },
    {
        image: image5,
        category: 'Web Site',
        title: 'DAS Akademie',
        href: "https://de.dasakademie.com/de-de/"
    },
    {
        image: image6,
        category: 'Web Site',
        title: 'French Summer',
        href: "https://frenchsummerclasses.com/"
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner" >
                                <div className={`thumbnail ${value.image}`} style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url('${value.image}')`}}></div>
                                <div className={`bg-blr-image ${value.image}`} ></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        {
                                        <a className="rn-btn" href={value.href}>Visitar</a>
                                        }
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;