/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Pokeball from "../assets/pokeball-icon.png";
import Bag from "../assets/bag-icon.png";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
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
    background-color: #fff;
    align-items: center;
  `;
  const Box = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  `;

  return (
    <Container>
      <Box onClick={() => navigate("/")}>
        <Link to="/">
          <img
            width="40"
            css={css`
              margin-bottom: -1rem;
            `}
            src={Pokeball}
            alt="Pokeball"
          />
          <p>Home</p>
        </Link>
      </Box>
      <Box onClick={() => navigate("/pocket")}>
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
