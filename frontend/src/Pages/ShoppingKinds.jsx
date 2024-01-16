import { useContext } from "react"
import PropTypes from "prop-types";
import { ShopContext } from "../Contexts/ShopContext.jsx";

const ShoppingKinds = (props) =>{
  const {all_product} = useContext(ShopContext)

  return(
    <div className="flex flex-col justify-center items-center">
      <img src={props.banner} alt="banner" className="w-full" />
    </div>
  )
}

ShoppingKinds.propTypes = {
  banner: PropTypes.node.isRequired,
};



export default ShoppingKinds