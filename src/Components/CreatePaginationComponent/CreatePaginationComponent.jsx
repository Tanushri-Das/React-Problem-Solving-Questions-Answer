import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import CustomSpinner from "../../CustomSpinner/CustomSpinner";

const CreatePaginationComponent = () => {
  const [todosData, setTodosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;
  const totalPages = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodosData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  const paginatedData = todosData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <div className="m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedData?.map((todo) => (
            <div key={todo.id} className="p-5 border-2 rounded-lg">
              <h2>Id : {todo.id}</h2>
              <h4>Title : {todo.title}</h4>
            </div>
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default CreatePaginationComponent;
