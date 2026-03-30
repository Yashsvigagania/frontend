import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  function fetchData() {
    setLoading(true);
    setError("");

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

  // Search filter (safe)
  const filteredNews = news.filter((item) =>
    (item.title || "").toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = filteredNews.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredNews.length / itemPerPage);

  // UI states
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>News App</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{ padding: "8px", width: "250px", marginBottom: "20px" }}
      />

      {/* No Results */}
      {filteredNews.length === 0 ? (
        <h3>No results found for "{search}"</h3>
      ) : (
        <>
          {/* News List */}
          <ul>
            {currentNews.map((item) => (
              <li key={item.url} style={{ marginBottom: "10px" }}>
                {item.title}
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  margin: "5px",
                  fontWeight: currentPage === i + 1 ? "bold" : "normal",
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>

            <div style={{ marginTop: "10px" }}>
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </>
      )}
    </div>
  );
}