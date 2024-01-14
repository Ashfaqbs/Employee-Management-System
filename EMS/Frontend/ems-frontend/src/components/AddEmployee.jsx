

import React, { useEffect, useState } from 'react';
import { addEmployees, getEmpById, updateEmpbyID } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const AddEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();









    const { id } = useParams()

    const submitHandler = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!firstName.trim() || !lastName.trim() || !email.trim()) {
            setError('All fields are required.');
            return;
        }
        // if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        //     setError('First name and last name should contain only characters.');
        //     return;
        // }

        // if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        //     setError('First name and last name should not contain numbers or special characters.');
        //     return;
        // }


        // If validation passes, clear any previous errors
        setError('');

        // Proceed with adding employee
        console.log({ firstName, lastName, email });

        addEmployees({ firstName, lastName, email })
            .then(response => {
                console.log(response);
                navigate('/employees');
            })
            .catch(err => {
                console.log(err + " is the error");
                setError('Failed to add employee.');
            });
    };






    const updateHandler = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!firstName.trim() || !lastName.trim() || !email.trim()) {
            setError('All fields are required.');
            return;
        }
        // if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        //     setError('First name and last name should contain only characters.');
        //     return;
        // }

        // if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        //     setError('First name and last name should not contain numbers or special characters.');
        //     return;
        // }


        // If validation passes, clear any previous errors
        setError('');

        // Proceed with adding employee
        console.log({ firstName, lastName, email });

        const updatedEmp={ firstName, lastName, email }
        updateEmpbyID(id,updatedEmp)
            .then(response => {
                console.log(response +" fomr update handler");
                navigate('/employees');
            })
            .catch(err => {
                console.log(err + " is the error");
                setError('Failed to add employee.');
            });
    };







    const pageTitle = () => {

        if (id) {

            return <h1>Update Employees</h1>
        } else {
            return <h1>Add Employees</h1>
        }


    }

    useEffect(
        () => {


            if (id) {
                getEmpById(id)
                    .then((response) => {

                        setFirstName(response.data.firstName)
                        setLastName(response.data.lastName)
                        setEmail(response.data.email)
                        console.log(response);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }

        }, [id])

    return (

        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                {/* <h1>Add Employees</h1>  */}
                Dynamically update the title based on the ID present in the URL , if present so it will be update
                {
                    pageTitle()
                }


                <br />

                <form onSubmit={id ? updateHandler : submitHandler} className='w-50 '>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First name" name="firstName"
                            onChange={(e) => { setFirstName(e.target.value) }} value={firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last name" name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} value={email} />
                    </div> <br />
                    <div className="text-danger">{error}</div>
                    <div className="container text-center"> <button type="submit" className="btn btn-primary">Submit</button></div>
                </form>


            </div>




        </>


    )
}

export default AddEmployee;
