import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form
      className="flex justify-center items-center space-x-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full max-w-md"
        placeholder="Enter your todo"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        {editId ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
