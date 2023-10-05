import React from "react";

const PropertyDetail = ({ property }) => {
  return (
    <div>
      <h2>Property Details</h2>
      <p>Name: {property.name}</p>
      <p>Description: {property.description}</p>
      {/* Display other property details */}
    </div>
  );
};

export default PropertyDetail;
