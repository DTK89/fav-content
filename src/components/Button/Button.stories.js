import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withKnobs],
  }

export const Primary = () => {
    const label = 'Colors';
    const options = {
        Primary: 'hsl(49, 100%, 58%)',
        Secondary: 'hsl(196, 83%, 75%)',
        Tertiary: 'hsl(106, 47%, 64%)',
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    
    return <Button color={value} >Button</Button>;
};

export const Secondary = () => {
    const label = 'Colors';
    const options = {
        Primary: 'hsl(0, 0%, 90%)',
        Secondary: 'hsl(196, 83%, 75%)',
        Tertiary: 'hsl(106, 47%, 64%)',
    };
    const defaultValue = 'hsl(0, 0%, 90%)';
    const groupId = 'GROUP-ID2';
    const value = select(label, options, defaultValue, groupId);
    
    return <Button secondary color={value} >Button</Button>;
};
