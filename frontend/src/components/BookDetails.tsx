import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Book } from "./BookList";
import Actions from "./Actions";

const BookDetails = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        const result = res.data;
        setBook(result);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  return (
    <>
      <div className="bg-gray-50 p-5 mt-10 rounded-lg text-[#678CEC]">
        {book ? (
          <>
            <p className="text-xl flex flex-col sm:flex-row justify-between items-center sm:items-start gap-0 sm:gap-4 mb-3">
              Title:
              <span className="w-full sm:w-2/4 text-center sm:text-right font-bold text-[#D49BAE]">
                {book.title}
              </span>
            </p>
            <p className="text-xl flex flex-col sm:flex-row justify-between items-center gap-0 sm:gap-4 mb-3">
              Author:
              <span className="w-full sm:w-2/4 text-center sm:text-right font-bold text-[#D49BAE]">
                {book.author}
              </span>
            </p>
            {book.publicationYear && (
              <p className="text-xl flex flex-col sm:flex-row justify-between items-center gap-0 sm:gap-4 mb-3">
                Publication Year:{" "}
                <span className=" w-full sm:w-2/4 text-center sm:text-right font-bold text-[#D49BAE]">
                  {book.publicationYear}
                </span>
              </p>
            )}
            {book.description && (
              <p className="text-base text-gray-400 w-full mt-5">
                {book.description}
              </p>
            )}
          </>
        ) : (
          <>
            {error ? (
              <h1 className="text-2xl font-bold text-red-400 ">
                Something happened! Please try again :<span> {error}</span>
              </h1>
            ) : (
              <h1 className="text-2xl font-bold text-[#ece367] ">Loading...</h1>
            )}
          </>
        )}
      </div>
      {book && <Actions id={book._id} />}
    </>
  );
};

export default BookDetails;
