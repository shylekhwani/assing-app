import { ConnectDB } from "@/server/config/dbConfig";
import { createHabitController } from "@/server/controllers/habitController";

export async function POST(req: Request) {
    await ConnectDB();
    return createHabitController(req)
}