
import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class PaymentsRegPop extends Component {
    constructor(props) {
        super(props);
        this.state = {payments:[]}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      fetch('http://localhost:59388/api/payments')
      .then(response => response.json())
      .then(data =>{
        this.setState({payments:data});
      });
    }

    handleSubmit(event){
      event.preventDefault();
        fetch('http://localhost:59388/api/payments',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({
            date:event.target.date.value,
            amountPaid:new Number(event.target.amountPaid.value),
            employeeId:new Number(event.target.employeeId.value),
            
          })
        })
        .then(res=>res.json())
        .then((result)=>
        {
             alert("Successfully Added")
        },
        (error)=>{
          alert("Creation Failed")
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
                  Add Payment
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>

                        <Form.Group controlId ="employeeId">
                        <Form.Label>Employee Id</Form.Label>
                        <Form .Control
                        type ="number"
                        name = "employeeId"
                        required
                        placeholder ="Employee Id"
                        />
                        </Form.Group>

                        <Form.Group controlId ="date">
                        <Form.Label>Date</Form.Label>
                        <Form .Control
                        type ="date"
                        name = "date"
                        required
                        placeholder ="Date"
                        />
                        </Form.Group>

                        <Form.Group controlId ="amountPaid">
                        <Form.Label>Amount Paid</Form.Label>
                        <Form .Control
                        type ="number"
                        name = "amountPaid"
                        required
                        placeholder ="Amount Paid"
                        />
                        </Form.Group>

                        <Form.Group>
                        <Button variant ="primary" type = "submit">
                        Add Payment</Button>
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

export default PaymentsRegPop
