import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "services/firebase";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getDocs(collection(db, "test-course"));

  res.status(200).json({ data: data.docs.map((doc) => doc.data()) });
}

export default handler;
