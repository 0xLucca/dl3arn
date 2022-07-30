import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "services/firebase/admin";
import { videosCollection } from "services/firebase/store/collections";

const userHasVideo = (_address: string) => true;

const isAuthorized = async (cookies: { [key: string]: string | undefined }) => {
  const { token } = cookies;
  if (!token || typeof token !== "string") return null;
  const user = await auth.verifyIdToken(token);
  if (!user) return null;
  return user;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  const user = await isAuthorized(req.cookies);

  const ref = await getDoc(doc(videosCollection, id));
  const data = ref.data();

  if (!data || typeof data !== "object") return res.status(401).json(null);

  if (!userHasVideo(data.contract?.address || ""))
    return res.status(401).json(null);

  res.status(200).json({ data });
}

export default handler;
