import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes/index';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import DetailsPage from 'views/DetailsPage';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <Route exact path={routes.notes} component={Notes} pageType="notes" />
            <Route path={routes.note} component={DetailsPage} pageType="notes" />
            <Route exact path={routes.articles} component={Articles} pageType="articles" />
            <Route path={routes.article} component={DetailsPage} pageType="notes" />
            <Route exact path={routes.twitters} component={Twitters} pageType="twitters" />
            <Route path={routes.twitter} component={DetailsPage} pageType="notes" />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
