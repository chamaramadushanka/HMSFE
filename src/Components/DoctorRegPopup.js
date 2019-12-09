import React from 'react';
import {Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';

export class DoctorRegPopup extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(event){
        event.preventDefault();
        alert(event.target.DoctorName.value)
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
                        <Form.Group controlId ="DoctorName">
                        <Form.Label>Department Name</Form.Label>
                        <Form .Control
                        type ="text"
                        name = "DoctorName"
                        required
                        placeholder ="Doctor Name"
                        />
                        </Form.Group>
                        <Form.Group>
        
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
