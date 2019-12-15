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
                            <th>In Time</th>
                            <th>Out time</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Attendances.map(Attendances =>
                            <tr key={Attendances.attendanceId}>
                                <td>{Attendances.attendanceId}</td>
                                <td>{Attendances.employeeId}</td>
                                <td>{Attendances.inTime}</td>
                                <td>{Attendances.outTime}</td>
                                <td>

                                    {/* edit section */}
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                EditAttendenceShow: true,
                                                attendanceId: Attendances.attendanceId,
                                                inTime: Attendances.inTime,
                                                outTime: Attendances.outTime,
                                                dateTime: Attendances.dateTime,
                                                // description: Attendances.employee,s
                                                employeeId: Attendances.employeeId,
                                            })}
                                        >Edit</Button>

                                        {/* Delete Section */}
   
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

