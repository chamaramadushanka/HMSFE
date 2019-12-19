import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment'; 

export class EditAttendence extends Component {
  constructor(props) {
      super(props);
      this.state = {Snackbaropen:false,Snackbarmsg:''}
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  SnackbarClose = (event)=>{
    this.setState({Snackbaropen:false,})
  }

  handleSubmit(event){
    event.preventDefault();
      fetch('http://localhost:59388/api/Attendances',{
        method:'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body:JSON.stringify({
            attendanceId:Number(event.target.attendanceId.value),
            inTime:event.target.inTime.value,
            outTime:event.target.date.value +"T"+ event.target.outTime.value ,
            employeeId:new Number(event.target.employeeId.value)
        })
      })
      .then(res=>res.json())
      .then((result)=>
      { 
      alert("Added Successfully")
      },
      (error)=>{
        alert("Updated Successfully")
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
              Out Time
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

        <Row>
            <Col sm= {6}>
                <Form onSubmit ={this.handleSubmit}>
                    {/* AttendenceID */}
                    <Form.Group controlId ="attendanceId">
                    <Form.Label> Attendance Id </Form.Label>
                    <Form .Control
                    type ="text"
                    name = "attendanceId"
                    disabled
                    defaultValue ={this.props.attendanceId}
                    placeholder ="EmployeeId"
                    />
                    </Form.Group>

                    {/* EmployeeID */}
                    <Form.Group controlId ="employeeId">
                    <Form.Label> Employee Id</Form.Label>
                    <Form .Control
                    type ="text"
                    name = "employeeId"
                    required
                    disabled
                    defaultValue ={this.props.employeeId}
                    placeholder ="Employee Id"
                    />
                    <Form.Group controlId ="date">
                        <Form.Label> Date</Form.Label>
                        <Form .Control
                        type ="Date"
                        name = "date"
                        required
                        placeholder ="Date"
                        />
                        </Form.Group>

                    </Form.Group>
                    <Form.Group controlId ="inTime">
                    <Form.Label>In Time</Form.Label>
                    <Form .Control
                    type ="int"
                    name = "inTime"
                    defaultValue ={this.props.inTime}
                    placeholder ="InTime"
                    />
                    </Form.Group>

                    <Form.Group controlId ="outTime">
                    <Form.Label>Out Time</Form.Label>
                    <Form .Control
                    type ="text"
                    value = {this.state.date.toLocaleTimeString()}
                    name = {this.state.date.toLocaleTimeString()}
                    placeholder ={this.state.date.toLocaleTimeString()}
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