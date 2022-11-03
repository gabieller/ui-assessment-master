import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import PercentCard from "../PercentCard";
import Tooltip from "../Tooltip";

import * as S from "./style";

export const SalesOverview = ({ salesOverview }) => {
  return (
    <S.Wrapper className="SalesOverview">
      <S.Info>
        <S.TooltipWrapper data-testid="tooltip">
          <Tooltip content="lorem ipsum"  />
        </S.TooltipWrapper>
        <S.Title data-testid="title">
          <FontAwesomeIcon icon={faUpload} size="sm" color={colors["blue"]} />
          Sales
        </S.Title>
        <S.SubTitle data-testid="subtitle">
          <span>
            You had <strong> {salesOverview.uploads}</strong> uploads and
            <strong> {salesOverview.linesSaved} </strong> lines added
          </span>
        </S.SubTitle>
      </S.Info>

      <S.PercentCardWrapper data-testid="percent-card">
        <PercentCard
          total={salesOverview.uploads}
          partial={salesOverview.successfulUploads}
          title="upload success"
        />
        <PercentCard
          total={salesOverview.linesAttempted}
          partial={salesOverview.linesSaved}
          title="lines added"
        />
      </S.PercentCardWrapper>
    </S.Wrapper>
  );
};

SalesOverview.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number,
    lastUploadDate: PropTypes.number,
  }),
};

export default SalesOverview;
