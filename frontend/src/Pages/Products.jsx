import { useContext } from "react"
import  ShopContext  from "../Contexts/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrum/Breadcrum";

export default function Products() {

  const {all_product} = useContext(ShopContext);
  console.log(all_product);
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
    </div>
  )
}
