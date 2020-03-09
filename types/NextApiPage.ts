import { NextApiRequest, NextApiResponse } from "next"

export type NextApiPage = (req: NextApiRequest, res: NextApiResponse) => void;
