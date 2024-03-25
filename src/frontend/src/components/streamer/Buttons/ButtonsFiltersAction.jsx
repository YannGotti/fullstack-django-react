import "../streamer.css";

export default function ButtonsFiltersAction({ onClick }) {
  return (
    <div className="buttonGroupFilter hstack gap-5 d-flex justify-content-center">
      <button
        className="btn btn-otline-dark text-h5-custom text-light buttonFilter"
        onClick={() => onClick("animations")}
      >
        Анимация
      </button>

      <button
        className="btn btn-otline-dark text-h5-custom text-light buttonFilter"
        onClick={() => onClick("cloth")}
      >
        Одежда
      </button>
    </div>
  );
}
