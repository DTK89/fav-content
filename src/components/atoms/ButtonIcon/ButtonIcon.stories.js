import React from 'react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
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
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const PenIcon = () => <ButtonIcon icon={penIcon} />;
export const ActivePenIcon = () => <ButtonIcon active icon={penIcon} />;
export const LogoutIcon = () => <ButtonIcon icon={logoutIcon} />;
export const TwitterIcon = () => <ButtonIcon icon={twitterIcon} />;
export const BulbIcon = () => <ButtonIcon icon={bulbIcon} />;
export const PlusIcon = () => <ButtonIcon icon={plusIcon} />;
