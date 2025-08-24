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
      <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-lg bg-[rgba(163,175,236,0.74)] text-gray-600 px-6 py-4 flex items-center justify-center shadow-inner z-50">
        <button
          onClick={toggleMenu}
          className="text-xl font-bold tracking-wide transition-all"
        >
          {isOpen ? <p className="flex items-center justify-center gap-2">Navigation<Atom size={20} /> </p> : <p className="flex items-center justify-center gap-2">Navigation<Atom size={20} /> </p>}
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
            className="fixed bottom-[60px] left-0 right-0 z-40 overflow-hidden"
          >
            <div className="bg-[rgba(162,169,197,0.95)] mb-2 border border-indigo-300 rounded-3xl relative shadow-2xl w-full max-w-xs mx-auto overflow-hidden text-center">
              <div className="h-[80px] bg-cover bg-center bg-no-repeat bg-[url('/images/aether-logo-image.jpg')] relative shadow-xl text-gray-600 text-3xl">
                <div className="flex flex-col h-full pb-2 items-center bg-[rgba(20,55,129,0.29)] justify-center  text-center">
                  <div className="z-20 flex items-center font-semibold  gap-2 text-[38px]">Main Menu</div>
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
