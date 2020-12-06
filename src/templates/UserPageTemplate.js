import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageTypeContext }) => (
  <>
    <Sidebar pageTypeContext={pageTypeContext} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageTypeContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageTypeContext: 'notes',
};

export default withContext(UserPageTemplate);
