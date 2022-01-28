import React, { useState } from 'react';

function UpdateEmployee(props) {
    const id = parseInt(props.match.params.id)
    const employee = props.Employee
    const staff = employee.find((emp) => {return emp.id === id})

    const [editForm, setEditForm] = useState(staff);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
      }
    const handleSubmit = event => {
        event.preventDefault()
        props.updateEmployee(editForm, staff.id)
        props.history.push("/")
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Update Employee Information:</h3>
            <div className="mb-3">
                <label htmlFor="LastName" className="form-label">Employee Last Name</label>
                <input 
                type="text" 
                value={editForm.lastName}
                name="lastName"
                placeholder={staff.lastName}
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">Employee First Name</label>
                <input 
                type="text" 
                value={editForm.firstName}
                name="firstName"
                placeholder={staff.firstName}
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Employee Email</label>
                <input 
                type="text" 
                value={editForm.email}
                name="email"
                placeholder={staff.email}
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
                <input 
                type="text" 
                value={editForm.officePhone}
                name="officePhone"
                onChange={handleChange}
                placeholder={staff.officePhone}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input 
                type="text" 
                value={editForm.dob}
                name="dob"
                onChange={handleChange}
                placeholder={staff.dob}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="department" className="form-label">Department</label>
                <input 
                type="text" 
                value={editForm.department}
                name="department"
                onChange={handleChange}
                placeholder={staff.department}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="directSupervisor" className="form-label">Direct Supervisor</label>
                <input 
                type="text" 
                value={editForm.directSupervisor}
                name="directSupervisor"
                onChange={handleChange}
                placeholder={staff.directSupervisor}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                <input 
                type="text" 
                value={editForm.jobTitle}
                name="jobTitle"
                onChange={handleChange}
                placeholder={staff.jobTitle}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="jobStatus" className="form-label">Job Status</label>
                <input 
                type="text" 
                value={editForm.jobStatus}
                name="jobStatus"
                onChange={handleChange}
                placeholder={staff.jobStatus}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input 
                type="text" 
                value={editForm.startDate}
                name="startDate"
                onChange={handleChange}
                placeholder={staff.startDate}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="endDate" className="form-label">Expected End Date</label>
                <input 
                type="text" 
                value={editForm.endDate}
                name="endDate"
                onChange={handleChange}
                placeholder={staff.endDate}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="probationPeriod" className="form-label">Probation End Date</label>
                <input 
                type="text" 
                value={editForm.probationPeriod}
                name="probationPeriod"
                onChange={handleChange}
                placeholder={staff.probationPeriod}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Current Salary</label>
                <input 
                type="text" 
                value={editForm.salary}
                name="salary"
                onChange={handleChange}
                placeholder={staff.salary}
                className="form-control" />
            </div>
                <input id='submit-btn' type="submit" value="Update" />
            </form>
            
        </div>
    );
}

export default UpdateEmployee;