import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map((item) => (
      <Card
        id={item.id}
        title={item.title}
        content={item.content}
        created={item.created}
        twitterImgName={item.twitterName}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default connect(mapStateToProps)(Twitters);
