import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const H1 = () => <Heading big>Hello Dave</Heading>;
export const H3 = () => <Heading>Hello Dave</Heading>;
