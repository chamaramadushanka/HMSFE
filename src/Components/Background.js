import React, { useState } from 'react';
import { useEffect } from 'react';


function Background() {
    let [emp, SetEmp] = useState([])
    let [input, SetInput] = useState([])

    const Handleclick = () => {
        SetEmp(emp)
    }
    const OnEmpClick = (name) => {
        alert(name)
    }
    const onText = (e) => {
        SetInput(e.target.value)
    }
    const add = () => {
        // const oldarray = emp;
        // oldarray.push()
        // SetEmp(...oldarray)

        SetEmp(oldState => {
            return [{ employee_name: input }, ...oldState]
        })
    }



    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(resData => {
                console.log(resData)
                //SetEmp(resData)
                emp = resData
                resData.forEach(emp => {
                emp.employee_name = "xyz" + emp.employee_name
                    emp.school = "school"
                }
                );
                //do your logic here       
                //let person = resData.results
                //this.setState({ person: resData.results }); //this is an asynchronous function

            })
    }, []);
    console.log("HI")
    return (
        <div className="App">
            <input type="text" onChange={onText} value={input} />
            {/* {input} */}
            <button onClick={Handleclick}>Clcikme</button>
            <button onClick={add}>add</button>
            {
                emp.map(employee => {
                    return <div>
                        <span>{employee.id}</span>
                        <span>{employee.employee_name}</span>
                        <span>{employee.school}</span>
                        <button onClick={() => Handleclick(employee)}>EMployee data</button>
                        <button onClick={() => OnEmpClick(employee.employee_name)}>Delete</button>

                    </div>
                })
            }
        </div>
    );


}



export default Background;