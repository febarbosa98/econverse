import './footer.scss'
import logo from '../../assets/img/logo.svg'
import instagram from '../../assets/img/icons/instagram.svg'
import facebook from '../../assets/img/icons/facebook.svg'
import linkedin from '../../assets/img/icons/linkedin.svg'

export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className='footer-logo-socias'>
                    <img src={logo} alt="" className='img-logo' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="footer-socias">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                    </div>
                </div>
            
                <div className='footer-info'>

                <span className='barra'></span>

                <div className="Institucional">
                    
                    <h3>Institucional</h3>
                    <p>Sobre Nós</p>
                    <p>Movimento</p>
                    <p>Trabalhe conosco</p>
                </div>
                <div className="Institucional">
                    <h3>Ajuda</h3>
                    <p>Suporte</p>
                    <p>Fale Conosco</p>
                    <p>Perguntas Frequentes</p>
                </div>
                <div className="Institucional">
                    <h3>Termos</h3>
                    <p>Termos e Condições</p>
                    <p>Política de Privacidade</p>
                    <p>Troca e Devolução</p>
                </div>
                </div>
            </div>
            <div className='copyright'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    )
}