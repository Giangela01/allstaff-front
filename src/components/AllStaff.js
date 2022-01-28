import React from 'react';
import { Link } from "react-router-dom";
import Modal from './Modal'

function AllStaff (props) {
    const loaded = () =>{
        return props.Employee.map((staff) => (
            <tr key={staff.id}>
               <th scope='row'>{staff.firstName} {staff.lastName}</th>
               <td>{staff.jobTitle}</td>
               <td>{staff.department}</td>
               <td>
                   <Link to={`/`}><i className='bi bi-person-dash-fill'id="delete" onClick={() => props.deleteEmployee(staff.id)}></i></Link>
                   <Modal updateEmployee={updateEmployee}/>
                </td>
            </tr>
        ))
    };
    const loading = () => {
        return <tr><td>Loading...</td></tr>
    };
    return ( 
        <div className='main-table'>
            <table className='table table-striped table-sm'>
                <thead>
                    <tr>
                        <th scope='col'>Employee Name</th>
                        <th scope='col'>Job Title</th>
                        <th scope='col'>Department</th>
                        <th scope='col'>Action Item</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Employee ? loaded() : loading()}
                </tbody>
            </table>
        </div>
    )
};

export default AllStaff;