import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {PaymentsRegPop} from './PaymentsRegPop';
import { PaymentEdit} from './PaymentEdit';


 export class  PaymentDetails extends Component {
   constructor(props) {
       super(props);
       this.state = { payments:[],PaymentEditShow:false,PaymentsRegPopShow:false
       }
   }
   componentWillMount(){
       this.refresList();
   }

   refresList(){
        fetch('http://localhost:59388/api/payments')
        .then(Response =>Response.json())
        .then(data=>{
            this.setState({payments:data});
        });
   }

  

   render() {
       const {payments,amountPaid,employeeId,paymentid,date} = this.state;
       let PaymentsRegPopClose =() => this.setState({PaymentsRegPopShow:false});
       let PaymentEditClose =() => this.setState({PaymentEditShow:false});
       return (
           <div className = "patientdetailstable">
               <h4>Employee Details</h4>
               <ButtonToolbar>
                    <Button variant = 'primary'
                    onClick ={()=>this.setState({PaymentsRegPopShow:true})}
                    >
                    Add Payment
                    </Button>
                    <PaymentsRegPop
                        show = {this.state.PaymentsRegPopShow}
                        onHide={PaymentsRegPopClose}
                    />
               </ButtonToolbar>
               <Table className="mt-4" striped bordered hover size="sm">
                   <thead>
                       <tr>
                           <th>Payment Id</th>
                           <th>Employee Id</th>
                           <th>Date</th>
                           <th>Amount Paid</th>
                           <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                       {payments.map(payments =>
                        <tr  key ={payments.paymentid}>
                                <td>{payments.paymentid}</td>
                                <td>{payments.employeeId}</td>
                               <td>{payments.date} </td>
                               <td>{payments.amountPaid} RS</td>
                               
                               <td>
                                   <ButtonToolbar>
                                       <Button className = "mr-2" variant ="info"
                                    onClick={()=>this.setState({PaymentEditShow:true,
                                        employeeId:payments.employeeId,
                                        date:payments.date,
                                        amountPaid:payments.amountPaid,
                                        paymentid:payments.paymentid
                                        })}
                                       >Edit</Button>
                                    <PaymentEdit
                                           show={this.state.PaymentEditShow}
                                            onHide ={PaymentEditClose}
                                            amountPaid  = {amountPaid}
                                            employeeId  = {employeeId}
                                            paymentid  = {paymentid}
                                            date = {date}
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

