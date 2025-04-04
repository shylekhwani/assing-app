import { MoreVertical } from "lucide-react";
import { CheckBox } from "./CheckBox";
import { useCreateHabitsStore } from "@/app/store";
import { useEffect } from "react";

export const HabitList = function () {
  const { habits, checkedHabits, toggleHabitCheck, getAllHabits } = useCreateHabitsStore();

  useEffect(() => {
    getAllHabits(); // Fetch habits from the backend
  }, [getAllHabits]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 text-white">Today&apos;s Habits</h3>

      {habits?.length === 0 ? (
        <p className="text-white">No habits added yet.</p>
      ) : (
        habits.map((habitObj, index) => {
          const isChecked = checkedHabits[habitObj._id] || false;

          return (
            <div
              key={habitObj._id}
              className={`flex justify-between items-center p-3 rounded-lg shadow-md mb-2 transition-colors duration-200 ${
                isChecked ? "bg-green-800" : "bg-white"
              }`}
            >
              <p
                id={`habit-${index}`}
                className={`font-bold ${
                  isChecked ? "text-white" : "text-gray-800"
                }`}
              >
                {habitObj.habit}
              </p>

              <div className="flex items-center space-x-3">
                <CheckBox
                  checked={isChecked}
                  onChange={() => toggleHabitCheck(habitObj._id)}
                />
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
