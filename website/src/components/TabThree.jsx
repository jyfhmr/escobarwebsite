import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import portfolio1 from "../images/dp-portfolio-01.jpg";
import portfolio2 from "../images/dp-portfolio-01.jpg";
import portfolio3 from "../images/dp-portfolio-01.jpg";
import portfolio4 from "../images/dp-portfolio-01.jpg";
import portfolio5 from "../images/dp-portfolio-01.jpg";
import portfolio6 from "../images/dp-portfolio-01.jpg";
import portfolio7 from "../images/dp-portfolio-01.jpg";
import portfolio8 from "../images/dp-portfolio-01.jpg";
import portfolio9 from "../images/dp-portfolio-01.jpg";
import portfolio10 from "../images/dp-portfolio-01.jpg";
import portfolio11 from "../images/dp-portfolio-01.jpg";

const TabOne = [
  {
    image: portfolio1,
    bigImage: portfolio1,
    category: "Web Design",
    title: "Design is a creative part",
  },
  {
    image: portfolio2,
    bigImage: portfolio2,
    category: "Mobile App",
    title: "The service provide for designer",
  },
  {
    image: portfolio3,
    bigImage: portfolio3,
    category: "Web Design",
    title: "Mobile App landing Design",
  },
  {
    image: portfolio4,
    bigImage: portfolio4,
    category: "Mobile App",
    title: "Logo Design creativity",
  },
  {
    image: portfolio5,
    bigImage: portfolio5,
    category: "Web Design",
    title: "T-shirt design is the part of design",
  },
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
];

const TabTwo = [
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Logo design is the main part for a designer",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "App Landing",
    title: "Mobile App landign is a landing page design",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Dasboard",
    title: "Dasboard design is the main part for data management",
  },
  {
    image: portfolio10,
    bigImage: portfolio10,
    category: "T-shirt Design",
    title: "T-shirt design is the popular design for digital market",
  },
  {
    image: portfolio11,
    bigImage: portfolio11,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
];

const TabThree = [
  {
    image: portfolio4,
    bigImage: portfolio4,
    category: "Mobile App",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio5,
    bigImage: portfolio5,
    category: "Web Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
];

const TabFour = [
  {
    image: portfolio6,
    bigImage: portfolio6,
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio7,
    bigImage: portfolio7,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio8,
    bigImage: portfolio8,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio9,
    bigImage: portfolio9,
    category: "Freelancer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio10,
    bigImage: portfolio10,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
  {
    image: portfolio11,
    bigImage: portfolio11,
    category: "Logo Designer",
    title: "Getting tickets to the big show",
  },
];

class TabStyleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      tab2: 0,
      tab3: 0,
      tab4: 0,
      isOpen: false,
    };
  }
  render() {
    const { column } = this.props;
    const { tab1, tab2, tab3, tab4, isOpen } = this.state;
    return (
      <div>
        <Tabs>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tablist-inner">
                <TabList className="pv-tab-button text-center mt--0">
                  <Tab>
                    <span>Todos los Proyectos</span>
                  </Tab>
                  <Tab>
                    <span>Chat Bots</span>
                  </Tab>
                  <Tab>
                    <span>Community Mannager</span>
                  </Tab>
                  <Tab>
                    <span>Diseño de Logos e Identidad Visual</span>
                  </Tab>
                  <Tab>
                    <span>Creación de sitios web</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>

          <TabPanel className="row row--35">
            {TabOne.map((value, index) => (
              <div className={`${column}`} key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabOne[tab1].bigImage}
                    nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                    prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab1: (tab1 + 1) % TabOne.length,
                      })
                    }
                    imageLoadErrorMessage="Image Loading ..."
                    enableZoom={false}
                  />
                )}
                <div className="item-portfolio-static">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab1: index })}
                  >
                    <div className="portfolio-static">
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <a href="#portfolio-details">
                            <img src={value.image} alt="Portfolio Images" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <p>{value.category}</p>
                          <h4>
                            <a href="#portfolio-details">{value.title}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="row row--35">
            {TabTwo.map((value, index) => (
              <div className={`${column}`} key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabTwo[tab2].bigImage}
                    nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                    prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab2: (tab2 + 1) % TabTwo.length,
                      })
                    }
                    imageLoadErrorMessage="Image Loading ..."
                    enableZoom={false}
                  />
                )}
                <div className="item-portfolio-static">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab2: index })}
                  >
                    <div className="portfolio-static">
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <a href="#portfolio-details">
                            <img src={value.image} alt="Portfolio Images" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <p>{value.category}</p>
                          <h4>
                            <a href="#portfolio-details">{value.title}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="row row--35">
            {TabThree.map((value, index) => (
              <div className={`${column}`} key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabThree[tab3].bigImage}
                    nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                    prevSrc={
                      TabThree[(tab3 + TabThree.length - 1) % TabThree.length]
                    }
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab3: (tab3 + 1) % TabThree.length,
                      })
                    }
                    imageLoadErrorMessage="Image Loading ..."
                    enableZoom={false}
                  />
                )}
                <div className="item-portfolio-static">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab3: index })}
                  >
                    <div className="portfolio-static">
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <a href="#portfolio-details">
                            <img src={value.image} alt="Portfolio Images" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <p>{value.category}</p>
                          <h4>
                            <a href="#portfolio-details">{value.title}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="row row--35">
            {TabFour.map((value, index) => (
              <div className={`${column}`} key={index}>
                {isOpen && (
                  <Lightbox
                    mainSrc={TabFour[tab4].bigImage}
                    nextSrc={TabFour[(tab4 + 1) % TabFour.length]}
                    prevSrc={
                      TabFour[(tab4 + TabFour.length - 1) % TabFour.length]
                    }
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        tab4: (tab4 + 1) % TabFour.length,
                      })
                    }
                    imageLoadErrorMessage="Image Loading ..."
                    enableZoom={false}
                  />
                )}
                <div className="item-portfolio-static">
                  <div
                    onClick={() => this.setState({ isOpen: true, tab4: index })}
                  >
                    <div className="portfolio-static">
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <a href="#portfolio-details">
                            <img src={value.image} alt="Portfolio Images" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="inner">
                          <p>{value.category}</p>
                          <h4>
                            <a href="#portfolio-details">{value.title}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabStyleThree;
