import { useEffect, useState } from "react";
import Streamer from "./streamer/attributes/Streamer";
import NotComponent from "./notComponent/NotComponent";
import { fetchStreamers } from "../axios/requests";

export default function Content() {
  const [streamers, setStreamers] = useState([]);

  function getStreamers(data) {
    return data.map((streamer, index) => (
      <Streamer
        key={index}
        name={streamer.name}
        video_preview={streamer.video_preview}
      />
    ));
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStreamers();
      setStreamers(getStreamers(data));
    }

    fetchData();
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      {streamers ? streamers : <NotComponent target="Стримеры отсутствуют." />}
    </div>
  );
}
