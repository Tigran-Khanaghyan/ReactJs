import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export class CountriesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://restcountries.eu/rest/v2/name/",
    };
  }

  sendFetchRequest = (event) => {
    let inputValue = event.target.value;
    fetch(this.state.url + inputValue)
        .then(response => response.json())
        .then(data => console.log(data))
  };

  render() {
    return (
      <>
        <Input sendFetchRequest={this.sendFetchRequest} />
        <Button />
      </>
    );
  }
}
