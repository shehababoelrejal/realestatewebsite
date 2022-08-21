import React,{Component} from "react";
import {BrowserRouter as Router, Link, Route, Routes, useNavigate, useParams} from 'react-router-dom'
import AboutusComponent from "./AboutusComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import HomeComponenet from "./HomeComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import SignupComponent from "./SignupComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import MyprofileComponent from "./MyprofileComponent.jsx";
import PropertiesComponent from "./PropertiesComponent.jsx";
import UserUpdateComponent from "./UserUpdateComponent.jsx";
import AddPropertyComponent from "./AddPropertyComponent.jsx";
import UserPropertiesComponent from "./UserPropertiesComponent.jsx";
import UpdateUserPropertry from "./UpdateUserProperty.jsx";




class RealestateApp extends Component
{   
    render()
    {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const SignupComponentWithNavigation = withNavigation(SignupComponent);
        const HomeComponenetWithNavigation = withNavigation(HomeComponenet);
        const MyprofileComponentWithNavigation = withNavigation(MyprofileComponent);
        const PropertiesComponentwithNavigation = withNavigation(PropertiesComponent);
        const UserUpdateComponentwithNavigation = withNavigation(UserUpdateComponent);
        const AddPropertyComponentWithNavigation = withNavigation(AddPropertyComponent);
        const UserPropertiesCompoenentWithNavigation = withNavigation(UserPropertiesComponent);
        const UpdateUserPropertyWithNavigationandParams = withParams(withNavigation(UpdateUserPropertry));


        return(
            <div className='RealestateApp'>
            <Router>
            <HeaderComponentWithNavigation></HeaderComponentWithNavigation>
            <Routes>
                <Route path = "/" element = {<HomeComponenet/>}></Route>
                <Route path = "/login" element = {<LoginComponentWithNavigation/>}></Route>
                <Route path = "/home" element = {<HomeComponenetWithNavigation/>}></Route>
                <Route path = "/aboutus" element = {<AboutusComponent/>}></Route>
                <Route path = "/profile" element = {<MyprofileComponentWithNavigation/>}></Route>
                <Route path = "/properties" element = {<PropertiesComponentwithNavigation/>}></Route>
                <Route path = "/signup" element = {<SignupComponentWithNavigation/>}></Route>
                <Route path = "/updateuser" element = {<UserUpdateComponentwithNavigation/>}></Route>
                <Route path = "/addproperty" element = {<AddPropertyComponentWithNavigation/>}></Route>
                <Route path = "/userproperties" element = {<UserPropertiesCompoenentWithNavigation/>}></Route>
                <Route path = "/updateuserproperty/:id" element = {<UpdateUserPropertyWithNavigationandParams/>}></Route>
                {/* <Route path = "*" element = {<ErrorComponent/>}></Route>  */}
            </Routes>
            <FooterComponent></FooterComponent>
        </Router>
        </div>
        )
    }
}

function withParams(Component)
{
    return props => <Component {...props} params = {useParams()}></Component>;
}

function withNavigation(Component)
{
    return props => <Component {...props} navigate = {useNavigate()}></Component>;
}


export default RealestateApp