// import React from "react";
// import "./main.css";
// const PropertyList = ({ properties }) => {
//   return (
//     <div>
//       <h2>Properties:</h2>
//       <ul>
//         {properties.map((property) => (
//           <React.Fragment key={property.id}>
//             <li>{property.name}vgvgvgvg</li>
//             <li>{property.description}</li>
//             <li>
//               <img
//                 src={property.propertyImage}
//                 alt={property.name}
//                 style={{ width: "100pxs", height: "100px" }}
//               />
//             </li>
//           </React.Fragment>
//         ))}
//       </ul>
//       <ul></ul>
//     </div>
//   );
// };

// export default PropertyList;

import React from "react";

const PropertyList = ({ properties, onPropertySelect }) => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Properties</h2>
      <div className="row">
        {properties.map((property) => (
          <div key={property.id} className="col-lg-4 col-md-6 mb-4">
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
                <p className="card-text">Bedrooms: {property.bedrooms}</p>
                <p className="card-text">Location: {property.location}</p>
                {/* Add more property details here */}
                <p className="card-text">
                  <b>Price: </b>
                  {property.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
