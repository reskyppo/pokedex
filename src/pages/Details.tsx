/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useGetPokemonDetails } from "../hooks/useGetPokemonDetails";
const Details = () => {
  const { name } = useParams();
  const { data, loading, error } = useGetPokemonDetails(name || "");
  if (loading) return <p>loading</p>;
  if (error) return <p>{error?.message}</p>;
  const Container = styled.div`
    background-color: #fff;
    max-width: 640px;
    margin: auto;
    min-height: 100vh;
    padding: 0rem 1rem;
  `;
  const FlexRow = styled.div`
    display: flex;
    justify-content: center;
  `;
  return (
    <Container>
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
      <FlexRow>
        {data?.pokemon?.types?.map((dtx: any) => (
          <div
            css={css`
              padding: 0.5rem;
              background-color: red; //Dynamic color soon
              width: 4rem;
              text-align: center;
              color: white;
              border-radius: 6px;
              margin: 0rem 0.5rem;
            `}
          >
            {dtx?.type?.name}
          </div>
        ))}
      </FlexRow>
      <p>{data?.pokemon?.name}</p>
      {data?.pokemon?.moves?.map((dtx: any) => (
        <p>{dtx?.move?.name}</p>
      ))}
    </Container>
  );
};

export default Details;
