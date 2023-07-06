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
            </div>

            <div>
                <h2><span className="technologies">Technologies</span></h2>
                <div className="img-1">
                    <img src="../../src/assets/TechImages/Group 42.png" alt="Power-Automate" style={{marginRight: 50}}/>
                    <img src="../../src/assets/TechImages/image-removebg-preview (1) 1.png" alt="Vue-React" style={{marginLeft: 50}}/>
                </div>
                <div className="img-2">
                    <img src="../../src/assets/TechImages/image 1.png" alt="Outlook" style={{marginRight: 110}} />
                    <img src="../../src/assets/TechImages/image-removebg-preview (2) 1.png" alt="Excel" style={{marginRight: 14}} />
                </div>
                <div className="img-3">
                    <img src="../../src/assets/TechImages/image 2.png" alt="Power-BI" style={{marginTop: 20}} />
                </div>
            </div>
            <div>
                <h2><span className="team-title">Dev Team</span></h2>
            </div>

        </main>
    );
}

export default Main;