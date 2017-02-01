import React from 'react';
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import LayoutContainer from 'components/LayoutContainer';
import reactMixin from 'react-mixin';

/**
 * Main page
 */
class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { router } = this.context;

    return (
      <div>{'This is a page '}</div>
    )
  }
}

Page1.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Page1;