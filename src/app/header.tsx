"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "./login-modal";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <main className="sticky top-0 opacity-95">
            <LoginModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                />
            <div className="flex justify-between items-center bg-red-700 p-3">
                <div className="flex gap-2 items-center">
                    <Image src="/aclc_manila_logo.png" alt="logo_aclc" width={75} height={75} className="border-2 border-white rounded-full"/>
                    <div className="flex flex-col">
                        <h1 className="text-3xl text-white font-bold">ACLC SOCIAL CLUB</h1>
                    </div>
                    <Image src="/ama_logo_1_whitestrk2.png" alt="logo_aclc" width={75} height={75} />
                </div>
                <div>
                        <Button className="bg-blue-900 border-2 border-white cursor-pointer hover:bg-red-500" 
                        onClick={() => setIsOpen(true)}>
                            Go to social club <ChevronRight />
                        </Button>
                </div>
            </div>
        </main>
    );
}