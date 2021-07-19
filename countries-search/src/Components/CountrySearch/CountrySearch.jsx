import React from "react";
import Input from "../Input/Input";
import Country from "../Country/Country";
import "./CountrySearch.css";

export class CountriesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://restcountries.eu/rest/v2/all",
      fetchedData: null,
      filteredCountries: null,
      isInputFieldClicked: false,
    };
  }
  async componentDidMount() {
    const response = await fetch(this.state.url);
    const data = await response.json();
    this.setState({ fetchedData: data });
    console.log(this.state.fetchedData);
  }

  searchByInput = (event) => {
    const countries = this.state.fetchedData;
    this.setState({ isInputFieldClicked: true });
    let inputValue = event.target.value;
  
    const filteredCountries = countries.filter((country) => {
      let tempName = country.name.toLowerCase()
      if(tempName.includes(inputValue.toLowerCase())){
        return true
      }
      return false
    })
    this.setState({filteredCountries: filteredCountries})
  };

  render() {
    return (
      <div>
        <Input searchByInput={this.searchByInput} />
        {this.state.fetchedData && this.state.isInputFieldClicked ? (
          <div>
            <Country countries={this.state.filteredCountries} />
          </div>
        ) : (
          []
        )}
      </div>
    );
  }
}
