import Image from "next/image"
import { ChevronLeft, ChevronRight, Play  } from "lucide-react"
import { SideBar } from "@/components/SideBar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/Button"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <Button Icon={ChevronLeft} styles="rounded-full bg-black/40 p-1"/>
            <Button Icon={ChevronRight} styles="rounded-full bg-black/40 p-1"/>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 flex items group items-center gap-4 rounded overflow-hidden hover:bg-whi1e/20 transition-colors">
              <Image src="/eminem.jpg" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <Button Icon={Play} styles="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"/>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eminem.jpg" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eminem.jpg" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eminem.jpg" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eminem.jpg" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/eminem.jpg" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Artur Lima</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/eminem.jpg" className="w-full" width={104} height={104} alt="Capa Eminem" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Eminem</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/eminem.jpg" className="w-full" width={104} height={104} alt="Capa Eminem" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Eminem</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/eminem.jpg" className="w-full" width={104} height={104} alt="Capa Eminem" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Eminem</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/eminem.jpg" className="w-full" width={104} height={104} alt="Capa Eminem" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Eminem</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/eminem.jpg" className="w-full" width={104} height={104} alt="Capa Eminem" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Eminem</span>
            </a>
          </div>
        </main>
      </div>
     <Footer />
    </div>
  )
}
