import "./streamer.css";

export default function ButtonsActionStreamer({ onClick }) {
  return (
    <div
      className="hstack gap-3 wrapper p-1 mt-3 d-flex justify-content-center shadow"
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
        Переодеть стримера
      </button>
    </div>
  );
}
