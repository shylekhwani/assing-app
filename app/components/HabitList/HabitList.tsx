import { MoreVertical } from "lucide-react";
import { CheckBox } from "./CheckBox";
import { useCreateHabitsStore } from "@/app/store";
// import { useEffect } from "react";

export const HabitList = function() {

    const {habits, checkedHabits, toggleHabitCheck} = useCreateHabitsStore();

    // useEffect(()=>{ 
    //     const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    //     setHabits(storedHabits)},
    //     [setHabits]);
    
    return (
        <>
         <div className="p-4">
      <h3 className="text-lg font-bold mb-2 text-white">Todays Habits</h3>

      {habits?.length === 0 ? (
        <p className="text-white">No habits added yet.</p>
      ) : (
        habits?.map((habit, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-3 rounded-lg shadow-md mb-2 
                        ${checkedHabits[habit] ? "bg-green-400" : "bg-white"}`}
          >
            <p
              id={`habit-${index}`}
              className={`font-bold ${checkedHabits[habit] ? "text-white" : "text-gray-800"}`}
            >
              {habit}
            </p>

            <div className="flex items-center space-x-3">
              <CheckBox 
                checked={checkedHabits[habit] || false}
                onChange={() => toggleHabitCheck(habit)}
              />
              <button className="text-gray-500 hover:text-gray-700">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
        </>
    );
};