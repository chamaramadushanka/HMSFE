import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAttendence } from '../Attendence/AddAttendence';
import { EditAttendence } from '../Attendence/EditAttendence';


export class Attendencedetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Attendances: [], EditAttendenceShow: false, AddAttendenceShow: false
        }
    }
    componentWillMount() {
        this.refresList();
    }

    refresList() {
        fetch('http://localhost:59388/api/Attendances')
            .then(Response => Response.json())
            .then(data => {
                this.setState({ Attendances: data });
            });
    }
    DeleteAttendances(attendanceId) {
        if (window.confirm('Are you sure? ')) {
            fetch('http://localhost:59388/api/Attendances/' + attendanceId, {
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
        const { Attendances, attendanceId, dateTime, employeeId } = this.state;
        let AddAttendenceClose = () => this.setState({ AddAttendenceShow: false });
        let EditAttendenceClose = () => this.setState({ EditAttendenceShow: false });
        return (
            <div className="patientdetailstable">
                <h4>Attendence Details</h4>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ AddAttendenceShow: true })}
                    >
                        Add Attendence
                    </Button>
                    <AddAttendence
                        show={this.state.AddAttendenceShow}
                        onHide={AddAttendenceClose}
                    />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Attendence Id</th>
                            <th>Employee Id</th>
                            {/* <th>Employee Name</th> */}
                            <th>Attendence Date</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Attendances.map(Attendances =>
                            <tr key={Attendances.attendanceId}>
                                <td>{Attendances.attendanceId}</td>
                                <td>{Attendances.employeeId}</td>
                                {/* <td>{Attendances.Employeename}</td> */}
                                <td>{Attendances.dateTime}</td>
                                <td>

                                    {/* edit section */}
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                EditAttendenceShow: true,
                                                attendanceId: Attendances.attendanceId,
                                                dateTime: Attendances.dateTime,
                                                // description: Attendances.employee,s
                                                employeeId: Attendances.employeeId,
                                            })}
                                        >Edit</Button>

                                        {/* Delete Section */}
                                        <Button className="mr-2" onClick={() => this.DeleteAttendances(Attendances.attendanceId)} variant="danger">Delete</Button>

                                        {/* Getting edit components to the positions */}
                                        <EditAttendence
                                            show={this.state.EditAttendenceShow}
                                            onHide={EditAttendenceClose}
                                            attendanceId={attendanceId}
                                            dateTime={dateTime}
                                            employeeId={employeeId}
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

