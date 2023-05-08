import './campotexto.css'
const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder} />
            {/* { <input placeholder={`${props.placeholder}...`} /> } concatenado */}
        </div>
    )
}   

export default CampoTexto;