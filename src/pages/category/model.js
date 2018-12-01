import * as BookAPI from "../../services/index"
export default {
  namespace: 'category',
  state: {
    list: [],
  },
  effects: {
    *getAllBooks(actions, { call, put }) {
      let listResult = yield BookAPI.getAllBooks();
      console.log('fuck',listResult)
      yield put({
        type: 'putBooks',
        list: listResult,
      });
    },
  },
  reducers: {
    putBooks(state, { list }) {
      return { ...state, list };
    },
  },
};
