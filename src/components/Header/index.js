import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

const Header = ({ openModal }) => (
  <Container>
    <header>
      <h1>Viitra restaurant</h1>
      <nav>
        <div>
          <button
            type="button"
            onClick={() => {
              openModal();
            }}
          >
            <div className="text">Novo Prato</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
