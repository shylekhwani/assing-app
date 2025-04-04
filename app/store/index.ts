import { create } from "zustand";
import axios from "axios";
interface States {
  goal: string;
  habit: string;
  habitType: string;
  period: string;
  habits: string[];
  checkedHabits: Record<string, boolean>; // Tracks checked habits as its inside an object
};

interface Actions {
 setGoal: (newGoal: string) => void;
 setHabit: (newHabit: string) => void;
 setHabitType: (newHabitType: string) => void;
 setPeriod: (newPeriod: string) => void;
 addHabits: () => void;
 toggleHabitCheck: (habit: string) => void;
};

export const useCreateHabitsStore = create<States & Actions>(function (set, get) {
    return {
        // initial states
        goal: "",
        habit: "",
        habitType: "",
        period: "",
        habits: [],
        checkedHabits: {},
        

        // Actions
        setGoal: function(newGoal: string) {
            set({goal: newGoal})
        },

        setHabit: function(newHabit:string) {
            set({habit: newHabit})
        },

        setHabitType: function(newHabitType:string) {
            set({habitType: newHabitType})
        },

        setPeriod: function(newPeriod:string) {
            set({period: newPeriod})
        },

        addHabits: async function () {
          const { goal, habit, habits, checkedHabits, period, habitType } = get(); // Get current state

          if (habit.trim() !== "") {
            try {
              await axios.post("/api/habits", { // this will Save habit 
                goal,
                habit,
                habitType,
                period,
                checked: false,
              });
        
              // Update local state after successful POST
              set({
                habits: [...habits, habit],
                checkedHabits: { ...checkedHabits, [habit]: false },
                habit: "", // Clear input
              });
            } catch (error) {
              console.error("Failed to save habit:", error);
            }
          }
        },

        toggleHabitCheck: function (habit) {
            set(function (state) {
              return {
                checkedHabits: {
                  ...state.checkedHabits, // Copy the current habits state
                  [habit]: !state.checkedHabits[habit], // Toggle the selected habit
                },
              };
            });
        },
    };
});