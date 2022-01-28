/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPokemonDetails } from "../hooks/useGetPokemonDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  capitalizeFirstLetter,
  getTypeColor,
  saveLocalStorage,
} from "../utils/function";
const Details = () => {
  const [isCached, setIsCatched] = useState<boolean>(false);
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useGetPokemonDetails(name || "");
  const type = data?.pokemon?.types[0]?.type?.name;
  if (loading) return <p>loading</p>;
  if (error) return <p>{error?.message}</p>;
  const handleCatchPokemon = (data: any) => {
    const value = Math.random();
    value > 0.5 ? setIsCatched(true) : setIsCatched(false);
    if (isCached) {
      saveLocalStorage(data);
    }
  };
  const dataL = {
    id: data?.pokemon?.id,
    name: data?.pokemon?.name,
    sprites: data?.pokemon?.sprites?.front_default,
    types: data?.pokemon?.types,
  };
  const Container = styled.div`
    background-color: ${getTypeColor(type)};
    max-width: 640px;
    margin: auto;
    min-height: 100vh;
  `;
  const MoveList = styled.div`
    background-color: #ffffff;
    border-radius: 40px 40px 0px 0px;
    padding: 1rem;
  `;
  const MoveCard = styled.div`
    background-color: ${getTypeColor(type)};
    border-radius: 12px;
    padding: 1rem;
    margin: 1rem 0rem;
  `;
  return (
    <div>
      <Helmet>
        <title>{capitalizeFirstLetter(name || "")} - Pokedex</title>
      </Helmet>
      <Container>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="2x"
          color="#ffffff"
          css={css`
            margin: 1rem 0rem 0rem 1rem;
          `}
          onClick={() => navigate("/")}
        />
        <img
          css={css`
            height: 15rem;
            width: 15rem;
            margin: auto;
            display: block;
          `}
          src={data?.pokemon?.sprites?.front_default}
          alt={data?.pokemon?.name}
        />
        <h2
          css={css`
            margin: -2rem 0rem 0rem 0rem;
            text-align: center;
          `}
        >
          {capitalizeFirstLetter(name || "")}
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
                border: 1px solid white;
              `}
            >
              {capitalizeFirstLetter(type?.type?.name)}
            </div>
          ))}
        </div>
        <MoveList>
          <h3>Moves</h3>
          {data?.pokemon?.moves?.map((dtx: any) => (
            <MoveCard>{capitalizeFirstLetter(dtx?.move?.name)}</MoveCard>
          ))}
        </MoveList>
      </Container>
    </div>
  );
};

export default Details;
