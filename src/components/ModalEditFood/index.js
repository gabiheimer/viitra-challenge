import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
  food
}) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    // COMENTAR
    handleUpdateFood(data);
    setIsOpen(false);
  }

  if(!food) return null;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input required defaultValue={food.image} type='url' name="image" placeholder="Cole o link aqui"/>

        <Input required defaultValue={food.name} type='text' name="name" placeholder="Ex: Moda Italiana"/>
        <Input required defaultValue={food.price} type='number' step='any' name="price" placeholder="Ex: 19.90"/>

        <Input required defaultValue={food.description} type='text' name="description" placeholder="Descrição"/>
        <Input required defaultValue={food.quantity} type='number' name="quantity" placeholder="Quantidade disponível"/>
        <Input required defaultValue={food.timeToCook} type='text' name="timeToCook" placeholder="Tempo de cozimento"/>
        <button type="submit">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
