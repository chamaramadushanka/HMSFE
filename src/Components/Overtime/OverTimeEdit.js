import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';

export class OverTimeEdit extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
      fetch('http://localhost:59388/api/overtimes',{
        method:'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body:JSON.stringify({
        //   id:event.target.EmployeeId.value,
          additionalHours:new Number(event.target.additionalHours.value),
          amount:new Number (event.target.amount.value),
          
        })
      })
      .then(res=>res.json())
      .then((result)=>
      {
          alert("Changed Successfully")
      },
      (error)=>{
        alert("Edit Failed")
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
              Edit Overtime
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

        <Row>
            <Col sm= {6}>
                <Form onSubmit ={this.handleSubmit}>
                    <Form.Group controlId ="overTimeId">
                    <Form.Label> Over Time Id</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "overTimeId"
                    required
                    disabled
                    defaultValue ={this.props.overTimeId}
                    placeholder ="overTimeId"
                    />
                    </Form.Group>

                    <Form.Group controlId ="employeeId">
                    <Form.Label> Employee Id</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "employeeId"
                    required
                    disabled
                    defaultValue ={this.props.employeeId}
                    placeholder ="employeeId"
                    />
                    </Form.Group>


                    <Form.Group controlId ="additionalHours">
                    <Form.Label>Additional Hours</Form.Label>
                    <Form .Control
                    type ="number"
                    name = "additionalHours"
                    defaultValue ={this.props.additionalHours}
                    placeholder ="Additional Hours"
                    />
                    </Form.Group>

                    <Form.Group controlId ="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form .Control
                    type ="number"
                    name = "amount"
                    defaultValue ={this.props.additionalHours}
                    placeholder ="Amount"
                    />
                    </Form.Group>


                    <Form.Group>
                    <Button variant ="primary" type = "submit">
                    Update Overtime</Button>
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