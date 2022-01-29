/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPokemonDetails } from "../hooks/useGetPokemonDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  capitalizeFirstLetter,
  getTypeColor,
  saveLocalStorage,
} from "../utils/function";
const Details = () => {
  const [isCached, setIsCatched] = useState<boolean>(false);
  const [showMoveList, setShowMoveList] = useState<boolean>(false);
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
    margin-bottom: 38px;
    @media (min-width: 640px) {
      margin-bottom: 0;
    }
    min-height: 100vh;
  `;
  const Body = styled.div`
    background-color: #ffffff;
    border-radius: 40px 40px 0px 0px;
    padding: 1rem;
  `;

  const MoveCard = styled.div`
    border-radius: 8px;
    padding: 0.5rem;
    margin: 1rem 0.5rem;
    font-weight: 500;
  `;
  const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    @media (min-width: 640px) {
      width: 640px;
    }
    height: 60px;
    border-top: 1px solid #d3dedc;
    background: white;
  `;
  const Catch = styled.div`
    border: 2px solid
      ${getTypeColor(type) === "#DBDBDB" ? "black" : getTypeColor(type)};
    color: ${getTypeColor(type) === "#DBDBDB" ? "black" : getTypeColor(type)};
    margin: 8px auto;
    width: 75%;
    border-radius: 8px;
    padding: 8px;
    font-weight: bolder;
    text-align: center;
  `;
  const Title = styled.h2`
    margin: 0rem 0rem 2rem 0rem;
    text-align: center;
  `;
  const SubTitle = styled.h3`
    font-weight: 700;
    margin: 1rem 0rem 0.25rem 0.5rem;
  `;
  const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <div>
      <Helmet>
        <title>{capitalizeFirstLetter(name || "")} - Pokedex</title>
      </Helmet>
      <Container>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="lg"
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
        <Title>{capitalizeFirstLetter(name || "")}</Title>
        <Body>
          <SubTitle>Type{data?.pokemon?.types.length > 1 && "s"}</SubTitle>
          <div
            css={css`
              display: flex;
            `}
          >
            {data?.pokemon?.types?.map((type: any) => (
              <p
                css={css`
                  font-weight: 700;
                  margin: 0.5rem 0rem 0rem 0.5rem;
                  color: ${getTypeColor(type?.type?.name) === "#DBDBDB"
                    ? "black"
                    : getTypeColor(type?.type?.name)};
                `}
              >
                {capitalizeFirstLetter(type?.type?.name)}
              </p>
            ))}
          </div>
          <SubTitle>Stats</SubTitle>
          <div
            css={css`
              margin: 0rem 0rem 0.5rem 0.5rem;
            `}
          >
            {data?.pokemon?.stats?.map((stat: any) => (
              <div>
                <FlexSpaceBetween>
                  <p>{capitalizeFirstLetter(stat?.stat?.name)}</p>
                  <p>{stat?.base_stat}</p>
                </FlexSpaceBetween>
                <FlexSpaceBetween>
                  <div
                    css={css`
                      height: 0.25rem;
                      background-color: ${getTypeColor(type) === "#DBDBDB"
                        ? "black"
                        : getTypeColor(type)};
                      width: ${stat?.base_stat}%;
                    `}
                  ></div>
                  <div
                    css={css`
                      height: 0.25rem;
                      background-color: #d3dedc;
                      width: ${100 - stat?.base_stat}%;
                    `}
                  ></div>
                </FlexSpaceBetween>
              </div>
            ))}
          </div>
          <SubTitle>Moves</SubTitle>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.5rem;
              margin-bottom: 0.5rem;
              height: 2rem;
            `}
            onClick={() => setShowMoveList(!showMoveList)}
          >
            <p>Show More</p>
            <FontAwesomeIcon
              icon={showMoveList ? faAngleUp : faAngleDown}
              size="lg"
            />
          </div>
          <div
            css={css`
              display: ${showMoveList ? "block" : "none"};
            `}
          >
            {data?.pokemon?.moves?.map((dtx: any) => (
              <MoveCard>{capitalizeFirstLetter(dtx?.move?.name)}</MoveCard>
            ))}
          </div>
        </Body>
      </Container>
      <Footer>
        <Catch onClick={() => handleCatchPokemon(dataL)}>
          Catch the Pokemon
        </Catch>
      </Footer>
    </div>
  );
};

export default Details;
