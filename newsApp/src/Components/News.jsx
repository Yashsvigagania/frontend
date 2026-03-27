import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  function fetchData() {
    setLoading(true);

    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab079b92c42e4ce18d143df65097866a"
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Data Not Available");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Search filter
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = filteredNews.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredNews.length / itemPerPage);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (filteredNews.length === 0) return <h1>No News Found</h1>;

  return (
    <div>
      <h2>News App</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* News List */}
      <ul>
        {currentNews.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span> Page {currentPage} of {totalPages} </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}