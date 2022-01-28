/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useGetPokemonTypes } from "../hooks/useGetPokemonTypes";
import { capitalizeFirstLetter, getTypeColor } from "../utils/function";

type PokemonItem = {
  url: string;
  name: string;
  image: string;
};

const PokemonCard = (props: PokemonItem) => {
  const { name, image } = props;
  const dataLS = JSON.parse(localStorage.getItem("test") || "[]");
  const owned = dataLS.filter(
    (el: { name: string }) => el.name === name
  ).length;
  const { data } = useGetPokemonTypes(name);
  const type = data?.pokemon?.types[0]?.type?.name;

  const Card = styled.div`
    margin: 0.5rem;
    text-align: center;
    border-radius: 16px;
    background-color: ${getTypeColor(type)};
  `;
  return (
    <Card>
      <Link to={`detail/${name}`}>
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
            margin: 0.5rem 0rem;
          `}
        >
          {capitalizeFirstLetter(name)}
        </h2>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin: 0.75rem 0rem;
          `}
        >
          {data?.pokemon?.types?.map((type: any) => (
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
        <p>Owned : {owned}</p>
      </Link>
    </Card>
  );
};

export default PokemonCard;
