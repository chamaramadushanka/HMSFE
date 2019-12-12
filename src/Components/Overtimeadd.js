import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class Overtimeadd extends Component {
    constructor(props) {
        super(props);
        this.state = {OverTimes:[],Snackbaropen:false,Snackbarmsg:''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      fetch('http://localhost:59388/api/OverTimes')
      .then(response => response.json())
      .then(data =>{
        this.setState({OverTimes:data});
      });
    }

    SnackbarClose = (event)=>{
    this.setState({Snackbaropen:false,
    })
  }

    handleSubmit(event){
      event.preventDefault();
        fetch('http://localhost:59388/api/OverTimes',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({
            // positionId:null,
            additionalHours:new Number (event.target.additionalHours.value),
            amount:new Number (event.target.amount.value),
            employeeId:new Number(event.target.employeeId.value),
            // Salaryrate:event.target.Address.value,
            
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
            {/* Pop up Modal Start */}
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Add OverTime
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>

                        <Form.Group controlId ="employeeId">
                        <Form.Label> Employee Id</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "employeeId"
                        required
                        placeholder ="Employee Id"
                        />
                        </Form.Group>

                        <Form.Group controlId ="additionalHours">
                        <Form.Label> Additional Hours</Form.Label>
                        <Form .Control
                        type ="number"
                        name = "additionalHours"
                        required
                        placeholder ="Additional Hours"
                        />
                        </Form.Group>
                        
                        <Form.Group controlId ="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form .Control
                        type ="number"
                        name = "amount"
                        placeholder ="Amount"
                        />
                        </Form.Group>

                        
                        <Form.Group>
                        <Button variant ="primary" type = "submit">
                        Add OverTime</Button>
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

export default Overtimeadd
