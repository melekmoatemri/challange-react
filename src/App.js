import "./App.css";
import Contact from "./composant/Contact";
import Info from "./composant/Info";
import Navbar from "./composant/Navbar";
import Projects from "./composant/Projects";
import Footer from "./Footer";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Info />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
