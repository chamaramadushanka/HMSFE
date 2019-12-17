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
    this.setState({Snackbaropen:false,})
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
          EmployeeId:event.target.employeeId.value,
          firstName:event.target.FirstName.value,
          lastName:event.target.LastName.value,
          address:event.target.Address.value,
          contactInfo:event.target.ContactInfo.value,
          registrationNo:event.target.RegistrationNo.value,
          PositionId:event.target.PositionId.value,
          birthdate:event.target.birthdate.value,
          gender:event.target.Gender.value,
          createdOn:event.target.createdOn.value,
        })
      })
      .then(res=>res.json())
      .then((result)=>
      {
          alert("Added Successfully")
      },
      (error)=>{
        alert("Added Failed")
      }) 
  }

  render() {
    return (
      <div className ="container">
      <Snackbar
        anchorOrigin ={{vertical:'bottom',horizontal:'center'}}
        open = {this.state.Snackbaropen}
        autoHideDuration = {3000}
        onClose = {this.SnackbarClose}
        message = {<span id ="message-id">{this.state.Snackbarmsg}</span>}
        action ={[
          <IconButton
            key = "close"
            arial-label="Close"
            color ="inherit"
            onClick={this.SnackbarClose}>
            x
          </IconButton>
        ]}
      />

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
                    <Form.Group controlId="employeeId">
                    <Form.Label> Employee Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="employeeId"
                      required
                      disabled
                      defaultValue={this.props.employeeId}
                      placeholder="EmployeeId"
                    />
                  </Form.Group>

                    <Form.Group controlId ="FirstName">
                    <Form.Label> First Name</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "FirstName"
                    required
                    
                    defaultValue ={this.props.FirstName}
                    placeholder ="First Name"
                    />
                    </Form.Group>

                    <Form.Group controlId ="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "LastName"
                    required
                    defaultValue ={this.props.LastName}
                    placeholder ="Last Name"
                    />
                    </Form.Group>

                    <Form.Group controlId ="Address">
                    <Form.Label>Address</Form.Label>
                    <Form .Control
                    type ="text"
                    required
                    defaultValue ={this.props.Address}
                    name = "Address"
                    placeholder ="Address"
                    />
                    </Form.Group>


                    <Form.Group controlId ="ContactInfo">
                    <Form.Label>contact Info</Form.Label>
                    <Form .Control
                    type ="number"
                    name = "ContactInfo"
                    defaultValue ={this.props.ContactInfo}
                    placeholder ="contact Info"
                    />
                    </Form.Group>

                    <Form.Group controlId ="Gender">
                    <Form.Label>Gender</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "Gender"
                    disabled
                    defaultValue ={this.props.Gender}
                    placeholder ="Gender"
                    />
                    </Form.Group>

                    <Form.Group controlId ="birthdate">
                    <Form.Label>Birth Date</Form.Label>
                    <Form .Control
                    type ="date"
                    name = "birthdate"
                    defaultValue ={this.props.birthdate}
                    placeholder ="Birth date"
                    />
                    </Form.Group>
                    
                    <Form.Group controlId ="RegistrationNo">
                    <Form.Label>Registration No</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "RegistrationNo"
                    defaultValue ={this.props.RegistrationNo}
                    placeholder ="Registration No"
                    />

                    <Form.Group controlId ="createdOn">
                    <Form.Label>Created On</Form.Label>
                    <Form .Control
                    type ="date"
                    disabled
                    name = "createdOn"
                    defaultValue ={this.props.createdOn}
                    placeholder ="Created On"
                    />
                    </Form.Group>
                    
                    <Form.Group controlId="PositionId">
                      <Form.Label>Position Id</Form.Label>
                      <Form.Control as="select">
                        {this.state.positions.map(position =>
                          <option key={position.positionId} value={position.positionId}>{position.name}</option>
                        )}
                      </Form.Control>
                    </Form.Group>

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