import { FaEye, FaStar } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    details,
  } = news;

  return (
    <div className="">
        <h2 className="font-bold text-2xl ms-6 py-3">News Details...</h2>
        
      <div className="card-body space-y-4 card bg-base-100 shadow-xl border border-gray-200 px-5 mx-5">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <img
          src={news.image_url}
          alt="News Thumbnail"
          className="w-full h-72 object-cover rounded-t-xl"
        />

    
        {/* Details */}
        <p className="text-gray-700 text-xl leading-relaxed">{details}</p>
       
        <div className="mt-5">
          <Link to={`/category/${news.category_id}`} className="btn btn-secondary text-xl gap-2">
            <MdOutlineArrowBackIosNew />
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
