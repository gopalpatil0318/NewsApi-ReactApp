import React from 'react'
import Navbar from './Navbar';
import Cards from './Cards';
import Filter from "./Filter"
import Spinner from "./Spinner"
import { apiUrl } from '../Data';
import { useState,useEffect } from 'react'

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [category,setCategory] = useState("All")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=19a5f376aae74f6aa0927ac60c0375a2";
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setArticles(data.articles || []);
        
        } catch (error) {
          console.error('Error fetching the news articles:', error);
        }
        setLoading(false)
      };
  
      fetchData();
    }, []);
  
    const allCategories = ['All', ...Array.from(new Set(articles.map(article => article.source.name)))];
    
  
    return (
      <>
      <div className='min-h-screen flex flex-col bg-slate-700'>
        <div>
          <Navbar/>
        </div>
        <div>
              <Filter allCategories={allCategories}
              setCategory={setCategory}
              category = {category}
              />
            </div>
        <div className='bg-slate-700'>
        {
                loading ? (<Spinner />) : (<Cards articles={articles} category = {category} />)
              }
        </div>
      </div>
         
         
      </>
    )
}

export default Home