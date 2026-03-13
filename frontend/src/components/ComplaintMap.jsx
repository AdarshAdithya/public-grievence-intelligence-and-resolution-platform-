import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function ComplaintMap({ complaints }) {

  return (

    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {complaints.map((c) => (
        <Marker key={c.complaint_id} position={[c.latitude, c.longitude]}>
          <Popup>
            <b>ID:</b> {c.complaint_id} <br />
            {c.description}
          </Popup>
        </Marker>
      ))}

    </MapContainer>

  );
}

export default ComplaintMap;