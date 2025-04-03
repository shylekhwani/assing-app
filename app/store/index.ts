import { create } from "zustand";

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

        addHabits: function () {
            const { habit, habits, checkedHabits } = get(); // Get current state
            if (habit.trim() !== "") {
              set({
                habits: [...habits, habit], // Add habit to list
                checkedHabits: { ...checkedHabits, [habit]: false }, //  Initialize checkedHabits for the new habit
                habit: "", // Clear input field
              });
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