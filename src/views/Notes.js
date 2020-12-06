import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map((item) => (
      <Card
        id={item.id}
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
