"use client";

import Image from "next/image";
import Header from "./header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Footer from "./footer";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"


export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  return (
    <main className="relative">
      <Header />
      <Image src="/ACLC_SC_Logo_A2.png" alt="logo_aclc" width={600} height={200} className="-z-10 absolute bottom-5 right-0 p-2 opacity-45"/>
      <div className="flex flex-col justify-center items-center gap-10 p-2 mt-5">
        <h1 className="text-5xl font-bold">WELCOME TO THE ACLC SOCIAL CLUB</h1>
        <div className="flex justify-center items-center w-1/2 bg-white border-2 border-blue-900 p-3 rounded-md">
          <Carousel opts={{align: "start", loop: true}}
          plugins={[plugin.current]}
          >
            <CarouselContent className="items-center ">
              <CarouselItem><Image src="/pub_aclc.png" alt="picture" width={800} height={300}/></CarouselItem>
              <CarouselItem><Image src="/shs_aclc.png" alt="picture" width={800} height={300}/></CarouselItem>
              <CarouselItem><Image src="/sc3.jpg" alt="picture" width={800} height={300}/></CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <Separator />
        <h2 className="text-lg">This is your one stop site for all ACLC related things.</h2>
      </div>
      <Footer />
    </main>
  );
}
