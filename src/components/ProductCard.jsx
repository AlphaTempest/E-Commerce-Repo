import { Link } from 'react-router-dom';

const ProductCard = ({ 
  id, 
  image, 
  title, 
  department, 
  discount,
  colors = []
}) => {
  return (
    <Link to={`/product/${id}`} className="flex flex-col group">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 p-6 items-center md:items-start">
        <h5 className="font-bold text-slate-800 text-base">
          {title}
        </h5>
        <p className="text-sm text-slate-500 font-medium">
          {department}
        </p>

        {/* Discount */}
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold text-base">
            Up to %{discount} Discount
          </span>
        </div>

        {/* Color Options */}
        {colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {colors.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full border border-slate-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

