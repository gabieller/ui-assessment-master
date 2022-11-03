import React from "react";
import PropTypes from "prop-types";


import Contact from "../Contact";
import SalesOverview from "../SalesOverview";

import * as S from "./style";

export const AccountOverview = ({ data }) => {
  return (
      <S.Wrapper className="AccountOverview" role="main">
        <S.Header>
          <S.Title  data-testid="title">
            Account Overview
          </S.Title>
          <S.ContactWrapper>
            <Contact
              name={data.supportContact.name}
              email={data.supportContact.email}
              phone="020 3362 4208"
            />
          </S.ContactWrapper>
        </S.Header>
        <S.CardWrapper>
          <SalesOverview salesOverview={data.salesOverview} />
        </S.CardWrapper>
      </S.Wrapper>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.object
};

export default AccountOverview;
