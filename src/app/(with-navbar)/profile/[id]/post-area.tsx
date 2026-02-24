"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";

export default function PostArea() {
    const [input, setInput] = useState("")
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const MAX_HEIGHT = 100

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target
    setInput(el.value)

    el.style.height = "auto"
    el.style.height = Math.min(el.scrollHeight, MAX_HEIGHT) + "px"
  }
  
  return (
    <main>
        <div className="flex flex-col gap-2">
            <Textarea
                placeholder="What's new?"
                ref={textAreaRef}
                value={input}
                onChange={handleInput}
                className=" bg-white max-w-full resize-none overflow-y-auto border-2 border-red-700"
                style={{maxHeight: MAX_HEIGHT}}
            />
            <div className="flex flex-row-reverse items-end mt-2">
                <Button className="bg-red-700 w-1/4 cursor-pointer hover:bg-red-500" onClick={()=>alert('Posetd!')}>Post</Button>
            </div>
        </div>
    </main>
  );
}