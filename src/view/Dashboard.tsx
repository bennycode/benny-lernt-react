import * as React from 'react';
import {Button, Typography} from '@material-ui/core';

interface Props {
}

interface State {
}

class Dashboard extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <Typography component="h2" variant="headline">
          Animals
        </Typography>
        <Button color="primary" variant="outlined">
          <a href={'/documentation'} style={{textDecoration: 'none'}} target={'_blank'} rel='noopener'>Create animal</a>
        </Button>
        {this.props.children}
        <p>{`Running mode: ${process.env.NODE_ENV}`}</p>
      </React.Fragment>
    );
  }
}

export default Dashboard;
