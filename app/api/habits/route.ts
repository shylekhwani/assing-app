import { ConnectDB } from "@/server/config/dbConfig";
import { createHabitController, deleteHabitByIdController, getAllHabitsController } from "@/server/controllers/habitController";

export async function POST(req: Request) {
    await ConnectDB();
    return await createHabitController(req)
};

export async function GET() {
    try {
        await ConnectDB();
        return await getAllHabitsController();
      } catch (error) {
        console.error("Error in /api/habits GET route:", error);
        return new Response("Internal Server Error", { status: 500 });
      }
};

export async function DELETE(req: Request) {
  try {
      await ConnectDB();
      return await deleteHabitByIdController(req);
    } catch (error) {
      console.error("Error in /api/habits GET route:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
};