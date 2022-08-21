import React,{Component} from "react";
import AuthenticationService from "./AuthenticationService";
import LoginComponent from "./LoginComponent";
import {BrowserRouter as Router, Link, Navigate, Route, Routes, useNavigate, useParams} from 'react-router-dom'


class AuthenticatedRoute extends Component
{
    render()
    {
        if(AuthenticationService.isLoggedin())
        {
           return {...this.props.children}
        }
        else
        {
           return <Navigate to="/login"></Navigate>
        }
        
    }
}

export default AuthenticatedRoute