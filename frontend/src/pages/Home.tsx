import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../components/BookList";
import Header from "../components/Header";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books/").then((res) => {
      const result = res.data.data;
      console.log(result);
      setBooks(result);
    });
  }, []);

  return (
    <div className="w-full min-h-screen h-full bg-[#e5f195] p-10 flex flex-col gap-12">
      <Header />
      <BookList books={books} />
    </div>
  );
};

export default Home;
