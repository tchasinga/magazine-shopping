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
        <div className="productdisplay-right-stars">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <p>+900K</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-rigth-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-rigth-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Magazine Shop is owned by 360 Media, the publisher of the leading
          women&apos;s lifestyle, celebrity, and health and fitness media brands in
          the country, including Woman&apos;s World, First for Women, Us Weekly, and
          Men&apos;s Journal. Here you can shop back issues and popular special
          editions from these titles.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-size-list">
                <div className="productdisplay-right-size-list-item">S</div>
                <div className="productdisplay-right-size-list-item">M</div>
                <div className="productdisplay-right-size-list-item">L</div>
                <div className="productdisplay-right-size-list-item">XL</div>
                <div className="productdisplay-right-size-list-item">XXL</div>
            </div>
        </div>
        <button className="Getbtn"> Add to cart</button>
        <p className="productdisplay-right-category"><span>Category : </span>Wonen , Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags : </span>Models , Latest Top</p>
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
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
    // Add other properties if there are more in the actual structure
  }).isRequired,
};
