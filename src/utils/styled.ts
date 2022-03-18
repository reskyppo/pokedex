import styled from "@emotion/styled";
import { getTypeColor } from "./function";

export const PopUp = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  max-width: 640px;
  margin: auto;
  background-color: rgba(48, 71, 94, 0.5);
`;

export const PopUpBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ color }) => (color ? getTypeColor(color) : "#ffffff")};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

export const Stats = styled.div<{ width: number }>`
  height: 0.25rem;
  background-color: ${({ color }) =>
    color
      ? getTypeColor(color) === "#DBDBDB"
        ? "#000000"
        : getTypeColor(color)
      : "#d3dedc"};
  width: ${({ width }) => width}%;
`;

export const Accordion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  height: 2rem;
`;

export const Toast = styled.div`
  position: fixed;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 0.5rem;
  border-radius: 8px;
`;

export const MoveCard = styled.div`
  border-radius: 8px;
  padding: 0.5rem;
  font-weight: 500;
`;

export const Footer = styled.div`
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
