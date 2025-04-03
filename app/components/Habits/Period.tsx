import { useCreateHabitsStore } from "@/app/store";

export const Period = function() {
    const {period, setPeriod} = useCreateHabitsStore(); 

    return (
        <select 
            value={period} 
            onChange={(e) => setPeriod(e.target.value)} 
            className="select select-bordered bg-slate-200 text-slate-900"
        >
            <option value="" disabled>Select a period</option>
            <option value="1 Month">1 Month</option>
            <option value="2 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
        </select>
    );
};
