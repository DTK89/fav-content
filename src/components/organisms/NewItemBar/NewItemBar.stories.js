import React from 'react';
import NewItemBar from './NewItemBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: '/Organisms/NewItemBar',
  component: NewItemBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const TestNewItemBar = () => <NewItemBar />;
