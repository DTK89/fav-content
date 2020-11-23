import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const PrimaryNotes = () => <Button>OPEN/SAVE</Button>;
export const Secondary = () => <Button>REMOVE</Button>;
