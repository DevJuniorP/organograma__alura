import CampoTexto from '../CampoTexto';
import './formulario.css'

const Formulario = () => {
    return (
        <section>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder='Digite um Nome'/>
                <CampoTexto label="Cargo" placeholder='Digite um  Cargo'/>
                <CampoTexto label="Imagem" placeholder='Digite o Endereço da Imagem'/>
                <CampoTexto label="Descrição" placeholder='Digite uma Breve Descrição'/>
                <CampoTexto label="Área" placeholder='Digite a Área de Trabalho'/>
            </form>
        </section>
    )
}

export default Formulario;