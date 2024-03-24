export default function UrlsForStreamer({ streamer }) {
  return (
    <div className="hstack gap-1 wrapper p-1 mt-3 d-flex justify-content-center shadow">
      <a
        href={streamer.instagram_url}
        className="icon instagram"
        target="_blank"
      >
        <div className="tooltip">Instagram</div>
        <span className="d-flex justify-content-center mt-3">
          <i className="fab fa-instagram"></i>
        </span>
      </a>

      <a href={streamer.youtube_url} className="icon youtube" target="_blank">
        <div className="tooltip">Youtube</div>
        <span className="d-flex align-self-center justify-content-center mt-3">
          <i className="fab fa-youtube"></i>
        </span>
      </a>

      <a href={streamer.twitch_url} className="icon twitch" target="_blank">
        <div className="tooltip">Twitch</div>
        <span className="d-flex align-self-center justify-content-center mt-3">
          <i className="fab fa-twitch"></i>
        </span>
      </a>
    </div>
  );
}
