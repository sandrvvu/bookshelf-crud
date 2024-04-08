import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "./BookList";

type BookCardProps = {
  data: Book;
};

const BookCard = ({ data }: BookCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-60 cursor-pointer border-2 border-[#678CEC] rounded-md shadow-xl transition duration-150 ease-in-out hover:scale-[1.05]"
      onClick={() => navigate(`/book/${data._id}`)}
    >
      <div className="w-full bg-[#678CEC] border-b-2 border-gray-500">
        <img
          className="h-48 m-auto"
          src="https://static.vecteezy.com/system/resources/previews/018/246/021/original/studying-book-illustration-free-png.png"
          alt="books image"
        />
      </div>
      <div className="bg-[#D49BAE] p-2 text-[#e5f195]">
        <h1 className="text-lg font-bold leading-none">{data.title}</h1>
        <p className="text-sm text-gray-200">
          by <span className="italic">{data.author}</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
