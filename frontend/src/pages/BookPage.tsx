import React from "react";
import BookImage from "../assets/books.avif"
import { useNavigate } from "react-router-dom";
import BookDetails from "../components/BookDetails";

const BookPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen h-full bg-[#e5f195] p-10 flex flex-col gap-12">
      <button onClick={() => navigate("/")}>
        <img
          className="w-5"
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
          alt="arrow left"
        />
      </button>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <img
          className="w-96 rounded-lg"
          src={BookImage}
          alt="book image"
        />
        <div className="w-full md:w-2/4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#678CEC] text-center">
            Book Details
          </h1>
          <BookDetails />
        </div>
      </div>
    </div>
  );
};

export default BookPage;
