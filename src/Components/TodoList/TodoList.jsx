import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div className="flex justify-center items-center mt-14 text-center">
      <table className="w-full max-w-4xl border-collapse">
        <thead>
          <tr>
            <th className="font-normal text-[16px] lg:text-[18px] border-b border-gray-300 py-2 text-center">
              Todo
            </th>
            <th className="font-normal text-[16px] lg:text-[18px] text-center border-b border-gray-300 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id} className="hover:bg-gray-100">
              <td className="py-3 text-[18px] font-regular border-b border-gray-300">
                {t.todo}
              </td>
              <td className="py-3 border-b border-gray-300">
                <div className="space-x-4">
                  <button
                    onClick={() => handleEdit(t.id)}
                    className="bg-yellow-500 px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-500 px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
