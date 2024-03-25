export default function InfoPanel({ streamer }) {
  return (
    <div className="info-panel p-3 shadow">
      <a
        href={streamer.twitch_url}
        className="text-h2-custom m-2 link-streamer"
      >
        {streamer.name}
      </a>
      <h3 className="text-h4-custom m-2 mt-4">{streamer.fullname}</h3>
      <h3 className="text-h4-custom m-2">Возраст: {streamer.age}</h3>
      <h3 className="text-h5-custom m-2">{streamer.description}</h3>
    </div>
  );
}
