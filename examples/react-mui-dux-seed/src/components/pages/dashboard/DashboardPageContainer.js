import React from 'react';
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import LayoutContainer from 'components/pages/dashboard/LayoutContainer';
import reactMixin from 'react-mixin';

/**
 * Main page
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     return (
      <LayoutContainer headerText='Dashboard'>
        <div className="wrap page-content">          
         {'this is the dashboard content'}
        </div>      
      </LayoutContainer>
    )
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Dashboard;
