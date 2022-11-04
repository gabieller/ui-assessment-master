import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";

export const PercentCard = ({ title, total, partial }) => {
  const percent = Math.round((partial / total) * 100);
  return (
    <S.Card className="Percent" tabIndex={9}>
      <S.Percent data-testid="percent-value">{percent}%</S.Percent>
      <S.Title data-testid="percent-title">{title}</S.Title>
    </S.Card>
  );
};

PercentCard.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  partial: PropTypes.number.isRequired,
};

export default PercentCard;
