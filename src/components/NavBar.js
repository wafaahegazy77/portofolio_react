import {React , useState , useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar , Nav , Container } from "react-bootstrap";
import { FaWhatsappSquare , FaFacebookSquare , FaGooglePlusSquare} from 'react-icons/fa';

const NavBar = () => {
    const [activeNavLink , setActiveNavLink ] = useState('home')
    const [scrolled , setScrolled ] = useState(false)
    useEffect ( () => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll" , onScroll)
        return () => window.removeEventListener("scroll" , onScroll)
    } , [])

    const onUpdateActiveNavLink = (value) => {
        setActiveNavLink(value)
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home" className="fw-bold text-white">Wafaa Hegazy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home" className={activeNavLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveNavLink('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#skills" className={activeNavLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveNavLink('skills')}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#projects" className={activeNavLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveNavLink('projects')}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social_links">
                            <a href="https://www.facebook.com/wafaahegazy7720"><FaFacebookSquare /></a>
                            <a href="https://api.whatsapp.com/send?phone=201111903007"><FaWhatsappSquare /></a>
                            <a href="https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Awafaahegazy7720%40gmail.com"><FaGooglePlusSquare /></a>
                        </div>
                    </span>
                    <a href="#contact" className="butn primary_butn">
                        Contact Me
                    </a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar ;