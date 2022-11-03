import styled from "styled-components";
import { colors, fontSize } from "../../globalStyles";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 25rem;
  font-weight: 500;
`;

export const Percent = styled.span`
  font-size: ${fontSize.lg};
  color: ${colors["green"]};
`;

export const Title = styled.span`
  text-transform: uppercase;
  color: ${colors["grey-300"]};
`;
