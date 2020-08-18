import React from 'react';

import { Container } from './styles';

const DetailsHeader = ({ image, name }) => (
  <Container>
    <h1>{name}</h1>
    <img src={image} alt={name} />
  </Container>
);

export default DetailsHeader;
