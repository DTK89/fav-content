import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

// const StyledWrapper = styled.div`
//   padding: 25px 150px 25px 70px;
//   height: 100vh;
// `;

const StyledCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledHeaderParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.light};
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledPageHeader>
      <Input search placeholder="search" />
      <StyledHeading big as="h1">
        {pageType}
      </StyledHeading>
      <StyledHeaderParagraph>6 {pageType}</StyledHeaderParagraph>
    </StyledPageHeader>
    <StyledCardGrid>{children}</StyledCardGrid>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
};

GridTemplate.defaultProp = {
  pageType: 'notes',
};

export default GridTemplate;