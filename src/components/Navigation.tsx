/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Bag from "../assets/bag-icon.png";
import Pokeball from "../assets/pokeball-icon.png";

type Props = {
  isHome?: boolean;
  isPocket?: boolean;
};
const Navigation = (props: Props) => {
  const navigate = useNavigate();

  const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    @media (min-width: 640px) {
      width: 640px;
    }
    height: 44px;
    padding: 1rem 0rem;
    display: flex;
    border-top: 1px solid #d3dedc;
    align-items: center;
  `;
  const Box = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
  `;

  return (
    <Container>
      <Box
        onClick={() => navigate("/")}
        css={css`
          ${props.isHome
            ? "background-color: #FFCC01"
            : "background-color: #FFFFFF"};
        `}
      >
        <img
          width="40"
          css={css`
            margin-bottom: -1rem;
          `}
          src={Pokeball}
          alt="Pokeball"
        />
        <p>Home</p>
      </Box>
      <Box
        onClick={() => navigate("/pocket")}
        css={css`
          ${props.isPocket
            ? "background-color: #FFCC01"
            : "background-color: #FFFFFF"};
        `}
      >
        <img
          width="40"
          css={css`
            margin-bottom: -1rem;
          `}
          src={Bag}
          alt="Bag"
        />
        <p>Pokebag</p>
      </Box>
    </Container>
  );
};

export default Navigation;
