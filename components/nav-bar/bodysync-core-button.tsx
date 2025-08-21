
import { useGlobalData } from "@/app/global-states/GlobalData";
import { useRouter } from 'next/navigation';
export default function BodySyncCoreApp() {
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);
  const setIsOpen = useGlobalData((s) => s.setIsOpen);
const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/bodysync-core');
        setIsOpen(false);
      }}
      className="w-[100px] bg-cover bg-center bg-no-repeat bg-[url('/icons/bodysync-core-icon.png')] h-[100px] rounded-xl py-4 leading-none gap-1
       flex flex-col justify-center items-center bg-white/20 backdrop-blur 
      text-white shadow-md">
      
    </button>
  );
}
