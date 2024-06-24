import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
`;

const StyledTitle = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 600;
    color: #959292
`;

const StyledContent = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-weight: 600;
    border-radius: 6px;
    background: #FCC531;
`;

const StyledEmailSupport = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    justify-content: center;
`;

const StyledEmailSupportTitle = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    text-align: start;
`;

const StyledEmailSupportContent = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0;
    font-size: 14px;
    width: 100%;
`;

const StyledEmail = styled.p`
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 10px;
    margin: 0;
`;

const StyledPhoneNumber = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 13px;
    padding: 0;
    margin: 0;
`;

export function ContactSupport(props) {
  function getFirstLetterOfName() {
    return props.name.charAt(0).toUpperCase();
  }
  return (
    <StyledWrapper>
      <StyledTitle>YOUR FEEFO SUPPORT CONTACT</StyledTitle>
      <StyledContent>
        <StyledLogo>{getFirstLetterOfName()}</StyledLogo>
        <StyledEmailSupport>
          <StyledEmailSupportTitle>{props.name}</StyledEmailSupportTitle>
          <StyledEmailSupportContent>
            <FontAwesomeIcon icon={faEnvelope} />
            <StyledEmail>{props.email}</StyledEmail>
            <StyledPhoneNumber>020 3362 4208</StyledPhoneNumber>
          </StyledEmailSupportContent>
        </StyledEmailSupport>
      </StyledContent>
    </StyledWrapper>
  )
}

ContactSupport.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};