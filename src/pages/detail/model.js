import * as BookAPI from '../../services/index';
export default {
  namespace: 'detail',
  state: {
    book: {},
  },
  effects: {
    *getBookById({id}, { call, put }) {
      console.log(id)
      let res = yield BookAPI.getBookById(id);
      yield put({
        type: 'setBook',
        book: res,
      });
    },
  },
  reducers: {
    setBook(state,{ book }) {
      return {...state, book };
    },
  },
};
