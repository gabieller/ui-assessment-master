import styled from "styled-components";
import { colors, fontSize } from "../../globalStyles";

export const TooltipComponent = styled.span`
  position: relative;

  &::before {
    content: attr(aria-label);
    position: absolute;
    width: 12rem;
    background-color: ${colors["grey-300"]};
    color:${colors.white};
    text-align: center;
    padding: 0.625rem;
    line-height: 1.2;
    border-radius: 4px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s;
    bottom: 125%;
    right: 0%;
    margin-left: -3.75rem;
    font-size:${fontSize.sm};;
    visibility: hidden;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 75%;
    right: 15%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    opacity: 0;
    transition: opacity 0.6s;
    border-color:  ${colors["grey-300"]} transparent transparent transparent;
    visibility: hidden;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;
