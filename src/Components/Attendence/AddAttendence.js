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

    SnackbarClose = (event)=>{
    this.setState({Snackbaropen:false,
    })
  }

    handleSubmit(event){
      event.preventDefault();
        fetch('https://localhost:44355/api/Attendances',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({
            // positionId:null,
            // attendanceId:event.attendanceId.value,
            dateTime:event.target.dateTime.value,
            employee:event.target.employee.value,
            employeeId:event.target.employeeId.value
            // Salaryrate:event.target.Address.value,
            
          })
        })
        .then(res=>res.json())
        .then((result)=>
        {
             alert("Added Successfully")
            this.setState({SnackbarOpen:true, Snackbarmsg:"Added Successfully"})
        },
        (error)=>{
          this.setState({SnackbarOpen:true, Snackbarmsg:"failed"})
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

                        <Form.Group controlId ="dateTime">
                        <Form.Label> Attendence Date</Form.Label>
                        <Form .Control
                        type ="Date"
                        name = "dateTime"
                        required
                        placeholder ="Attendence Date"
                        />
                        </Form.Group>
                        
                        <Form.Group controlId ="employee">
                        <Form.Label>Employee Id</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "employee"
                        placeholder ="Description"
                        />
                        </Form.Group>

                        <Form.Group controlId ="Salaryrate">
                        <Form.Label>Salary Rate</Form.Label>
                        <Form .Control
                        type ="number"
                        name = "Salaryrate"
                        placeholder ="Salary Rate"
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
