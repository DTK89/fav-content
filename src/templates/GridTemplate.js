import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/plus.svg';

const StyledWrapper = styled.div`
  /* position: relative; */
  padding: 25px 150px 25px 70px;
  height: 100vh;
`;

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

const StyledAddButton = styled(ButtonIcon)`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-size: 40%;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

const GridTemplate = ({ children, pageTypeContext }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search" />
        <StyledHeading big as="h1">
          {pageTypeContext}
        </StyledHeading>
        <StyledHeaderParagraph>6 {pageTypeContext}</StyledHeaderParagraph>
      </StyledPageHeader>
      <StyledCardGrid>{children}</StyledCardGrid>
      <StyledAddButton icon={plusIcon} activeclass="active" activeColor={pageTypeContext} />
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageTypeContext: 'notes',
};

export default withContext(GridTemplate);
