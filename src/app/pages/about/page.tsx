import React from "react";
import { About as AboutBanner } from "./sections/About";
import { Commitments } from "./sections/Commitments";
import { OurStory } from "./sections/OurStory";
import { JoinUsToday } from "./sections/JoinUsToday";

export default function About() {
  return (
    <div className="pt-20 -mt-20">
      <AboutBanner />
      <Commitments />
      <OurStory />
      <JoinUsToday />
    </div>
  );
}
