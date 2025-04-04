"use client";

import { Period } from "./Period";
import { HabitType } from "./HabitsType";
import { useCreateHabitsStore } from "@/app/store";
// import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const CreateNewHabit = function() {

    const {goal, habit, setGoal, setHabit, addHabits} = useCreateHabitsStore();

    const router = useRouter();

    const handleSubmit = function(e: React.FormEvent) {
        e.preventDefault();

        addHabits();
        setGoal("");
        setHabit("");
        router.push("/doneRoute");
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal?.close(); // this make TypeScript knows it's a dialog
    };
    
    const openModal = function() {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal?.showModal(); 
    };
    

//    useEffect(()=>{
//     localStorage.setItem("habits",JSON.stringify(habits))
//    },[habits]);

    return (
        <>
            {/* Floating Action Button */}
            <button 
                className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-300 hover:bg-green-600 text-white text-3xl font-bold w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
                onClick={openModal}
            >
                +
            </button>

            {/* Modal */}
            <dialog id="my_modal_3" className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="modal-box bg-white dark:bg-white rounded-xl p-8 shadow-xl w-full max-w-md">
                    <form method="dialog">
                        {/* Close button */}
                        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-2xl">
                            ✕
                        </button>
                    </form>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-900 mb-6 text-center">Create New Habit Goal</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Goal Input */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-900 font-medium mb-1">Your Goal</label>
                            <input 
                                type="text"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                placeholder="Enter Your Goal"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-slate-900"
                            />
                        </div>

                        {/* Habit Name Input */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-900 font-medium mb-1">Habit Name</label>
                            <input
                                type="text"
                                value={habit}
                                onChange={(e) => setHabit(e.target.value)}
                                placeholder="Enter Your Goal"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-100 dark:border-gray-700 dark:text-slate-900"
                            />
                        </div>

                        {/* Period Selection */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-md font-medium text-gray-900 dark:text-gray-900">Period</label>
                            <Period />
                        </div>

                        {/* Habit Type Selection */}
                        <div className="flex flex-col space-y-1">
                            <label className="text-md font-medium text-gray-700 dark:text-gray-900">Habit Type</label>
                            <HabitType />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-700 transition">
                            Create New
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};
