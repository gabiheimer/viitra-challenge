import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: #ffb84d;
    height: 300px;
    width: 100%;
    overflow: hidden;
    text-align: center;

    h1 {
      margin-top: 45px;
      font-size: 40px;
    }

    img {
      pointer-events: none;
      user-select: none;
      position: relative;
    }
`;
