import { Secondary } from 'components/atoms/Button/Button.stories';
import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const SampleNotesCard = () => <Card />;
export const SampleTwitterCard = () => <Card cardType={'twitter'} />;
export const SampleArticlesCard = () => <Card cardType={'article'} />;
