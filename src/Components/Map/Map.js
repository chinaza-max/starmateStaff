import React, { useRef, useEffect, useState } from 'react';

const MapContainer = ({ origin, destination,  routeP }) => {
  const mapRef = useRef(null);
  const [distance, setDistance] = useState(null);


  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const mapOptions = {
      center: origin,
      zoom: 14,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    directionsRenderer.setMap(map);
    directionsRenderer.setOptions({ polylineOptions: { strokeColor: 'red' } });

    const originMarker = new window.google.maps.Marker({
      position: origin,
      map: map,
      title: 'Origin',
    });

    const destinationMarker = new window.google.maps.Marker({
      position: destination,
      map: map,
      title: 'Destination',
    });

    const request = {
      origin,
      destination,
      travelMode: routeP
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        setDistance(result.routes[0].legs[0].distance.text);
        console.log(result.routes[0].legs[0].distance.text)
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  }, [origin, destination]);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default MapContainer;
