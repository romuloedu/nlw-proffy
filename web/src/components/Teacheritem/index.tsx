import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const Teacheritem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/22475482?s=460&u=79177f08a3d9c1d5fc022e7634e992938991695e&v=4" alt="Romulo Eduardo"/>
            <div>
                <strong>Romulo Eduardo </strong>
                <span>Química</span>
            </div>
        </header>
        <p>Teste de corpo de parágrafo.</p>
        <footer>
            <p>Preço/hora
            <strong>R$ 80,00</strong></p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer> 
    </article>
  )
}

export default Teacheritem;