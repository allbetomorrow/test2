import { NextApiRequest, NextApiResponse } from "next";
import { getSectionTasks } from "../../data/sections";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const tasks = getSectionTasks(req.body.url as string)
  res.status(200).json(tasks)
}