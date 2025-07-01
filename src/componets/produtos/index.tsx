import { useEffect, useState } from 'react';
import './protudos.scss';
import {products} from './carrosel/produtos.json';
import setaEsquerda from '../../assets/img/icons/setaEsquerda.svg'
import setaDireita from '../../assets/img/icons/setaDireita.svg'

import Carrossel from './carrosel';

const categoriaProdutos: {nome:string, link:string, ativo?:boolean}[] = [
    {nome: 'CELULAR', link: '#', ativo: true, },
    {nome: 'ACESSÓRIOS', link: '#', },
    {nome: 'TABLETS', link: '#', },
    {nome: 'TVS', link: '#',},
    {nome: 'VER TODOS', link: '#' , },
]

interface ModalProps{
    carroselOption: number
}


// const ITENS_POR_PAGINA = 4;

export default function Produtos({carroselOption}: ModalProps) {

    const [categoria, setCategoria] = useState(0);

    useEffect(() => {
        setCategoria(carroselOption);
    }, [carroselOption]);
    
    if (categoria === 0) {
         return (
        <section className="produtos">
            <div className='produtos-text'>
            <span className='produtos-barra'></span>
            <h2>Produtos relacionados</h2>
            <span className='produtos-barra'></span>
            </div>
           <ul className="categoria-lista">
                {categoriaProdutos.map((produto, index) => (
                    <li key={index} className={produto.ativo ? 'ativo' : ''}>
                        <a href={produto.link}>
                            <span>{produto.nome}</span>
                        </a>
                    </li>
                ))}
           </ul>
           

           <Carrossel />
        </section>
    );
    } else{
        return (
        <section className="produtos">
            <div className='produtos-text'>
            <span className='produtos-barra'></span>
            <h2>Produtos relacionados</h2>
            <span className='produtos-barra'></span>
            </div>
            <p>Ver todos</p>
           

           <Carrossel />
        </section>
    );
    }
    
    
}