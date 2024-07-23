import React, { useState, useEffect, useRef } from 'react';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input); // sadece metin gönderilmeli
      setInput('');
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r-lg py-2 px-4 hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default AddTodo;