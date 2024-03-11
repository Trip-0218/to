// DestinationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Css/DestinationDetail.css';

const DestinationDetail = ({ places }) => {
  const { id } = useParams();

  // Find the destination based on the id
  const destination = places.find(place => place.id === parseInt(id, 10));

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="place-detail-container">
      <img
        src={destination.image}
        alt="img"
        className='Detailplace-image'
      />
      <h2 className="place-name">{destination.name}</h2>
      <p className="place-location">Location: {destination.location}</p>
      <p className="place-price">Price: ${destination.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DestinationDetail;
