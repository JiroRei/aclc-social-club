"use client";

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Laugh, MessageSquare, Repeat } from "lucide-react";
import { useEffect, useState } from "react";

export default function Posts() {
    const [comment, setComment] = useState(false)
    
    return (
    <main className="min-h-screen">
        <div className="flex flex-col gap-2">
            <div>
                <h1 className="text-3xl font-bold">SOCIAL CLUB POSTS</h1>
            </div>
            <Separator className="mt-3 mb-1 bg-blue-900"/>
            <div className="flex flex-col mt-2 bg-blue-100 rounded-md p-3">
                <div className="flex items-center gap-2">
                           <Avatar className="border-2 border-blue-900" size="lg">
                        <AvatarImage src="/avatar.jpg" className="rounded-full"/>
                        <AvatarFallback>67</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-lg font-semibold">Mikko Borja</h1>
                        <h2 className="text-xs">Feb 23, 2026 23:00</h2>
                    </div>
                </div>
                <div className="ml-10 mt-3">
                    <h1>I love matcha.</h1>
                </div>
                <Separator className="mt-3 mb-1 bg-blue-900"/>
                <div className="flex gap-2 mt-2 pl-2">
                    <Laugh />
                    <span>Ace, Kumakalkal</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <span className="flex gap-2 justify-center rounded-md hover:bg-blue-400 py-1 click" 
                    onClick={()=>alert('Reacted!')}><Laugh /> React</span>
                    <span
                     onClick={() => setComment(prev => !prev)}
                     className="flex gap-2 justify-center rounded-md hover:bg-blue-400 py-1 click">
                        <MessageSquare /> Comment
                    </span>
                    <span className="flex gap-2 justify-center rounded-md hover:bg-blue-400 py-1 click" 
                    onClick={()=>alert('Shared!')}><Repeat /> Share</span>
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
        </div>
    </main>
  );
}