import React from "react";
import Input from "./Input/Input";
import Country from "./Country/Country";

export class CountriesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://restcountries.eu/rest/v2/all",
      fetchedData: null,
    };
  }
  async componentDidMount() {
    const response = await fetch(this.state.url);
    const data = await response.json();
    this.setState({ fetchedData: data });
    console.log(this.state.fetchedData);
  }

  searchByInput = (event) => {
    let inputValue = event.target.value;
  };

  render() {
    return (
      <div>
        <Input />
        {this.state.fetchedData ? (
          <div>
            <Country countries={this.state.fetchedData} />
          </div>
        ) : (
          []
        )}
      </div>
    );
  }
}
