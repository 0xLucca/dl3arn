import { DocumentData, CollectionReference } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "services/firebase/admin";
import { VideoModel } from "utils/types/firebase";
import { APIGetVideoById } from "utils/types/video";

interface ErrorNoNFT {
  message: string;
}

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<Partial<APIGetVideoById> | ErrorNoNFT>
) => Promise<any>;

const collectionFactory = <T = DocumentData>(collection: string) =>
  db.collection(collection) as CollectionReference<T>;

const videosCollection = collectionFactory<VideoModel>("videos");

const handler: Handler = async (req, res) => {
  const { id } = req.query;
  if (typeof id !== "string") return res.json(null);

  const ref = videosCollection.doc(id);
  const snapshot = await ref.get();
  const video = { id: ref.id, ...snapshot.data() };

  if (video.free) return res.json(video);
  return res.status(401).json({
    message: "Buy the NFT first",
  });
};

export default handler;
