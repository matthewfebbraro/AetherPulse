import { useGlobalData } from "@/app/global-states/GlobalData";
import { useRouter } from 'next/navigation';
export default function InfoDexButton() {
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);
  const setIsOpen = useGlobalData((s) => s.setIsOpen);
const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/bodysync');
        setIsOpen(false);
      }}
      className="w-[100px] bg-cover bg-center bg-no-repeat bg-[url('/images/infodex.jpg')] h-[100px] rounded-xl py-4 leading-none gap-1
       flex flex-col justify-center items-center bg-white/20 backdrop-blur 
      text-white shadow-md">
      <div className="font-semibold">BodySync</div>
       <div className="font-semibold">InfoDex</div>
    </button>
  );
}
