import React from "react";
import "./main.css";
const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Properties:</h2>
      <ul>
        {properties.map((property) => (
          <React.Fragment key={property.id}>
            <li>{property.name}</li>
            <li>{property.description}</li>
          </React.Fragment>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};

export default PropertyList;
