import React, { useState, useReducer, useCallback, useRef } from 'react';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import TodoTemplate from './component/TodoTemplate';

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter((todo) => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map((todo) =>
                todo.id === action.id
                    ? { ...todo, checked: !todo.checked }
                    : todo,
            );
        default:
            return todos;
    }
}

const App = () => {
    // const [todos, setTodos] = useState(createBulkTodos);
    const [todos, dispatch] = useReducer(
        todoReducer,
        undefined,
        createBulkTodos,
    );
    const nextId = useRef(2501);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false,
        };
        dispatch({
            typs: 'INSERT',
            todo,
        });
        nextId.current += 1;
    }, []);

    // useState 함수형 업데이트
    const onRemove = useCallback((id) => {
        dispatch({ type: 'REMOVE', id });
    }, []);

    const onToggle = useCallback((id) => {
        dispatch({ type: 'TOGGLE', id });
    }, []);

    // const onInsert = useCallback(
    //     (text) => {
    //         const todo = {
    //             id: nextId.current,
    //             text: text,
    //             checked: false,
    //         };
    //         setTodos(todos.concat(todo));
    //         nextId.current += 1;
    //     },
    //     [todos],
    // );

    // useState 함수형 업데이트
    // const onRemove = useCallback((id) => {
    //     setTodos((todos) => todos.filter((todo) => todo.id !== id));
    // }, []);

    // const onToggle = useCallback((id) => {
    //     setTodos((todos) =>
    //         todos.map((todo) =>
    //             todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //         ),
    //     );
    // }, []);

    //useReducer

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
