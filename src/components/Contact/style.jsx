import styled from "styled-components";
import { devices, colors } from "../../globalStyles";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  color: ${colors["grey-300"]};
  font-weight: 500;
  padding: 0.875rem 0;

  @media ${devices.tablet} {
    padding: 0.5rem 0;
  }
  @media ${devices.mobile} {
    padding: 0.25 0;
  }
`;

export const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.yellow};
  font-weight: 500;
  border-radius: 4px;
  height: 3rem;
  width: 3rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PersonalInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  color: ${colors["grey-500"]};
`;

export const Name = styled.span`
  font-weight: 500;
`;

export const LineInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors["grey-500"]};

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.25rem;
`;
