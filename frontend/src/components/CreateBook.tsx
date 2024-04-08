import React, { useState } from "react";
import axios from "axios";

type FormState = {
  title: string;
  author: string;
  publicationYear?: number;
  description?: string;
};

const CreateBook = () => {
  const [formData, setFormData] = useState<FormState>({
    title: "",
    author: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/books/",
        formData
      );
      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-64 sm:w-96 m-5 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="border-2 border-pink-400 rounded-md px-3 text-[#678CEC] focus:border-pink-600 focus:outline-none"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="author">Author</label>
        <input
          className="border-2 border-pink-400 rounded-md px-3 text-[#678CEC] focus:border-pink-600 focus:outline-none"
          type="text"
          id="author"
          name="author"
          onChange={handleChange}
          value={formData.author}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="publicationYear">Publication Year</label>
        <input
          className="border-2 border-pink-400 rounded-md px-3 text-[#678CEC] focus:border-pink-600 focus:outline-none"
          type="number"
          id="publicationYear"
          name="publicationYear"
          onChange={handleChange}
          value={formData.publicationYear}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <textarea
          rows={4}
          className="border-2 border-pink-400 rounded-md px-3 text-[#678CEC] focus:border-pink-600 focus:outline-none"
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
      </div>
      <button
        type="submit"
        className="bg-[#e5f195] font-bold mt-2 shadow-md py-2 text-[#678CEC] rounded-md"
      >
        Add a new book
      </button>
    </form>
  );
};

export default CreateBook;
