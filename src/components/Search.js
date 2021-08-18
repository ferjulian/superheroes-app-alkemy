import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Search = () =>{

    const [heroesList, setHeroesList] = useState([]);
    const [hero, setHero] = useState('');
    
    useEffect(()=>{

        const heroes = heroesList.map((heroes,index)=>{
            return (
                    <div>
                    <div key={index}>
                    <h1 >{heroes.name}</h1>
                    <img src={heroes.image.url} alt="heroeImg"></img>
                    </div>
                    
                    </div>
                    
                    )
        });

        setHero(heroes);

    },[heroesList])


    const formik = useFormik({
        initialValues: {
            search: ''
            },

        onSubmit: async values => {
            console.log(values.search);
            const url= `https://superheroapi.com/api/4343893445701584/search/${values.search}`;

            const response = await axios.get(url);
            const arrayHeroes = response.data.results;

            console.log(heroesList);

            setHeroesList(arrayHeroes);
            
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

            {hero}

        </div>
    );
}

export default Search;