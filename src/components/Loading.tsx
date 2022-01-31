/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Pokeload from "../assets/pokeload.gif";

type Props = {
  msg?: string;
  btnText?: string;
};

const Loading = (props: Props) => {
  const navigate = useNavigate();

  const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #ffcc01;
    border-radius: 8px;
  `;

  return (
    <Container>
      <img
        css={css`
          display: block;
          margin: auto;
        `}
        width="80"
        src={Pokeload}
        alt="pokeload"
      />
      {props.msg && <p>{props.msg}</p>}
      {props.btnText && (
        <Button onClick={() => navigate("/")}>{props.btnText}</Button>
      )}
    </Container>
  );
};

export default Loading;
