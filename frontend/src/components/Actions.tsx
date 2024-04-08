import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./UI/Modal";
import UpdateBook from "./UpdateBook";

type ActionsProps = {
  id: string;
};

const Actions = ({ id }: ActionsProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/books/${id}`);
    navigate("/");
  };

  return (
    <div className="flex gap-10 p-5">
      <button onClick={() => setShowModal(true)} className="bg-[#f9b3ca] px-5 py-1 shadow font-bold rounded-md text-[#678CEC] transition ease-out duration-100 hover:bg-gray-200 hover:text-[#D49BAE] hover:-translate-y-1">
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-[#f9b3ca] px-5 py-1 shadow font-bold rounded-md text-red-400 transition ease-out duration-100 hover:bg-gray-200 hover:text-[#D49BAE] hover:-translate-y-1"
      >
        Delete
      </button>
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <UpdateBook id={id}/>
      </Modal>
    </div>
  );
};

export default Actions;
