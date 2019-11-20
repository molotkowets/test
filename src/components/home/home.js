import React from "react"
import Header from "../header/header"
import Slider from "../sliders/slick"
import Category from "../home/category/category"
import Headline from "./headline/headline"
import Shows from "../shows/showe"
import Person from "../person/person"

function Home() {
    return(
    <div>
        <Header/>
        <Slider/>
        <Category/>
        <Headline>HOT RIGHT NOW!</Headline>
        <Shows><Person/><Person/><Person/><Person/> </Shows>
        <Headline>REACTION VIDEOS</Headline>

       
    </div>
    )
}

export default Home;