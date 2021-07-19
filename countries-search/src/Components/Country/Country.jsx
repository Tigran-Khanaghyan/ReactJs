import React from "react";
import './Country.css'

export default function Country({countries}) {
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.name}>
            <img src={country.flag} alt="" />
            <p>{country.name}</p>
          </div>
        );
      })}
    </div>
  );
}
