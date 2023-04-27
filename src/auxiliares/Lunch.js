/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/Home.module.css'


// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


// export default function Lunch(){
//     return(
//         <>
//          <nav>
//             <a class="class1">DESAYUNOS</a>
//             <a class="classMenu">ALMUERZOS</a>
//         </nav>

//         </>
//     )
// }


const products = [
    { title: 'Hamburguesa Simple', stock: true, costo: '$10', id: 1, imageUrl: 'https://assets.unileversolutions.com/recipes-v2/210995.jpg' },
    { title: 'Hamburguesa Doble', stock: true, costo: '$15', id: 2, imageUrl: 'https://assets.unileversolutions.com/recipes-v2/210995.jpg' },
    { title: 'Papas Fritas', stock: true, costo: '$5', id: 3, imageUrl: 'https://www.eltiempo.com/uploads/2021/04/15/6078c68c2f49b.jpeg' },
    { title: 'Aros de Cebolla', stock: false, costo: '$5', id: 4, imageUrl: 'https://www.paulinacocina.net/wp-content/uploads/2021/12/aros-de-cebolla-fritos.jpg' },
    { title: 'Agua 500ml', stock: true, costo: '$5', id: 5, imageUrl: 'https://www.wikihow.com/images/1/10/Open-a-Bottle-of-Water-Step-20-Version-3.jpg' },
    { title: 'Agua 750ml', stock: true, costo: '$7', id: 6, imageUrl: 'https://cdnx.jumpseller.com/guallarauco/image/25477613/resize/1200/1200?1681394808' },
    { title: 'Bebida/Gaseosa 500ml', stock: true, costo: '$7', id: 7, imageUrl: 'https://oficial.com.co/uploads/subgroup/34aa94892b9a4c65a1fb57f7dd9f95ed/gaseosas-y-aguas.jpg' },
    { title: 'Bebida/Gaseosa 750ml', stock: true, costo: '$10', id: 8, imageUrl: 'https://oficial.com.co/uploads/subgroup/34aa94892b9a4c65a1fb57f7dd9f95ed/gaseosas-y-aguas.jpg' },
];

export default function Lunch() {
    return (
        <section className={styles.bg_lunch}>
            <ul className={styles.ul}>
                {
                    products.map(product =>
                        <li className={styles.li}
                            key={product.id}
                            style={{
                                color: product.stock ? 'black' : 'grey'
                            }}
                        >
                            <img
                                className="item"
                                src={product.imageUrl}
                                alt={'Photo of ' + product.title}
                                style={{
                                    width: product.imageSize,
                                    height: product.imageSize
                                }}
                            />
                            <div className={styles.texto_producto}>
                                <h4>{product.title}</h4>
                                <p>{product.costo}</p>
                            </div>
                            <button style={{
                                color: product.stock ? 'white' : 'black',
                                background: product.stock ? '#F8A000' : 'grey'
                            }}>
                                {product.stock ? 'AGREGAR' : 'SIN STOCK'}
                            </button>
                        </li>)
                }
            </ul>

        </section>
    );
}
