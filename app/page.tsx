import { Page } from "@/components/page";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
<<<<<<< HEAD
    <Page/>
=======
    <div className="min-h-screen bg-[#f5f1e4] font-['Cornerstone'] relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:14px]" />
      <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-[#faef55]/30 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#30aa49]/20 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6acd0c]/20 rounded-full blur-[128px]" />

      <div className="relative z-10">
        <Page/>
      </div>

      <div className="relative z-10 mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {/* Your cards content here instead of <Page/> */}
      </div>
    </div>
>>>>>>> 533383ca99c3ad834a0a799313b1ef56cecc67c2
  );
}
