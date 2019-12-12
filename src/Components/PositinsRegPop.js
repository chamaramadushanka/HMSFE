import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class PositionsRegPop extends Component {
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
    this.setState({Snackbaropen:false,
    })
  }

    handleSubmit(event){
      event.preventDefault();
        fetch('http://localhost:59388/api/positions',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body:JSON.stringify({
            // positionId:null,
            name:event.target.name.value,
            description:event.target.description.value,
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
          
          {/* Snack bar start and is not working yet */}
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

            {/* Pop up Modal Start */}
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Add Position
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

            <Row>
                <Col sm= {6}>
                    <Form onSubmit ={this.handleSubmit}>

                        <Form.Group controlId ="name">
                        <Form.Label> Position Name</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "name"
                        required
                        placeholder ="Position Name"
                        />
                        </Form.Group>
                        
                        <Form.Group controlId ="description">
                        <Form.Label>Description</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "description"
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
                        Add Position</Button>
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

export default PositionsRegPop
