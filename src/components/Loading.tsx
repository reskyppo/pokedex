import styled from "@emotion/styled";
import Pokeload from "../assets/pokeload.gif";

const Loading = () => {
  const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <Container>
      <img width="80" src={Pokeload} alt="pokeload" />
    </Container>
  );
};

export default Loading;
