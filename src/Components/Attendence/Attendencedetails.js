import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { PositionsRegPop } from '../Positions/PositinsRegPop';
import { Positionedit } from '../Positions/Positionedit';


export class Attendencedetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Attendances: [], PositioneditShow: false, PositionsRegPop: false
        }
    }
    componentWillMount() {
        this.refresList();
    }

    refresList() {
        fetch('https://localhost:59388/api/Attendances')
            .then(Response => Response.json())
            .then(data => {
                this.setState({ Attendances: data });
            });
    }
    DeletePosition(attendanceId) {
        if (window.confirm('Are you sure? ')) {
            fetch('https://localhost:59388/api/Attendances/' + attendanceId, {
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
        const { Attendances, positionId, name, description } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let PositioneditClose = () => this.setState({ PositioneditShow: false });
        return (
            <div className="patientdetailstable">
                <h4>Attendence Details</h4>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                    >
                        Add Attendence
                    </Button>
                    <PositionsRegPop
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Attendence Id</th>
                            <th>Attendence Date</th>
                            {/* <th>Salary Rate</th> */}
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Attendances.map(Attendances =>
                            <tr key={Attendances.attendanceId}>
                                <td>{Attendances.employeeId}</td>
                                <td>{Attendances.attendanceId}</td>
                                <td>{Attendances.dateTime}</td>
                                
                                {/* <td>{Positions.Salaryrate}</td> */}
                                <td>

                                    {/* edit section */}
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                PositioneditShow: true,
                                                positionId: Attendances.attendanceId,
                                                name: Attendances.dateTime,
                                                description: Attendances.employee,
                                                Salaryrate: Attendances.employeeId,
                                            })}
                                        >Edit</Button>

                                        {/* Delete Section */}
                                        <Button className="mr-2" onClick={() => this.DeletePosition(Attendances.attendanceId)} variant="danger">Delete</Button>

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

export default Attendencedetails

