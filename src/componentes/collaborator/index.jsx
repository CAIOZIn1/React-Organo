import './collaborator.css'

function Collaborator( {name, office, primaryColor }) {
    return (
        <div className='colaborador'>

            <div className='cabecalho' style={{backgroundColor: primaryColor}}>
                <img src="https://github.com/CAIOZIn1.png" alt="Foto-caio" />
            </div>

            <div className='rodape'>
                <h4>
                    {name}
                </h4>

                <h5>
                    {office}
                </h5>
            </div>

        </div>
    )
}

export default Collaborator