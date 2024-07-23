import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
