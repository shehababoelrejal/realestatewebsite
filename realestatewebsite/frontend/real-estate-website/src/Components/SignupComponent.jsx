import React,{Component} from "react";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DataService from "../Service/DataService";
import style from "./assets/css/style.css"
import {Link} from 'react-router-dom'


class SignupComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    render()
    {
        return(
            <div>
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet"></link>
                <div className="container registration-form" >
                <Formik initialValues={{}} onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false}>
                    {
                        (props) =>(
                            <Form>
                                <div class="form-icon">
                                    <span><i class="icon icon-user"></i></span>
                                </div>
                                <h1 style={{marginBottom: 50, fontWeight: "bold"}}>Sign up</h1>
                                <ErrorMessage name='name' component="div" className='alert alert-warning'></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Full name</label>
                                    <Field className='form-control item' type='text' name='name' placeholder="Enter your full name"></Field>
                                    <small id="passwordHelpBlock" class="form-text text-muted">Name should be atleast 5 characters.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>E-mail</label>
                                    <Field className='form-control item' type='email' name='email' placeholder="Enter your email"></Field>
                                    <small id="passwordHelpBlock" class="form-text text-muted">Email should be a valid email structure.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Address</label>
                                    <Field className='form-control item' type='text' name='address' placeholder="Enter your adresss"></Field>
                                    <small id="passwordHelpBlock" class="form-text text-muted">Address should follow this format eg: St name or number/ building no / apartment no.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Country</label>
                                    <Field className='form-control item' type='text' name='country' placeholder="Enter your country"></Field>
                                    <small id="passwordHelpBlock" class="form-text text-muted">Country eg. Egypt, Italy, etc...</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className='form-control item' type='password' name='password' placeholder="Enter your password"></Field>
                                    <small id="passwordHelpBlock" class="form-text text-muted">Your password must be 6-20 characters long and must not contain spaces.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Date of Birth</label>
                                    <Field className='form-control item'type = 'date' name = 'dob'></Field>
                                </fieldset>
                                <button className="btn btn-block create-account" type = "submit">Create Account</button>
                                
                            </Form>
                        )
                    }
                </Formik>
                <div class="social-media">
                <h5>Already registerd?<Link className='nav-link ml-auto' style={{color:"grey"}} to='/login'>Login here</Link></h5>
                <h5>Sign up with social media</h5>
                <div class="social-icons">
                    <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
                    <a href="#"><i class="icon-social-google" title="Google"></i></a>
                    <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
                </div>
                </div>
            </div>
            </div>
        )
    }

    validate(values)
    {
        let errors ={}
        if(!values.name)
        {
            errors.name = 'Enter a full name'
        }
        else if(values.name.length < 5)
        {
            errors.name = 'Name should be at least 5 characters'
        }
        else if(!values.email)
        {
            errors.name = 'Enter an e-mail'
        }
        else if(!values.country)
        {
            errors.name = 'Enter a country'
        }
        else if(!values.address)
        {
            errors.name = 'Enter an address'
        }
        else if(!values.password)
        {
            errors.name = 'Enter a password'
        }
        else if(values.password.length < 6)
        {
            errors.name = 'Password Should be at least 6 characters'
        }
        if(!values.dob)
        {
            errors.name = 'Enter a valid target date'
        }
        return errors;
    }

    onSubmit(values)
    {
        console.log({values})
        DataService.addUser(
            {   name: values.name, 
                email: values.email, 
                address: values.address,
                country: values.country,
                password: values.password, 
                dob: values.dob})
        .then(() => {this.props.navigate(`/login`)})
    }
}

export default SignupComponent