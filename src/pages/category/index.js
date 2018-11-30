import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, WingBlank, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import { Rate } from 'antd';
import styles from './index.less';
import testimg from '../../assets/yay.jpg';

@connect(({ category }) => ({
  category,
}))
class Category extends PureComponent {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { route, category } = this.props;
    const choosenBooks = category.list;
    return (
      <div className={styles.index}>
        <NavBar mode="light">{route.title}</NavBar>{' '}
        {choosenBooks.map((book, index) => (
          <WingBlank size="lg" key={index}>
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header title={book.name} extra={<span>{book.author}</span>} />
              <Card.Body>
                <div className={styles.book}>
                  <div className={styles.bookImg}>
                    <img src={testimg} />
                  </div>
                  <div className={styles.bookInfo}>
                    <div>“{book.quote}”</div>
                    <WhiteSpace />
                    <div>
                      <Rate disabled allowHalf value={book.score / 2} />{' '}
                      <span className={styles.rate}> {book.score}分</span>
                    </div>
                    <WhiteSpace />
                    <div>
                      {book.numberOfComments}
                      人评价
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer content={book.press} extra={<div>{book.price}</div>} />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
        ))}
      </div>
    );
  }
}

export default Category;
