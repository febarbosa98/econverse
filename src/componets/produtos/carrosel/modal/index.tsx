import { useEffect, useState } from 'react';
import './modal.scss';

interface Produto {
    photo: string;
    productName: string;
    descriptionShort: string;
    price: number;
}

interface ModalProps {
    isOpen: boolean;
    produto?: Produto;
    onClose: () => void;
}

export default function Modal({ isOpen, produto, onClose }: ModalProps) {

    useEffect(() => {
        if (isOpen) {
        document.body.classList.add('modal-aberto');
        } else {
        document.body.classList.remove('modal-aberto');
        }
    }, [isOpen]);

const [contador, setContador] = useState(1);

    if (!isOpen || !produto) return null;

    const handleMenos = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const handleMais = () => {
        setContador(contador + 1);
    };

    

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className='btn-close' onClick={onClose}>X</button>
        <img src={produto.photo} alt={produto.productName} />
        <div className="modal-info">
            <h2>{produto.productName}</h2>
            <span>{produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <p>{produto.descriptionShort}</p>
            <a href="3">Veja mais detalhes do produto &gt;  </a>
        </div>
        <div className="botoes">
            <div className='contador'>
                <button className='btn-contador' onClick={handleMenos}>-</button>
                <span className='numeroContador'>{contador}</span>
                <button className='btn-contador' onClick={handleMais}>+</button>
            </div>
            <button className='btn-comprar'>Comprar</button>
        </div>
      </div>
    </div>
  );
}