import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class Employeeedit extends Component {
    constructor(props) {
        super(props);
        this.state = {positions:[],Snackbaropen:false,Snackbarmsg:''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      fetch('http://localhost:59388/api/positions')
      .then(response => response.json())
      .then(data =>{
        this.setState({positions:data});
      });
    }

    SnackbarClose = (event)=>{
    this.setState({Snackbaropen:false,
    })
  }

    handleSubmit(event){
      event.preventDefault();
        fetch('http://localhost:59388/api/employees',{
          method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({
            employeeId:event.target.employeeId.value,
            firstName:event.target.firstName.value,
            lastName:event.target.lastName.value,
            address:event.target.address.value,
            contactInfo:event.target.contactInfo.value,
            positionId:event.target.positionId.value,
            gender:this.props.gender,
            createdOn:this.props.createdOn,
            registrationNo:this.props.registrationNo,
            birthdate:this.props.birthdate,

          })
        })
        .then(res=>res.json())
        .then((result)=>
        {
             alert("Successfully Added")
        },
        (error)=>{
          alert("Updated Successfully")
        })
    }
    render() {
        return (
          <div className ="container">
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit Employee
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>
                        <Form.Group controlId ="employeeId">
                        <Form.Label> Employee ID</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "employeeId"
                        required
                        defaultValue = {this.props.employeeId}
                        placeholder ="Employee ID"
                        />
                        </Form.Group>

                        <Form.Group controlId ="firstName">
                        <Form.Label> First Name</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "firstName"
                        required
                        defaultValue = {this.props.firstName}
                        placeholder ="First Name"
                        />
                        </Form.Group>

                        <Form.Group controlId ="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "lastName"
                        required
                        defaultValue = {this.props.lastName}
                        placeholder ="Last Name"
                        />
                        </Form.Group>

                        <Form.Group controlId ="address">
                        <Form.Label>Address</Form.Label>
                        <Form .Control
                        type ="text"
                        required
                        defaultValue = {this.props.address}
                        name = "address"
                        placeholder ="Address"
                        />
                        </Form.Group>

                        
                        <Form.Group controlId ="positionId">
                        <Form.Label>Position Id</Form.Label>
                          <Form.Control as="select">
                            {this.state.positions.map(position =>
                              <option key = {position.positionId}  value = {position.positionId}>{position.name}</option>
                            )}
                          </Form.Control>
                        </Form.Group>
                        
                        

                        <Form.Group controlId ="contactInfo">
                        <Form.Label>contact Info</Form.Label>
                        <Form .Control
                        type ="number"
                        name = "contactInfo"
                        defaultValue = {this.props.contactInfo}
                        placeholder ="contact Info"
                        />
                        </Form.Group>
                       
                        <Form.Group>
                        <Button variant ="primary" type = "submit">
                        Update Employee</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant ="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
        )
    }
}

export default Employeeedit

// I have added a comment here so to store this in
// remote repository  i need to stage and then commit