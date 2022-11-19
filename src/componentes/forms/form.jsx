import './form.css'

export const Formulario = (props) =>{
    //const placeholderModified = `${placeholder}...`

    const changeIsTrue = (event) =>{
        props.whenChange(event.target.value)
    }

    return(
        <div className='Text_area'>
            <label htmlFor="name">
                {props.label}
            </label>

            <input value={props.values} onChange={changeIsTrue} required={props.mandatory}  type="text" placeholder= {`${props.placeholder}...`} />
        </div>
    )
}
