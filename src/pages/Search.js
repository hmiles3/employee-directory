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
    error: ""
  };


  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUser()
    // .then(function(result){
    //   console.log(result.data.results[0])
    //   console.log(result.data.results[0].picture.thumbnail)
    //   console.log(result.data.results[0].name.first +" "+ result.data.results[0].name.last)
    //   console.log(result.data.results[0].phone)
    //   console.log(result.data.results[0].dob.date)

    //   // let peopleArray= result.data.results.map(function(currentEmployee){
    //   //   return currentEmployee
    //   // })
    //   return this.setState({employeeResults:result.data.results})

    //   // const doubledArray = originalArray.map(function(data) {
    //   //   return data * 2;
    //   // });
      

    // })

    .then(result=> this.setState({employeeResults:result.data.results}))
    // API.getBaseBreedsList()
    //   .then(res => this.setState({ breeds: res.data.message }))
    //   .catch(err => console.log(err));
  }


   filterName=(result)=>{
    var filterN= result.sort();
    console.log(filterN)
    this.setState({employeeResults:result.data.results})
    return filterN;
    

  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
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
          <EmployeeSearchResults employeeResults={this.state.employeeResults} />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
