import React, { PureComponent } from 'react';
import { Card, NavBar, WingBlank, WhiteSpace, List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import styles from './index.less';

class Mine extends PureComponent {
  render() {
    return (
      <div>
        <NavBar mode="light">我的</NavBar>
        <Card full>
          <Card.Body>
            <div className={styles.mine}>
              <div className={styles.avatarBox}>
                <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div>OneMoreLight</div>
            </div>
          </Card.Body>
        </Card>

        <List renderHeader={() => '我的'} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            订单 <Brief>全部订单</Brief>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            账户
            <Brief>99999999.99</Brief>
          </Item>
        </List>
        <List renderHeader={() => '关于我们'} className="my-list">
          <Item arrow="horizontal">About us</Item>
        </List>
      </div>
    );
  }
}
export default Mine;
