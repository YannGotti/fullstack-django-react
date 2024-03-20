import { useEffect, useState } from "react";
import Streamer from "./streamer/Streamer";

import fetchStreamers from "../axios/requests";

export default function Content() {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStreamers();
      setStreamers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {streamers.map((streamer, index) => (
          <Streamer
            key={index}
            name={streamer.name}
            video_preview={streamer.video_preview}
          />
        ))}
      </div>
    </div>
  );
}
