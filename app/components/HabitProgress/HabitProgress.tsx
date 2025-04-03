import { useCreateHabitsStore } from "@/app/store";
import { ProgressBar } from "./ProgressBar";

export const HabitProgress = function() {

    const {habits, checkedHabits} = useCreateHabitsStore();

    const completedCount = Object.values(checkedHabits).filter(Boolean).length;
    const completedPercentage = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;

  return (
    <>
     <div className="flex items-center justify-center bg-orange-500 shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto">
            <div className="w-full max-w-xs flex justify-center items-center">
                {/* Left Side: Progress Bar */}
                <div className="w-24 h-24 flex items-center justify-center">
                    <ProgressBar percentage={completedPercentage} />
                </div>

                {/* Right Side: Habit Completion Info */}
                <div className="ml-6">
                    <h2 className="text-2xl font-semibold text-white sm:text-xl">{completedCount}/{habits.length} Habits</h2>
                    <p className="text-white text-lg sm:text-base">Completed Today!</p>
                </div>
            </div>
        </div>
    </>
  );
};