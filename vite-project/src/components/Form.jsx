import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [animal,setAnimal] = useState ({nombre:'', raza: '', edad: ''})
    
    const [name,setName] = useState (false);
    const [error, setError] = useState (false);
    const withoutSpaces = animal.nombre.trim();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if( withoutSpaces.length > 2 && animal.raza.length > 5){
            setName(true)
            setError(false)
        }else {
            setError(true)
        };
        
    }

 

  return (
    <div>

        <form onSubmit={handleSubmit}>
            
            <input type='text' placeholder='Nombre de tu mascota' value={animal.nombre} onChange = {(x) => setAnimal({...animal,nombre:x.target.value})}/>
            <hr/>
            <input type='text' placeholder='Raza de tu mascota'value={animal.raza} onChange = {(x) => setAnimal({...animal,raza:x.target.value})}/>          
            <hr/>
            <input type='text' placeholder='Edad de tu mascota'value={animal.edad} onChange = {(x) => setAnimal({...animal,edad:x.target.value})}/>
            <hr/>
            <button>Subir</button>
  
            {error && 'Por favor chequea que la información sea correcta'}
        </form>

        {name && <Card nombre= {animal.nombre} raza = {animal.raza} edad= {animal.edad} />}

        

    </div>
  )
}

export default Form