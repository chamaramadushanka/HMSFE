import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {DoctorRegPopup} from './DoctorRegPopup';

class  DoctorDetails extends Component {
   constructor(props) {
       super(props);
       this.state = { Docotrs:[],addModalShow:false
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
      
   }

   render() {
       const {Docotrs} = this.state;
       let addModalClose =() => this.setState({addModalShow:false})
       return (
           <div className = "patientdetailstable"> 
               <h4>Docotrs Details</h4>
               <ButtonToolbar>
                    <Button variant = 'primary'
                    onClick ={()=>this.setState({addModalShow:true})}
                    >
                    Add Doctor
                    </Button>
                    <DoctorRegPopup
                        show = {this.state.addModalShow}
                        onHide={addModalClose}
                    />
               </ButtonToolbar>
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
                               <td>{Docotrs.firstName} {Docotrs.middleName}</td>
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

