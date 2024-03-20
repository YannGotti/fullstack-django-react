import axios from "axios";

export default async function fetchStreamers(filter = "all") {
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
