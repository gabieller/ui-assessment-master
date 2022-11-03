import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../globalStyles";


import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./style";


export const Tooltip = ({content}) => {
  return (
    <S.TooltipComponent aria-label={content}>
      <FontAwesomeIcon icon={faInfoCircle} color={colors['grey-300']} size="1x" />
    </S.TooltipComponent>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string
};


export default Tooltip;
