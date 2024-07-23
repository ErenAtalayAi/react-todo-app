import React, { useState } from 'react';

const TodoItem = ({ todo, index, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoText, setNewTodoText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(index, newTodoText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTodoText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            className="border p-1 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white rounded px-3 py-1 hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="text-gray-700">{todo.text}</span>
          <span className="text-gray-500 text-sm">{todo.timestamp}</span>
        </div>
      )}
      <div>
        {!isEditing && (
          <>
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
