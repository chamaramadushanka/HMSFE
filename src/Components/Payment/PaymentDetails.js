import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { PositionsRegPop } from './PositinsRegPop';
import { Positionedit } from './Positionedit';


export class PaymentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Payments: [], PositioneditShow: false, PositionsRegPop: false
        }
    }
    componentWillMount() {
        this.refresList();
    }

    refresList() {
        fetch('https://localhost:44355/api/Attendances')
            .then(Response => Response.json())
            .then(data => {
                this.setState({ Payments: data });
            });
    }
    //    componentDidUpdate(){
    //     this.refresList();
    // }
    DeletePosition(attendanceId) {
        if (window.confirm('Are you sure? ')) {
            fetch('https://localhost:44355/api/Attendances/' + attendanceId, {
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
        const { Payments, positionId, name, description } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let PositioneditClose = () => this.setState({ PositioneditShow: false });
        return (
            <div className="patientdetailstable">
                <h4>Cash Advances Details</h4>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                    >
                        Add Cash Advance
                    </Button>
                    <PositionsRegPop
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Payment Id</th>
                            <th>Employee Id</th>
                            <th>Payment Date</th>
                            <th>Amount Paidsq</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Payments.map(Payments =>
                            <tr key={Payments.attendanceId}>
                                <td>{Payments.employeeId}</td>
                                <td>{Payments.attendanceId}</td>
                                <td>{Payments.dateTime}</td>
                                
                                {/* <td>{Positions.Salaryrate}</td> */}
                                <td>

                                    {/* edit section */}
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                PositioneditShow: true,
                                                positionId: Payments.attendanceId,
                                                name: Payments.dateTime,
                                                description: Payments.employee,
                                                Salaryrate: Payments.employeeId,
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

export default PaymentDetails

