import { NextApiRequest, NextApiResponse } from "next";

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>;

const handler: Handler = async (req, res) => {};

export default handler;
