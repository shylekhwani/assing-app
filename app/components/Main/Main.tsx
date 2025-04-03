"use client";

import { HabitProgress } from "../HabitProgress/HabitProgress";
import { HabitList } from "../HabitList/HabitList";
import { CreateNewHabit } from "../Habits/CreateNewHabit";

export const Main = function () {

    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-screen">
        <p className=" text-slate-600 dark:text-white">Sun 1 March 2022</p>
        <span className="text-lg font-bold text-slate-600 dark:text-white">
          Hello, <span className="text-orange-500">Susy</span>
          </span>
  
  
        <div className="w-full max-w-lg mt-6">
          <HabitProgress />
        </div>
        <div className="w-full max-w-lg mt-6">
          <HabitList />
        </div>
  
        <CreateNewHabit/>
      </div>
    );
  };
  