import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { routes } from 'routes/index';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledTitle = styled(Heading)`
  font-size: 4rem;
  margin: 5px 0 0;
`;

const StyledDateInfo = styled(Paragraph)`
  font-size: 1.3rem;
  margin: 0 0 5px;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 60px;
`;

const StyledLink = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.articles};
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 30px;
  top: 70px;
`;

const StyledHeader = styled.div`
  margin: 50px 0;
`;

const StyledDescription = styled(Paragraph)`
  word-wrap: break-word;
  font-size: 1.6rem;
  margin: 50px 0;
`;

const StyledButtonArea = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailsTemplate = ({ pageType, title, created, articleUrl, twitterImgName, content }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledDateInfo>{created}</StyledDateInfo>
        {pageType === 'twitters' && (
          <StyledAvatar src={`http://twivatar.glitch.me/${twitterImgName}`} />
        )}
        {pageType === 'articles' && <StyledLink href={articleUrl} />}
      </StyledHeader>
      <StyledDescription>{content}</StyledDescription>
      <StyledButtonArea>
        <Button as={Link} to={`/${pageType}`} activecolor={pageType}>
          CLOSE/SAVE
        </Button>
        <Button secondary>REMOVE</Button>
      </StyledButtonArea>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  // id: PropTypes.number.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterImgName: PropTypes.string,
  content: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
  articleUrl: 'www.google.com',
  twitterImgName: null,
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

export default DetailsTemplate;
