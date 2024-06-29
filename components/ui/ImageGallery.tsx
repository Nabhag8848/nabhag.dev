import Image from "next/image";
import Image1 from "@/public/one.jpeg";
import Image2 from "@/public/two.jpeg";
import Image3 from "@/public/three.jpeg";

function ImageGallery() {
  return (
    <div className="grid grid-cols-3 border border-none gap-x-4 gap-y-5 rounded-3xl items-center transition-all delay-150">
      <Image
        src={Image1}
        alt="alt"
        className="border rounded-3xl border-none object-cover hover:scale-105 h-80"
      />
      <Image
        src={Image3}
        alt="alt"
        className="border rounded-3xl border-none object-cover hover:scale-105"
      />
      <Image
        src={Image2}
        alt="alt"
        className="border rounded-3xl border-none  object-cover hover:scale-105 h-80"
      />
    </div>
  );
}

export default ImageGallery;
