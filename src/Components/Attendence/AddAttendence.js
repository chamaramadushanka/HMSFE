import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import TimeField from 'react-simple-timefield';
// import Time from './TimeWrapper';


export class AddAttendence extends Component {
    constructor(props) {
        super(props);
        this.state = {Attendances:[],Snackbaropen:false,Snackbarmsg:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {date: new Date()};
    }

    componentDidMount(){
      fetch('http://localhost:59388/api/Attendances')
      .then(response => response.json())
      .then(data =>{
        this.setState({Attendances:data});
      });
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
            // date:event.target.date.value,
            inTime:event.target.date.value +"T"+ event.target.inTime.value ,
            // outTime:event.target.date.value +"T"+ event.target.outTime.value,
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
          
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Intime Attendence
                  
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>
                    <Form.Group controlId ="attendenceId">
                        <Form.Label>Attendence Id</Form.Label>
                        <Form .Control
                        type ="text"
                        disabled
                        name = "attendenceId"
                        placeholder ="Attendence Id"
                        />
                        </Form.Group>

                    <Form.Group controlId ="employeeId">
                        <Form.Label>Employee Id</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "employeeId"
                        required
                        placeholder ="Employee Id"
                        />
                        </Form.Group>

                        <Form.Group controlId ="date">
                        <Form.Label> Date</Form.Label>
                        <Form .Control
                        type ="Date"
                        name = "date"
                        required
                        placeholder ="Date"
                        />
                        </Form.Group>

                        <Form.Group controlId ="inTime">
                        <Form.Label> In Time</Form.Label>
                        <Form .Control
                        type ="text"
                        value = {this.state.date.toLocaleTimeString()}
                        name = {this.state.date.toLocaleTimeString()}
                        placeholder ={this.state.date.toLocaleTimeString()}
                        />
                        </Form.Group>

                        {/* <Form.Group controlId ="outTime">
                        <Form.Label> Out Time</Form.Label>
                        <Form .Control
                        type ="text"
                        name = {this.state.date.toLocaleTimeString()}
                        value = {this.state.date.toLocaleTimeString()}
                        placeholder ={this.state.date.toLocaleTimeString()}
                        />
                        </Form.Group> */}
                        
                        <Form.Group>
                        <Button variant ="primary" type = "submit">
                        Add Attendence</Button>
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
