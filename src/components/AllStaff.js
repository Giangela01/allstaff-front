import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal'
import Nav from './Nav';

Modal.setAppElement('#root')

function AllStaff (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({})
    
    const loaded = () =>{
        return props.Employee.map((staff) => (
            <tr key={staff.id}>
               <th scope='row'>{staff.firstName} {staff.lastName}</th>
               <td>{staff.jobTitle}</td>
               <td>{staff.department}</td>
               <td>
                <i className='bi bi-eyeglasses' onClick={() => {setSelectedEmployee(staff);setModalIsOpen(true)}}></i>&nbsp; &nbsp; &nbsp;
                    <Link to={`/employee/${staff.id}`}><i className='bi bi-pencil-square'></i>&nbsp; &nbsp; &nbsp;</Link>
                   <Link to={`/`}>
                    <i className='bi bi-person-dash-fill'id="delete" onClick={() => props.deleteEmployee(staff.id)}></i>
                    </Link>
                </td>
            </tr>
        ))
    };
    const loading = () => {
        return <tr><td>Loading...</td></tr>
    };
    return (
        <div className='container'>
        <div className='row'>
        <Nav /> 
        <div className='main-table col-sm-9'>
            <table className='table table-striped table-sm'>
                <thead>
                    <tr>
                        <th scope='col'>Employee Name</th>
                        <th scope='col'>Job Title</th>
                        <th scope='col'>Department</th>
                        <th scope='col'>Action Items</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Employee ? loaded() : loading()}
                    <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{

                        content: {
                            color: '#097392', 
                            left: '120px',
                            right: '120px',
                            bottom: '220px',
                        }
                    }}>
                       <div className='modal-view'>
                           <h3 className='modal-name'>{selectedEmployee.lastName}, {selectedEmployee.firstName}</h3>
                            <h4 className='modal-name'>{selectedEmployee.jobTitle} for the {selectedEmployee.department} Department</h4>
                            <p>Direct Supervisor: {selectedEmployee.directSupervisor}</p>
                            <p>Start Date: {selectedEmployee.startDate}</p>
                            <p>End of Probation Period: {selectedEmployee.probationPeriod}</p>
                            <p>Current Salary: US${selectedEmployee.salary}</p>
                            <h4 className='modal-name'>Personal Information:</h4>
                            <p>Date of Birth: {selectedEmployee.dob}</p>
                            <p>Email Address: {selectedEmployee.email}</p>
                            <p>Phone Number: {selectedEmployee.officePhone}</p>
                            <div>
                            <i className='bi bi-x-circle' onClick={() => setModalIsOpen(false)}></i>
                        </div> 
                        </div>
                    </Modal>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    )
};

export default AllStaff;