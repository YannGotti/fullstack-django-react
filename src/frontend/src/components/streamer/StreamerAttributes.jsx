import "./streamer.css";

export default function StreamerAttributes({ video_attribute, onClick }) {
  return (
    <div className="col-12 col-lg-6">
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
