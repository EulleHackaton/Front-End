import "./Header.css"

function Header() {
    return (
    <header>
        <nav>
            <a href="/"><img src="../../src/assets/Eulle.png" alt="Eulle Icon" id="logoName"/></a>
            <div>
                <img src="../../src/assets/supergraphic.png" alt="Bosch-Supergraphic" id="boschGraph" />
            </div>
        </nav>
    </header>
    );
}

export default Header;