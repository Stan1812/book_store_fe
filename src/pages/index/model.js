import * as BookAPI from '../../services/index.js';
export default {
  namespace: 'choice',
  state: {
    choosenBookList: [],
  },
  effects: {
    *getChoiceBook(actions, { call, put }) {
      let listResult = yield BookAPI.getChoiceBook();
      yield put({
        type: 'putBooks',
        choosenBookList: listResult.list,
      });
    },
  },
  reducers: {
    putBooks(state, { choosenBookList }) {
      return { ...state, choosenBookList };
    },
  },
};
