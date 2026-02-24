"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {  ChevronRight, Globe, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Posts from "./posts";
import PostArea from "./post-area";
import { useEffect, useState } from "react";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";


export default function Profile() {
  const id = "24004070900"
  const profile = ["Ace P", "Kumakalkal ng P", "Ivan C", "Anthony M", "Rosemarie C", "Christine P", "Crisanta R", "Max L"]
  const avatarTemplate = 
    <Avatar className="-overflow-hidden" size="lg">
      <AvatarImage src="/avatar.jpg" className="rounded-full"/>
      <AvatarFallback>67</AvatarFallback>
      <AvatarBadge className="bg-green-500 "></AvatarBadge>
    </Avatar>

  const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    const onScroll = () => {
        setScrolled(window.scrollY > 210)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
    }, [])


  return (
    <main className="">
      <div className={`bg-blue-900 border-t border-white p-2 shadow-lg sticky top-21 z-10 ${scrolled ? "block" : "hidden"}`}>
        <div className="ml-5 flex items-center gap-3">
          {avatarTemplate}
          <h1 className="text-xl text-white font-semibold">Mikko P. Borja</h1>
          <h2 className="text-sm text-white font-semibold">USN: 24004070900</h2>
        </div>
      </div>

      <div className="flex justify-start w-full gap-20 mt-5 p-2">
        <div className="sticky top-20 self-start flex flex-col gap-4 bg-blue-200 rounded-md p-5">
          <div className="flex items-center gap-3 p-2 bg-blue-100 rounded-md shadow-xl">
            <Image src="/avatar.jpg" alt="avatar" width={180} height={180} className="border-3 rounded-4xl border-blue-900"/>
            <div className="flex flex-col gap">
                <h1 className=" text-5xl font-bold">Mikko P. Borja</h1>
                <h2>USN: 24004070900</h2>
                <h2 className="text-xl font-semibold">BS Information Systems - 2nd Year</h2>
                <div className="flex gap-2 mt-1">
                  <Badge className="bg-red-700 text-white"><GraduationCap /> Dean's Lister 2025 </Badge>
                  <Badge className="bg-red-700 text-white"><GraduationCap /> Dean's Lister 2024 </Badge>
                </div>
                <div className="flex gap-2 mt-1">
                  <Badge className="bg-blue-900 text-white"><Globe /> TechByte</Badge>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white border-2 border-blue-900 shadow-lg p-2">
              <h1 className="text-xl font-bold">About me</h1>
              <p>Insert bio here.</p>
            </div>
            <div className="bg-white border-2 border-blue-900 shadow-lg p-2">
              <h1 className="text-xl font-bold">Classes Enrolled this Semester</h1>
              <h2 className="text-lg font-semibold">BSIS 22-A</h2>
              <Separator className="mt-3 mb-3 bg-blue-900"/>
              <div className="flex flex-col gap-1.5 bg-amber-100 p-2 rounded-md">
                <span>Database Management</span>
                <span>Data Communications and Networks</span>
                <span>Data Analysis</span>
                <span>Enterprise Architecture</span>
                <span>Data Structures and Algorithms</span>
                <span>Information Management</span>
                <span>IS Strategies and Acquisition</span>
                <span>PE 3</span>
              </div>
              <Separator className="mt-3 mb-3 bg-blue-900"/>
              <div className="flex justify-between items-center mt-4">
                <Link href={`/profile/${id}/schedule`}>
                    <Button className="bg-blue-900 cursor-pointer hover:bg-red-700">View Schedule</Button>
                </Link>
                
                <Link href={`/profile/${id}/course-outline`}>
                    <Button className="bg-blue-900 cursor-pointer hover:bg-red-700">View Course Outline <ChevronRight className="text-white" /></Button>
                </Link>                
              </div>
              
            </div>
          </div>
          <div className="bg-white border-2 border-blue-900 shadow-lg gap-2 p-2">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Following</h1>
              <div className="hover:bg-gray-200 hover:rounded-md">
                <Link href="/friendslist">
                  <h2 className="text-md font-semibold pr-3 pl-3 text-blue-800 cursor-pointer!">See All</h2>
                </Link>
              </div>
            </div>
            
            <Separator className="mt-3 mb-1 bg-blue-900"/>

            <div className="grid grid-cols-4">
              {profile.map((profile, index) =>(
                <div className="mt-2" key={index}>
                  <Image src="/avatar.jpg" alt="pfp" width={100} height={100} className="rounded-sm"/>
                  <h2 className="text-xs font-semibold pl-1">{profile}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 p-3">
          <div className="border-2 border-blue-900 w-2xl rounded-md p-5 bg-blue-900">
            <PostArea />
          </div>
          <div className="border-2 border-blue-900 p-3 w-3xl">
            <Posts />
          </div>
        </div>
        
      </div>
    </main>
  );
}