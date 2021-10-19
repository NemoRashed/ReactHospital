import React from "react";
import Appiontment from "./Appiontment";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DepartmentCards from "./DepartmentCards";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow,
// } from "react-google-maps";

// function Map() {
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = (e) => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//       defaultOptions={{ styles: mapStyles }}
//     >
//       {parkData.features.map((park) => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0],
//           }}
//           onClick={() => {
//             setSelectedPark(park);
//           }}
//           icon={{
//             url: `/skateboarding.svg`,
//             scaledSize: new window.google.maps.Size(25, 25),
//           }}
//         />
//       ))}

//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0],
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));

function Departments(props) {
  const { id } = useParams();
  const [info, setinfo] = useState(false);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        {/* <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
      </div>
      <div>
        {info ? (
          <button
            style={{
              backgroundColor: "red",
              width: " 100px",
              height: "29px",
              marginLeft: "30px",
              borderRadius: "7px",
              color: "white",
            }}
            onClick={() => setinfo(false)}
          >
            Close
          </button>
        ) : (
          <button
            style={{
              backgroundColor: "blue",
              width: " 150px",
              height: "35px",
              marginLeft: "30px",
              borderRadius: "7px",
              color: "white",
              marginTop: "20px",
              fontSize: "20px",
            }}
            onClick={() => setinfo(true)}
          >
            Appiontment
          </button>
        )}
      </div>
      {info && form()}
      <div className="flex">
        <img
          src="https://th.bing.com/th/id/R.cbfb18c509cad24d89d664b2d6f44ba8?rik=oMcrX5zThM75hA&pid=ImgRaw&r=0"
          className="hos-img"
        />
        <img
          className="hos-img"
          src="https://th.bing.com/th/id/R.9e27ac44ce28c62b6eedbdca3858d342?rik=Jm9b13yLyN4Ztw&pid=ImgRaw&r=0"
        />
      </div>
      <DepartmentCards />
    </>
  );
  function form() {
    return <Appiontment />;
  }
}

export default Departments;
