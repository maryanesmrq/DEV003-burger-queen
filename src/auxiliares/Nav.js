import styles from '@/styles/Home.module.css'
import Breakfast from './Breakfast';
import Lunch from './Lunch';


// const MenuItems = [
//     {
//         Title: "DESAYUNOS",
//         url: '/Breakfast',
//         cName: "nav-links"
//       },
//       {
//         Title: "ALMUERZOS",
//         url: '/Lunch',
//         cName: "nav-links"
//       },
// ];

// export default function Nav(){
//     return(
//         <>
//         <nav className={styles.NavbarItems}>
//             {/* <h1 className='Navbar_Logo'>BurgerQueen</h1> */}
//             <ul>
//             {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <a className={item.cName} href={item.url}>
//                 {item.Title}
//               </a>
//             </li>
//           );
//         })}
//                 {/* <li><a href= '#'></a></li> */}
//             </ul>
//         </nav>
//             </>
//     );
// }

export default function Nav(){

  return(
    <nav className={styles.NavbarItems}>
      <a className={styles.NavbarOptions} > DESAYUNOS </a>
      <a className={styles.NavbarOptions}> ALMUERZOS </a>

    </nav>

  )
}

function OnClick(){
onclick(M)
  
}