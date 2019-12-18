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
            inTime:event.target.inTime.value + this.state.date,
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
                        <Clock/>
                        </Form.Group>
                        
                  
                        <Form.Group controlId ="outTime">
                        <Form.Label>out Time</Form.Label>
                        <Form .Control
                        type ="Date"
                        name = "outTime"
                        placeholder ="out Time"
                        />
                        
                        <Clock date = { new Date()}/>
                        </Form.Group>

                        <Form.Group controlId ="outTime">
                        <Form.Label>xxxxxxxxxxxx</Form.Label>
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

class Clock extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <p><b>It is {this.state.date.toLocaleTimeString()}.</b></p>
      </div>
    );
  }
}

export default AddAttendence
