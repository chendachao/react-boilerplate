/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

import { MyContext } from '../../MyProvider';

export default function FeaturePage() {
  const metaContext = useContext(MyContext);

  const changeMessage = () => {
    metaContext.state.setMessage(`My message${Math.random()}`);
  };

  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <button type="button" onClick={changeMessage}>
        Change context with provider
      </button>
      <h2>{metaContext.state.message}</h2>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.feedbackHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.feedbackMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.routingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.routingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.networkHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.networkMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.intlHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.intlMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
