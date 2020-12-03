import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map((item) => (
      <Card
        id={item.id}
        cardType="articles"
        title={item.title}
        content={item.content}
        created={item.created}
        articleUrl={item.articleUrl}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
