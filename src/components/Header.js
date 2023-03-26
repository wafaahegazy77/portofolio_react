import {React , useState , useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight} from 'react-icons/fa';
import header_1 from '../assets/header_1.png'

const Header = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Front-End Developer", "Back-End Developer", "Full-Stack Developer" ];
    const period = 1000;
  
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
  
    return (
        <section className="header section" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="text_box">
                            <h5 className="subtitle text-capitalize text-white mb-4">Welcome to my portfolio</h5>
                            <h1 className="title fw-bold mb-4 text-white">
                                Hi I'm Wafaa Hegazy 
                                <span className="wrap d-block">{text}</span>
                            </h1>
                            <p className="det text-white-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <a href="#contact" className="butn primary_border_butn mt-5">
                                Contact Me <FaArrowRight className="ms-2"/>
                            </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={header_1} alt="Header img" className="sec_img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header ;