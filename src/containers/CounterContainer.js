import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
  increaseAsync,
  decreaseAsync,
} from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const async2 = (func) =>
    function () {
      setTimeout(() => {
        func();
      }, 1000);
    };
  const onAsynIncreasec2 = async2(onIncrease);
  const onAsyncDecrease2 = async2(onDecrease);
  const onAsyncIncrease = useCallback(() => {
    dispatch(asyncIncrease());
    console.log('B');
  }, [dispatch]);
  const onAsyncDecrease = useCallback(() => dispatch(asyncDecrease()), [
    dispatch,
  ]);

  const onIncreaseAsync = useCallback(() => dispatch(increaseAsync()), [
    dispatch,
  ]);

  const onDecreaseAsync = useCallback(() => dispatch(decreaseAsync()), [
    dispatch,
  ]);

  return (
    <Counter
      number={number}
      onIncrease={onIncreaseAsync}
      onDecrease={onDecreaseAsync}
    />
  );
};

export default React.memo(CounterContainer);
