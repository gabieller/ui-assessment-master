import React from "react";
import PropTypes from "prop-types";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import * as S from "./style";

const Contact = ({ name, email, phone }) => {
  const getContactInitials = () => {
    const splitName = name.split(" ");
    const firstLetter = splitName[0][0];
    const secondLetter =
      splitName.length > 1 && splitName[splitName.length - 1][0];

    return firstLetter + secondLetter;
  };
  return (
    <S.Contact className="Contact">
      <S.Title>Your feefo support contact</S.Title>
      <S.InfoWrapper>
        <S.Initials data-testid="contact-initials">
          {getContactInitials()}
        </S.Initials>
        <S.PersonalInfo>
          <S.Name>{name}</S.Name>
          <S.LineInfo>
            <S.Infos>
              <FontAwesomeIcon icon={faEnvelope} />
              {email}
            </S.Infos>
            <S.Infos>{phone}</S.Infos>
          </S.LineInfo>
        </S.PersonalInfo>
      </S.InfoWrapper>
    </S.Contact>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default Contact;
