import CampoTexto from '../CampoTexto';
import './formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder='Digite um Nome'/>
                <CampoTexto label="Cargo" placeholder='Digite um  Cargo'/>
                <CampoTexto label="Imagem" placeholder='Digite o Endereço da Imagem'/>
            </form>
        </section>
    )
}

export default Formulario;