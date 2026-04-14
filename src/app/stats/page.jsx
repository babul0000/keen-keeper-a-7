"use client";

import { useContext, useMemo } from "react";
import { InstallAppsContext } from "@/context/AppContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

export default function StatsPage() {
    
    const { timeline = [] } = useContext(InstallAppsContext) || {};

    const chartData = useMemo(() => {
        
        const calls = timeline.filter((t) =>
            (t.interactionType || "").toLowerCase().trim() === "call"
        ).length;

        const texts = timeline.filter((t) =>
            (t.interactionType || "").toLowerCase().trim() === "text"
        ).length;

        const videos = timeline.filter((t) =>
            (t.interactionType || "").toLowerCase().trim() === "video"
        ).length;

        return [
            { name: "Calls", value: calls },
            { name: "Texts", value: texts },
            { name: "Videos", value: videos },
        ].filter((item) => item.value > 0);
    }, [timeline]);

    const COLORS = ["#0ea5e9", "#22c55e", "#f97316"];

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Friendship Analytics
                    </h1>
                </div>

                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        By Interaction Type
                    </h2>

                    {chartData.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 mb-4">
                                No interactions recorded yet. Start by checking in with your friends!
                            </p>
                        </div>
                    ) : (
                        <div className="w-full h-96">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, value, percent }) =>
                                            `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                                        }
                                        outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) => `${value} interactions`}
                                        contentStyle={{
                                            backgroundColor: "#1f2937",
                                            border: "none",
                                            borderRadius: "8px",
                                            color: "#fff",
                                        }}
                                    />
                                    <Legend
                                        wrapperStyle={{
                                            paddingTop: "20px",
                                        }}
                                        formatter={(value) => (
                                            <span className="text-gray-700 dark:text-gray-200">{value}</span>
                                        )}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}