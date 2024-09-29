import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="my-12">
      <h1 className="mb-5 text-3xl text-center font-semibold">Todo List App</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        todo={todo}
        editId={editId}
        setTodo={setTodo}
      />

      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
