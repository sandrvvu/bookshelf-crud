import React from "react";
import BookCard from "./BookCard";

export type Book = {
  _id: string;
  title: string;
  author: string;
  publicationYear?: number;
  description?: string;
};

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-10">
      {books.map((book) => (
        <BookCard data={book} key={book._id} />
      ))}
    </div>
  );
};

export default BookList;
