import React from 'react';
import { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class Positionedit extends Component {
  constructor(props) {
    super(props);
    this.state = { Snackbaropen: false, Snackbarmsg: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  SnackbarClose = (event) => {
    this.setState({ Snackbaropen: false, })
  }
  //   Fetch the link
  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:59388/api/positions', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      //convert to json and get data from the fields
      body: JSON.stringify({
        positionId: event.target.positionId.value,
        name: event.target.name.value,
        description: event.target.description.value,
        //   salaryrate:event.target.salaryrate.value,

      })
    })

      .then(res => res.json())
      .then((result) => {
        //   alert("Added Successfully")
        this.setState({ SnackbarOpen: true, Snackbarmsg: result })
      },
        (error) => {
          this.setState({ SnackbarOpen: true, Snackbarmsg: "failed" })
        })
  }
  //render methods and fields
  render() {
    return (
      <div className="container">
        {/* Snack bar to show the result but not working */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.Snackbaropen}
          autoHideDuration={3000}
          onClose={this.SnackbarClose}
          message={<span id="message-id">{this.state.Snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.SnackbarClose}>
              x
          </IconButton>
          ]}
        />
        {/* snack bar end */}

        {/* Pop up Modal to edit the position */}
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Position
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row>
              <Col sm={6}>

                <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId="positionId">
                    <Form.Label> position Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="positionId"
                      required
                      disable
                      defaultValue={this.props.positionId}
                      placeholder="position Id"
                    />
                  </Form.Group>

                  <Form.Group controlId="name">
                    <Form.Label>Position name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      defaultValue={this.props.name}
                      placeholder="Position name"
                    />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      defaultValue={this.props.description}
                      placeholder="Position description"
                    />
                  </Form.Group>

                  {/* Form Field is over */}
                  {/* Update button*/}
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Update Poistion</Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}