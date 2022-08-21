import React,{Component} from "react";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DataService from "../Service/DataService";
import AuthenticationService from "./AuthenticationService";


class UserUpdateComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    componentDidMount()
    {
        let email = AuthenticationService.retrieveEmail()
        DataService.getUserInfo({email: email})
        .then(response => this.setState(
            {
            id: response.data.id,
            name: response.data.name,
            email:response.data.email, 
            address: response.data.address, 
            country: response.data.country, 
            password: response.data.password, 
            dob: moment(response.data.dob).format('YYYY-MM-DD')
        }))
    }
    render()
    {
        let name = this.state.name
        return(
            <div className="justify-content-center d-inline-flex p-2" style={{width:700, marginTop:20, marginBottom:70}}>
                                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet"></link>
                <div className="container registration-form" >
                <Formik initialValues={{
                    name: this.state.name, 
                    email: this.state.email, 
                    address: this.state.address, 
                    country: this.state.country, 
                    password: this.state.password, 
                    dob: this.state.dob}} onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false} enableReinitialize = {true}>
                    {
                        (props) =>(
                            <Form>
                                <div class="form-icon">
                                    <span><i class="icon icon-user"></i></span>
                                </div>
                                <h1 style={{marginBottom: 50, fontWeight: "bold"}}>Update your account information</h1>
                                <ErrorMessage name='name' component="div" className='alert alert-warning'></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Full Name</label>
                                    <Field className='form-control item' type='text' name='name' placeholder="Enter your full name"></Field>
                                    <small id="passwordHelpBlock" className="form-text text-muted">Name should be atleast 5 characters.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>E-mail</label>
                                    <Field className='form-control item' type='email' name='email' placeholder="Enter your email"></Field>
                                    <small id="passwordHelpBlock" className="form-text text-muted">Email should be a valid email structure.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Address</label>
                                    <Field className='form-control item' type='text' name='address' placeholder="Enter your adresss"></Field>
                                    <small id="passwordHelpBlock" className="form-text text-muted">Address should follow this format eg: St name or number/ building no / apartment no.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Country</label>
                                    <Field className='form-control item' type='text' name='country' placeholder="Enter your country"></Field>
                                    <small id="passwordHelpBlock" className="form-text text-muted">Country eg. Egypt, Italy, etc...</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field className='form-control item' type='password' name='password' placeholder="Enter your password"></Field>
                                    <small id="passwordHelpBlock" className="form-text text-muted">Your password must be 6-20 characters long and must not contain spaces.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Date of Birth</label>
                                    <Field className='form-control item'type = 'date' name = 'dob'></Field>
                                </fieldset>
                                <button className="btn btn-block create-account" type = "submit">Update Account</button>
                            </Form>
                        )
                    }
                </Formik>
                <div class="social-media">      
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
        DataService.updateUser(
            {   id: this.state.id,
                name: values.name, 
                email: values.email, 
                address: values.address,
                country: values.country,
                password: values.password, 
                dob: values.dob})
        .then(() => {this.props.navigate(`/profile`)})
    }
}

export default UserUpdateComponent