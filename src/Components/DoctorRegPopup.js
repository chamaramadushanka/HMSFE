import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';

export class DoctorRegPopup extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(event){

      console.log(event.target.DocFirstName.value);
      console.log(event.target.DocMiddleName.value);
      console.log(event.target.DocLastName.value);
      console.log(event.target.RegistrationNo.value);
      console.log(event.target.Specialty.value);
      console.log(event.target.password.value);
        event.preventDefault();
        fetch('https://localhost:44351/api/doctor',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            
          },
          body:JSON.stringify({
            DocFirstName:event.target.DocFirstName.value,
            DocMiddleName:event.target.DocMiddleName.value,
            DocLastName:event.target.DocLastName.value,
            RegistrationNo:event.target.RegistrationNo.value,
            Specialty:event.target.Specialty.value,
            VisitingDates:event.target.VisitingDates.value,
            Password:event.target.password.value,
          })
        })
        .then(res=>res.json())
        .then((result)=>
        {
            alert(result)
        })
        // (error)=>{
        //   alert('Something Wrong')
        // })
    }
    render() {
        return (
            
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Doctor Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className ="container">
            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>
                        <Form.Group controlId ="DocFirstName">
                        <Form.Label>Doctor First Name</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "DocFirstName"
                        required
                        placeholder ="First Name"
                        />
                        </Form.Group>

                        <Form.Group controlId ="DocMiddleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "DocMiddleName"
                        required
                        placeholder ="Middle Name"
                        />
                        </Form.Group>

                        <Form.Group controlId ="DocLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form .Control
                        type ="text"
                        required
                        name = "DocLastName"
                        placeholder ="Last Name"
                        />
                        </Form.Group>

                        <Form.Group controlId ="RegistrationNo">
                        <Form.Label>Registration No</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "RegistrationNo"
                        placeholder ="Registration No"
                        />
                        </Form.Group>
                        
                        <Form.Group controlId ="Qualifications">
                        <Form.Label>Qualifications</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "Qualifications"
                        placeholder ="Qualifications"
                        />

                        <Form.Group controlId ="Specialty">
                        <Form.Label>Specialty</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "Specialty"
                        placeholder ="Specialty"
                        />
                        </Form.Group>

                        </Form.Group>
                        <Form.Group controlId ="VisitingDates">
                        <Form.Label>Visiting Dates</Form.Label>
                        <Form .Control
                        type ="date"
                        name = "VisitingDates"
                        required
                        placeholder ="Visiting Dates"
                        />
                        </Form.Group>
                        <Form.Group controlId ="password">
                        <Form.Label>Password</Form.Label>
                        <Form .Control
                        type ="datetime"
                        name = "password"
                        required
                        placeholder ="password"
                        />
                        </Form.Group>

                        
                        <Form.Group>
                        <Button variant ="primary" type = "submit">
                        Add Doctor</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant ="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        )
    }
}

export default DoctorRegPopup
