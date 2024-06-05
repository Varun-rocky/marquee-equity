import React from "react";
import Button from "./Button";
import ViewBookshelf from "../pages/ViewBookshelf";
import { Route, Link, Routes, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const hideHeaderAndSearch = location.pathname === "/bookshelf";

  return (
    <>
      {!hideHeaderAndSearch && (
        <header className="py-4 px-2 bg-black text-3xl text-white text-center">
          Personal BookShelf
        </header>
      )}
      {!hideHeaderAndSearch && (
        <Link to="/bookshelf">
          <Button
            buttonLabel="My bookshelf"
            classes="bg-blue-300 text-black font-bold py-2 px-4 rounded mr-2"
          />
        </Link>
      )}
      <Routes>
        <Route path="/bookshelf" element={<ViewBookshelf />} />
      </Routes>
    </>
  );
}

export default Header;
