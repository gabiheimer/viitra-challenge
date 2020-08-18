import React, { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }) => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    // adjusting values
    data.quantity = Number(data.quantity);
    data.available = data.quantity > 0;

    handleAddFood(data);
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input required type='url' name="image" placeholder="Cole o link aqui"/>

        <Input required type='text' name="name" placeholder="Ex: Moda Italiana"/>
        <Input required type='number' step='any' name="price" placeholder="Ex: 19.90"/>

        <Input required type='text' name="description" placeholder="Descrição"/>
        <Input required type='number' name="quantity" placeholder="Quantidade disponível"/>
        <Input required type='text' name="timeToCook" placeholder="Tempo de cozimento"/>
        <button>
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
