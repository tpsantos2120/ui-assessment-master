import styled from "styled-components";
import {faCircleInfo, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { format } from 'date-fns';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 0 6px #c5c2c2;
    border-radius: 4px;
`;

const StyledSalesDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-bottom: 1px solid #E7E7E7;

    > div:nth-child(1) {
        display: flex;
        justify-content: space-between;

        > div {
            display: flex;

            > p {
                margin: 0;
                padding: 0 10px 10px 10px;
                font-weight: 600;
                align-self: start;
            }
        }
    }

    > div:nth-child(2) > p > * {
        font-weight: 600;
        color: #4D4D4D;
    }

    > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        > p:nth-child(2) {
            font-style: italic;
            letter-spacing: 0.04rem;
        }
    }
`;

const StyledSalesPercentage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledSalesUploadSuccess = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 1px solid #E7E7E7;

    > * {
        margin: 0;
        font-weight: 600;
    }

    > p:nth-child(1) {
        padding: 15px 0 0 15px;
        font-size: 30px;
        color: #00A152;
    }

    > p:nth-child(2) {
        padding: 0 0 15px 15px;
        font-size: 12px;
        color: #959292
    }
`;

const StyledSalesLinesSaved = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    > * {
        margin: 0;
        font-weight: 600;
    }

    > p:nth-child(1) {
        padding: 15px 0 0 15px;
        font-size: 30px;
        color: #00A152;
    }

    > p:nth-child(2) {
        padding: 0 0 15px 15px;
        font-size: 12px;
        color: #959292
    }
`;

export function SalesOverview(props) {
  function calculateUpdateSuccessRate() {
    return props.data.linesSaved / props.data.linesAttempted * 100;
  }

  function calculateLinesSavedSuccess() {
    return props.data.successfulUploads / props.data.uploads * 100;
  }

  function parseLastUploadDate() {
    return format(props.data.lastUploadDate, 'MM/dd/yyyy');
  }

  return (
    <StyledWrapper>
      <StyledSalesDetails>
        <div>
          <div>
            <FontAwesomeIcon icon={faUpload} color={'#00A9E4'}/>
            <p>Sales</p>
          </div>
          <FontAwesomeIcon icon={faCircleInfo} color={'#b7b5b5'}/>
        </div>
        <div>
          <p>You had <span>{props.data.uploads} uploads</span> and <span>{props.data.linesAttempted}</span> lines added.
          </p>
          <p>Last upload date: {parseLastUploadDate()}</p>
        </div>
      </StyledSalesDetails>
      <StyledSalesPercentage>
        <StyledSalesUploadSuccess>
          <p><span>{calculateUpdateSuccessRate()}</span>%</p>
          <p>UPLOAD SUCCESS</p>
        </StyledSalesUploadSuccess>
        <StyledSalesLinesSaved>
          <p><span>{calculateLinesSavedSuccess()}</span>%</p>
          <p>LINES SAVED</p>
        </StyledSalesLinesSaved>
      </StyledSalesPercentage>
    </StyledWrapper>
  )
}

SalesOverview.propTypes = {
  uploads: PropTypes.number,
  successfulUploads: PropTypes.number,
  linesAttempted: PropTypes.number,
  linesSaved: PropTypes.number,
  lastUploadDate: PropTypes.number,
};