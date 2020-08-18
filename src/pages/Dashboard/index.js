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
    // fetch data from api when component mounts
    getFoods();
  }, [])

  function getFoods() {
    // fetch data from API
    api.get('/foods').then(res => {
      // update state
      setFoods(res.data);
    });
  }

  async function updateFood(food, id) {
    // update food in API
    const res = await api.patch(`/foods/${id}`, food);

    // update state
    getFoods();
  }

  async function handleAddFood(food) {
    try {
      // add food to API
      const res = await api.post('/foods', food);

      // update state
      getFoods();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateAvailable(food, available) {
    // update food's available attribute in API
    food.available = available;
    updateFood(food, food.id);
  }

  async function handleUpdateFood(food) {
    // update food in API after editing
    updateFood(food, editingFood);
  }

  async function handleDeleteFood(id) {
    // delete food in API
    const response = await api.delete(`/foods/${id}`);

    // update state
    getFoods();
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    // update editingFood state
    setEditingFood(food.id);

    // open edit modal
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
              handleUpdateAvailable={handleUpdateAvailable}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
