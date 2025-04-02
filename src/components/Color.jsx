import { useParams } from "react-router";
import "../index.css";

function Color() {
  const { color } = useParams();

  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      <h1>{color}</h1>
    </div>
  );
}

export default Color;
