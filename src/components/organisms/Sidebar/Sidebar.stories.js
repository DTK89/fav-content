import React from 'react';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: '/Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const NotesSidebar = () => <Sidebar />;
export const TwitterSidebar = () => <Sidebar barType={'twitters'} />;
export const ArticlesSidebar = () => <Sidebar barType={'articles'} />;
