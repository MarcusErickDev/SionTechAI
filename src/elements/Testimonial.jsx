import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Diseño armónico, ordenado y un equilibrio estético entre colores, fotografía y animaciones.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Ara Kim </span> - CEO, KIM DESIGN, SA DE CV.</h6>
                                        <h5><span><a target="blank" href="https://kim-design.com.mx/">Kim Design</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Me gustó el diseño de SionTech, El web site demuestra que nuestra compañia está a la vanguardia.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Obed González </span> - CEO, THE CARPETMAN COMPANY, LLC.</h6>
                                        <h5><span><a target="blank" href="https://thecarpetmancompany.com/">The Carpetman Company</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Website profesional y completo que exhibe nuestros mejores proyectos con calidad.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Lupita Arias </span> - CFO, EAGLE CONCRETE CONSTRUCTION AND EXCAVATION, LLC.</h6>
                                        <h5><span><a target="blank" href="https://www.eagleconcreteconstruction.com/">Eagle Concrete Construction</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel>

                            {/* <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Nuestro website Tour Colorada es dinámico, auto gestionable y se integra con nuestras redes sociales.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Iris Arevalo </span> - DIRECTORA, EL ÚLTIMO Y VIAJAMOS, SAS DE CV.</h6>
                                        <h5><span><a target="blank" href="http://www.tour-colorada.com/">Tour Colorada</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel> */}
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>El sistema cotizador nos ha solucionado perdida de tiempo y seguridad en la generación de cotizaciones.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Christian Cantor </span> - CEO, FABRICANTES DE RACKS Y ESTANTERÍA ARE, SA DE CV.</h6>
                                        <h5><span><a target="blank" href="https://drive.google.com/open?id=1dlWD5jmeTlynQjqzZ1dBOVuhbFpYhBsn">Racksare</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Recomiendo SionTech ampliamente por su dedicación y calidad en su trabajo de diseño y desarrollo.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Roberto Urbina </span> - CEO, SOLUCIONES CORPORATIVAS UR, SAS DE CV.</h6>
                                        <h5><span><a target="blank" href="http://www.soluciones-ur.com/">Soluciones UR</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Nuestro sitio web representa la imagen corporativa de Delta de manera auténtica, genuina y elegante.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Marco Márquez </span> - CEO, CONSTRUCCIÓN Y DECORACIÓN DELTA, SA DE CV.</h6>
                                        <h5><span><a target="blank" href="https://deltacyd.netlify.app/">Delta</a></span></h5>
                                    </div>
                                </div>
                            </TabPanel>

                            {/* <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel> */}
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                {/* <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab> */}
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                {/* <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab> */}
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;