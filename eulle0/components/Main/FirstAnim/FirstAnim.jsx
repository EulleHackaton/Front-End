import "./FirstAnim.css"
import mascot from "./src/mascot.png"
import triangle from "./src/triangle.png"

function FirstAnim() {
    return (
        <div data-aos="fade-up" className="content__firstanm">
            <img data-aos="fade-right" className="mascot__firstanm" src={mascot} alt="Mascot" />
            <img data-aos="fade-left" className="triangle__firstanm" src={triangle} alt="" />
        </div>
    );
}

export default FirstAnim;