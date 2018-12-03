import * as BookAPI from '../../services/index';
import router from 'umi/router';
import { from } from 'rxjs';
export default {
  namespace: 'user',
  state: {
    loginStutus: false,
    token: '',
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        const token = localStorage.getItem('token');
        if (pathname === '/login' && token) {
          router.replace('/index');
        }
      });
    },
  },
  effects: {
    *login({ data }, { put, call }) {
      let res = yield BookAPI.login(data);
      if (res.message == 'login success') {
        yield put({
          type: 'setLoginStatus',
          token: res.token,
        });
        localStorage.setItem('token', res.token);
        yield put(router.replace('/index'));
      }
    },
    *register({ data }, { put, call }) {
      let res = yield BookAPI.register(data);
    },
  },
  reducers: {
    setLoginStatus(state, { token }) {
      return { ...state, loginStatus: true, token: token };
    },
  },
};
