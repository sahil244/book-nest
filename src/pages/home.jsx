import { useState } from "react";
import  BookCard  from "../components/BookCard"
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setBooks(data.docs.slice(0, 10));
      console.log("Results", data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="div">
      <h2> Discover your next fav book</h2>
      <p> Search and add books to your watchlist </p>
      <form onSubmit={searchBooks}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {!loading && books.length > 0 && (
        <div>
          {books.map((item, index) => (
            <BookCard book = {item} index = {index}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
