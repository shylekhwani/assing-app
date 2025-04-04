import { NextResponse } from "next/server";
import { createHabitService } from "@/server/services/habitService";

export const createHabitController = async function (req: Request) {
  try {
    const data = await req.json();
    const response = await createHabitService(data);
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating habit" }, { status: 500 });
  }
};