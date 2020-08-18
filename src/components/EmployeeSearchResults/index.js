import React from "react";
import "./style.css";




function EmployeeSearchResults(props) {
  return (
    <div>
    <button onClick={props.filterName}>Name</button>
    <button onClick={props.filterCell}>Cell</button>
    <button onClick={props.filterDob}>Date of Birth</button>
    <button onClick={props.filterMale}>Male Employees</button>
    <button onClick={props.filterFemale}>Female Employees</button>
    <ul className="list-group search-results">
      {props.employeeResults.map(employeeResultsi => (
        <li key={employeeResultsi.cell} className="list-group-item">
          <img alt="Employee" src={employeeResultsi.picture.thumbnail} className="img-fluid" />
          {" "+employeeResultsi.name.first +" "+ employeeResultsi.name.last}
          {" "+ employeeResultsi.cell}
          {" "+ employeeResultsi.email}
          {" "+ employeeResultsi.dob.date}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default EmployeeSearchResults;
