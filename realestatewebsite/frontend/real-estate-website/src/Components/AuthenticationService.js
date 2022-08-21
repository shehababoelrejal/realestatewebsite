import axios from "axios";
import { API_URL } from "../Constants";

class AuthenticationService
{
    registerSuccessfulLogin(email, id)
    {
        sessionStorage.setItem('loggedinUserEmail', email);
        sessionStorage.setItem('loggedinUserId', id);
    }

    logout()
    {
        sessionStorage.removeItem('loggedinUserEmail');
        sessionStorage.removeItem('loggedinUserId');
    }

    isLoggedin()
    {
        let userEmail = sessionStorage.getItem('loggedinUserEmail');
        if(userEmail == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    retrieveEmail()
    {
        let userEmail = sessionStorage.getItem('loggedinUserEmail');
        if(userEmail == null)
        {
            return '';
        }
        else
        {
            return userEmail;
        }
    }
    retrieveId()
    {
        let userId = sessionStorage.getItem('loggedinUserId');
        return userId;
    }
}

export default new AuthenticationService()