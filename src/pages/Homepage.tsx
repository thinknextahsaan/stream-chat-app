import { useUser } from "@clerk/clerk-react";
import { Pencil } from "lucide-react";
import React from "react";

const Homepage = () => {
    const { user } = useUser();

    return (
        <div className="h-screen flex items-center justify-center bg-slate-200 py-[80px]">
            <div className="w-full max-w-4xl shadow-xl bg-white rounded-3xl h-full flex overflow-hidden">
                <div className="flex-[2] p-[20px] bg-slate-100 h-full ">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center justify-start">
                            <img
                                src={user?.imageUrl}
                                alt=""
                                className="size-[40px] rounded-full"
                            />
                            <p className="text-[15px] font-bold text-neutral-700">
                                {user?.username && user?.username?.[0].toUpperCase() +
                                    user?.username?.slice(1) || "Guest User"}
                            </p>
                        </div>
                        <div className="p-[10px] rounded-full shadow-md bg-white cursor-pointer group">
                            <Pencil size={18} strokeWidth={"3px"} className="stroke-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
                <div className="flex-[5] p-[15px] bg-white ">
                    Right Sidebar
                </div>
            </div>
        </div>
    );
};

export default Homepage;
