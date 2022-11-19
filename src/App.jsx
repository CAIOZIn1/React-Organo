import { useState } from 'react'
import Banner from './componentes/banner'
import FieldForms from './componentes/fieldForms'
import Team from './componentes/team'

function App() {
  const team = [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secundaryColor: '#d9f7e9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82Cffa',
      secundaryColor: '#e8f8ff'
    },
    {
      name: 'Data Science',
      primaryColor: '#a6d157',
      secundaryColor: '#f0f8e2'
    },
    {
      name: 'Devops',
      primaryColor: '#e06b69',
      secundaryColor: '#fde7e8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#db6e8f',
      secundaryColor: '#fae9f5'
    },
    {
      name: 'Mobile',
      primaryColor: '#ffba05',
      secundaryColor: '#fff5d9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secundaryColor: '#ffeedf'
    },
  ]


  const [collaborators, setCollaborators] = useState([])

  const newCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />

      <FieldForms teams={team.map(item => item.name)} whenToRegister={collaborator => newCollaborator(collaborator)} />

      {team.map(team => <Team key={team.name} title={team.name} primaryColor={team.primaryColor} secundaryColor={team.secundaryColor} collaborators={collaborators.filter(collaborator => collaborator.listYourTeam === team.name)}/>)}
    </div>
  )
}

export default App
