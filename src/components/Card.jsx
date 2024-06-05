import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Card = ({ book }) => {
  const [buttonLabel, setButtonLabel] = useState("Add");
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();
  const hideButton = location.pathname === "/bookshelf";
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    const isBookSaved = savedBooks.some(
      (savedBook) => savedBook.title === book.title
    );
    if (isBookSaved) {
      setButtonLabel("Added");
      setDisabled(true);
    }
  }, [book.title]);

  const handleClick = () => {
    setButtonLabel("Added");
    setDisabled(true);

    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    localStorage.setItem("savedBooks", JSON.stringify([...savedBooks, book]));
  };

  return (
    <li className="border-2 border-black p-4 w-64 rounded-md">
      <h3 className="font-bold text-xl">Title:</h3>
      <span className="text-sm">{book.title}</span>
      <h3 className="font-bold text-xl">Edition count:</h3>
      <span className="text-sm">{book.edition_count}</span>
      {!hideButton && (
        <Button
          buttonLabel={buttonLabel}
          classes={`py-2 px-4 rounded ${
            disabled
              ? "cursor-not-allowed bg-green-500"
              : "bg-blue-500 hover:bg-blue-600 text-white font-bold"
          }`}
          clickHandler={handleClick}
          disabled={disabled}
        />
      )}
    </li>
  );
};

export default Card;
