import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);

    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ab079b92c42e4ce18d143df65097866a")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Data Not Available");
        setLoading(false);
      });
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if(news.length===0)

  return (
    <ul>
      {news.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}