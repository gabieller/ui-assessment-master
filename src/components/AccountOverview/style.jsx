import styled from "styled-components";
import { colors, devices, fontSize } from "../../globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
  }
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 50rem;
`;

export const Title = styled.div`
  gap: 5rem;
  font-size: ${fontSize.lg};
  color: ${colors["grey-500"]};


`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;



`;
export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 50rem;
`;
