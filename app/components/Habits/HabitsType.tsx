import { useCreateHabitsStore } from "@/app/store";

export const HabitType = function() {
 const {habitType, setHabitType} = useCreateHabitsStore();
    return (
        <select 
            value={habitType} 
            onChange={(e) => setHabitType(e.target.value)} 
            className="select select-bordered bg-slate-200 text-slate-900"
        >
            <option value="" disabled>Select a Type</option>
            <option value="Everday">Everday</option>
            <option value="Weekly">Weekly</option>
            <option value="Twice in a month">Twice in a month</option>
        </select>
    );
};
