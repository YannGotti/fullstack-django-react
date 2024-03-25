import React, { createContext, useContext, useState } from "react";

const VideoPrewiewContext = createContext();

export const SwitchVideoPrewiew = ({ children }) => {
  const [videoPreview, setVideoPreview] = useState(null);

  const setValue = (newValue) => {
    setVideoPreview(newValue);
  };

  return (
    <VideoPrewiewContext.Provider
      value={{ videoPreview, setVideoPreview: setValue }}
    >
      {children}
    </VideoPrewiewContext.Provider>
  );
};

export const useVideoPreview = () => {
  return useContext(VideoPrewiewContext);
};
