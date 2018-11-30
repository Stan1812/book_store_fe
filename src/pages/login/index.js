import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ user }) => ({
  user,
}))
class Login extends PureComponent {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { route } = this.props;
    return (
      <div>
        {route.title}
        <div>login</div>
      </div>
    );
  }
}

export default Login;
