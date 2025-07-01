import "./categorias.scss";

import corrida from "../../assets/img/categorias/corrida.svg";
import ferramenta from "../../assets/img/categorias/ferramenta.svg";
import moda from "../../assets/img/categorias/moda.svg";
import saude from "../../assets/img/categorias/saude.svg";
import supermercado from "../../assets/img/categorias/supermercado.svg";
import tecnologia from "../../assets/img/categorias/tecnologia.svg";
import bebida from "../../assets/img/categorias/bebida.svg";

const categorias: {nome:string, link:string, ativo?:boolean, icone:string}[] = [
    {nome: 'Tecnologia', link: '#', ativo: true, icone: tecnologia},
    {nome: 'Supermercado', link: '#', icone: supermercado},
    {nome: 'Bebidas', link: '#', icone: bebida},
    {nome: 'Ferramentas', link: '#', icone: ferramenta},
    {nome: 'Saúde', link: '#' , icone: saude},
    {nome: 'Esportes e fitness', link: '#', icone: corrida},
    {nome: 'Moda', link: '#', icone: moda},
]
export default function Catagorias(){
    return(
        <section className="categorias">
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={index} className={categoria.ativo ? 'ativo' : ''}>
                        <a href={categoria.link}>
                            <img src={categoria.icone} alt={categoria.nome} />
                            <span>{categoria.nome}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}