import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({
      name,
      email,
    });
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 block p-2 w-full border border-gray-600 rounded-md shadow-sm text-[16px]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 block p-2 w-full border border-gray-600 rounded-md shadow-sm text-[16px]"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition ease-in-out duration-150"
        >
          Add
        </button>
        {submitted && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-700">
            <p className="font-semibold">Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
