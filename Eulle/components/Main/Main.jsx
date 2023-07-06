import "./main.css"

function Main() {
    return (
        <main>
            <div>
                <div id="title">
                    <img src="../../src/assets/Eulle.png" alt="Eulle-Name" id="nameTitle"/>
                    <h1 id="nameDocs">Docs</h1>
                </div>
                {/* Aqui irá ficar o vídeo Pitch */}
            </div>

            <div>
                <h2><span id="description">Description</span></h2>
                <p><span id="descriptionEulle">Eulle</span> é uma Inteligência Artificial feito a partir do Microsoft Power Automate.</p>
                <p>Seu objetivo é identificar dados das notas fiscais dos escritório {"Daniel"} e  {"Dannemann"} vindo por e-mail e registrando nas planilhas em Excel, facilitando o trabalho que antes era manualmente.</p>
                <p>No Power Automate, foi utilizado o AI Builder que serve para treinarmos uma Inteligência Artifical para que ela consiga reconhecer as notas fiscais</p>
                <p>Foi treinado duas coleções para dois ecritórios que possuem notas fiscais diferentes.</p>
            </div>

            <div>
                <div id="hiw-content">
                    <img src="#" alt="Mascote "/>
                    <h2><span id="hiw">How it works?</span></h2>
                    <img src="#" alt="Mascote" />
                </div>
                {/*Video Here*/}
            </div>

            <div>
                <h2><span id="technologies">Technologies</span></h2>
                <div id="img-1">
                    <img src="../../src/assets/TechImages/Group 42.png" alt="Power-Automate" />
                    <img src="../../src/assets/TechImages/image-removebg-preview (1) 1.png" alt="Vue-React" />
                </div>
                <div id="img-2">
                    <img src="../../src/assets/TechImages/image 1.png" alt="Outlook" />
                    <img src="../../src/assets/TechImages/image-removebg-preview (2) 1.png" alt="Excel" />
                </div>
                <div id="img-3">
                    <img src="../../src/assets/TechImages/image 2.png" alt="Power-BI" />
                </div>
            </div>

        </main>
    );
}

export default Main;