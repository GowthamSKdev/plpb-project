import { Calendar, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: string | number;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  readMore: string;
}

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Scroll to top of page before navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(blog.readMore);
  };

  return (
    <div 
      className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300" 
      style={{ 
        border: '1px solid #8B7B5B',
        width: '400px',
        height: '450px'
      }}
    >
      {/* Blog Image with rounded corners */}
      <div className="relative h-48 overflow-hidden mx-4 mt-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-lg"
        />
        
        {/* Category Tag positioned on image */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Blog Content with proper spacing */}
      <div className="px-6 pb-6 pt-6 flex-1 flex flex-col">
        {/* Date */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{blog.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-normal text-gray-900 mb-3 line-clamp-2">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {blog.description}
        </p>

        {/* Read More Link */}
        <button
          onClick={handleReadMore}
          className="text-gray-900 font-bold text-base hover:text-gray-700 transition-colors duration-200 mt-auto text-left flex items-center"
        >
          Read More <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};
