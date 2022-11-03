import styled from "styled-components";
import { colors } from "../../globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 2px 2px 8px 0px #dfdfdf;
  width: 100%;
`;

export const Info = styled.div`
  padding: 1rem;
  position: relative;
`;

export const TooltipWrapper = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;
export const SubTitle = styled.div`
  display: flex;
  color: ${colors["grey-500"]};
`;

export const PercentCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #00000020;

  div:first-child {
    border-right: 1px solid #00000020;
  }
`;

