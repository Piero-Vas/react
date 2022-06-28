import { useState } from "react";

const Primercomponente = () =>{

    const [count, setCount] = useState(0);
    const sumar =()=> setCount(count +1);
    const restar =()=> setCount(count -1);

return (
    <div>
        <h1>Hola Mundo {count}</h1>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
    </div>
)


}

export default Primercomponente;