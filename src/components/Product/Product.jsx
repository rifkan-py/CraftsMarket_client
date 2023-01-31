import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../app/features/cartSlice";
import { ProductWrapper } from "./styles";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add(product));
  };
  return (
    <ProductWrapper>
      <div className="image-container">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="content">
        <h3>{product.title}</h3>
        <p>{product.description.substr(0, 35)}...</p>
        <h4>{product.price}</h4>
        <div className="buttons">
          <button className="cart" onClick={handleAddToCart}>
            Add to Card {product.qty}
          </button>
          <Link to={`/products/${product.id}`} className="details">
            View Details
          </Link>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;
