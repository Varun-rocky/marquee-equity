import React, { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";

const ViewBookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const location = useLocation();
  const displayButton = location.pathname === "/bookshelf";

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setBookshelf(savedBooks);
  }, []);

  return (
    <section>
      <h2 className="font-bold text-2xl mb-4 p-4 text-center text-green-500">
        {" "}
        MY Bookshelf
      </h2>
      {displayButton && (
        <Link to="/">
          <Button
            buttonLabel="Home"
            classes="bg-black text-white font-bold py-2 px-4 rounded mr-2"
          />
        </Link>
      )}
      {bookshelf.length === 0 ? (
        <p className="font-bold text-center p-8 text-red-500">
          No books added to the bookshelf.
        </p>
      ) : (
        <CardsList books={bookshelf} />
      )}
    </section>
  );
};

export default ViewBookshelf;
