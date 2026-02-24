import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, House, Megaphone, SquareArrowRightExit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    const id = "24004070900"
    return(
        <main className=" sticky top-0 z-50">
            <div className="flex justify-between items-center bg-red-700 p-3">
                <div className="flex gap-2 items-center">
                    <Image src="/ACLC_SC_Logo_E.png" alt="logo_aclc" width={60} height={50} className=""/>
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl text-white font-bold">ACLC SOCIAL CLUB</h1>
                        <h2 className="text-lg text-white font-semibold">College of Manila</h2>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-5 text-white">
                    <Link href="/social-club">
                        <div className="flex flex-col items-center gap-0.5">
                            <House className=""/>
                            <h4 className="text-xs cursor-pointer!">Home</h4>
                        </div>
                    </Link>
                    <Link href="/announcements">
                        <div className="flex flex-col items-center gap-0.5">
                            <Megaphone className=""/>
                            <h4 className="text-xs cursor-pointer!">Announcements</h4>
                        </div>
                    </Link>

                </div>
                <div className="flex items-baseline-last gap-2">
                    <Link href={`/profile/${id}`} className="cursor-pointer">
                        <div className="flex flex-col items-center gap-0.5 mr-5 cursor-pointer">
                            <Avatar className="-overflow-hidden border-2 border-white  cursor-pointer" size="lg">
                                <AvatarImage src="/avatar.jpg" className="rounded-full  cursor-pointer"/>
                                <AvatarBadge className="cursor-pointer"> <ChevronDown className="cursor-pointer"/></AvatarBadge>
                            </Avatar>
                            <h4 className="text-xs text-white cursor-pointer!">Profile</h4>
                        </div>
                    </Link>
                    <Link href={`/`} className="cursor-pointer">
                        <div className="flex flex-col items-center gap-0.5 mr-5 cursor-pointer">
                            <SquareArrowRightExit className="text-white"/>
                            <h4 className="text-xs text-white">Sign-out</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}