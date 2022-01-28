import React, { useState } from 'react';

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
        <div>
            
        </div>
    );
};

export default NewEmployee;