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
          <Tooltip content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </S.TooltipWrapper>
        <S.Title data-testid="title" tabIndex={8}>
          <FontAwesomeIcon
            icon={faUpload}
            size="sm"
            color={colors["blue"]}
            aria-labelledby="sales"
          />
          Sales
        </S.Title>
        <S.SubTitle data-testid="subtitle" tabIndex={9}>
          <span>
            You had <strong> {salesOverview.uploads}</strong> uploads and
            <strong> {salesOverview.linesSaved} </strong> lines added
          </span>
        </S.SubTitle>
      </S.Info>

      <S.PercentCardWrapper>
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
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number,
  }),
};

export default SalesOverview;
