import React from "react";
import "./Country.css";

export default function Country({ countries }) {
  
  return (
    <div className='countries'>
      {countries.map((country) => {
        return (
          <div className="country-field" key={country.name}>
            <div>
              <img src={country.flag} alt="" />
            </div>
            <div>
              <p>{country.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
