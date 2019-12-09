import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class  DoctorDetails extends Component {
   constructor(props) {
       super(props);
       this.state = { Docotrs:[]
       }
   }
   componentWillMount(){
       this.refresList();
   }
   
   refresList(){
        fetch('https://localhost:44351/api/doctor')
        .then(Response =>Response.json())
        .then(data=>{
            this.setState({Docotrs:data});
        })
       // this.setState({
       //     Docotrs:[{"docId":1,"registrationNo":"R170911"}]
       // })
   }

   render() {
       const {Docotrs} = this.state;
       return (
           <div className = "patientdetailstable">
               <h4>Docotrs Details</h4>
               <Table className="mt-4" striped bordered hover size="sm">
                   <thead>
                       <tr>
                           <th>DoctorId</th>
                           <th>Name</th>
                           <th>Registration No</th>
                           <th>Specialty</th>
                           {/* <th>Qualification</th> */}
                           <th>visiting Dates</th>
                           
                       </tr>
                   </thead>
                   <tbody>
                       {Docotrs.map(Docotrs =>
                           <tr  key ={Docotrs.id}>
                               <td>{Docotrs.id}</td>
                               <td>{Docotrs.firstName}</td>
                               <td>{Docotrs.registrationNo}</td>
                               <td>{Docotrs.specialty}</td>
                               {/* <td>{Docotrs.qualifications}</td> */}
                               <td>{Docotrs.visitingDates}</td>
                           </tr>
                       )}
                   </tbody>

               </Table>
           </div>
       )
   }
}

export default DoctorDetails

