import './fieldforms.css'
import Formulario from '../forms'
import DropDraw from '../dropDraw'
import Button from '../button'
import { useState } from 'react'


export const FieldForms = (props) => {

    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [listYourTeam, setlistYourTeam] = useState('')

    const True = (event) => {
        event.preventDefault()
        props.whenToRegister({
            name,
            office,
            image,
            listYourTeam    
        })
        setName('')
        setImage('')
        setOffice('')
        setlistYourTeam('')
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={True}>
                <Formulario values={name} whenChange={values => setName(values)} mandatory={true} label='Nome' placeholder='Digite seu nome' />
                <Formulario values={office} whenChange={values => setOffice(values)} mandatory={true} label='Cargo' placeholder='Digite seu office' />
                <Formulario values={image} whenChange={values => setImage(values)} label='Imagem' placeholder='Informe o endereço da imagem' />

                <DropDraw values={listYourTeam} whenChange={values => setlistYourTeam(values)} mandatory={true} label='Time' itens={props.teams}/>

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}