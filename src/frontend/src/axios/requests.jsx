import axios from "axios";

export async function fetchStreamers(filter = "all") {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/streamers/?filter=" + filter
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAttributesStreamer(name, filter) {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/getAttributesStreamer/?name=" +
        name +
        "&filter=" +
        filter
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
