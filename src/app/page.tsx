import { Hero } from "./home/Hero";
import { About } from "./home/About";
import { Ratings } from "./home/Ratings";
import { WhyChooseUs } from "./home/WhyChooseUs";
import { RentalOffers } from "./home/RentalOffers";
import { NextAdventure } from "./home/NextAdventure";


export default function Home() {
  return (
    <div className="pt-20 -mt-20">
      <Hero />
      <Ratings />
      <About />
      <RentalOffers />
      <WhyChooseUs />
      <NextAdventure />
    </div>
  );
}
