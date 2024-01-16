import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

export default function Displaydetails(props) {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <p>+900K</p>
        </div>
        <div className="productdisplay">
            <div className="productdisplay-rigth-price-old">${}</div>
        </div>
      </div>
    </div>
  );
}

Displaydetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Add other properties if there are more in the actual structure
  }).isRequired,
};
