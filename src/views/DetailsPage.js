import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const detailsTest = {
  id: 1,
  title: 'Wake me up when Vue ends',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  twitterName: 'hello_roman',
  articleUrl: 'https://youtube.com/helloroman',
  created: '1 day',
};

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        this.setState({ pageType: 'notes' });
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={detailsTest.title}
        content={detailsTest.content}
        created={detailsTest.created}
        twitterImgName={detailsTest.twitterName}
        articleUrl={detailsTest.articleUrl}
        // key={item.id}
      />
    );
  }
}

// const mapStateToProps = (state) => {
//   const { {pageType} } = state;
//   return { {pageType} };
// };

DetailsPage.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string }).isRequired,
  // match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default DetailsPage;
