import React, {useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import SearchCard from './SearchCard';

const Search = () =>{

    
    const [displayHeroes, setDisplayHeroes] = useState('');
    const [apiError , setApiError] = useState('')
    
    const formik = useFormik({
        initialValues: {
            search: ''
            },

        onSubmit: async values => {
            
            const url= `https://superheroapi.com/api/4343893445701584/search/${values.search}`;

            try{
            
            const response = await axios.get(url);
            const arrayHeroes = response.data.results;
            
            if(response.data.response !== 'error'){
                const heroes = arrayHeroes.map((hero,index)=>{
                    return (
                            <div key={index}>
                            <SearchCard heroObj={hero}/>
                            </div>
                            
                     )
                });
        
                setDisplayHeroes(heroes);
            }else{
                setApiError(response.data.error);
                setTimeout(()=>{setApiError('')},3500)
            }
            
            }catch(err){
             setApiError(`${err}`);   
            }
            
           
        },
        validate: values =>{
            let errors = {}

            if(!values.search){
                errors.search='El campo esta vacio';
            }

            return errors
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
                values={formik.values.search}
            />
            {formik.touched.search && formik.errors.search? <div className="errorMsg">{formik.errors.search}</div> : null}
            {apiError? <div className="errorMsg">{apiError}</div>: ''}
            <button type="submit">Get</button>
            </form>

        {displayHeroes}

        </div>
    );
}

export default Search;