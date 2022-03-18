/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext } from "react";

import { PokemonContext } from "../context/PokemonContext";
import { capitalizeFirstLetter } from "../utils/function";
import { PopUp, PopUpBody } from "../utils/styled";

type PokemonDetails = {
  id: number;
  name: string;
  sprites: string;
  types: any;
};
const Popup = ({ id, name, sprites, types }: PokemonDetails) => {
  const { isExists, usernameRef, saveDataPokemon } = useContext(PokemonContext);

  const data = {
    id: id,
    name: name,
    sprites: sprites,
    types: types,
  };

  const ButtonSave = styled.div`
    width: 100%;
    height: 2rem;
    padding: 0.55rem 0 0 0;
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    font-weight: bold;
  `;

  return (
    <PopUp>
      <PopUpBody color={types[0]?.type?.name}>
        <h3>You caught a {capitalizeFirstLetter(name)}</h3>
        <img
          css={css`
            height: 15rem;
            width: 15rem;
            margin: auto;
            margin-top: -2.5rem;
            display: block;
          `}
          src={sprites}
          alt={name}
        />
        {isExists && (
          <p
            css={css`
              color: red;
              font-weight: bold;
            `}
          >
            Username already exists
          </p>
        )}
        <input
          type="text"
          ref={usernameRef}
          css={css`
            width: 96.5%;
            height: 2rem;
            margin: -2rem 0 1rem 0;
            border: 1px solid black;
            padding: 0 0.25rem;
          `}
          maxLength={10}
          placeholder="Please enter a username"
        />
        <ButtonSave
          onClick={() => {
            saveDataPokemon(data, usernameRef.current.value);
          }}
        >
          Add to my pocket
        </ButtonSave>
      </PopUpBody>
    </PopUp>
  );
};

export default Popup;
