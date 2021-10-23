import {useState} from 'react'; //tras uma variavel e uma função
import Button from '../Button';

const Card = ()=>{

    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor +1)
    }

    function Remover(){
        setValor(valor - 1)
    }

return(
<div className="card text-center">
  <div className="card-header">
    Meu primeiro card
  </div>
  <div className="card-body">
  <Button
   className="btn btn-success"
   onClick={Adicionar}
  >
    Adicionar
  </Button>

  <Button
   className="btn btn-danger"
   onClick={Remover}
  >
    Remover
  </Button>
  <p>{valor}</p>
</div>
</div>
)
}

export default Card;