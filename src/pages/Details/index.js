import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import DetailsHeader from '../../components/DetailsHeader';
import { Container } from './styles';

const Details = ({match}) => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const id = match.params.id;
        api.get(`/foods/${id}`).then(res => {
            setFood(res.data);
        });
    }, []);

    return (
        <Container>
            <DetailsHeader image={food.image} name={food.name}/>
            <div>
                <h2>{food.description}</h2>
                <h3>Preço: R$ {food.price}</h3>
                <h3>Quantidade Disponível: {food.quantity}</h3>
                <h3>Tempo de Cozimento: {food.timeToCook}</h3>
            </div>
        </Container>
    );
}

export default Details;