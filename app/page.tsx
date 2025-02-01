
import Link from "next/link";
import { MorphingText } from "@/components/ui/morphing-text";
import { LuListTodo } from "react-icons/lu";
import { cn } from '@/lib/utils';
import { GridPattern } from "@/components/ui/grid-pattern";
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
export default function Home() {
  return (
   <>
   <div className="mt-60 w-full max-w-6xl mx-auto px-5 ">
    
    <MorphingText texts={texts} className=" whitespace-pre-wrap z-10 lg:text-7xl text-3xl"/>

    <div className="py-5 text-center">
      <p>Aplikasi Taskify itu seperti teman setia buat atur jadwal dan tugas. Yuk, coba mulai hari ini biar nggak ada yang kelewat lagi!</p>
    </div>
    <div className="flex justify-center my-5">
     <Link href={"/task"} className="py-2 px-6 rounded-lg bg-purple-400 flex items-center  whitespace-pre-wrap gap-x-2">Mulai Membuat Tugas <LuListTodo size={20} /></Link>
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
