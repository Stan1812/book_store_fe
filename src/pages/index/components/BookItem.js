import React, { PureComponent } from 'react';
import styles from './bookitem.less';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Rate } from 'antd';
import testimg from '../../../assets/yay.jpg';

class BookItem extends PureComponent {
  componentDidMount() {
    console.log('fuck', this.props);
  }
  render() {
    const { book } = this.props;
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Body>
            <div className={styles.bookItem}>
              <div className={styles.bookImg}>
                <img src={testimg} />
              </div>
              <WhiteSpace size="lg" />
              <div className={styles.bookName}>{book.name}</div>
              <div className={styles.authorName}>{book.author} </div>
              <div className={styles.quote}>“{book.quote}”</div>
              {/* <div className={styles.rate}> */}
              <div className={styles.score}>
                <Rate disabled allowHalf value={book.score / 2} />{' '}
                <span className={styles.rate}> {book.score}分</span>
              </div>
              <WhiteSpace />
              <div>
                {book.numberOfComments}
                人评价
              </div>
              {/* </div> */}
            </div>
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  }
}
export default BookItem;
