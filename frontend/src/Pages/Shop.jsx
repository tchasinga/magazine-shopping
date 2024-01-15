import Hero from "../Components/Hero/Hero";
import Offer from "../Components/Offer/Offer";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/newCollections/NewCollections";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
    </div>
  )
}
