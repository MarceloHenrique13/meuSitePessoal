import React, { useEffect } from 'react';
import CodingProfile from './assets/imgcoding2.svg';
import Features from './components/Features';
import './app.css';

function App() {
    useEffect(() => {
      window.scrollTo(0, 0)
    })

  return (
    <div className="App">
      <div className="wrapper_home container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="wrapper_home_profile">
              <h2>Marcelo Henrique</h2>
              <p>Desenvolvedor e designer</p>
              <p>Cursando o 3º ano do Ensino Médio Técnico em T.I na Fiap School e trabalho na FIAP de noite.</p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <img src={CodingProfile} alt="imagem do programador" className="img-fluid" />
          </div>
        </div>

          <div className="wrapper_home_features">
            <div className="row">
              <h3 className="col-12 text-center mt-5">Skills e Hobbies</h3>              
              <Features 
              tittle="Desenvolvedor" 
              subtittle="Front-End e " 
              subtittleTwo="Back-End."
              icone="fas fa-laptop-code"/>
              <Features 
              tittle="Designer" 
              subtittle="Photoshop e Illustrator."
              subtittleTwo=""
              icone="fas fa-pen"/>
              <Features 
              tittle="Esportes" 
              subtittle="Gosto de particar esportes."
              subtittleTwo=""
              icone="fas fa-basketball-ball"/>
                        
            </div>
          </div>





      </div>

    </div>
  );
}

export default App;
