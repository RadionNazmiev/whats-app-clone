import { Circle } from "better-react-spinkit";
import Image from "next/image";

function Loading() {
  return (
    <center
      style={{ display: "grid", placeItems: "center center", height: "100vh" }}
    >
      <div>
        <Image
          width={200}
          height={200}
          style={{ marginBottom: 10 }}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
