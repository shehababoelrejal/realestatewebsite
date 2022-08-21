import React,{Component} from "react";
import DataService from "../Service/DataService";
import AuthenticationService from "./AuthenticationService";


class PropertiesComponent extends Component
{
    constructor(props)
    {
        super()
        this.state = 
        {
            properties:[]
        }
        this.refreshProperties = this.refreshProperties.bind(this)

    }
    render()
    {
        return(
            <div style={{marginBottom:50}}>
            <h1>All Properties</h1>
                <div className="container row">
                {
                this.state.properties.map(
                property => 
                <table className="table table-borderd" 
                style={{wordWrap:"break-word",
                        tableLayout:"fixed",
                        minWidth:500, maxWidth:500, 
                        height:50, marginTop:50, 
                        marginRight:15, 
                        marginLeft:40}}>
                <thead key = {property.id}>
                    <tr>
                        <th className="thead-dark table-primary" style={{width:150}}>Name</th>
                        <td className="text-left">{property.name}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary">Type</th>
                        <td className="text-left">{property.type}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary text-center">Description</th>
                        <td className="text-left">{property.description}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary">Address</th>
                        <td className="text-left">{property.address}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary">Country</th>
                        <td className="text-left">{property.country}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary">Size</th>
                        <td className="text-left">{property.size}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary">Phone Number</th>
                        <td className="text-left">{property.phone}</td>
                        </tr>
                    <tr>
                        <th className="thead-dark table-primary">Price</th>
                        <td className="text-left">{property.price}</td>
                        </tr>
                </thead>
                </table>
                )
                }
            </div>
            </div>
        )
    }
    componentDidMount()
    {
        this.refreshProperties()
    }

    refreshProperties()
    {
        DataService.retrieveAllProperties()
        .then(
            response => {
                console.log(response)
                this.setState({properties: response.data})
            }
        )
    }

}

export default PropertiesComponent