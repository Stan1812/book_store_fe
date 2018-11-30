export default {
  namespace: 'shopcart',
  state: {
    list: [
      {
        id: 0,
        name: '嫌疑人X的献身',
        author: '[日] 东野圭吾',
        price: '28.00',
        num: 1,
      },
      {
        id: 1,
        name: '挪威的森林',
        author: '[日] 村上春树',
        price: '18.80元',
        num: 1,
      },
      {
        id: 3,
        name: '嫌疑人X的献身',
        author: '[日] 东野圭吾',
        price: '28.00',
        num: 1,
      },
      {
        id: 4,
        name: '挪威的森林',
        author: '[日] 村上春树',
        price: '18.80元',
        num: 1,
      },
    ],
    order: [],
  },
  effects: {},
  reducers: {
    delete(state, { payload: id }) {
      const { list } = state;
      const res = list.filter(item => item.id !== id.id);
      return { ...state, list: res };
    },
    update(state, { payload: id }) {},
    updateOrder(state, { payload: id }) {
      const { order } = state;
      return {
        ...state,
        order: order.map((book, index) => {
          if (book.id === id) {
            order.splice(index, 1);
          }
        }),
      };
    },
  },
};
