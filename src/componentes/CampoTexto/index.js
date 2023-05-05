import './campotexto.css'
const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder='Digite seu Nome' />
        </div>
    )
}   

export default CampoTexto;