import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import './styles.css';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
            
        },

        onSubmit: async values => {
            
        const url = 'http://challenge-react.alkemy.org/';
        const response = await axios.post(url,values);
        const token = response.data.token
        localStorage.setItem('token',token);
    },

        validate: values =>{
            let errors = {}

            if(!values.email){
                errors.email='El campo esta vacio';
            }

            if(!values.password){
                errors.password='El campo esta vacio';
            }

            return errors
        }

    });

   
    
    return (
        <div>
            <h2>Aca va mi Login</h2>
        
            <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor='email'>email</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.email}
                />
                {formik.touched.email && formik.errors.email? <div className="errorMsg">{formik.errors.email}</div> : null}

                <label htmlFor='Password'>Password</label>
                <input 
                    type='password' 
                    name='password' 
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.password}
                />
                {formik.touched.password && formik.errors.password? <div className="errorMsg">{formik.errors.password}</div> : null}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;