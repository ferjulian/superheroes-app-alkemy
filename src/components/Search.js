import React, {useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import SearchCard from './SearchCard';

const Search = () =>{

    
    const [displayHeroes, setDisplayHeroes] = useState('');
    
    const formik = useFormik({
        initialValues: {
            search: ''
            },

        onSubmit: async values => {
            
            const url= `https://superheroapi.com/api/4343893445701584/search/${values.search}`;

            const response = await axios.get(url);
            const arrayHeroes = response.data.results;

            const heroes = arrayHeroes.map((hero,index)=>{
                return (
                        <div key={index}>
                        <SearchCard heroObj={hero}/>
                        </div>
                        
                 )
            });
    
            setDisplayHeroes(heroes);
           
        }
    });


    return(
        <div>
            <h2>Buscador</h2>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="search">Search</label>
            <input 
                type="text" 
                name="search"
                placeholder="Busca tu heroe..."
                onChange={formik.handleChange}
                values={formik.values.text}
            />
            <button type="submit">Get</button>
            </form>

        {displayHeroes}

        </div>
    );
}

export default Search;