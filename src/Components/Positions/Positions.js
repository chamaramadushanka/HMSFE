import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { PositionsRegPop } from './PositinsRegPop';
import { Positionedit } from './Positionedit';


export class Positions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Positions: [], PositioneditShow: false, PositionsRegPop: false
        }
    }
    componentWillMount() {
        this.refresList();
    }

    refresList() {
        fetch('http://localhost:59388/api/positions')
            .then(Response => Response.json())
            .then(data => {
                this.setState({ Positions: data });
            });
    }
    //    componentDidUpdate(){
    //     this.refresList();
    // }
    DeletePosition(positionId) {
        if (window.confirm('Are you sure? ')) {
            fetch('http://localhost:59388/api/positions/' + positionId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
        }
    }

    render() {
        const { Positions, positionId, name, description } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let PositioneditClose = () => this.setState({ PositioneditShow: false });
        return (
            <div className="patientdetailstable">
                <h4>Position Details</h4>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                    >
                        Add Position
                    </Button>
                    <PositionsRegPop
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Position Id</th>
                            <th>Position Name</th>
                            <th>Description</th>
                            {/* <th>Salary Rate</th> */}
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Positions.map(Positions =>
                            <tr key={Positions.positionId}>
                                <td>{Positions.positionId}</td>
                                <td>{Positions.name}</td>
                                <td>{Positions.description}</td>
                                {/* <td>{Positions.Salaryrate}</td> */}
                                <td>

                                    {/* edit section */}
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                PositioneditShow: true,
                                                positionId: Positions.positionId,
                                                name: Positions.name,
                                                description: Positions.description,
                                                Salaryrate: Positions.Salaryrate,
                                            })}
                                        >Edit</Button>

                                        {/* Delete Section */}
                                        <Button className="mr-2" onClick={() => this.DeletePosition(Positions.positionId)} variant="danger">Delete</Button>

                                        {/* Getting edit components to the positions */}
                                        <Positionedit
                                            show={this.state.PositioneditShow}
                                            onHide={PositioneditClose}
                                            positionId={positionId}
                                            description={description}
                                            name={name}
                                        />
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Positions

