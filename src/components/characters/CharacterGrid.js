import React from 'react'
import CharacterItem from './CharacterItem'
import Search from '../ui/Spinner'
import Spinner from '../ui/Spinner'
const CharacterGrid =  ( {items, isLoading} ) => {
    return isLoading ?
    <Spinner/>            
    : 
        <section className='cards'>
            {
                items.map( item => (
               <CharacterItem  key={item.char_id} item = {item}/>
                ) )
            } 
        </section>
    
}

export default CharacterGrid
  