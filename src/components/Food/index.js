import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

import {withRouter} from 'react-router-dom';

const Food = ({ 
  history, 
  food, 
  handleDelete, 
  handleEditFood, 
  handleUpdateAvailable
}) => {
  const [isAvailable, setIsAvailable] = useState(food.available);

  async function toggleAvailable(e) {
    // stop page from redirecting
    e.stopPropagation();

    // update food in API
    handleUpdateAvailable(food, !isAvailable);

    // update state
    setIsAvailable(!isAvailable);
  }

  function editFood(e) {
    // stop page from redirecting
    e.stopPropagation();

    // open food edit modal
    handleEditFood(food);
  }

  function handleRedirect(e) {
    // redirect to food's details page
    history.push(`/detalhes/${food.id}`);
  }

  function deleteFood(e) {
    // stop page from redirecting
    e.stopPropagation();

    // delete food in API
    handleDelete(food.id);
  }

  return (
    <Container available={isAvailable} onClick={handleRedirect}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={editFood}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={deleteFood}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch" onClick={(e) => e.stopPropagation()}>
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
            />
            <span className="slider"/>
          </label>
        </div>
      </section>
    </Container>
  );
};

export default withRouter(Food);
