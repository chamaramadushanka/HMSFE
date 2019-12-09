// import React, { Component } from 'react'

// class DoctorRegistration extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
             
//         }
//     }
    
    
//     handleSubmit(event){
//         event.preventDefault();
//         fetch('https://localhost:44351/api/doctor',{
//             method: 'Post',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: null,
//                 firstName: event.target.firstName.value
//             })
//         })
//         .then(res => res.json())
//         .then((result)=>
//         {
//             alert(result);
//         },
//         (error)=>{
//             alert('Failed')
//         }
//         )
//     }

//      return (
//     //     <div class = "container-fluid patientform">
//     //     <h4>Doctor Registration</h4>
//     //     <form className = "form">
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">First Name</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">Middle Name</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Middle Name"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">Last Name</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">Contact No</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact No"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">Address</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">Blood Type</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Blood Type"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlInput1">NIC</label>
//     //       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="NIC"/>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlSelect1">Example select</label>
//     //       <select class="form-control" id="exampleFormControlSelect1">
//     //         <option>1</option>
//     //         <option>2</option>
//     //         <option>3</option>
//     //         <option>4</option>
//     //         <option>5</option>
//     //       </select>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlSelect2">Example multiple select</label>
//     //       <select multiple class="form-control" id="exampleFormControlSelect2">
//     //         <option>1</option>
//     //         <option>2</option>
//     //         <option>3</option>
//     //         <option>4</option>
//     //         <option>5</option>
//     //       </select>
//     //     </div>
//     //     <div class="form-group">
//     //       <label for="exampleFormControlTextarea1">Example textarea</label>
//     //       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//     //     </div>
//     //   </form>
//     //   <div class = "btnprim">
//     //   <button type="button" class="btn btn-primary ">Register</button>
//     //   </div>
//     //   </div>
    
//     )
// }


// export default DoctorRegistration
