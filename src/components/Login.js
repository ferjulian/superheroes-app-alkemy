import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
            
        },

        onSubmit: async values => {
            console.log(values);
        const url = 'http://challenge-react.alkemy.org/';
        const response = await axios.post(url,values);

        console.log(response);
        
        }

    });

   

    const OnButtonClick = () => {
        localStorage.setItem('token', 'Mi fucking token');
    }

    const OnButtonClock = () => {
        localStorage.removeItem('token');
    }

    const OnButtonCluck = () => {
        const myToken = localStorage.getItem('token');

        console.log(myToken);
    }


    return (
        <div>
            <h2>Aca va mi Login</h2>
            <button onClick={() => OnButtonClick()}>Login</button>
            <button onClick={() => OnButtonClock()}>UnLogin</button>
            <button onClick={() => OnButtonCluck()}>Obtain</button>
            <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor='email'>email</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder="email"
                    onChange={formik.handleChange}
                    values={formik.values.email}
                />
                <label htmlFor='Password'>Password</label>
                <input 
                    type='text' 
                    name='password' 
                    placeholder="password"
                    onChange={formik.handleChange}
                    values={formik.values.password}
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;