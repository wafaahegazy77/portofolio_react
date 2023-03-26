import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skills-sec section" id="skills">
            <Container>
                <div className="skills_inner">
                    <div className="text-center col-lg-6 m-auto mb-5">
                        <h1 className="title_sec color-primary">My Skills</h1>
                        <p className="det text-white-50 fs-5">
                            How I can help your next project
                        </p>
                    </div>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill_swiper pb-5">
                        <div className="skills_item">
                            <div className="d-flex justify-content-between mb-3">
                                <span className=" text-capitalize text-white">Web Design</span>
                                <span className="num color-primary">75%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skills_item">
                            <div className="d-flex justify-content-between mb-3">
                                <span className=" text-capitalize text-white">HTML/CSS</span>
                                <span className="num color-primary">99%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "99%" }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skills_item">
                            <div className="d-flex justify-content-between mb-3">
                                <span className=" text-capitalize text-white">JavaScript</span>
                                <span className="num color-primary">80%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skills_item">
                            <div className="d-flex justify-content-between mb-3">
                                <span className=" text-capitalize text-white">React JS</span>
                                <span className="num color-primary">65%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skills_item">
                            <div className="d-flex justify-content-between mb-3">
                                <span className=" text-capitalize text-white">Bootstrap</span>
                                <span className="num color-primary">85%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skills_item">
                            <div className="d-flex justify-content-between mb-3">
                                <span className=" text-capitalize text-white">Ui/Ux</span>
                                <span className="num color-primary">77%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "77%" }} aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </Carousel>
          
                </div>
            </Container>
        </section>
    )
}

export default Skills;