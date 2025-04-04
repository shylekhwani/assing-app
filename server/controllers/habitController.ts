import { NextResponse } from "next/server";
import { createHabitService, getAllHabitsService } from "@/server/services/habitService";

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

export const getAllHabitsController = async function () {
    try {
      const response = await getAllHabitsService();
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error getting all habits" }, { status: 500 });
    }
};