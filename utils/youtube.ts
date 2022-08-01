import { YOUTUBE_API_KEY } from "@/constants";
import axios from "axios";

const parseISO8601 = (iso: string) => {
  const r =
    /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

  const matches = iso.match(r);

  if (!matches) return null;
  return {
    sign: matches[1] === undefined ? "+" : "-",
    years: matches[2] === undefined ? 0 : matches[2],
    months: matches[3] === undefined ? 0 : matches[3],
    weeks: matches[4] === undefined ? 0 : matches[4],
    days: matches[5] === undefined ? 0 : matches[5],
    hours: matches[6] === undefined ? 0 : matches[6],
    minutes: matches[7] === undefined ? 0 : matches[7],
    seconds: matches[8] === undefined ? 0 : matches[8],
  };
};

const baseUrl = `https://youtube.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=contentDetails`;

interface Video {
  id: string;
  videoId: string;
}

interface YoutubeResponse {
  items: { id: string; contentDetails: { duration: string } }[];
}

async function getVideosDuration(
  videos: Video[]
): Promise<{ [key: string]: string }> {
  const url = videos.reduce(
    (acc, { videoId }) => acc + `&id=${videoId}`,
    baseUrl
  );

  const { data } = await axios.get<YoutubeResponse>(url);

  const durations: { [key: string]: string } = {};

  data.items.forEach(({ id, contentDetails: { duration } }) => {
    const parsed_duration = parseISO8601(duration);
    if (!parsed_duration) return "";
    const { hours, minutes, seconds } = parsed_duration;

    durations[id] = `${hours ? hours + "h " : ""}${
      minutes ? minutes + "m " : ""
    }${seconds ? seconds + "s" : ""}`;
  });

  return durations;
}

export default getVideosDuration;

/*
        if (YOUTUBE_API_KEY) {
          const { data: youtube_data } = await axios.get(
            `${baseUrl}part=contentDetails&id=${data.videoId}&key=${YOUTUBE_API_KEY}`,
            {
              headers: {
                Authorization: YOUTUBE_API_KEY,
                Accept: "application/json",
              },
            }
          );
          duration = youtube_data.items[0].contentDetails.duration as string;

          const matches = duration.match(iso8601Regex);

          if (matches) {
            const obj = {
              minutes: matches[7] === undefined ? 0 : matches[7],
              seconds: matches[8] === undefined ? 0 : matches[8],
            };

            duration = `${obj.minutes}min ${obj.seconds}s`;
          }
        }
        */
