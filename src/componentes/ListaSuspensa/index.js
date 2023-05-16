import './lista-suspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-supensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;