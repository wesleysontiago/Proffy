import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/27257775?s=460&u=588cae41ef14524024919c936a5423557448eae0&v=4" alt="" />
        <div>
          <strong>Tiago</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatem nihil, iusto, dolore voluptas ea ipsam debitis perspiciatis
            <br /><br />
            nisi odit ut similique et itaque delectus assumenda reprehenderit officiis necessitatibus sequi.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;