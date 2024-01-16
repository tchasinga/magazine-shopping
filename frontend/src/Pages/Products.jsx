import { useContext } from "react"
import  {ShopContext}  from "../Contexts/ShopContext.jsx"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrum/Breadcrum.jsx";

export default function Products() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
    </div>
  )
}
