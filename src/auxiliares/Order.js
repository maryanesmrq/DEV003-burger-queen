import { useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Order() {
  return (
    <section className={styles.bg_order}>
      <div className={styles.data_client}>
        <h3 className={styles.h3}>DATOS DE CLIENTE</h3>
        <div className={styles.input_group}>
          <input id="nameClient" placeholder="Nombre"></input>
          <input id="numberTable" placeholder="Mesa"></input>
        </div>
      </div>
      <div className={styles.data_order}>
        <h3 className={styles.h3}>DATOS DEL PEDIDO</h3>
        <div className={styles.order_group}> lo que el cliente agregue al pedido <br></br>
          <MyButtonN />
          <MyButton />

        </div>
        <h4>Total de pedido</h4>
        <button className={styles.send_order}>Enviar Pedido</button>
      </div>
    </section>
  )
}



function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      (+) {count}
    </button>
  );
}
function MyButtonN() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count - 1);
  }

  return (
    <button onClick={handleClick}>
      (-) {count}
    </button>
  );
}