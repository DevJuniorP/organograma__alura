import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css'

const Formulario = () => {

    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("Submit com Sucesso")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder='Digite um Nome'/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder='Digite um  Cargo'/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder='Digite o Endereço da Imagem'/>
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;