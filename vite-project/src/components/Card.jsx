import React from 'react'
import styles from './Card.module.css'

const Card = ({nombre, raza, edad}) => {
  return (
  
    <div className= {styles.card}>
    <h2>Estos son los datos de tu mascota</h2>
    <p>Nombre: {nombre}</p>
    <p>Raza: {raza}</p>
    <p>Edad: {edad}</p>

    </div>
       
  
    
  )
}

export default Card