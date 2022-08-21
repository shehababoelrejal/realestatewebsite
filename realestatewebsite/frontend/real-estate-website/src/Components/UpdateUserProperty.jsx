import React,{Component} from "react";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DataService from "../Service/DataService";
import AuthenticationService from "./AuthenticationService";




class UpdateUserPropertry extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            id: this.props.params.id
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    render()
    {
        return(
            <>
            <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"></link>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet"></link>
            <div className="justify-content-center d-inline-flex p-2" style={{width:700, marginTop:20, marginBottom:70}}>
            <div className="container registration-form" >
            <Formik initialValues=
            {{
                name: this.state.name, 
                type: this.state.type, 
                description: this.state.description, 
                address: this.state.address, 
                country: this.state.country, 
                size: this.state.size, 
                phone: this.state.phone,
                price: this.state.price 
            }} 
            onSubmit={this.onSubmit} validate={this.validate} validateOnChange={false} validateOnBlur={false} enableReinitialize = {true}>
                {
                    (props) =>(
                        <Form>
                            <div class="form-icon">
                                    <span><i class="icon icon-home"></i></span>
                                </div>
                            <h1 style={{marginBottom: 50, fontWeight: "bold"}}>Update existing property</h1>
                            <ErrorMessage name='name' component="div" className='alert alert-warning'></ErrorMessage>
                            <fieldset className="form-group">
                                <label>Name</label>
                                <Field className='form-control item' type='text' name='name' placeholder="Enter property name"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Name should be atleast 5 characters.</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Type</label>
                                <Field className='form-control item' type='text' name='type' placeholder="Enter property type"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Type of the property eg. Residential, House, Villa</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className='form-control item' type='text' name='description' placeholder="Enter the property description"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Describe the property.</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Address</label>
                                <Field className='form-control item' type='text' name='address' placeholder="Enter property address"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Address should follow this format eg: St name or number/ building no / apartment no.</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Country</label>
                                <Field className='form-control item' type='text' name='country' placeholder="Enter property country"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Country eg. Egypt, Italy, etc...</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Size</label>
                                <Field className='form-control item' type='number' name='size' placeholder="Enter property size"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Size of the property in squared meter</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Phone number</label>
                                <Field className='form-control item' type='number' name='phone' placeholder="Enter the seller phone number"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted">Enter the full phone number with your country extention code eg. +20, +10</small>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Price</label>
                                <Field className='form-control item' type='number' name='price' placeholder="Enter property price"></Field>
                                <small id="passwordHelpBlock" className="form-text text-muted"></small>
                            </fieldset>
                            <button className="btn btn-block create-account" type = "submit">Update Property</button>
                        </Form>
                    )
                }
            </Formik>
            <div class="social-media">      
            </div>
        </div>
        </div>
        </>
        )
    }

    componentDidMount()
    {
        let id = this.state.id
        DataService.getUserProperty({id: id})
        .then(response => this.setState(
            {
            id: response.data.id,
            name: response.data.name,
            type:response.data.type, 
            description:response.data.description, 
            address: response.data.address, 
            country: response.data.country, 
            size: response.data.size,
            phone:response.data.phone,  
            price:response.data.price, 
        }))
    }

    validate(values)
    {
        let errors ={}
        if(!values.name)
        {
            errors.name = 'Enter property name'
        }
        else if(values.name.length < 5)
        {
            errors.name = 'Name should be at least 5 characters'
        }
        else if(!values.type)
        {
            errors.name = 'Enter property type'
        }
        else if(!values.description)
        {
            errors.name = 'Enter property description'
        }
        else if(!values.address)
        {
            errors.name = 'Enter property address'
        }
        else if(!values.country)
        {
            errors.name = 'Enter property country'
        }
        else if(!values.size)
        {
            errors.name = 'Enter Property size'
        }
        if(!values.phone)
        {
            errors.name = 'Enter property seller phone number'
        }
        if(!values.price)
        {
            errors.name = 'Enter property seller price'
        }
        return errors;
    }

    onSubmit(values)
    {
        let Userid = AuthenticationService.retrieveId()
        let id = this.state.id
        console.log({values})
        console.log(id)
        DataService.updateUserProperty(
            {   id: id,
                name: values.name, 
                type: values.type, 
                description: values.description,
                address: values.address,
                country: values.country, 
                size: values.size,
                phone: values.phone,
                price: values.price,
                users:{id:Userid}
            })
        .then(() => {this.props.navigate(`/userproperties`)})
    }
}



export default UpdateUserPropertry
