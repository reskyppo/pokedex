import styled from "@emotion/styled";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

type Props = {};

const Test = (props: Props) => {
  const { username, setUsername, usernameRef } = useContext(PokemonContext);
  const navigate = useNavigate();
  const Container = styled.div`
    background-color: #fff;
    max-width: 640px;
    margin: auto;
    margin-bottom: 60px;
    padding: 1rem 0rem;
  `;
  return (
    <Container>
      <p>{username}</p>
      <input type="text" ref={usernameRef} />
      <button
        onClick={() => {
          setUsername(usernameRef.current.value);
          navigate("/");
        }}
      >
        save
      </button>
    </Container>
  );
};

export default Test;
