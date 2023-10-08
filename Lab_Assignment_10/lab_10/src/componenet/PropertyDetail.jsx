// import React from "react";

// const PropertyDetail = ({ property }) => {
//   return (
//     <div>
//       <h2>Property Details</h2>
//       <p>Name: {property.name}</p>
//       <p>Description: {property.description}</p>
//       <img src={property.propertyImage} alt={property.name} />
//       {/* Display other property details */}
//     </div>
//   );
// };

// export default PropertyDetail;
import React from "react";

const PropertyDetail = ({ property }) => {
  return (
    <div className="card">
      <div className="card-body">
        <img
          class="card-img-top"
          src={property.propertyImage}
          alt={property.name}
          style={{ width: "100pxs", height: "300px" }}
        />
        <br /> <br />
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">Description: {property.description}</p>
        {/* Add more property details here */}
      </div>
    </div>
  );
};

export default PropertyDetail;
