import './marcas.scss';
import logo from '../../assets/img/logo.svg';



export default function Marcas() {
    return (
        <div className="marcas">
            <h2>Navegue por marcas</h2>
            <ul className="marcas-logo">
                <li><a href="#"><img src={logo} alt="" /></a></li>
                <li><a href="#"><img src={logo} alt="" /></a></li>
                <li><a href="#"><img src={logo} alt="" /></a></li>
                <li><a href="#"><img src={logo} alt="" /></a></li>
                <li><a href="#"><img src={logo} alt="" /></a></li>
            </ul>
        </div>
    );
}