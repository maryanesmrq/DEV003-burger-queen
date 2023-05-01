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
          <div>
            <button onClick={buttonDecrement}>-</button>
            <span>{orderCount}</span>
            <button onClick={buttonIncrement}>+</button>
          </div>

        </div>
        <h4>Total de pedido</h4>
        <button className={styles.send_order}>Enviar Pedido</button>
      </div>
    </section>
  )
}



function ProductOrder() {
  const [orderCount, setOrderCount] = useState(0);

  const handleIncrement = () => {
    setOrderCount(orderCount + 1);
  }

  const handleDecrement = () => {
    if (orderCount > 0) {
      setOrderCount(orderCount - 1);
    }
  }


}