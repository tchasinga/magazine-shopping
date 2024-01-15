import Hero from "../Components/Hero/Hero";
import NewsLetter from "../Components/NewLetter/NewsLetter";
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
      <NewsLetter />
    </div>
  )
}
