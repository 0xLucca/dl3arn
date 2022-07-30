import { NextApiRequest, NextApiResponse } from "next";
import { store } from "services/firebase/admin";
import { VideoModel } from "utils/types/firebase";
import { APIGetVideoById } from "utils/types/video";

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<APIGetVideoById>
) => Promise<any>;

const handler: Handler = async (req, res) => {
  const { id } = req.query;
  if (typeof id !== "string") return res.json(null);

  const ref = await store.collection("videos").doc(id).get();
  const video = { id: ref.id, ...ref.data() } as VideoModel;

  const userHasVideo = true;
  if (userHasVideo) return res.json(video);
  return res.json(null);
};

export default handler;
