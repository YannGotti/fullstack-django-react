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
          <div className="col-12 col-lg-8 text-center d-flex align-self-end justify-content-center">
            <video
              className="video-streamer"
              src={streamer.video_preview}
              muted
              loop
              autoPlay
            ></video>
          </div>
          <div className="col-12 col-lg-4 text-start d-flex align-self-center">
            <div className="vstack gap-2">
              <div className="hstack gap-1 wrapper p-1 mt-3 d-flex justify-content-center">
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

                <a
                  href={streamer.twitch_url}
                  class="icon twitch"
                  target="_blank"
                >
                  <div class="tooltip">Twitch</div>
                  <span className="d-flex align-self-center justify-content-center mt-3">
                    <i class="fab fa-twitch"></i>
                  </span>
                </a>
              </div>

              <div className="info-panel p-3">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
