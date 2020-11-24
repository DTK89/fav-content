import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { routes } from 'routes/index';
import UserPageTemplate from 'templates/UserPageTemplate';
// import Heading from 'components/atoms/Heading/Heading';
// import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

// const StyledWrapper = styled.div`
//   padding: 25px 150px 25px 70px;
//   height: 100vh;
// `;

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <>{children}</>
    <Button as={Link} to={routes.home}>
      Go Back
    </Button>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

DetailsTemplate.defaultProp = {
  pageType: 'notes',
};

export default DetailsTemplate;
