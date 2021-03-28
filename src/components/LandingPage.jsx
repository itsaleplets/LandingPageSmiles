import '../style/LandingPage.css';
import topCellphone from '../images/topCellphone.png';
import logo from '../images/logo.png';
import invest from '../images/invest.png';
import goals from '../images/goals.png';
import date from '../images/date.png';
import offers from '../images/offers.png';
import { useState } from 'react';
import userEmail from '../services/api';
// import cursor from '../images/cursor.png';

function App() {
  const [email, setEmail] = useState('');
  
  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleClick = () => {
    userEmail(email);
  };

  return (
    <div className="body">
      <div className="top">
        <div>
          <img className="logo" alt="" src={logo} />
          <h1>
            Torne a sua viagem dos sonhos em realidade!
          </h1>
          <p>
            Tenha mais segurança, controle e uso consciente do dinheiro antes, durante e depois da viagem
          </p>
          <button>
            Saiba Mais
          </button>
        </div>
        <img className="topCell" src={topCellphone} alt="" />
      </div>

      <div className="section1">
        <h1>
          Entenda como funciona o TripInvest
        </h1>
        <iframe
          class='video'
          src="https://www.youtube.com/embed/ClGE59t5ero"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="section2">
        <h1>TripInvest em 4 passos</h1>
        <div className="cards">
          <div>
            <img src={date} alt=""/>
            <span>Planeje a viagem</span>
            <p>Descubra o custo da viagem, quando poderá viajar e quanto é preciso investir</p>
          </div>

          <div>
            <img src={invest} alt=""/>
            <span>Invista mensalmente</span>
            <p>Faça seu dinheiro render ainda mais até alcançar seus objetivos</p>
          </div>

          <div>
            <img src={goals} alt=""/>
            <span>Conquiste metas</span>
            <p>Acompanhe suas metas de  cada área de custo: passagens, hospedagem, alimentação e extras.</p>
          </div>

          <div>
            <img src={offers} alt=""/>
            <span>Aproveite Ofertas Exclusivas</span>
            <p>Se conecte com os nossos parceiros e aproveite as vantagens exclusivas.</p>
          </div>
        </div>
      </div>

      <div className="section3">
        <h1>Já quer aproveitar?</h1>
        <p>Faça parte da lista VIP e receba o acesso beta em primeira mão</p>
        <input onChange={handleChange} placeholder="EMAIL"/>
        <button onClick={handleClick}>
          QUERO FAZER PARTE
        </button>
      </div>

      <footer>
        <p>Copyright TripInvest. 2021.</p>
      </footer>
    </div>
  );
}

export default App;
