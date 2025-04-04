import { NextApiRequest, NextApiResponse } from "next";
import { createHabitService } from "@/server/services/habitService";

export default async function createHabitHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;

    const response = await createHabitService(data);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error creating habit" });
  }
};
