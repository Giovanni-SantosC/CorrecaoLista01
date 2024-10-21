import Carro from './Carro'

function Garragem(){
    const Carros = ['Ford', 'BMW', 'AUDI']

    return(
        <>
        <h1>Quais Carros eu quero usar</h1>
        <ul>{Carros.map((marcaCarro) => <Carro marca={marcaCarro}/>)}</ul>
        </>
    )
}

export default Garragem