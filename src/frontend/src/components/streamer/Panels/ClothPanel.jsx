import { useEffect, useState } from "react";
import { fetchAttributesStreamer } from "../../../axios/requests";
import StreamerAttributes from "../attributes/StreamerAttributes";
import ButtonsFiltersAction from "../Buttons/ButtonsFiltersAction";
import NotComponent from "../../notComponent/NotComponent";

import "../streamer.css";

function GetStreamerAttributes(streamerAttributes) {
  return streamerAttributes.map((streamer, index) => (
    <StreamerAttributes
      key={index}
      video_attribute={streamer.video_attribute}
    />
  ));
}

export default function ClothPanel({ streamer }) {
  const [filter, setFilter] = useState("animations");
  const [streamerAttributes, setStreamerAttributes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAttributesStreamer(streamer.name, filter);
      setStreamerAttributes(GetStreamerAttributes(data));
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
        <div className="row d-flex justify-content-start m-3">
          {streamerAttributes.length !== 0 ? (
            streamerAttributes
          ) : (
            <NotComponent target="Визуализация отсутствует" />
          )}
        </div>
      </div>
    </div>
  );
}
