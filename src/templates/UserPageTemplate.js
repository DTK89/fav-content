import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
// import GridTemplate from 'templates/GridTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  height: 100vh;
`;

const UserPageTemplate = ({ children, pageType }) => (
  <StyledWrapper>
    <Sidebar barType={pageType} />
    {children}
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

UserPageTemplate.defaultProp = {
  pageType: 'notes',
};

export default UserPageTemplate;
