import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
// import GridTemplate from 'templates/GridTemplate';

// const StyledWrapper = styled.div`
//   padding: 25px 150px 25px 70px;
//   height: 100vh;
// `;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar barType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
