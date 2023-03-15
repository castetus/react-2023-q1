import { WithRouterProps } from '@/withRouter';
import React from 'react';

class Heading extends React.Component<WithRouterProps> {
  constructor(props: WithRouterProps) {
    super(props);
  }
  render() {
    console.log('test', this.props);
    return <div></div>;
  }
}

export default Heading;
