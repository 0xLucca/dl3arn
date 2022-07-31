import { DocumentData, CollectionReference } from "firebase-admin/firestore";
import { db } from "services/firebase/admin";
import { APIHandler, API_ERRORS } from "utils/types/api";
import { VideoModel } from "utils/types/firebase";
import { APIGetVideoById } from "utils/types/video";

const collectionFactory = <T = DocumentData>(collection: string) =>
  db.collection(collection) as CollectionReference<T>;

const videosCollection = collectionFactory<VideoModel>("videos");

interface CustomRequest {
  query: {
    id: string;
  };
}

type Handler = APIHandler<CustomRequest, APIGetVideoById>;
const handler: Handler = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(400).json({
      data: null,
      error: { message: "Video not found", code: API_ERRORS.VIDEO_NOT_FOUND },
      success: false,
    });

  const ref = videosCollection.doc(id);
  const snapshot = await ref.get();
  const video = { id: ref.id, ...snapshot.data() };

  if (video.free) return res.json({ data: video, error: null, success: true });
  return res.status(401).json({
    error: {
      message: "You don't have this NFT",
      code: API_ERRORS.BUY_NFT,
    },
    data: null,
    success: false,
  });
};

export default handler;
