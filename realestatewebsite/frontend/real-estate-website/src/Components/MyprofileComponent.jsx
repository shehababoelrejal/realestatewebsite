import React,{Component, useState} from "react";
import moment from "moment";
import DataService from "../Service/DataService";
import AuthenticationService from "./AuthenticationService";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import HomeComponenet from "./HomeComponent";


class MyprofileComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {

        }
        this.updateUser = this.updateUser.bind(this)
        this.propertiesNavigate = this.propertiesNavigate.bind(this)

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
            dob: moment(response.data.dob).format('YYYY-MM-DD')
        }))
    }

    updateUser()
    {
        this.props.navigate(`/updateuser`)
    }

    propertiesNavigate()
    {
        this.props.navigate(`/userproperties`)
    }

    render()
    {    
        return(
            <div style={{marginBottom: 30, marginTop: 30}}>
	        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
	        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>
            <body>
            <div class="container">
                <div class="main-body">
                    <div class="row gutters-sm">
                        <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
                                <div class="mt-3">
                                <h4>{this.state.name}</h4>
                                <p class="text-muted font-size-sm">{this.state.address}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                            <h1 style={{marginBottom: 30}}>My Profile</h1>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">ID</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {this.state.id}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Full Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {this.state.name}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {this.state.email}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Address</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {this.state.address}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Country</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {this.state.country}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Date of Birth</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                {this.state.dob}
                                </div>
                            </div>
                            <hr></hr>
                            <div class="row">
                                <div class="col-sm-12">
                                <button className="btn btn-primary" onClick={this.updateUser} style={{marginRight:10}}>Edit Account</button>
                                <Modall></Modall>
                                <button className="btn btn-success" onClick={this.propertiesNavigate} style={{marginRight:10}}>My Properties</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </body>
        </div>
        )
    }
}

function Modall()
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    return(
    <>
    <Button style={{marginRight:10}} variant="danger" onClick={handleShow}>Delete Account</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteAccount}>
            Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

function deleteAccount()
{
    let email = AuthenticationService.retrieveEmail()
    console.log("entered")
    DataService.deleteUser({email: email})
    .then((response) => 
    {
        setShow(false)
        AuthenticationService.logout()
        window.location = "/home";
    })
    .catch( () =>
    {
        console.log("Fail")

    })
}

}

export default MyprofileComponent