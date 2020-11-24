import React from 'react';
import styled from 'styled-components';
import { NavLink, MemoryRouter } from 'react-router-dom';
// import { withKnobs, select } from '@storybook/addon-knobs';
import ButtonIcon from './ButtonIcon';
import penIcon from 'assets/pen.svg';
import logoutIcon from 'assets/logout.svg';
import twitterIcon from 'assets/twitter.svg';
import bulbIcon from 'assets/bulb.svg';
import plusIcon from 'assets/plus.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.twitter};
`;

export default {
  title: '/Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </YellowBackground>
    ),
  ],
};

export const ActivePenIcon = () => (
  <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeClass="active" />
);
export const PenIcon = () => <ButtonIcon icon={penIcon} />;
export const LogoutIcon = () => <ButtonIcon icon={logoutIcon} />;
export const TwitterIcon = () => <ButtonIcon icon={twitterIcon} />;
export const BulbIcon = () => <ButtonIcon icon={bulbIcon} />;
export const PlusIcon = () => <ButtonIcon icon={plusIcon} />;
