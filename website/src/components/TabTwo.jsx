import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Educación",
      tab2 = "Misión",
      tab3 = "Valores",
      tab4 = "Visión";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a >
                            Hola, mi nombre es Andrés Escobar
                          </a>
                          Venezolano, Abogado, egresado de la universidad José Antonio Páez, en el año 2015 y Asesor de Marketing Digital desde el 2021, CEO de Space Marketing, creada en el 2023.
                        </li>

                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a >
                            El propósito principal de Space Marketing
                          </a>
                          Potenciar los proyectos de todos los emprendedores y empresarios y hacerlos crecer.
                        </li>

                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Calidad
                          </a>{" "}
                          Ser un referente como agencia de publicidad y marketing digital, estar continuamente a la vanguardia y poder ayudar a empresarios y emprendedores a cumplir sus metas
                        </li>
                      </ul>
                    </div>
                  </TabPanel>


                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                           Responsabilidad
                          </a>{" "}
                          Destacamos la comunicación y la profesionalidad, ante todo, no solo con el cliente sino como cultura interna del equipo. 
                        </li>
                        
                      </ul>
                    </div>
                  </TabPanel>


                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
