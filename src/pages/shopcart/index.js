import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List, NavBar, Checkbox, Card, WhiteSpace, Stepper } from 'antd-mobile';
import testimg from '../../assets/yay.jpg';
import styles from './index.less';

const CheckboxItem = Checkbox.CheckboxItem;
@connect(({ shopcart }) => ({
  shopcart,
}))
class ShopCart extends PureComponent {
  componentDidMount() {
    this.props.dispatch({type:'shopcart/getAllCart'});
  }
  onBookChange = val => {
    // this.props.dispatch({type:'shopcart/delete',payload:{id:val}})
  };
  onNumChange = val => {
    console.log(val);
  };
  selectItem = val => {
    console.log(val);
  };
  render() {
    const { route, shopcart } = this.props;
    return (
      <div>
        <NavBar mode="light">{route.title}</NavBar>
        <List>
          {shopcart.list.map((book, index) => (
            <div key={index}>
              <WhiteSpace size="lg" />
              <Card full>
                <Card.Body>
                  <div className={styles.checkitem}>
                    <CheckboxItem
                      className={styles.check}
                      key={book.value}
                      onChange={() => this.onBookChange(book.id)}
                    />
                    <div className={styles.book}>
                      <div className={styles.bookImg}>
                        <img src={testimg} />
                      </div>
                      <div className={styles.bookInfo}>
                        <div> {book.name}</div>
                        <div>{book.author}</div>
                        <div>{book.price}</div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer
                  extra={
                    <Stepper
                      style={{ width: '90%', minWidth: '100px' }}
                      showNumber
                      max={10}
                      min={0}
                      value={book.num}
                      onChange={() => this.onNumChange(book.num)}
                    />
                  }
                />
              </Card>
            </div>
          ))}
        </List>
      </div>
    );
  }
}
export default ShopCart;
