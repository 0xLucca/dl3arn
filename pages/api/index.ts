import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "services/firebase";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getDocs(collection(db, "test-course"));

  const {
    body: { token },
  } = req;

  if (!token) return res.status(401).json({});

  res.status(200).json({ data });
}

export default handler;
