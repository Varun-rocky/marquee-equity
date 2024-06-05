import React from "react";
import Card from "./Card";

function CardsList({ books }) {
  const createCard = () => {
    return books.map((book, id) => {
      return <Card key={id} book={book} />;
    });
  };

  return (
    <ul className="flex flex-wrap gap-4 justify-center mt-4">
      {books && createCard()}
    </ul>
  );
}

export default CardsList;
