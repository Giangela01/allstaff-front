import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal'

Modal.setAppElement('#root')

function AllStaff (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const loaded = () =>{
        return props.Employee.map((staff) => (
            
            <tr key={staff.id}>
               <th scope='row'>{staff.firstName} {staff.lastName}</th>
               <td>{staff.jobTitle}</td>
               <td>{staff.department}</td>
               <td>
                    <i className='bi bi-eyeglasses' onClick={() => setModalIsOpen(true)}></i>&nbsp; &nbsp; &nbsp;
                    <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        overlay: {
                            backgroundColor: 'gray'
                        },
                        content: {
                            color: '#097392', 
                            left: '120px',
                            right: '120px',
                        }
                    }}>
                        <h3>{staff.lastName}, {staff.firstName}</h3>
                        <div>
                        <i className='bi bi-x-circle' onClick={() => setModalIsOpen(false)}></i>
                        </div>
                    </Modal>
                    <i className='bi bi-pencil-square'></i>&nbsp; &nbsp; &nbsp;
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
        <div className='main-table'>
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
                </tbody>
            </table>
        </div>
    )
};

export default AllStaff;