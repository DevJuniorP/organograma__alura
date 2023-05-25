import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {
    const backgrounds = {backgroundColor: props.corSecundaria}
    const border = {borderColor: props.corPrimaria}

    // caso eu queira fazer estilo inline ficaria 
    // <section className='time' style={{ backgroundColor: props.corPrimaria }}>
    // o mesmo vale pra borda

    return(
        (props.colaboradores.length > 0) && <section className='time' style={backgrounds}>
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador =>
                <Colaborador
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time;