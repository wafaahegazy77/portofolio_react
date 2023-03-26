import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Newsletter = () => {
    return (
        <section className='newsletter-sec section py-0'>
            <Container>
                <div className='inner_box'>
                    <Row className='align-items-center justify-content-around'>
                        <Col md={6}>
                            <div className='text_box'>
                                <h1 className='title fw-bold color-primary mb-4 text-capitalize color-primary'>
                                    Subscribe to my newsletter
                                </h1>
                                <p className="det mb-0 fs-5">
                                    Interested in hearing about me? Subscribe now and get latest news
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <form>
                                <div className='form-group my-2'>
                                    <input type="text" placeholder="E-mail" className='form-control' />
                                    <button className='butn primary_border_butn'>Send</button>

                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Newsletter