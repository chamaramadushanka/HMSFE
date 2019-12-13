
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Overtimeadd } from './Overtimeadd';
import { OverTimeEdit } from './OverTimeEdit';


export class OvertimeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OverTimes:[], OverTimeEdit: false, Overtimeadd: false
        }
    }
    componentWillMount() {
        this.refresList();
    }

    refresList() {
        fetch('http://localhost:59388/api/OverTimes')
            .then(Response => Response.json())
            .then(data => {
                this.setState({ OverTimes: data });
            });
    }
    

    render() {
        const { OverTimes, overTimeId, additionalHours, amount,employeeId } = this.state;
        let OvertimeaddClose = () => this.setState({ OvertimeaddShow: false });
        let OverTimeEditClose = () => this.setState({ OverTimeEditShow: false });
        return (
            <div className="patientdetailstable">
                <h4>OverTime Details</h4>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ OvertimeaddShow: true })}
                    >
                        Add OverTime
                    </Button>
                    <Overtimeadd
                        show={this.state.OvertimeaddShow}
                        onHide={OvertimeaddClose}
                    />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                           <th>overTimeId</th>
                           <th>EmployeeId</th>
                           <th>Employee Name</th>
                           <th>AdditionalHours</th>
                           <th>Amount</th>
                           <th>Options</th>
                       </tr>
                    </thead>
                    <tbody>
                        {OverTimes.map(OverTimes =>
                            <tr key={OverTimes.overTimeId}>
                               <td>{OverTimes.overTimeId}</td>
                               <td>{OverTimes.employeeId}</td>
                               <td>{OverTimes.employeename}</td>
                               <td>{OverTimes.additionalHours}</td>
                               <td>{OverTimes.amount}</td>
                            <td>
                            
                                    {/* edit section */}
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                OverTimeEditShow: true,
                                                overTimeId: OverTimes.overTimeId,
                                                employeeId: OverTimes.employeeId,
                                                additionalHours: OverTimes.additionalHours,
                                                amount: OverTimes.amount,
                                            })}
                                        >Edit</Button>

                                      
                                        {/* Getting edit components to the positions */}
                                        <OverTimeEdit
                                            show={this.state.OverTimeEditShow}
                                            onHide={OverTimeEditClose}
                                            overTimeId={overTimeId}
                                            amount={amount}
                                            employeeId={employeeId}
                                            additionalHours={additionalHours}
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

export default OvertimeDetails

