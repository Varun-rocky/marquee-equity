import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Input from "./Input";
import CardsList from "./CardsList";
import Error from "./Error";
import { useLocation } from "react-router-dom";
// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchBookName, setSearchBookName] = useState("Harry Potter");
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const hideHeaderAndSearch = location.pathname === "/bookshelf";

  const fetchBooks = async (query) => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const response = await data.json();
      const results = response.docs;
      setBooks(results);
      setNoResults(results.length === 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchBooks = useCallback(debounce(fetchBooks, 500), []);

  useEffect(() => {
    fetchBooks("Harry Potter");
  }, []);

  useEffect(() => {
    if (searchBookName.trim() !== "") {
      debouncedFetchBooks(searchBookName);
    } else {
      fetchBooks("Harry Potter");
    }
  }, [searchBookName, debouncedFetchBooks]);

  const handleSearchTermChange = (e) => {
    setSearchBookName(e.target.value);
  };

  return (
    <section>
      <Header />

      {!hideHeaderAndSearch && (
        <>
          <Input
            type="search"
            placeholder="Type your book name"
            changeHandler={handleSearchTermChange}
          />
          {loading ? (
            <div className="font-bold text-xl p-4">Loading...</div>
          ) : noResults ? (
            <Error />
          ) : (
            <CardsList books={books} />
          )}
        </>
      )}
    </section>
  );
};

export default Home;
