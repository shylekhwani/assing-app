import { create } from "zustand";
import axios from "axios";

interface Habit {
  _id: string;
  goal: string;
  habit: string;
  habitType: string;
  period: string;
  checked: boolean;
}

interface States {
  goal: string;
  habit: string;
  habitType: string;
  period: string;
  habits: Habit[];
  checkedHabits: Record<string, boolean>; // Tracks checked habits as its inside an object
};

interface Actions {
 setGoal: (newGoal: string) => void;
 setHabit: (newHabit: string) => void;
 setHabitType: (newHabitType: string) => void;
 setPeriod: (newPeriod: string) => void;
 addHabits: () => Promise<void>;
 toggleHabitCheck: (habit: string) => void;
 getAllHabits: () => Promise<void>;
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
             const response = await axios.post("/api/habits", { // this will Save habit 
                goal,
                habit,
                habitType,
                period,
                checked: false,
              });
             const newHabit = response.data;
              set({
                habits: [...habits, newHabit],
                checkedHabits: { ...checkedHabits, [habit]: false },
                habit: "",
                goal: "",
              });
            } catch (error) {
              console.error("Failed to save habit:", error);
            }
          }
        },

        toggleHabitCheck: function (habitId: string) {
          set((state) => ({
            checkedHabits: {
              ...state.checkedHabits,
              [habitId]: !state.checkedHabits[habitId],
            },
          }));
        },
        
        getAllHabits: async function () {
          try {
            const response = await axios.get("/api/habits");
            console.log(response);
            set({ habits: response.data })
          } catch (error) {
            console.error("Failed to fetch habits:", error);
          }
        }
    };
});