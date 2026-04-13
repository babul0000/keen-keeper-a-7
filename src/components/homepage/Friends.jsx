"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Friends = ({ item }) => {
    const { id, picture, name, days_since_contact, tags, status } = item;
    const router = useRouter();

    const getStatusColor = (status) => {
        if (status === "overdue") return "bg-red-500 text-white";
        if (status === "almost due") return "bg-orange-500 text-white";
        return "bg-emerald-500 text-white";
    };

    return (
        <div
            onClick={() => router.push(`/home/${id}`)}

            className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 
                    hover:shadow-2xl hover:border-blue-300 transition-all duration-300 
                    cursor-pointer flex flex-col items-center text-center"
        >
            
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                    src={picture}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <h2 className="mt-5 text-2xl font-semibold text-gray-900">
                {name}
            </h2>

            {/* Days ago */}
            <p className="text-gray-500 text-lg mt-1 mb-4">
                {days_since_contact}d ago
            </p>

            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-5 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 
                                rounded-full hover:bg-gray-200 transition-colors"
                    >
                        {tag.toUpperCase()}
                    </span>
                ))}
            </div>

            
            <div className={`w-full py-3 px-6 text-sm font-semibold rounded-2xl 
                ${getStatusColor(status)}`}>

                {status === "overdue" && "Overdue"}
                {status === "almost due" && "Almost Due"}
                {status === "on-track" && "On-Track"}
            </div>

            
        </div>
    );
};

export default Friends;