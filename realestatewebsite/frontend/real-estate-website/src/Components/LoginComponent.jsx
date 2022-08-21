import React,{Component} from "react";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DataService from "../Service/DataService";
import AuthenticationService from "./AuthenticationService";
import {Link} from 'react-router-dom'


class LoginComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            email: "",
            password: '',
            loginFail: false,
            loginSuccess: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    render()
    {
        return(
            <div className="justify-content-center d-inline-flex p-2" style={{width:700, marginTop:20}}>
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet"></link>
                <div className="container registration-form">
                <Formik initialValues={{}} onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false}>
                    {
                        (props) =>(
                            <Form>
                                <div class="form-icon">
                                    <span><i class="icon icon-user"></i></span>
                                </div>
                                <h1 style={{marginBottom: 50, fontWeight: "bold"}}>Login</h1>
                                <LoginCheck loginSuccess = {this.state.loginSuccess}  loginFail = {this.state.loginFail}></LoginCheck>
                                <ErrorMessage name='form2' component="div" className='alert alert-warning'></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>E-mail</label>
                                    <Field className='form-control item' type='email' name='email'placeholder="Enter yor email"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className='form-control item' type='password' name='password' placeholder="Enter your password" ></Field>
                                </fieldset>
                                <button className="btn btn-block create-account" type = "submit">Login</button>
                            </Form>
                        )
                    }
                </Formik>
                <div class="social-media">
                <h5>Don't have an account?<Link className='nav-link ml-auto' style={{color:"grey"}} to='/signup'>Register here</Link></h5>
                </div>
            </div>
            </div>
        )
    }

    validate(values)
    {
        console.log('validate')
        let errors ={}
        if(!values.email)
        {
            errors.form2 = 'Enter E-mail'
            console.log('no email')
        }
        if(!values.password)
        {
            errors.form2 = 'Enter a password'
            console.log('no password')
        }
        return errors;
    }

    onSubmit(values)
    {
        console.log({values})
        console.log({email: values.email, password: values.password})
        DataService.userLogin({email: values.email, password: values.password})
        .then((response) => 
        {
            console.log(response)
            if(!response.data)
            {
                this.setState({loginSuccess:false})
                this.setState({loginFail:true})
            }
            else
            {
                this.setState({loginSuccess:true})
                this.setState({loginFail:false})
                AuthenticationService.registerSuccessfulLogin(values.email, response.data.id)
                console.log("logged in")
                this.props.navigate(`/home`)
            } 
        })
        .catch( () =>
        {
            console.log("Fail")
            this.setState({loginSuccess:false})
            this.setState({loginFail:true})
        })
    }
}

function LoginCheck(props)
{
    if(props.loginFail)
    {
        return <div className="alert alert-warning">Invalid Credintials</div>
    }
    else if(props.loginSuccess)
    {
        return <div>Login Success</div>
    }
}


export default LoginComponent