import './DropDraw.css'

export const DropDraw = (props) => {
    return (
        <div className='Drop-Draw-List'>
            <label htmlFor="dropdraw">
                {props.label}
            </label>

            <select value={props.values} onChange={event => props.whenChange(event.target.value)} required={props.mandatory} id="dropdraw">
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
