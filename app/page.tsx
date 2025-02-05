
import Link from "next/link";
import { MorphingText } from "@/components/ui/morphing-text";
import { LuListTodo } from "react-icons/lu";
import { cn } from '@/lib/utils';
import { GridPattern } from "@/components/ui/grid-pattern";
import { Sora } from "next/font/google";
import { Flavors } from "next/font/google";

const texts = [
  "Produktivitas",
  "Efisiensi",
  "Fokus",
  "Prioritisasi",
  "Manajemen Waktu",
  "Organisasi",
  "Motivasi",
  "Pengingat",
  "Struktur",
  "Kontrol",
  "Keseimbangan",
];



const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});


const flavors = Flavors({
  subsets: ["latin"],
  variable: "--font-flavors",
  weight: "400"
})



export default function Home() {
  return (
   <>
   <div className="mt-52 w-full max-w-6xl mx-auto px-5 ">
    
    <MorphingText texts={texts} className={` ${flavors.className} font-bold whitespace-pre-wrap z-10 lg:text-7xl text-3xl`}/>

    <div className="py-5 text-center">
      <p className={`${sora.className} whitespace-pre-wrap lg:text-md text-sm`}>Ayo coba aplikasi <span className="text-purple-300">taskify</span> biar semua tugasmu tercatat rapi dan kamu bisa fokus menyelesaikannya satu per satu. No more stress!. Yuk, coba mulai hari ini biar nggak ada yang kelewat lagi!</p>
    </div>
    <div className="flex justify-center my-5">
     <Link href={"/task"} className={`${sora.className} py-2 px-6 rounded-lg bg-violet-400 flex items-center  whitespace-pre-wrap gap-x-2`}>Mulai Membuat Tugas <LuListTodo size={20} /></Link>
    </div>

    {/* grid */}
    <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
   </div>
   </>
  );
}
