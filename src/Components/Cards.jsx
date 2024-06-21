import React from 'react'
import Card from './Card'

const Cards = ({articles,category}) => {
  
  const filteredArticles = category === 'All'
  ? articles
  : articles.filter(article => article.source.name === category);

  if (filteredArticles.length === 0) {
    return <div className='text-white'>No articles available</div>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
     filteredArticles.map((article, index) => {
      return (
        <Card key={index} article={article} index={index} />
      );
    })
    }
  </div>
  )
}

export default Cards