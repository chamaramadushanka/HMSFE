import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class AddAttendence extends Component {
    constructor(props) {
        super(props);
        this.state = {Attendances:[],Snackbaropen:false,Snackbarmsg:''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      fetch('http://localhost:59388/api/Attendances')
      .then(response => response.json())
      .then(data =>{
        this.setState({Attendances:data});
      });
    }

   

    handleSubmit(event){
      event.preventDefault();
        fetch('http://localhost:59388/api/Attendances',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({
            inTime:event.target.inTime.value,
            outTime:event.target.outTime.value,
            employeeId:new Number(event.target.employeeId.value)
            
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
                  Add Attendence
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>


                    <Form.Group controlId ="employeeId">
                        <Form.Label>Employee Id</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "employeeId"
                        placeholder ="Employee Id"
                        />
                        </Form.Group>


                        <Form.Group controlId ="inTime">
                        <Form.Label> In Time</Form.Label>
                        <Form .Control
                        type ="Date"
                        name = "dateTime"
                        required
                        placeholder ="In Time"
                        />
                        </Form.Group>
                        
                        

                        <Form.Group controlId ="outTime">
                        <Form.Label>out Time</Form.Label>
                        <Form .Control
                        type ="Date"
                        name = "outTime"
                        placeholder ="out Time"
                        />
                        </Form.Group>
                        
                        <Form.Group>
                        <Button variant ="primary" type = "submit">
                        Add Employee</Button>
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

export default AddAttendence
