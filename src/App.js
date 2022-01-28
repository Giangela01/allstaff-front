import { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import AllStaff from './components/AllStaff'
import NewEmployee from './components/NewEmployee'




function App() {
      const [Employee, setEmployee] = useState(null);
      const URL = "https://gt-staff-backend.herokuapp.com/employees/"
      const getEmployee = async () => {
      const response = await fetch(URL);
        const data = await response.json();
        setEmployee(data);
      };
      const addEmployee = async (mark) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getEmployee();
    };
    //Update with PUT Employee
    const updateEmployee = async (mark, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        });
        getEmployee();
    };
    //Delete with DELETE Employee
    const deleteEmployee = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        });
        getEmployee();
    };
    useEffect(() => getEmployee(), []);

  return (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
      <AllStaff 
        Employee={Employee}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
        />
      </ Route>
      <Route exact path="/add-new-employee">
      <NewEmployee
        Employee={Employee}
        addEmployee={addEmployee}
        />
      </ Route>
    </Switch>
  </>
  );
}

export default App;
