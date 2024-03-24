import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchStreamers } from "../../axios/requests";
import Header from "../../components/Header";
import UrlsForStreamer from "../../components/streamer/UrlsForStreamer";
import ButtonsActionStreamer from "../../components/streamer/ButtonsActionStreamer";
import InfoPanel from "../../components/streamer/InfoPanel";
import ClothPanel from "../../components/streamer/ClothPanel";
import "./StreamerPage.css";

export default function StreamerPage() {
  const params = useParams();
  const [streamer, setStreamer] = useState([]);
  const [action, setAction] = useState("info");
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStreamers(params.streamer);
      setStreamer(data);
      setVideoPreview(data.video_preview);
    }

    fetchData();
  }, []);

  function switchActionPanel(action) {
    setAction(action);
  }

  function switchVideoPrewiew(videoPreview) {
    setVideoPreview(videoPreview);
  }

  return (
    <>
      <Header></Header>

      <div className="container">
        <div className="row d-flex justify-content-center text-light row-height">
          <div className="col-12 col-lg-7 text-center d-flex align-self-end justify-content-center">
            <video
              className="video-streamer"
              src={videoPreview}
              muted
              loop
              autoPlay
            ></video>
          </div>
          <div className="col-12 col-lg-5 text-start d-flex align-self-center">
            <div className="vstack gap-2">
              <ButtonsActionStreamer onClick={switchActionPanel} />

              {action === "info" && <InfoPanel streamer={streamer} />}
              {action === "cloth" && (
                <ClothPanel
                  streamer={streamer}
                  switchVideoPrewiew={switchVideoPrewiew}
                />
              )}

              <UrlsForStreamer streamer={streamer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
