import { WithRouterProps } from '@/withRouter';
import React from 'react';
import './style.css';

class Heading extends React.Component<WithRouterProps> {
  constructor(props: WithRouterProps) {
    super(props);
  }
  render() {
    const { location } = this.props;
    const text = location.pathname.replace('/', '') || 'home';
    return <div className="heading">{text}</div>;
  }
}

export default Heading;
