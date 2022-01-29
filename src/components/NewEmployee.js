import React, { useState } from 'react';
import Nav from './Nav';


function NewEmployee(props) {
    const [newForm, setNewForm] = useState({
        lastName: "",
        firstName: "",
        email: "",
        officePhone: "",
        dob: "",
        department: "",
        directSupervisor: "",
        jobTitle: "",
        jobStatus: "",
        startDate: "",
        endDate: "",
        probationPeriod: "",
        salary: "",
      });
      const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        props.addEmployee(newForm);
        setNewForm({
            lastName: "",
            firstName: "",
            email: "",
            officePhone: "",
            dob: "",
            department: "",
            directSupervisor: "",
            jobTitle: "",
            jobStatus: "",
            startDate: "",
            endDate: "",
            probationPeriod: "",
            salary: "",
        });
      };
      
    return (
        <div className='container'>
        <div className='row'>
        <Nav /> 
        <div className="col-sm-9">
            <form onSubmit={handleSubmit}>
            <h3>Add Employee Information:</h3>
            <div className="mb-3">
                <label htmlFor="LastName" className="form-label">Employee Last Name</label>
                <input 
                type="text" 
                value={newForm.lastName}
                name="lastName"
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="FirstName" className="form-label">Employee First Name</label>
                <input 
                type="text" 
                value={newForm.firstName}
                name="firstName"
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Employee Email</label>
                <input 
                type="text" 
                value={newForm.email}
                name="email"
                onChange={handleChange}
                placeholder='jsmith@example.com'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
                <input 
                type="text" 
                value={newForm.officePhone}
                name="officePhone"
                onChange={handleChange}
                placeholder='000-000-0000'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input 
                type="text" 
                value={newForm.dob}
                name="dob"
                onChange={handleChange}
                placeholder='YYYY-MM-DD'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="department" className="form-label">Department</label>
                <input 
                type="text" 
                value={newForm.department}
                name="department"
                onChange={handleChange}
                placeholder='e.g. Accounting, Administration, Marketing'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="directSupervisor" className="form-label">Direct Supervisor</label>
                <input 
                type="text" 
                value={newForm.directSupervisor}
                name="directSupervisor"
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                <input 
                type="text" 
                value={newForm.jobTitle}
                name="jobTitle"
                onChange={handleChange}
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="jobStatus" className="form-label">Job Status</label>
                <input 
                type="text" 
                value={newForm.jobStatus}
                name="jobStatus"
                onChange={handleChange}
                placeholder='e.g. Full Time, Part Time, Contractual'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input 
                type="text" 
                value={newForm.startDate}
                name="startDate"
                onChange={handleChange}
                placeholder='YYYY-MM-DD'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="endDate" className="form-label">Expected End Date</label>
                <input 
                type="text" 
                value={newForm.endDate}
                name="endDate"
                onChange={handleChange}
                placeholder='YYYY-MM-DD'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="probationPeriod" className="form-label">Probation End Date</label>
                <input 
                type="text" 
                value={newForm.probationPeriod}
                name="probationPeriod"
                onChange={handleChange}
                placeholder='YYYY-MM-DD'
                className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Current Salary</label>
                <input 
                type="text" 
                value={newForm.salary}
                name="salary"
                onChange={handleChange}
                placeholder='00,000.00'
                className="form-control" />
            </div>
                <input id='submit-btn' type="submit" value="Add New Employee" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default NewEmployee;