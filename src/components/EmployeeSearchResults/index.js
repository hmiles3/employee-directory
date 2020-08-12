import React from "react";
import "./style.css";




function EmployeeSearchResults(props) {
  return (
 
    <ul className="list-group search-results">
      {props.employeeResults.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result.picture.thumbnail} className="img-fluid" />
          {" "+result.name.first +" "+ result.name.last}
          {" "+ result.phone}
          {" "+ result.email}
          {" "+ result.dob.date}
        </li>
      ))}
    </ul>
  );
}

export default EmployeeSearchResults;
