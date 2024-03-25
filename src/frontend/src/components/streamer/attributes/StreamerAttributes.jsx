import { useVideoPreview } from "../../context/Contexts";

import "../streamer.css";

export default function StreamerAttributes({ video_attribute }) {
  const { setVideoPreview } = useVideoPreview();

  function onClick(videoPreview) {
    setVideoPreview(videoPreview);
  }

  return (
    <div className="col-12 col-md-12 col-lg-6 mt-1">
      <button
        className="button-attribute"
        onClick={() => onClick(video_attribute)}
      >
        <video
          className="video-attribute shadow"
          src={video_attribute}
          muted
          loop
          autoPlay
        ></video>
      </button>
    </div>
  );
}
