import React,{useState} from 'react'

const Search = ({getQuery}) => {
   const [text, settext] = useState('')
   const onChange = (q) => {
       settext(q)
       getQuery(q)
   } 
    return (
        <section className= ' search'>
            <form>
                <input 
                type="text" 
                className="form-control"
                placeholder="search the character" 
                value={text}
                autoFocus
                onChange ={ (event) => onChange(event.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
