import { useContext } from "react"
import  {ShopContext}  from "../Contexts/ShopContext.jsx"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrum/Breadcrum.jsx";
import Displaydetails from "../Components/Displaydetails/Displaydetails.jsx";
import Related from "../Components/Related/Related.jsx";

export default function Products() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
      <Displaydetails product={product} />
      <Related />
    </div>
  )
}
