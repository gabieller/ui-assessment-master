import styled from "styled-components";
import { colors, fontSize } from "../../globalStyles";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 25rem;


`;

export const Percent = styled.span`
  font-size: ${fontSize.lg};
  font-weight: 500;
  color: ${colors["green"]};
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  color: ${colors["grey-300"]};
`;
