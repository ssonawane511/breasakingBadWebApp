import React, { useState ,useEffect } from 'react';
import Header from './components/ui/Header';
import Search  from './components/ui/Search'
import axios from 'axios' ;
import CharacterGrid from "./components/characters/CharacterGrid"
import './App.css';


const App = () =>  {

  const [items, setitems] = useState([])
  const [isLoading, setisLoading] = useState(true);
  const [query, setquery] = useState('')

  useEffect (  () => {
      const fetchItems = async ( ) => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        //console.log(result.data) 
        setitems(result.data)
        setisLoading(false)
      }

      fetchItems()

      
  },[query]);

  return (
    <div className="Container">
      <Header /> 
      <Search  getQuery={(q) => setquery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div> 
  );
}

export default App;
