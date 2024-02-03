// MapComponent.js
import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"

const MapComponent = () => {
    // city co-ordinates
  const position = [17.560563 , 78.167833 ]; 
  const redMarker = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
const stores = [
    {id:1,position:[17.617273715310798, 78.0805635340919],title:"AVANI"},
    {id:2,position:[17.5276098574628, 78.17847225391873],title:"SUPRABHAT Bags"},
    {id:3,position:[17.48451656065762, 78.30368040761371],title:"Back To Roots Organic Store"},
    {id:4,position:[17.478294702584723, 78.31140518341236],title:"Maati"},
    {id:4,position:[17.494994998236063, 78.34745407355652],title:"24 Mantra Organic Shop"},
    {id:4,position:[17.501871144715608, 78.35912704750798],title:"Sukalpa EcoStore"},
]
  return (
    <div className='main'>
      <h1 className='display-3'>Eco-Stores Around You</h1>
    <p> Shop Eco-Friendly to promote sustainability </p>
    <div className='map'>

    <MapContainer center={position} zoom={12} style={{ height: '400px', width: '800px' ,border: '2px solid black' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
       {stores.map((location) => (
        <Marker key={location.id} position={location.position}>
          <Tooltip permanent>
            {location.title}
          </Tooltip>
        </Marker>

      ))}
      <Marker  position={position} icon={redMarker} >
          <Tooltip permanent>
            <div>
            <strong>You</strong>
            </div>
          </Tooltip>
        </Marker>
    </MapContainer>
    </div>
    </div>
  );
};

export default MapComponent;
