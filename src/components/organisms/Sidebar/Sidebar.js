import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/pen.svg';
import logoutIcon from 'assets/logout.svg';
import twitterIcon from 'assets/twitter.svg';
import bulbIcon from 'assets/bulb.svg';
import logoIcon from 'assets/logo.svg';

const StyledNavWrapper = styled.nav`
  height: 100vh;
  width: 15rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

const StyledLogoWrapper = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledButtonWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutLink = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ barType }) => (
  <StyledNavWrapper activeColor={barType}>
    <StyledLogoWrapper to="/notes" />
    <StyledButtonWrapper>
      <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
    </StyledButtonWrapper>
    <StyledLogoutLink as={NavLink} to="/login" icon={logoutIcon} />
  </StyledNavWrapper>
);

Sidebar.propTypes = {
  barType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  barType: 'notes',
};

export default Sidebar;
