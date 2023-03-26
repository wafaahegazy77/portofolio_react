import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaWhatsapp , FaFacebookF , FaGooglePlusG, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import footer_b from '../assets/footer-bottom-shape.png'

const Footer = () => {
    return (
        <section className='footer section pt-0'>
            <Container>
                <Row className='align-items-center justify-content-between'>
                    <Col sm={6}>
                        <h1 className='logo fs-3 text-white fw-bold'>
                            Wafaa Hegazy
                        </h1>
                    </Col>
                    <Col sm={6}>
                        <div className="social_links w-100 d-flex justify-content-end">
                            <a target="_blank" href="https://www.facebook.com/wafaahegazy7720"><FaFacebookF /></a>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=201111903007"><FaWhatsapp /></a>
                            <a target="_blank" href="https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Awafaahegazy7720%40gmail.com"><FaGooglePlusG /></a>
                            <a target="_blank" href='https://www.linkedin.com/in/wafaa-hegazy-7121a21aa/'><FaLinkedinIn/></a>
                            <a target="_blank" href='https://www.instagram.com/wafaahegazy77/'><FaInstagram/></a>
                        </div>
                        <p className='text-white text-end mt-3'>
                           Developed & Designed by <span className='color-primary'>Wafaa Hegazy</span>
                        </p>
                    </Col>


                </Row>
            </Container>
            <img src={footer_b} alt='' className='footer_b'/>
        </section>
    )
}

export default Footer