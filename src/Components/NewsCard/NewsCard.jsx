import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="card w-full bg-base-100 my-5 shadow-md hover:shadow-lg transition-all duration-300 ">
      {/* Author & Actions */}
      <div className="flex justify-between items-center p-2 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm gap-2 text-gray-500 hover:text-primary">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-5 mt-3">
        <h2 className="font-semibold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-5 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-primary cursor-pointer hover:underline">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-3 border-t border-base-300 mt-3">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
