import React from "react";
import NikeShowcase from "./Components/NikeShowCase";
import App, { Hero } from "./Components/Hero";
import  GearUpPage  from "./Components/GearSection";
import LastSection from "./Components/lastSection";
import LastIcons from "./Components/LastIcons";



export default function HomePage () {
  return (
    <div>
    

<Hero/>
<NikeShowcase/>
<GearUpPage/>
<LastSection/>
<LastIcons />
    </div>
  )
}
