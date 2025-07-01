import { SetStateAction, useState } from "react";
import { products } from './produtos.json';
import setaEsquerda from '../../../assets/img/icons/setaEsquerda.svg'
import setaDireita from '../../../assets/img/icons/setaDireita.svg'
import './carrosel.scss';
import Modal from "./modal/index";

const itensPorPagina= 4;

interface Produto {
    photo: string;
    productName: string;
    descriptionShort: string;
    price: number;
}
export default function Carrossel() {

const [startIndex, setStartIndex] = useState(0);
const [openModal, setOpenModal] = useState(false);
const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | undefined>(undefined);





    function handlePrev() {
         setStartIndex((prev) => {
        // Volta para o final se estiver no início, senão decrementa
        const novoIndex = prev - itensPorPagina;
        if (novoIndex < 0) {
            // Garante que sempre mostre 4 itens, mesmo se não for múltiplo
            const resto = products.length % itensPorPagina;
            return resto === 0
                ? products.length - itensPorPagina
                : products.length - resto;
        }
        return novoIndex;
    });
    }

    function handleNext() {
        setStartIndex((prev) =>
            prev + itensPorPagina >= products.length
                ? 0
                : prev + itensPorPagina
        );
    }

    const produtosVisiveis = [];
for (let i = 0; i < itensPorPagina; i++) {
    if (products.length === 0) break;
    const index = (startIndex + i) % products.length;
    const produto = products[index];
    if (produto) produtosVisiveis.push(produto);
}
    function handleComprar(produto: SetStateAction<Produto | undefined>) {
    setProdutoSelecionado(produto);
    setOpenModal(true);
  }

   function handleCloseModal() {
    setOpenModal(false);
    setProdutoSelecionado(undefined);
  }

    return (
          <div className="carrossel-produtos">
        <button onClick={handlePrev} className="btn-carrossel btn-carrossel-esquerda "><img src={setaEsquerda} alt="" /></button>
        <ul className="produtos-lista">
            {produtosVisiveis.map((produto, index) => (
                <li key={index}>
                    <article className='produto'>
                        
                        <img src={produto.photo} alt={produto.productName} className="fotoProduto" />
                        <div className="produto-texto">
                            <h3 className='nomeProduto'>{produto.productName}</h3>
                        <span className='precoAntigo'>R$ 30,90</span>
                        <span className='preco'>{produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        <span className="parcelas"> ou 2x de R$ 49,95 sem juros</span>
                        <span className="frete">Frete grátis</span>
                        </div>
                        
                        <button className='btnProduto' onClick={()=> handleComprar(produto)} >Comprar</button>
                    </article>
                </li>
            ))}
        </ul>
        <button onClick={handleNext} className="btn-carrossel btn-carrossel-direita"><img src={setaDireita} alt="" /></button>
        <Modal isOpen={openModal} produto={produtoSelecionado} onClose={handleCloseModal} />
    </div>
    );
}