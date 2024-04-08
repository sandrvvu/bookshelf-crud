import React, { useState } from "react";
import Modal from "./UI/Modal";
import CreateBook from "./CreateBook";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-between items-center gap-4 flex-col sm:gap-10 sm:flex-row sm:items-end">
      <h1 className="text-5xl text-center font-bold text-[#678CEC]">Your BookShelf</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-[#D49BAE] font-bold shadow-lg text-gray-200 rounded flex px-4 py-1 items-center justify-center gap-2 transition ease-out duration-100 hover:bg-gray-200 hover:text-[#D49BAE] hover:-translate-y-1"
      >
        <img
          className="w-3"
          src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
        />
        <p>Add book</p>
      </button>
        <Modal visible={showModal} onClose={() => setShowModal(false)}>
          <CreateBook />
        </Modal>
    </div>
  );
};

export default Header;
