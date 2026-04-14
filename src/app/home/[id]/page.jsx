import QuickCheckIn from "@/components/clickbtn/QuickCheckIn";
import { AiOutlineDelete } from "react-icons/ai";
import { FaArchive } from "react-icons/fa";
import { LiaSnapchatGhost } from "react-icons/lia";


const appPromise = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
};

const PageId = async ({ params }) => {
    const apps = await appPromise();
    const { id } = await params;
    const app = apps.find((item) => String(item.id) === id);

    if (!app) return <div className="p-6 text-center text-red-500 font-bold">not data </div>;

    const { picture, name, email, days_since_contact, status, tags, bio, goal, next_due_date } = app;

    const getStatusColor = (status) => {
        if (status === "overdue") return "bg-[#EF4444] text-white";
        if (status === "almost due") return "bg-[#EFAD44] text-white";
        return "bg-[#244D3F] text-white";
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">


                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl text-center shadow">
                        <img
                            src={picture}
                            alt={name}
                            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover shadow-sm"
                        />
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <div className={`w-fit mx-auto px-3 py-1 text-sm mt-2 font-semibold rounded-full ${getStatusColor(status)}`}>
                            {status}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {tags?.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-3">{bio}</p>
                        <p className="text-xs text-gray-400 mt-1">{email}</p>
                    </div>

                    <button className="w-full bg-white p-3 rounded-lg shadow flex items-center justify-center gap-2">
                        <LiaSnapchatGhost /> Snooze 2 Weeks
                    </button>
                    <button className="w-full bg-white p-3 rounded-lg shadow flex items-center justify-center gap-2">
                        <FaArchive /> Archive
                    </button>
                    <button className="w-full bg-white p-3 rounded-lg shadow text-red-500 flex items-center justify-center gap-2">
                        <AiOutlineDelete /> Delete
                    </button>
                </div>

            
                <div className="md:col-span-2 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center shadow">
                            <h2 className="text-xl font-bold">{days_since_contact}</h2>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center shadow">
                            <h2 className="text-xl font-bold">{goal}</h2>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center shadow">
                            <h2 className="text-sm font-bold">{new Date(next_due_date).toDateString()}</h2>
                            <p className="text-xs text-gray-500">Next Due</p>
                        </div>
                    </div>

                    
                    <QuickCheckIn app={app} />

                
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="font-semibold mb-3">Recent Interactions</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Text</span>
                                <span className="text-gray-400">Jan 28</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageId;