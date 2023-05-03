import styles from '@/styles/Home.module.css'
/* eslint-disable @next/next/no-img-element */
// import { Html, Head, Main, NextScript } from 'next/document'



const stockBreakfast = [
  { title: 'Café Americano', stock: true, costo: '$5', id: 1, imageUrl: 'https://bittercoffees.com/wp-content/uploads/2022/02/Cafe%CC%81-Americano-.jpeg' },
  { title: 'Café con Leche', stock: true, costo: '$7', id: 2, imageUrl: 'https://www.eltiempo.com/uploads/2023/01/31/63d92a122f24b.jpeg' },
  { title: 'Sandwich de Jamón y Queso', stock: true, costo: '$10', id: 3, imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/panini-sandwiches-royalty-free-image-1588773746.jpg' },
  { title: 'Jugos de Fruta Natural', stock: false, costo: '$7', id: 4, imageUrl: 'https://dayamineral.pe/wp-content/uploads/2020/08/4_1070.jpg' }

]

export default function Breakfast() {
  const selectedProducts = [];
  const handleClick = (product) => {
    selectedProducts.push(product);
    console.log(selectedProducts)
  }

  return (
    <section className={styles.bg_breakfast}>
      <ul className={styles.ul}>
        {
          stockBreakfast.map(product =>
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
              }}
                onClick={() => handleClick(product)}>
                {product.stock ? 'AGREGAR' : 'SIN STOCK'}
              </button>
            </li>)
        }
      </ul>

    </section>
  )
}