import React, { useState, useEffect } from 'react';
import { apiUrl } from '../Data';
import Navbar from './Navbar';
import Spinner from "./Spinner";
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { index } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError('Error fetching the news articles');
      }
      
      setLoading(false);
    };

    fetchData();
  }, []);

  const article = articles[parseInt(index, 10)];

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='min-h-screen flex flex-col bg-slate-700'>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="w-full max-w-2xl mx-auto bg-slate-900 bg-opacity-80 rounded-md overflow-hidden">
          <div className="relative">
            <img src={article.urlToImage} alt={article.title} className="w-full h-auto" />
          </div>
          <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{article.title}</p>
            <p className="mt-4 text-white">{article.description}</p>
            <p className="mt-4 text-white">{article.content}</p>
            <p className="mt-4 text-white">Author: {article.author}</p>
            <p className="mt-4 text-white">Published At: {new Date(article.publishedAt).toLocaleString()}</p>
            <div className='mb-3 mr-3 flex justify-end'>
            <a href={article.url} className='bg-transparent hover:bg-blue-950 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded' target="_blank" rel="noopener noreferrer">Read Full Article...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
