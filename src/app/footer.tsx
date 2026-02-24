import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <main>
            <div className="flex justify-between items-center bg-blue-900 p-3">
                <h1 className="text-white">FOOTER</h1>
            </div>
        </main>
    );
}