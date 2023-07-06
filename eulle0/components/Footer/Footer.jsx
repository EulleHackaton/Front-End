import "./Footer.css"
import LogoBosch from "../../src/assets/Bosch_symbol_logo_white.png"


function Footer() {
    return (
        <footer>
            <img src={LogoBosch} alt="Bosch-Logo" className="boschLogo" />
        </footer>
    );
}

export default Footer;