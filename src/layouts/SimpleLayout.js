import React, { PureComponent } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

class SimpleLayout extends PureComponent {}
export default withRouter(connect(({ app }) => ({ app }))(SimpleLayout));
