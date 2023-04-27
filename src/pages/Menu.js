import Order from "@/auxiliares/Order.js";
import Lunch from "@/auxiliares/Lunch.js";
//import Breakfast from "@/auxiliares/Breakfast";
import Nav from "@/auxiliares/Nav";



export default function Menu(){
    return(
        <>
        <Nav/>
        {/* <Breakfast/> */}
        <Lunch/>
        <Order/>
        </>
    )
}