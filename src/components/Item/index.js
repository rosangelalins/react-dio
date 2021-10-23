//criando primeiro componente
//primeira letra do componente sempre com letra maiúscula
//chamar uma variavel como objeto dentro do React é necessário colocar entre {}
///*{props.texto}  */
// desestruturação acessando diretamente o componente children
const Item = ({children}) =>{
    return(
        <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
          {children} 
          
          </a>
    )
}

export default Item;