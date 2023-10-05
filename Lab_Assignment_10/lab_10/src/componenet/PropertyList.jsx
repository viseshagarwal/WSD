import React from "react";

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Properties:</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
