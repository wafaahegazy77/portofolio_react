import './App.css';
import  NavBar  from './components/NavBar.js';
import Header from './components/Header.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Header/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default App;
