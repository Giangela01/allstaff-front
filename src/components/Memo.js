import React from 'react';
import jsPDF from "jspdf";

function Memo(props) {
    const id = parseInt(props.match.params.id)
    const employee = props.Employee
    const staff = employee.find((emp) => {return emp.id === id})

    const generatePDF = () => {
        // initialize jsPDF
        const doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#content"), {
          callback: function(pdf) {
            pdf.save("voe.pdf")
          }
        })
      }

    return (
        <div className='memo-border'>
        <button onClick={generatePDF} id='submit-btn'>Generate PDF</button>
        <div id="content">
            <h1 className='memo-header'>The Example Company</h1>
            <h4 className='memo-title'>Verification of Employment</h4>
            <h5>TO WHOM IT MAY CONCERN:</h5>
            <p className='memo-font'>The information listed below confirms the employment status of the indicated The Example Company staff member as recorded in official records.</p>
            <table className='memo-table'>
                <tr>
                    <td className='table-memo'>Name:</td>
                    <td className='table-memo'>{staff.lastName}, {staff.firstName}</td>
                </tr>
                <tr>
                    <td className='table-memo'>Job Title:</td>
                    <td className='table-memo'>{staff.jobTitle}</td>
                </tr>
                <tr>
                    <td className='table-memo'>Employing Office:</td>
                    <td className='table-memo'>The Example Company</td>
                </tr>
                <tr>
                    <td className='table-memo'>Department:</td>
                    <td className='table-memo'>{staff.department}</td>
                </tr>
                <tr>
                    <td className='table-memo'>Place of Duty:</td>
                    <td className='table-memo'>1234 International Dr. Washington, DC 20008 </td>
                </tr>
                <tr>
                    <td className='table-memo'>Appointment Type:</td>
                    <td className='table-memo'>{staff.jobStatus}</td>
                </tr>
                <tr>
                    <td className='table-memo'>Date of Employment:</td>
                    <td className='table-memo'>{staff.startDate}</td>
                </tr>
                <tr>
                    <td className='table-memo'>Monthly Salary:</td>
                    <td className='table-memo'>US${staff.salary}</td>
                </tr>
            </table>
            <p className='memo-font'>This letter has been issued upon the employee’s request.</p>
            <p className='memo-font signee'>{staff.directSupervisor}</p>
            <p className='memo-font'>Supervisor</p>
        </div>
        </div>
    )
}

export default Memo;