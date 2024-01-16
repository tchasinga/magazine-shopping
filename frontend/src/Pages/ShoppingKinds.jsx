import { useContext } from "react"
import PropTypes from "prop-types";
import { ShopContext } from "../Contexts/ShopContext.jsx";

export default function ShoppingKinds(props) {

  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <img src={props.banner} alt="" />
    </div>
  )
}

ShoppingKinds.propTypes = {
  banner: PropTypes.string.isRequired,
}
