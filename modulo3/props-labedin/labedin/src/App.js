import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoNathan from './img/fotonathan.jpg';
import setaBaixo from './img/setaBaixo.png';
import MaxFort from './img/MaxFort.png';
import IconeEmail from './img/IconeEmail.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoNathan} 
          nome="Nathan Amaral" 
          descricao="Oi, eu sou o Nathan Amaral. Sou um dos alunos da Labenu. Adoro tecnologia e programação. Estou cursando Full-Stack e pretendo me tornar um ótimo programador."
        />
        
        <ImagemButton 
          imagem={setaBaixo}
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={IconeEmail}
          
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://images.gupy.io/unsafe/100x100/https://s3.amazonaws.com/gupy5/production/companies/1084/career/3930/images/2021-03-24_20-02_logo.jpg" 
          nome="Sx Negócios" 
          descricao="Atendente de Tele Marketing" 
        />
        
        <CardGrande 
          imagem={MaxFort} 
          nome="MaxFort Atacado" 
          descricao="Operador de Loja" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
