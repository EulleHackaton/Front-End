import "./Header.css"

function Header() {
    return (
    <header>
        <nav className="nav__header">
            <a href="/"><img src="../../src/assets/Eulle.png" alt="Eulle Icon" className="logoName"/></a>
            <img src="../../src/assets/supergraphic.png" alt="Bosch-Supergraphic" className="boschGraph" />
        </nav>
    </header>
    );
}

export default Header;