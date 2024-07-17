// import React from "react";
// import "./map.scss";
// import "leaflet/dist/leaflet.css";

// const Maps = () => {
//   const position = [51.505, -0.09];
//   return (
//     <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map">
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default Maps;


import React from "react";
import { MapContainer, TileLayer,  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import Pin from "../pin/Pin";

const Maps = ({items}) => {
  const position = [51.505, -0.09];
  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   {items.map(item =>(
    <Pin item={item} key={item.id}/>
   ))}
    </MapContainer>
  );
};

export default Maps;
