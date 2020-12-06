import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 99;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const StyledLink = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 20px;
  top: 20px;
  text-overflow: ellipsis; // <--
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      pageTypeContext,
      title,
      created,
      articleUrl,
      twitterImgName,
      content,
      removeItem,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageTypeContext}/details/${id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper onClick={this.handleCardClick} activeColor={pageTypeContext}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {pageTypeContext === 'articles' && <StyledLink href={articleUrl} />}
          {pageTypeContext === 'twitters' && (
            <StyledAvatar src={`http://twivatar.glitch.me/${twitterImgName}`} />
          )}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(pageTypeContext, id)} secondary>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterImgName: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageTypeContext: 'notes',
  articleUrl: null,
  twitterImgName: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
