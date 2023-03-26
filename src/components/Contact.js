import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contact_img1 from '../assets/contact_1.png' 
const Contact = () => {
    return (
        <section className='contact-sec section' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={7}>
                        <div className="mb-5">
                            <h1 className="title_sec mb-3 color-primary">Get in Touch</h1>
                            <p className="det text-white-50 fs-5">
                                I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.
                            </p>
                        </div>
                        <div className='form_box'>
                            <form>
                                <Row>
                                    <Col md={6}>
                                        <div className='form-group mb-4'>
                                            <input type="text" placeholder="First Name" className='form-control' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='form-group mb-4'>
                                            <input type="text" placeholder="Last Name" className='form-control' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='form-group mb-4'>
                                            <input type="text" placeholder="Phone number" className='form-control' />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='form-group mb-4'>
                                            <input type="text" placeholder="E-mail" className='form-control' />
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className='form-group mb-4'>
                                            <textarea placeholder="Message ..." className='form-control' rows={6}></textarea>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <button className='butn primary_butn'>Submit</button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                    <Col md={5}>
                        <img src={contact_img1} alt='' className='contact_img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact