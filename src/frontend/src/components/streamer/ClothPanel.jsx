import { useEffect, useState } from "react";
import { fetchAttributesStreamer } from "../../axios/requests";
import StreamerAttributes from "./StreamerAttributes";
import "./streamer.css";

function ButtonsFiltersAction({ onClick }) {
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

function GetStreamerAttributes(streamerAttributes, onClick) {
  return streamerAttributes.map((streamer, index) => (
    <StreamerAttributes
      key={index}
      video_attribute={streamer.video_attribute}
      onClick={onClick}
    />
  ));
}

export default function ClothPanel({ streamer, switchVideoPrewiew }) {
  const [filter, setFilter] = useState("animations");
  const [streamerAttributes, setStreamerAttributes] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAttributesStreamer(streamer.name, filter);
      setStreamerAttributes(GetStreamerAttributes(data, switchVideoPrewiew));
    }

    fetchData();
  }, [filter]);

  function switchFilterAction(filter) {
    setFilter(filter);
  }

  return (
    <div className="cloth-panel p-3 shadow">
      <ButtonsFiltersAction onClick={switchFilterAction} />

      <div className="p-1 mt-3 cloth-panel-activate">
        <div className="row d-flex justify-content-center m-3">
          {streamerAttributes}
        </div>
      </div>
    </div>
  );
}
