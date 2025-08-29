// NavMenu.tsx
"use client";
import { useGlobalData } from "@/app/global-states/GlobalData";
import BodySyncApp from "@/components/nav-bar/bodysync-button";
import BodySyncCoreApp from "@/components/nav-bar/bodysync-core-button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Rotate3d, ListChecks, Dumbbell, Utensils, Globe, LogOut } from 'lucide-react';
import { Crown, Flame, Zap, Star, Shield, Atom, Heart, Bird, Dna, KeyRound, Settings, Mars, Venus, Fingerprint } from 'lucide-react';
import { Sun, Moon, CircleCheckBig, CircleArrowLeft, CircleArrowRight, SmilePlus, Webhook, StepForward, StepBack } from "lucide-react";

export default function InfoDexMenu() {

  const router = useRouter();

  const selectedPage = useGlobalData((s) => s.selectedPage);
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

  const isOpen = useGlobalData((s) => s.isOpen);
  const setIsOpen = useGlobalData((s) => s.setIsOpen);


  return (
    <div className=" flex flex-col gap-1 z-60 mb-0 mt-3">
      <div className="text-gray-600 rounded-lg p-2 text-center">
        <div className="grid grid-cols-1 gap-2 w-full rounded-xl mb-2">
        </div>
        <div className="h-[260px] w-full flex flex-cols-1 w-full justify-center rounded-xl mb-2">
          <div className="flex w-full flex-col space-y-2 ml-2 overflow-y-auto">
            <button
              onClick={() => {
                router.push('/bodysync');
                setIsOpen(false);
              }}
              className="w-full font-semibold h-[45px] text-[23px] leading-sm flex flex-col justify-center items-center text-gray-600 ">
              InfoDex Home
            </button>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/login" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Login</Link>
            <Link href="/bodysync/register" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Register</Link>
            <Link href="/bodysync/sync-sim" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Sync Sim</Link>
            <Link href="/bodysync/pro" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Pro Unlock</Link>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/overview" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Daily Sync</Link>
            <Link href="/bodysync/sync-report" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Sync Report</Link>
            <Link href="/bodysync/sync-analysis" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Sync Analysis</Link>
            <Link href="/bodysync/sync-override" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Sync Override</Link>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/experience" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Experience</Link>
            <Link href="/bodysync/hidden-glyphs" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Hidden Glyphs</Link>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/biometric-settings" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Biometric Settings</Link>
            <Link href="/bodysync/custom-settings" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Custom Settings</Link>
            <Link href="/bodysync/goal-settings" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Goal Settings</Link>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/nutrition-log" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Nutrition Log</Link>
            <Link href="/bodysync/energy-burn" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Energy Burn</Link>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/fitness-tracker" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Fitness Tracker</Link>
            <Link href="/bodysync/personal-records" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Personal Records</Link>
            <Link href="/bodysync/repsync" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">RepSync</Link>
            <p className="p-1 mx-5 bg-white/30 flex items-center rounded-xl"></p>
            <Link href="/bodysync/daily-tasks" onClick={() => { setIsOpen(false) }} className="text-gray-600 font-semibold">Daily Tasks</Link>
          </div>

        </div>
        <div className="grid grid-cols-1 gap-2 w-full rounded-xl mb-2">
          <button
            onClick={() => {
              router.push('/');
              setIsOpen(false);
            }}
            className="w-full mt-2 font-semibold h-[45px] text-[20px] rounded-xl pb-1 leading-sm flex flex-col justify-center items-center bg-white/20 backdrop-blur  text-gray-600 shadow-md">
            Explore AetherPulse
          </button>
        </div>
      </div>
    </div>

  );
}
