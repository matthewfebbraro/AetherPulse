"use client";
import { useGlobalData } from "@/app/global-states/GlobalData";
import { useState, useEffect } from "react";
import ControlHubMenu from './ControlHubMenu';
import { Crown, Flame, Zap, Star, Shield, Atom, Heart, Bird } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
  };

  const selectedPage = useGlobalData((s) => s.selectedPage);
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

  const isOpen = useGlobalData((s) => s.isOpen);
  const setIsOpen = useGlobalData((s) => s.setIsOpen);

  return (
    <>
      {/* Fixed bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-lg bg-indigo-900/40 text-white px-6 py-2 flex items-center justify-center shadow-inner z-50">
        <button
          onClick={toggleMenu}
          className="text-xl font-bold tracking-wide transition-all"
        >
          {isOpen ? <p className="flex items-center justify-center gap-2">Navigation</p> : <p className="flex items-center justify-center gap-2">Navigation</p>}
        </button>
      </nav>

      {/* Expanding drawer from bottom */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="navdrawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[48px] left-0 right-0 z-40 overflow-hidden"
          >
            <div className="bg-black mb-2  rounded-3xl relative shadow-2xl w-full max-w-xs mx-auto overflow-hidden text-center">
              <div className="h-[80px] bg-cover bg-center bg-no-repeat  relative shadow-xl text-white text-3xl">
                <div className="flex flex-col h-full pb-2 items-center bg-indigo-800/30 justify-center  text-center">
                  <div className="z-20 flex items-center font-semibold  gap-2 text-[38px]">AetherPulse</div>
                </div>
              </div>
              <ControlHubMenu />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
