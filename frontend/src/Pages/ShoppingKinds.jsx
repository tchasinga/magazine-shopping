import { useContext } from "react"
import PropTypes from "prop-types";
import { ShopContext } from "../Contexts/ShopContext.jsx";
import Items from "../Components/Item/Items";


const ShoppingKinds = (props) =>{
  const {all_product} = useContext(ShopContext)

  return(
    <div className="flex flex-col justify-center items-center">
       <div className="pt-3">
       <img src={props.banner} alt="banner" className="w-full object-fill" />
       </div>

       <div className="">
        {
           all_product.map((item, i ) =>{
              if(props.category === item.category){
                return <Items key={i} item={item} />
              }
           })
        }
       </div>
    </div>
  )
}

ShoppingKinds.propTypes = {
  banner: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
};



export default ShoppingKinds