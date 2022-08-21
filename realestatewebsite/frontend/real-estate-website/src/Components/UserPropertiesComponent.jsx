import React,{Component, useState} from "react";
import DataService from "../Service/DataService";
import AuthenticationService from "./AuthenticationService";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  

class UserPropertiesComponent extends Component
{
    constructor(props)
    {
        super()
        this.state = 
        {
            properties:[]
        }
        this.refreshProperties = this.refreshProperties.bind(this)
        this.updateUserProperty = this.updateUserProperty.bind(this)

    }
    render()
    {
        return(
            <div style={{marginBottom:50}}>
            <h1>Your properties</h1>
                <div className="container row">
                {
                this.state.properties.map(
                property => 
                <table className="table table-borderd" 
                style={{wordWrap:"break-word",
                        tableLayout:"fixed",
                        minWidth:500, maxWidth:510, 
                        height:50, marginTop:50, 
                        marginRight:5, 
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
                    <tr>
                        <th className="thead-dark table-primary">Actions</th>
                        <td className="text-left">
                        <button className="btn btn-primary" onClick={() => this.updateUserProperty(property.id)} style={{marginRight:10}}>Update Property</button>
                        <Modalll propertyId={property.id}></Modalll>
                        </td>
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
        let userrid = AuthenticationService.retrieveId()
        console.log(userrid)
        DataService.getUserProperties({id: userrid})
        .then( response => {
                console.log(response)
                this.setState({properties: response.data})
            }
        )
        console.log(this.state.properties)
    }
    updateUserProperty(id)
    {
        this.props.navigate(`/updateuserproperty/${id}`)
    }

}

function Modalll(propertyId)
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    return(
    <>
    <Button variant="danger" onClick={handleShow}>Delete Property</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your property?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteProperty}>
            Delete Property
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

function deleteProperty()
{
    let id = propertyId.propertyId
    console.log(id)
    console.log("entered")
    DataService.deleteUserProperty({id: id})
    .then((response) => 
    {
        setShow(false)
        window.location = "/userproperties";
    })
    .catch( () =>
    {
        console.log("Fail")
    })
}
}

export default UserPropertiesComponent