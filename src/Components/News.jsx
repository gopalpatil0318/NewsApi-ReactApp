import React, { useEffect, useState } from 'react';
import { apiUrl } from '../Data';
const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = apiUrl;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching the news articles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top Headlines</h1>
      <div className="news-articles">
        {articles.map((article, index) => (
          <div key={index} className="news-article">
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <p><strong>Category:</strong> {article.source.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
