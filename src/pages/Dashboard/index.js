import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    getFoods();
  }, [])

  function getFoods() {
    // COMENTAR
    api.get('/foods').then(res => {
      setFoods(res.data);
    });
  }

  async function handleAddFood(food) {
    try {
      // COMENTAR
      const response = await api.post('/foods', food);
      getFoods();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    // TODO UPDATE A FOOD PLATE ON THE API
    // COMENTAR
    const response = await api.patch(`/foods/${editingFood}`, food);
    getFoods();
  }

  async function handleDeleteFood(id) {
    // TODO DELETE A FOOD PLATE FROM THE API
    // COMENTAR
    const response = await api.delete(`/foods/${id}`);
    getFoods();
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    // COMENTAR
    setEditingFood(food.id);
    toggleEditModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
        food={foods.find(food => food.id === editingFood)}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
              handleUpdateFood={handleUpdateFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
