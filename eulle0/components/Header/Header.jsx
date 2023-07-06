import "./Header.css"
import logo from "../../src/assets/Eulle.png"
import bgraph from "../../src/assets/supergraphic.png"

function Header() {
    return (
    <header>
        <nav className="nav__header">
            <a href="/"><img src={logo} alt="Eulle Icon" className="logoName"/></a>
            <img src={bgraph} alt="Bosch-Supergraphic" className="boschGraph" />
        </nav>
    </header>
    );
}

export default Header;