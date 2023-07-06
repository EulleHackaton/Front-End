import "./FirstAnim.css"
import bg_triangles from "./src/bg_triangles.png"
import mascot from "./src/mascot.png"
import triangle from "./src/triangle.png"

function FirstAnim() {
    return (
        <div className="content__firstanm">
            <img className="bg__firstanm" src={bg_triangles} alt="bg_triangles" />
            <img className="mascot__firstanm" src={mascot} alt="Mascot" />
            <img className="triangle__firstanm" src={triangle} alt="" />
        </div>
    );
}

export default FirstAnim;