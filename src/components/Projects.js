import { Col, Row ,Container, Nav, Tab } from "react-bootstrap";
import project_img1 from '../assets/projects/1.PNG'
import project_img2 from '../assets/projects/2.PNG'
import project_img3 from '../assets/projects/3.PNG'
import project_img4 from '../assets/projects/4.PNG'
import project_img5 from '../assets/projects/5.PNG'
import project_img6 from '../assets/projects/6.PNG'

const Projects = () => {

    return (
        <section className="projects-sec section" id="projects">
            <Container>
                <div className="text-center col-lg-6 m-auto mb-5">
                    <h1 className="title_sec color-primary">My Projects</h1>
                    <p className="det text-white-50 fs-5">
                        Some of my most recent projects
                    </p>
                </div>
                <Tab.Container id="projectsTab" defaultActiveKey="tab1">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="tab1">Recent Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab2">About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab3">Empty Section</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                            <Row>
                                <Col  md={4} xs={6}>
                                    <div className="proj_card">
                                        <img src={project_img1} alt="" className="img_card"/>
                                        <h2 className="proj_name text-center text-white fw-bold text-capitalize">
                                            Alamrety
                                        </h2>
                                    </div>
                                </Col>
                                <Col  md={4} xs={6}>
                                    <div className="proj_card">
                                        <img src={project_img2} alt="" className="img_card"/>
                                        <h2 className="proj_name text-center text-white fw-bold text-capitalize">
                                            Project name
                                        </h2>
                                    </div>
                                </Col>
                                <Col  md={4} xs={6}>
                                    <div className="proj_card">
                                        <img src={project_img6} alt="" className="img_card"/>
                                        <h2 className="proj_name text-center text-white fw-bold text-capitalize">
                                            Project name
                                        </h2>
                                    </div>
                                </Col>
                                <Col  md={4} xs={6}>
                                    <div className="proj_card">
                                        <img src={project_img4} alt="" className="img_card"/>
                                        <h2 className="proj_name text-center text-white fw-bold text-capitalize">
                                            Project name
                                        </h2>
                                    </div>
                                </Col>
                                <Col  md={4} xs={6}>
                                    <div className="proj_card">
                                        <img src={project_img5} alt="" className="img_card"/>
                                        <h2 className="proj_name text-center text-white fw-bold text-capitalize">
                                            Project name
                                        </h2>
                                    </div>
                                </Col>
                                <Col  md={4} xs={6}>
                                    <div className="proj_card">
                                        <img src={project_img3} alt="" className="img_card"/>
                                        <h2 className="proj_name text-center text-white fw-bold text-capitalize">
                                            Project name
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab2">
                        <div className="text_box">
                            <h5 className="subtitle text-capitalize text-white mb-4">Leearn more About me</h5>
                            <h1 className="title fw-bold mb-4 text-white">
                                Hi I'm Wafaa Hegazy 
                            </h1>
                            <p className="det text-white-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
       
            </Container>
        