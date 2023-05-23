import './time.css'

const Time = (props) => {
    const backgrounds = {backgroundColor: props.corSecundaria}
    const border = {borderColor: props.corPrimaria}

    // caso eu queira fazer estilo inline ficaria 
    // <section className='time' style={{ backgroundColor: props.corPrimaria }}>
    // o mesmo vale pra borda

    return(
        <section className='time' style={backgrounds}>
            <h3 style={border}>{props.nome}</h3>
        </section>
    )
}

export default Time;