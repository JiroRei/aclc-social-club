import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

type Props = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}
export default function LoginModal({isOpen, setIsOpen} : Props) {
    if (!isOpen) return null;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent showCloseButton={false}>
            <DialogHeader className="bg-red-700 rounded-md p-5">
                <DialogTitle className="text-white text-xl font-bold">
                    <div className="flex justify-center gap-2 items-center">
                        <Image src="/aclc_manila_logo.png" alt="aclc_logo" width={50} height={50} className="border border-2 rounded-full border-white"/>
                        Login to ACLC Social Club
                        <Image src="/ama_logo_1_whitestrk2.png" alt="ama_logo" width={50} height={50}/>
                    </div>
                </DialogTitle>
            </DialogHeader>
            <div>
                <Image src="/ACLC_SC_Logo_A3.png" alt="logo_aclc" width={300} height={100} className="absolute bottom-0 right-0 p-2 opacity-45 -z-10"/>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label className="text-blue-900 text-sm font-semibold">Student Number</label>
                        <input type="text" placeholder="USN"
                        className="bg-white opacity-90 border border-blue-900 rounded-md p-2 text-blue-900 text-sm font-semibold"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-blue-900 text-sm font-semibold">Password</label>
                        <input type="password" placeholder="Password"
                        className="bg-white opacity-90 border border-blue-900 rounded-md p-2 text-blue-900 text-sm font-semibold"/>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <Link href="/social-club">
                        <Button className="bg-red-700 rounded-md p-2 text-white text-sm font-semibold hover:bg-red-600 cursor-pointer">Login</Button>
                    </Link>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  );
}