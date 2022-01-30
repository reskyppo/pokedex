/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { capitalizeFirstLetter, deleteDataLocalStorage, getTypeColor } from '../utils/function';

type PokemonItem = {
  name: string;
  image: string;
  username: string;
  types: any;
};

const PocketCard = (props: PokemonItem) => {
  const { name, image, username, types } = props;
  const type = types[0]?.type?.name;
  const navigate = useNavigate();

  const Card = styled.div`
    margin: 0.5rem;
    text-align: center;
    border-radius: 16px;
    background-color: ${getTypeColor(type)};
  `;
  const Release = styled.div`
    border-radius: 0 0 16px 16px;
    background-color: #fff;
    border: 2px solid ${getTypeColor(type)};
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Card onClick={() => navigate(`/detail/${name}`)}>
      <img
        css={css`
          height: 7rem;
          width: 7rem;
          margin: auto;
          display: block;
        `}
        src={image}
        alt={name}
      />
      <h2
        css={css`
          margin: -0.5rem 0rem;
        `}
      >
        {capitalizeFirstLetter(username)}
      </h2>
      <p>({capitalizeFirstLetter(name)})</p>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 0.75rem 0rem;
        `}
      >
        {types?.map((type: any) => (
          <div
            css={css`
              background-color: ${getTypeColor(type?.type?.name)};
              margin: 0rem 0.25rem;
              padding: 0.5rem 0.75rem;
              border-radius: 8px;
              border: 2px solid white;
            `}
          >
            {capitalizeFirstLetter(type?.type?.name)}
          </div>
        ))}
      </div>
      <Release onClick={() => deleteDataLocalStorage(username)}>
        Release Pokemon
      </Release>
    </Card>
  );
};

export default PocketCard;
