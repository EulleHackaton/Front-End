import "./main.css"
import Vue from "../../src/assets/TechImages/vue.png"
import Eulle from '../../src/assets/Eulle.png'
import VideoPitch from '../../src/assets/videos/VideoVOS.mp4'
import Mascot from '../../src/assets/Group 41.png'
import PowerAutomate from "../../src/assets/TechImages/power_automate.png"
import Outlook from "../../src/assets/TechImages/outlook.png"
import Excel from "../../src/assets/TechImages/excel.png"
import PowerBi from "../../src/assets/TechImages/power__bi.png"

function Main() {
    return (
        <main>
            <section className="container__firstanm">
                <FirstAnim />
            </section>
            <section>
                <div className="title">
                    <img src={Eulle} alt="Eulle-Name" className="nameTitle"/>
                    <h1 className="nameDocs">Docs</h1>
                </div>
                {/* Aqui irá ficar o vídeo Pitch */}

                <div className="video-pitch">
                    <video width={700} controls autoPlay>
                        <source src={VideoPitch} type="video/ogg"/>
                        <source src={VideoPitch} type="video/avi"/>
                        <source  src={VideoPitch} type="video/mp4"/>
                        <p>Desculpe, mas seu navegador não suporta o tipo do vídeo, mas você pode baixar clicando <a href="#">aqui</a></p>
                    </video>
                </div>

            </section>

            <article>
                <h2><span className="description">Description</span></h2>
                <p><span className="description__eulle">Eulle</span> é uma Inteligência Artificial feito a partir do Microsoft Power Automate.</p>
                <p>Seu objetivo é identificar dados das notas fiscais dos escritório {"Daniel"} e  {"Dannemann"} vindo por e-mail e registrando nas planilhas em Excel, facilitando o trabalho que antes era manualmente.</p>
                <p>No Power Automate, foi utilizado o AI Builder que serve para treinarmos uma Inteligência Artifical para que ela consiga reconhecer as notas fiscais</p>
                <p>Foi treinado duas coleções para dois ecritórios que possuem notas fiscais diferentes.</p>
            </article>

            <section>
                <div className="hiw-content">
                    <img src={Mascot} alt="Mascote" className="mascot"/>
                    <h2><span className="hiw">How it works?</span></h2>
                    <img src={Mascot} alt="Mascote" />
                </div>
                {/*Video Here*/}

                <div className="hiw-video">
                    <video width={700} controls autoPlay>
                            <source src={VideoPitch} type="video/ogg"/>
                            <source src={VideoPitch} type="video/avi"/>
                            <source  src={VideoPitch} type="video/mp4"/>
                            <p>Desculpe, mas seu navegador não suporta o tipo do vídeo, mas você pode baixar clicando <a href="#">aqui</a></p>
                    </video>
                </div>
            </section>

            <section>
                <h2><span className="technologies">Technologies</span></h2>
                <div className="tech-images">
                    <img src={PowerAutomate} className="image" alt="Power-Automate" />
                    <img src={Vue} alt="Vue-React" className="image" />
                    <img src={Outlook} alt="Outlook" className="image" />
                    <img src={Excel} alt="Excel" className="image" />
                    <img src={PowerBi} alt="Power-BI" className="image" />
                </div>
            </section>
            <section>
                <h2><span className="team-title">Dev Team</span></h2>
            </section>

        </main>
    );
}

export default Main;