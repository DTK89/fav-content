import React from 'react';
import PropTypes from 'prop-types';
// import { routes } from 'routes/index';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
// import Sidebar from 'components/organisms/Sidebar/Sidebar';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>{`Note details page: ${match.path === routes.note}`}</p>
    <p>{`Article details page: ${match.path === routes.article}`}</p>
    <p>{`Twitter details page: ${match.path === routes.twitter}`}</p>
  </DetailsTemplate>
);

DetailsPage.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DetailsPage;
