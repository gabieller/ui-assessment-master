import styled from "styled-components";
import { fontSize } from "../../globalStyles";

export const TooltipComponent = styled.span`
  position: relative;
  &:hover::after, &:hover::before {
    display: block;
    opacity: 1;
    pointer-events: all;
  }

&::before {
    left: 0rem;
    top: 85%;
    display: none;
    position: absolute;
    content: "";
    background: red;
    opacity: 0;
    pointer-events: none;
    transition: visibility 0.3s, opacity ease 0.3s;
    content: '';
    z-index: 10;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: solid;

}

  &::after {
    display: none;
    position: absolute;
    white-space: nowrap;
    content: attr(aria-label);
    background: #fff;
    border-radius: 4px;
    padding: 0.5rem;
    font-size: ${fontSize.sm};
    opacity: 0;
    pointer-events: none;
    box-shadow: 2px 2px 8px 0px #dfdfdf;
    transition: visibility 0.3s, opacity ease 0.3s;
    z-index: 10;
  }
`;

