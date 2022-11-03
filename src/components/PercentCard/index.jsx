import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

export const PercentCard = ({ title, total, partial }) => {
  const percent = Math.round((partial / total) * 100);
  return (
    <S.Card>
      <S.Percent data-testid="percent">{percent}%</S.Percent>
      <S.Title data-testid="title">{title}</S.Title>
    </S.Card>
  );
};

PercentCard.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
  partial: PropTypes.number,
};

export default PercentCard;
