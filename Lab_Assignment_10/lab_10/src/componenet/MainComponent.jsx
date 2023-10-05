import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PropertyList from "./PropertyList";
import PropertyDetail from "./PropertyDetail";
import propertyData from "./data"; // Import static property data

const MainComponent = () => {
  const [properties, setProperties] = useState(propertyData);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSearch = (searchQuery) => {
    // For simplicity, we'll filter properties based on the search query
    const filteredProperties = propertyData.filter((property) =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PropertyList
        properties={properties}
        onPropertySelect={handlePropertySelect}
      />
      {selectedProperty && <PropertyDetail property={selectedProperty} />}
    </div>
  );
};

export default MainComponent;
