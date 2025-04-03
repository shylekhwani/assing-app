"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const DonePage = function() {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Success Illustration */}
            <Image 
                src="/top-view-red-notebook-with-white-background.jpg"  
                alt="Success" 
                width={128} 
                height={128} 
                className="object-cover mb-6 rounded-lg shadow-lg"
            />

            {/* Message */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Done</h3>
            <p className="text-lg text-gray-600 mb-4">New Habit Goal Has Been Added.</p>

            {/* Button */}
            <button 
                onClick={() => router.push("/")}
                className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
                OK
            </button>
        </div>
    );
};
