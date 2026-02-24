import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {

  const count = images.length;

  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className="relative w-full h-96">
        <Image src={images[0]} fill className="object-cover" alt="Gallery" />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-1">
        {images.map((src, i) => (
          <div key={i} className="relative h-80">
            <Image src={src} fill className="object-cover" alt="Gallery" />
          </div>
        ))}
      </div>
    );
  }
    
    return (
        <main className="p-1">
            <div className="grid grid-cols-2 gap-1">
                {images.slice(0, 4).map((src, i) => (
                    <div key={i} className="relative h-48">
                    <Image src={src} fill className="object-cover" alt="Gallery" />
                    {i === 3 && count > 4 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-3xl font-bold">
                        +{count - 4}
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </main>
    );
}