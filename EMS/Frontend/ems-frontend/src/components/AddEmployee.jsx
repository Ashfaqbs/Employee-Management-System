

import React, { useState, useEffect } from 'react';
import { addEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const navigate = useNavigate();




    const submitHandler = (e) => {
        console.log({
            firstName,
            lastName,
            email
        });



        addEmployees({
            firstName,
            lastName,
            email
        }).then(response => {
            // setError('Success')
            console.log(response)
        }).catch(err => {
            console.log(err + " is the error");
            // setError('Failed ')
        })

        navigate('/employees')

    }



    return (

        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Add Employees</h1> <br />

                <form onSubmit={submitHandler} className='w-50 '>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First name" name="firstName"
                            onChange={(e) => { setfirstName(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last name" name="lastName" onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                    </div> <br />
                    <div className="container text-center"> <button type="submit" className="btn btn-primary">Submit</button></div>
                </form>


            </div>




        </>


    )
}

export default AddEmployee;
