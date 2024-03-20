import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import fetchStreamers from "../../axios/requests";
import Header from "../../components/Header";
import "./StreamerPage.css";

export default function StreamerPage() {
  const params = useParams();
  const [streamer, setStreamer] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStreamers(params.streamer);
      setStreamer(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header></Header>

      <div className="container">
        <div className="row d-flex justify-content-center text-light row-height">
          <div className="col-12 col-lg-8 text-center d-flex align-self-end">
            <video
              className="video-streamer"
              src={streamer.video_preview}
              muted
              loop
              autoPlay
            ></video>
          </div>
          <div className="col-12 col-lg-4 text-start">
            <h3 className="text-h3-custom">{streamer.name}</h3>
            <h3 className="text-h4-custom">{streamer.fullname}</h3>
            <h3 className="text-h4-custom">Возраст: {streamer.age}</h3>
            <h3 className="text-h4-custom">{streamer.description}</h3>

            <div className="hstack gap-1 wrapper">
              <a
                href={streamer.instagram_url}
                class="icon instagram"
                target="_blank"
              >
                <div class="tooltip">Instagram</div>
                <span className="d-flex justify-content-center mt-3">
                  <i class="fab fa-instagram"></i>
                </span>
              </a>

              <a
                href={streamer.youtube_url}
                class="icon youtube"
                target="_blank"
              >
                <div class="tooltip">Youtube</div>
                <span className="d-flex align-self-center justify-content-center mt-3">
                  <i class="fab fa-youtube"></i>
                </span>
              </a>

              <a href={streamer.twitch_url} class="icon twitch" target="_blank">
                <div class="tooltip">Twitch</div>
                <span className="d-flex align-self-center justify-content-center mt-3">
                  <i class="fab fa-twitch"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
