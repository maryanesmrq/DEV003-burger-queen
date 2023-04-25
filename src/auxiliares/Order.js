import { useState } from 'react';

export default function Order() {
    return (
        <>
        <div className="data_client">
            <h3>DATOS DE CLIENTE</h3>
            <div className="input-group-">
                <input id="nameClient" placeholder="Nombre"></input>
                <input id="numberTable" placeholder="Mesa"></input>
            </div>
        </div>
        <div className="data_order">
            <h3>DATOS DEL PEDIDO</h3>
            <div> lo que el cliente agregue al pedido <br></br>
                <MyButtonN/>
                <MyButton/>
                
            </div>
            <h4>Total de pedido</h4>
            <ButtonSend/>
        </div>
        </>
    )
}


function ButtonSend(){
return(
    <button className="send_order">Enviar Pedido</button>
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