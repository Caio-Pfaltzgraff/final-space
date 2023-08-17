import React from 'react'
import Tags from '../Tags'
import style from './Galeria.module.scss'
import Cards from './Cards'
import fotos from './fotos.json'

export default function Galeria() {
  return (
    <section className={style.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards fotos={fotos} styles={style}/>
    </section>
  )
}
