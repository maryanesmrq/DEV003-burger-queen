import Order from "@/auxiliares/Order.js";
import Lunch from "@/auxiliares/Lunch.js";
import Breakfast from "@/auxiliares/breakfast.js";
import Nav from "@/auxiliares/Nav.js";



export default function Menu(){
    return(
        <>
        <Nav/>
        <Breakfast/>
        <Lunch/>
        <Order/>
        </>
    )
}