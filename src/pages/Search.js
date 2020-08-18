import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import EmployeeSearchResults from "../components/EmployeeSearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    employeeResults:[],
    filteredEmployees:[],
    error: ""
  };


  componentDidMount() {
    API.getUser()

    .then(result=> this.setState({
      employeeResults:result.data.results,
      filteredEmployees:result.data.results
    }))
  }

  filterCell=()=>{
    this.setState({filteredEmployees:     
    this.state.employeeResults.sort((a, b) => (a.cell > b.cell) ? 1 : -1)
     })
  }

  filterName=()=>{
    this.setState({filteredEmployees:     
    this.state.employeeResults.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
     })
  }

  filterDob=()=>{
    this.setState({filteredEmployees:     
    this.state.employeeResults.sort((a, b) => (a.dob.age < b.dob.age) ? 1 : -1)
     })
  }
  filterMale=()=>{
    this.setState({filteredEmployees:     
    this.state.employeeResults.filter((a) => (a.gender === "male"))
     })
  }
  filterFemale=()=>{
    this.setState({filteredEmployees:     
    this.state.employeeResults.filter((a) => (a.gender === "female"))
     })
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <EmployeeSearchResults 
          filterName={this.filterName}
          filterCell={this.filterCell}
          filterDob={this.filterDob}
          filterMale={this.filterMale}
          filterFemale={this.filterFemale}
          employeeResults={this.state.filteredEmployees} 
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
