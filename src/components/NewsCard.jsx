import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const {  title,
        author,
        details,
        rating,
        total_view,
        image_url,
        _id
    } = news
    return (

        <div className="card  bg-white  rounded-lg overflow-hidden">
      <div className="p-4 flex items-center">
        <img src={author.img} alt="Author" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-bold">{author.name}</p>
          <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
        </div>
      </div>
      <img src={image_url} alt="Thumbnail" className="w-full   rounded-lg object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{details.substring(0, 200)}...</p>
        <Link to={`/news/${_id}`} className="text-blue-500 font-semibold">Read More</Link>
      </div>
      <div className="p-4 border-t flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <span className="flex items-center">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.544L.245 6.91l6.564-.955L10 0l2.191 5.955 6.564.955-4.655 4.635 1.123 6.545L10 15z" />
            </svg>
            <span className="ml-1">{rating.number}</span>
          </span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm.001 22c-5.515 0-10-4.486-10-10S6.486 2 12.001 2C17.515 2 22 6.485 22 12c0 5.514-4.486 10-10 10z"></path>
            <path d="M12.001 6C9.244 6 7 8.243 7 11s2.244 5 5.001 5c2.756 0 5.001-2.243 5.001-5S14.758 6 12.001 6zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path>
          </svg>
          <span className="ml-1">{total_view}</span>
        </div>
      </div>
    </div>




    );
};

export default NewsCard;