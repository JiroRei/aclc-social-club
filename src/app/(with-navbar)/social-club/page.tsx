"use client";

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Gallery from "./gallery";
import { Separator } from "@/components/ui/separator";
import { Laugh, MessageSquare, Repeat } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";
import PostArea from "../profile/[id]/post-area";

export default function SocialClub(){

    const [comment, setComment] = useState(false)

    const images = ["/sc1.jpg", "/sc2.jpg", "/sc3.jpg", "/sc4.jpg", "/sc5.jpg", ]
    const images2 = ["/CWOC_1.jpg", "/CWOC_2.jpg", "/CWOC_3.jpg", "/CWOC_4.jpg", "/CWOC_5.jpg", ]

    const avatarTemplate = 
    <Avatar>
        <AvatarImage src="/aclc_manila_logo.png"></AvatarImage>
    </Avatar>

    const bottomBar = 
        <div>
            <Separator className="mt-3 mb-1 bg-blue-900"/>
            <div className="flex gap-2 mt-2 pl-2">
                <Laugh />
                <span>Student1, Student2</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
                    <span className="flex gap-2 justify-center rounded-md hover:bg-blue-400 py-1 click"><Laugh /> React</span>
                    <span
                     onClick = {() => setComment(prev => !prev)}
                     className="flex gap-2 justify-center rounded-md hover:bg-blue-400 py-1 click">
                        <MessageSquare /> Comment
                    </span>
                    <span className="flex gap-2 justify-center rounded-md hover:bg-blue-400 py-1 click"><Repeat /> Share</span>
                </div>
                <div className={`flex gap-2 mt-3 ml-4 items-center ${comment ? "block" : "hidden"}`}>
                    <Avatar className="border-2 border-blue-900 -overflow-hidden" size="default">
                        <AvatarImage src="/avatar.jpg" className="rounded-full"/>
                        <AvatarFallback>67</AvatarFallback>
                        <AvatarBadge className="bg-green-500 "/>
                    </Avatar>
                    <Textarea
                        placeholder="Place comment here..." 
                        className="bg-white max-w-full resize-none overflow-y-auto border-2"
                        style={{maxHeight: 100}}/>
                </div>
        </div>


    return(
        <main>
            <div className="flex justify-between gap-2 p-2">
                <div className="flex flex-col p-2 border-2 border-blue-900 rounded-md w-1/3 sticky top-30 z-99 h-1/2">
                    <div>
                        <h1 className="text-xl font-bold">Announcements</h1>
                    </div>
                    <Link href="/announcements">
                        <div className="flex flex-col  shadow bg-gray-300 gap-2 mt-3 rounded-md">
                        <div className="flex gap-3 p-2">
                            {avatarTemplate}
                            <h1 className="text-lg font-semibold">ACLC Manila</h1>
                        </div>
                        <div className="p-2">
                            <h1 className="text-lg font-semibold">ACLC Manila College Week is now ongoing!</h1>
                        </div>
                    </div>
                    </Link>
                    
                    
                </div>
                
                <div className="flex flex-col p-2 border-2 border-blue-900 rounded-md w-3/5">
                    <div className="border-2 border-blue-900 w-2xl rounded-md p-5 bg-blue-900">
                        <PostArea />
                    </div>
                    <div className="flex flex-col gap-2 mt-10">
                        <div className="flex flex-col p-2 gap-2 bg-blue-300 rounded-md">
                            <div className="flex gap-2 p-2">
                                {avatarTemplate}
                                <h1 className="text-lg font-semibold">ACLC Manila</h1>
                            </div>
                            <div>
                                <h1 className="ml-1 p-1 text-lg">College Week photos eyy</h1>
                                <Gallery images={images} />
                            </div>
                            {bottomBar}
                        </div>

                        <div className="flex flex-col p-2 gap-2 bg-blue-300 rounded-md">
                            <div className="flex gap-2 p-2">
                                {avatarTemplate}
                                <h1 className="text-lg font-semibold">ACLC Manila</h1>
                            </div>
                            <div>
                                <h1 className="ml-1 p-1 text-lg">Day 1 of the ACLC Manila College Week</h1>
                                <Gallery images={images2} />
                            </div>
                            {bottomBar}
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    );
}