import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "services/firebase/admin";
import { videosCollection } from "services/firebase/store/collections";

const userHasVideo = (_address: string) => true;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, token } = req.body;

  const current_user = await auth.verifyIdToken(token);

  const ref = await getDoc(doc(videosCollection, id));
  const data = ref.data();

  if (!data || typeof data !== "object") return res.status(401).json(null);

  if (!userHasVideo(data.contract?.address || ""))
    return res.status(401).json(null);

  res.status(200).json({ data });
}

export default handler;
