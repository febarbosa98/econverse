import './header.scss';

import escudo from "../../assets/img/icons/escudo.svg";
import caminhao from "../../assets/img/icons/caminhao.svg";
import cartao from "../../assets/img/icons/card.svg";
import car from "../../assets/img/icons/car.svg";
import user from "../../assets/img/icons/user.svg";
import coracao from "../../assets/img/icons/coracao.svg";
import caixa from "../../assets/img/icons/caixa.svg";
import lupa from "../../assets/img/icons/lupa.svg";
import coroa from "../../assets/img/icons/coroa.svg";
import logo from "../../assets/img/logo.svg";



const categorias: {nome:string, link:string, ativo?:boolean, icone?:string}[] = [
    {nome: 'TODAS CATEGORIAS', link: '#'},
    {nome: 'SUPERMERCADO', link: '#'},
    {nome: 'LIVROS', link: '#'},
    {nome: 'MODA', link: '#'},
    {nome: 'LANÇAMENTOS', link: '#'},
    {nome: 'OFERTAS DO DIA', link: '#', ativo: true},
    {nome: 'ASSINATURA', link: '#', icone: coroa},
]

export default function Header() {
    return(
        <>
            <header className="header">
                <section className="header-topo">
                    <ul>
                        <li>
                            <img src={escudo} alt="" />
                            <p>Compra <strong>100% segura</strong></p>
                        </li>
                        <li>
                            <img src={caminhao} alt="" />
                            <p><strong>Frete grátis</strong>  acima de R$ 200</p>
                        </li>
                        <li>
                            <img src={cartao} alt="" />
                            <p><strong>Parcele</strong> suas compras</p>
                        </li>
                    </ul>
                </section>
              <nav className="header-nav">
                <img src={logo} alt="" />
                <section className="input-search">
                <input type='search' placeholder='O que você está buscando?'/>
                <img src={lupa} alt="" />
                </section>
                <ul>
                    <li><img src={caixa} alt="" /></li>
                    <li><img src={coracao} alt="" /></li>
                    <li><img src={user} alt="" /></li>
                    <li><img src={car} alt="" /></li>
                </ul>
              </nav>
              <section>
                <ul className="categorias-header">
                    {categorias.map((categoria, index) => (
                        <li key={index} className={categoria.ativo ? 'ativo' : ''}>
                            <a href={categoria.link}>
                                {categoria.icone && <img src={categoria.icone} alt="" />}
                                {categoria.nome}
                            </a>
                        </li>
                    ))}
                </ul>
              </section>
            </header>
        </>
    )
}