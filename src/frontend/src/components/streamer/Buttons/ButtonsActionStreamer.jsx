import "../streamer.css";

export default function ButtonsActionStreamer({ onClick }) {
  return (
    <div
      className="hstack gap-5 wrapper d-flex justify-content-center shadow"
      style={{ height: 78 }}
    >
      <button
        className="btn btn-otline-dark text-h5-custom text-light buttonAction"
        onClick={() => onClick("info")}
      >
        Информация
      </button>

      <button
        className="btn btn-otline-dark text-h5-custom text-light buttonAction"
        onClick={() => onClick("cloth")}
      >
        Визуализация
      </button>
    </div>
  );
}
