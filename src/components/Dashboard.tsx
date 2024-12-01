"use client"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

import { Separator } from "./ui/separator"
import ToggleMode from "./Togglemode"
import Hero from "./Hero"
import RightBar from "./Rightbar"
import Users from "./Users"





const Dashboard = () => {
   

    const { theme } = useTheme()

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen overflow-y-auto overflow-hidden" >
            <div className={cn("flex justify-between items-center w-full h-fit sm:mt-14 md:mt-14  p-3 border-l-[1px] border-slate-800",
                { 'bg-gray-900': theme === 'dark' }
            )} >
                <h1 className={cn("text-xl font-bold", { 'text-gray-900': theme === 'light' })} >
                    Dashboard
                </h1>


                <div className="flex justify-center items-center gap-4">
                    <ToggleMode />
                </div>
            </div>
            <Separator />

            <div className="flex flex-grow max-sm:flex-col space-y-10 gap-5 justify-between items-start w-full h-full ">

                <div className=" sm:w-2/3 h-full" >

                    <Hero />
                    <Users/>
                </div>
                <div className="sm:w-1/3 h-full">
                    <RightBar />
                </div>
            </div>

        </div>
    )
}

export default Dashboard