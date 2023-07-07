import { useEffect } from "react"
import "./main.css"
import Vue from "../../src/assets/TechImages/vue.png"
import Eulle from '../../src/assets/Eulle.png'
import VideoPitch from '../../src/assets/videos/pv_w.mp4'
import Mascot from '../../src/assets/Group 41.png'
import PowerAutomate from "../../src/assets/TechImages/power_automate.png"
import Outlook from "../../src/assets/TechImages/outlook.png"
import Excel from "../../src/assets/TechImages/excel.png"
// import PowerBi from "../../src/assets/TechImages/power__bi.png"
import FirstAnim from "./FirstAnim/FirstAnim.jsx"
import git from "../../src/assets/github.png"
import kadu from "../../src/assets/teamImages/kadu.jpg"
import corsi from "../../src/assets/teamImages/corsi.jpg"
import felipe from "../../src/assets/teamImages/felipe.jpg"
import gui from "../../src/assets/teamImages/gui.jpg"
import pedrin from "../../src/assets/teamImages/pedrin.jpg"
import rapha from "../../src/assets/teamImages/rapha.jpg"

// import Aos from "aos"
// import "aos/dist/aos.css"

function Main() {
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, [])

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
                <div data-aos="fade-up" className="video-pitch">
                    <video controls autoPlay>
                        <source src={VideoPitch} type="video/ogg"/>
                        <source src={VideoPitch} type="video/avi"/>
                        <source  src={VideoPitch} type="video/mp4"/>
                        <p>Desculpe, mas seu navegador não suporta o tipo do vídeo, mas você pode baixar clicando <a href="#">aqui</a></p>
                    </video>
                </div>
            </section>

            <article>
                <h2 className="description">Description</h2>
                <div className="content__description">
                    <p className="description_paragraph"><span className="description__eulle">Eulle</span> is an Artificial Intelligence made from Microsoft Power Automate.</p>
                    
                    <p className="description_paragraph">Its objective is to identify data from invoices from the Daniel and Dannemann offices coming by e-mail and registering them in Excel spreadsheets, facilitating the work that used to be done manually.</p>
                    
                    <p className="description_paragraph">In Power Automate, the AI ​​Builder was used to train an Artificial Intelligence so that it can recognize invoices.</p>
                    
                    <p className="description_paragraph">Two collections were trained for two offices that have different invoices.</p>
                </div>
            </article>

            <section className="hiw__main">
                <div className="hiw-content">
                    <img src={Mascot} alt="Mascote" className="mascot"/>
                    <h2 className="hiw__text">How it works?</h2>
                    <img src={Mascot} alt="Mascote" className="mascot-2"/>
                </div>
                {/*Video Here*/}
                <div className="hiw-video">
                    <video controls>
                            <source src={VideoPitch} type="video/ogg"/>
                            <source src={VideoPitch} type="video/avi"/>
                            <source  src={VideoPitch} type="video/mp4"/>
                            <p>Sorry, your browser does not support the video type, but you can download it by clicking <a href="#">HERE</a></p>
                    </video>
                </div>
                <div className="hiwdesc__main">
                    <p className="description_paragraph">When an email is sent to the person responsible for the spreadsheet in Excel with the PDF of the Invoice, the Artificial Intelligence will read the data and store in the variables the same ones it was trained to read.</p>

                    <p className="description_paragraph">After saving the data, the Power Automate automation will insert the variable data into their respective worksheet fields.</p>
                </div>
            </section>

            <section>
                <h2 className="technologies__h2">Technologies</h2>
                <div className="tech-images">
                    <img src={PowerAutomate} className="image" alt="Power-Automate" />
                    <img src={Vue} alt="Vue-React" className="image" />
                    <img src={Outlook} alt="Outlook" className="image" />
                    <img src={Excel} alt="Excel" className="image" />
                    {/* <img src={PowerBi} alt="Power-BI" className="image" /> */}
                </div>
            </section>
            <section>
                <h2 className="team-title">Dev Team</h2>
                    {/* Deve team here */}
                <div className="dev-team">
                    <div className="team-people">
                        <img className="imgteam__main" src={kadu} alt="Carlos-Photo" />
                        <div className="withgit__main">    
                            <h2 className="nameteam__main">Carlos Eduardo</h2>
                            <a href="https://github.com/Kadu17" target="_blank" rel="noopener noreferrer">
                                <img className="github__main" src={git} alt="GitHub" />
                            </a>
                        </div>
                        <p className="team-function">Automation</p>
                    </div>
                    <div className="team-people">
                        <img className="imgteam__main" src={gui} alt="Guilherme-Photo" />
                        <div className="withgit__main">    
                            <h2 className="nameteam__main">Guilherme Silva</h2>
                            <a href="https://github.com/remix-pc" target="_blank" rel="noopener noreferrer">
                                <img className="github__main" src={git} alt="GitHub" />
                            </a>
                        </div>
                        <p className="team-function">Front-End</p>
                    </div>
                    <div className="team-people">
                        <img className="imgteam__main" src={pedrin} alt="Joao-Photo" />
                        <div className="withgit__main">    
                            <h2 className="nameteam__main">João Ribeiro</h2>
                            <a href="https://github.com/joaoP-ribeiro" target="_blank" rel="noopener noreferrer">
                                <img className="github__main" src={git} alt="GitHub" />
                            </a>
                        </div>
                        <p className="team-function">Automation</p>
                    </div>
                    <div className="team-people">
                        <img className="imgteam__main" src={felipe} alt="Felipe-Photo" />
                        <div className="withgit__main">    
                            <h2 className="nameteam__main">Felipe Pereira</h2>
                            <a href="https://github.com/Flepsz" target="_blank" rel="noopener noreferrer">
                                <img className="github__main" src={git} alt="GitHub" />
                            </a>
                        </div>
                        <p className="team-function">Front-End</p>
                    </div>
                    <div className="team-people">
                        <img className="imgteam__main" src={rapha} alt="Raphael-Photo" />
                        <div className="withgit__main">    
                            <h2 className="nameteam__main">Raphael Torres</h2>
                            <a href="https://github.com/raphavtorres" target="_blank" rel="noopener noreferrer">
                                <img className="github__main" src={git} alt="GitHub" />
                            </a>
                        </div>
                        <p className="team-function">Automation</p>
                    </div>
                    <div className="team-people">
                        <img className="imgteam__main" src={corsi} alt="Vitor-Photo" />
                        <div className="withgit__main">    
                            <h2 className="nameteam__main">Vitor Corsi</h2>
                            <a href="https://github.com/vicorsi" target="_blank" rel="noopener noreferrer">
                                <img className="github__main" src={git} alt="GitHub" />
                            </a>
                        </div>
                        <p className="team-function">Documentation</p>
                    </div>
                </div>
             </section>
        </main>
    );
}

export default Main;