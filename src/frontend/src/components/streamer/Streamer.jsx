import { Link } from "react-router-dom";
import "./streamer.css";

export default function Streamer({ name, video_preview }) {
  return (
    <Link to={"/streamer/" + name} className="col-6 col-lg-4 streamer-card">
      <div className="vstack text-center text-light p-2">
        <video
          className="video-streamer-main"
          src={video_preview}
          typeof="video/webm"
          muted
          autoPlay
          loop
        ></video>
        <h4 className="panel-text text-h4-custom p-2">{name}</h4>
      </div>
    </Link>
  );
}
