import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faAt } from "@fortawesome/free-solid-svg-icons";
import Spinner from './Spinner';
require('dotenv').config();



const Login = (props) => {

    const [loading, setLoading] = useState('');    
    const [connectionErr, setConnectionErr] = useState('');    

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
            
        },

        onSubmit: async values => {
        setLoading(<div><Spinner /></div>)
        setTimeout(()=>{setLoading('')},3500);
        try{
            const url = `${process.env.REACT_APP_API_ALKEMY}`;
        const response = await axios.post(url,values);
        console.log(response);
        const token = response.data.token
        localStorage.setItem('token', token);
        localStorage.setItem('team', JSON.stringify([]));
       
        if(token){
            props.navSwitch('on');
        }
        }catch (err){
            setLoading('');
            setConnectionErr('check your username and password');
            setTimeout(()=>{setConnectionErr('')},3500);
        }   
        
        

         },

        validate: values =>{
            let errors = {}

            if(!values.email){
                errors.email='The field is empty';
            }

            if(!values.password){
                errors.password='The field is empty';
            }

            return errors
        }

    });

   
    
    return (
        <div className="totalContainer">
            <div className="inner-container">
            <div className="panel-left d-none d-lg-flex align-items-center justify-content-center ">
                
                <div className="intro w-75 h-50 d-flex flex-column align-items-center justify-content-center  ">
                <h1 className="title">Superheroes</h1>
                    <p className="description">
                    Superheroes is a website that allows you to manage your own team of heroes. You can view his biography, stats and much more.
                    </p>
                    <a class="firm" href="https://github.com/ferjulian">Created by Fernando Julian</a>
                </div>
            </div>
            <div className="panel-right d-flex align-items-center justify-content-center ">
                <div className="form-wrapper">
                    <h3 className="mobile_title">Superheroes</h3>
                <form className="custom_form" onSubmit={formik.handleSubmit}>
                    <h2 className="login-title">Login</h2>
                    <div className="input-wrapper">
                    <label htmlFor='email' className="icon"><FontAwesomeIcon icon={faAt} color="rgba(255, 255, 255, 0.534)" size="2x" /></label>
            <input 
                type='email' 
                name='email'
                className="input" 
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.email}
            />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor='Password' className="icon"><FontAwesomeIcon icon={faLock} color="rgba(255, 255, 255, 0.534)" size="2x" /></label>
            <input 
                type='password' 
                name='password' 
                placeholder="password"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.password}
            />
                    </div>
                    {formik.touched.email && formik.errors.email? <div className="errorMsg">{formik.errors.email}</div> : null}
                    {formik.touched.password && formik.errors.password? <div className="errorMsg">{formik.errors.password}</div> : null}
                    {connectionErr? <div className="errorMsg">{connectionErr}</div> : ''}
                    <button type="submit">Submit</button>
                    {loading? loading : ''}
                    </form>

                </div>
            </div>
            </div>
             {localStorage.getItem('token') ? <Redirect to="/Home" /> : ''}
             </div>
    );
}

export default Login;


