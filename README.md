# An Example Company Document Generator
This project allows users (ideally administrative employees) to maintain employee database and generate PDF Documents. 

## Usage Example
* Home Page - Users can view, update and delete employees for the table.
![Home Page](https://i.imgur.com/NaK41Dw.png)
* Add Employee Page - Users can add employees in the table.
![Add Employee](https://i.imgur.com/WY31BF4.png)

## Technologies used
* Javascript
* HTML
* CSS
* React
* Bootstrap
* jspdf
* react-modal

#### React Router Table 
    -> App
      -> Header
        -> Switch
          ->Route exact path="/"
            ->AllStaff
              Employee={Employee}
              deleteEmployee={deleteEmployee}
          ->Route path="addemployee"
            ->NewEmployee
              Employee={Employee}
              addEmployee={addEmployee}
          ->Route path: "/memo/:id
            ->Memo
              Employee={Employee}
          ->Route path="employee/:id
            ->UpdateEmployee
              Employee={Employee}
              updateEmployee={updateEmployee}

### Initial Wireframes
![Home Page](https://i.imgur.com/LJtVMXK.png)
![Edit Page](https://i.imgur.com/oyRMdf8.png)
![PDF Page](https://i.imgur.com/nWgl8Dm.png)

### Deployed Live Website
https://gt-documentgenerator.netlify.app/

#### Future Enhancements 
* User Authentication

#### Contributing
Pulls are always welcome. Any contributions and fixes you make are greatly appreciated. Thank you in advance!
