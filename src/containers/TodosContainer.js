import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { insert, remove, toggle, changeInput } from '../modules/todos';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsert = useCallback((text) => dispatch(insert(text), [dispatch]), [
    dispatch,
  ]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// const mstp = ({ todos }) => ({
//   input: todos.input,
//   todos: todos.todos,
// });
// const mdtp = (dispatch) =>
//   bindActionCreators(
//     {
//       changeInput,
//       insert,
//       toggle,
//       remove,
//     },
//     dispatch
//   );

// export default connect(mstp, mdtp)(TodosContainer);
export default TodosContainer;
