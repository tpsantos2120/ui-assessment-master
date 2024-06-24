import React from 'react';
import styled from 'styled-components';
import {SalesOverview} from "./SalesOverview";
import {ContactSupport} from "./ContactSupport";


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin: auto;
    width: 600px;
    padding: 30px;
    background: #f2f2f2;
`;

const StyledContactSupport = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`;

const StyledTitle = styled.h3`
    display: flex;
    font-weight: 400;
    font-size: 26px;
    width: 400px;
    margin: 0;
`;

const StyledSalesOverview = styled.div`
    display: flex;
    gap: 20px;
`;

export const AccountOverview = ({data}) => {

  return (
    <StyledWrapper>
      <StyledContactSupport>
        <StyledTitle>Account Overview</StyledTitle>
        <ContactSupport name={data.supportContact.name} email={data.supportContact.email}/>
      </StyledContactSupport>
      <StyledSalesOverview>
        <SalesOverview data={data.salesOverview}/>
      </StyledSalesOverview>
    </StyledWrapper>
  )
}

export default AccountOverview;