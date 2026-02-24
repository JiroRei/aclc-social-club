import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Announcements(){

    const avatarTemplate = 
    <Avatar>
        <AvatarImage src="/aclc_manila_logo.png"></AvatarImage>
    </Avatar>

    return(
        <main>
            <div className="flex flex-col gap-10 border-2 justify-center items-center p-2">
                <h1 className="text-2xl font-bold">ANNOUNCMENTS PAGE</h1>
                <div className="p-2 flex-col w-1/2">
                    <div className="flex flex-col  shadow bg-gray-300 gap-2 mt-3 rounded-md">
                        <div className="flex gap-3 p-2">
                            {avatarTemplate}
                            <h1 className="text-lg font-semibold">ACLC Manila</h1>
                        </div>
                        <div className="flex flex-col gap-2 p-2">
                            <h1 className="text-lg font-semibold">ACLC Manila College Week is now ongoing!</h1>
                            <Image src="/sc2.jpg" alt="image" width={1000} height={100} className="self-center"/>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}