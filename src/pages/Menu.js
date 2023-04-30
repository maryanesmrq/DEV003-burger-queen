import Order from "@/auxiliares/Order.js";
import Lunch from "@/auxiliares/Lunch.js";
import Breakfast from "@/auxiliares/Breakfast.js";
import Nav from "@/auxiliares/Nav.js";
import { useState } from "react";




export default function Menu(){
    const [category, setCategory] =  useState(Boolean)
    return(
        <>
        <Nav setCategory={setCategory} />
        
        {category ? <Breakfast/>:<Lunch/> }
        <Order/>
        </>
    )
}

