import './parceiros.scss';
import parceiros from '../../assets/img/parceiros.svg';


export default function Parceiros() {
    return (
        <div className="parceiros">
        <div className="parceiros-container">
            <img src={parceiros} alt="Parceiros" />
        <div className="parceiros-texto">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit <br />amet, consectetur</p>
            <button>CONFIRA</button>
        </div>
        </div>
         <div className="parceiros-container">
            <img src={parceiros} alt="Parceiros" />
        <div className="parceiros-texto">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit <br />amet, consectetur</p>
            <button>CONFIRA</button>
        </div>
        </div>
        </div>
    );
    }
