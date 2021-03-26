import { decrease } from '../modules/counter';

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log('이전상태', store.getState());
  console.log('액션', action);
  console.log('next', next);
  console.log(next(action));
  console.log('다음상태', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
