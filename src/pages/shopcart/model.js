import * as BookAPI from '../../services/index';
export default {
  namespace: 'shopcart',
  state: {
    list: [],
    order: [],
  },
  effects: {
    *getAllCart(actions, { put, call }) {
      const res = yield BookAPI.getCart();
      if (res) {
        yield put({
          type: 'putCart',
          list: res,
        });
      }
    },
  },
  reducers: {
    putCart(state, { list }) {
      return { ...state, list };
    },
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
