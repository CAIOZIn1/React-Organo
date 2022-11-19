import Collaborator from '../collaborator'
import './team.css'

function Team (props) {
    const backgroundColor = {backgroundColor: props.secundaryColor}

    return (
        props.collaborators.length > 0 && <section className='team' style={backgroundColor}>
            <h3 style = {{ borderColor: props.primaryColor }}>
                {props.title}
            </h3>

            <div className='collaborators'>
                {props.collaborators.map(collaborators => <Collaborator primaryColor={props.primaryColor} key={collaborators.name} name={collaborators.name} office={collaborators.office}/> )}
            </div>
        </section>
    )
}

export default Team