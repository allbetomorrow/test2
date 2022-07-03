import { NextApiRequest, NextApiResponse } from "next";
import { justSections } from "../../data/sections";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(justSections)
}