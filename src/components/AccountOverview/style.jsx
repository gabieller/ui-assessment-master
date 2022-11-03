import styled from "styled-components";
import { colors, devices, fontSize } from "../../globalStyles";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Header = styled.header`
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

export const Title = styled.h1`
  font-size: ${fontSize.lg};
  font-weight: 400;
  color: ${colors["grey-500"]};
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 50rem;
`;
