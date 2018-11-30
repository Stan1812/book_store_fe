import React, { PureComponent } from 'react';
import { NavBar, Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'dva';
import BookItem from './components/BookItem';

@connect(({ choice }) => ({
  choice,
}))
class Index extends PureComponent {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { route, choice } = this.props;
    return (
      <div>
        <NavBar mode="light">{route.title}</NavBar>
        <WingBlank>
          <Carousel className="space-carousel" dots={false} cellSpacing={20}>
            {choice.choosenBookList.map((book, index) => (
              <div key={index}>
                <BookItem book={book} />
              </div>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}
export default Index;
