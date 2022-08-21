import axios from "axios"


class DataService
{
    addUser(user)
    {
        console.log('executed')
        return axios.post(`http://localhost:8080/adduser`, user);
    }
    userLogin(user)
    {
        console.log('executed')
        console.log(user)
        return axios.post(`http://localhost:8080/loginuser`, user);
    }
    getUserInfo(user)
    {
        console.log('executed')
        return axios.post(`http://localhost:8080/getuser`, user);
    }
    deleteUser(user)
    {
        console.log('executed')
        return axios.post(`http://localhost:8080/deleteuser/`, user);
    }
    updateUser(user)
    {
        console.log(user)
        return axios.put(`http://localhost:8080/updateuser/`, user);
    }
    addProperty(property)
    {
        console.log('executed')
        return axios.post(`http://localhost:8080/addproperty`, property);
    }
    retrieveAllProperties()
    {
        console.log('executed')
        return axios.get(`http://localhost:8080/getallproperties`);
    }    
    getUserProperties(user)
    {
        console.log('executed')
        return axios.post(`http://localhost:8080/getuserproperties`, user);
    }
    deleteUserProperty(user)
    {
        console.log('executed')
        return axios.post(`http://localhost:8080/deleteuserproperty`, user);
    }
    getUserProperty(user)
    {
        console.log(user)
        return axios.post(`http://localhost:8080/getuserproperty/`, user);
    }
    updateUserProperty(user)
    {
        console.log(user)
        return axios.put(`http://localhost:8080/updateuserproperty/`, user);
    }
}

export default new DataService()
