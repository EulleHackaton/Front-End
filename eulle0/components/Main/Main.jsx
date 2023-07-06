import "./main.css"

function Main() {
    return (
        <main>
            <div>
                <div className="title">
                    <img src="../../src/assets/Eulle.png" alt="Eulle-Name" className="nameTitle"/>
                    <h1 className="nameDocs">Docs</h1>
                </div>
                {/* Aqui irá ficar o vídeo Pitch */}

                <div className="video-pitch">
                    <video width={700} controls autoPlay>
                        <source src="../../src/assets/videos/VideoVOS.mp4" type="video/ogg"/>
                        <source src="../../src/assets/videos/VideoVOS.mp4" type="video/avi"/>
                        <source  src="../../src/assets/videos/VideoVOS.mp4" type="video/mp4"/>
                        <p>Desculpe, mas seu navegador não suporta o tipo do vídeo, mas você pode baixar clicando <a href="#">aqui</a></p>
                    </video>
                </div>

            </div>

            <div>
                <h2><span className="description">Description</span></h2>
                <p><span className="description__eulle">Eulle</span> é uma Inteligência Artificial feito a partir do Microsoft Power Automate.</p>
                <p>Seu objetivo é identificar dados das notas fiscais dos escritório {"Daniel"} e  {"Dannemann"} vindo por e-mail e registrando nas planilhas em Excel, facilitando o trabalho que antes era manualmente.</p>
                <p>No Power Automate, foi utilizado o AI Builder que serve para treinarmos uma Inteligência Artifical para que ela consiga reconhecer as notas fiscais</p>
                <p>Foi treinado duas coleções para dois ecritórios que possuem notas fiscais diferentes.</p>
            </div>

            <div>
                <div className="hiw-content">
                    <img src="../../src/assets/Group 41.png"alt="Mascote" className="mascot"/>
                    <h2><span className="hiw">How it works?</span></h2>
                    <img src="../../src/assets/Group 41.png" alt="Mascote" />
                </div>
                {/*Video Here*/}

                <div className="hiw-video">
                    <video width={700} controls autoPlay>
                            <source src="../../src/assets/videos/VideoVOS.mp4" type="video/ogg"/>
                            <source src="../../src/assets/videos/VideoVOS.mp4" type="video/avi"/>
                            <source  src="../../src/assets/videos/VideoVOS.mp4" type="video/mp4"/>
                            <p>Desculpe, mas seu navegador não suporta o tipo do vídeo, mas você pode baixar clicando <a href="#">aqui</a></p>
                    </video>
                </div>
            </div>

            <div>
                <h2><span className="technologies">Technologies</span></h2>
                <div className="tech-images">
                    <img src="../../src/assets/TechImages/power_automate.png" className="image" alt="Power-Automate" />
                    <img src="../../src/assets/TechImages/vue.png" alt="Vue-React" className="image" />
                    <img src="../../src/assets/TechImages/outlook.png" alt="Outlook" className="image" />
                    <img src="../../src/assets/TechImages/excel.png" alt="Excel" className="image" />
                    <img src="../../src/assets/TechImages/power__bi.png" alt="Power-BI" className="image" />
                </div>
            </div>
            <div>
                <h2><span className="team-title">Dev Team</span></h2>
            </div>

        </main>
    );
}

export default Main;