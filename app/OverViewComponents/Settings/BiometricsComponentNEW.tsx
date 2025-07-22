'use client';
import { getGlobalDataState } from "@/app/Global/store/globalStoreInstance";
import { useGlobalData } from "@/app/Global/GlobalData";
import { UserProfile } from "../../Global/BodySyncManifest"

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import type { User } from 'firebase/auth';
import useAuth from '@/lib/useAuth';

function toSafeString(value: any): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();
  return "";
}

export default function BiometricsComponent() {

  const { user } = useAuth();
  const router = useRouter();

  const userProfileSTORE = getGlobalDataState().userProfileSTORE as UserProfile;
  const setUserProfileSTORE = getGlobalDataState().setUserProfileSTORE;
  const userProfile = userProfileSTORE

  const setLiveUserProfileState = useGlobalData((s) => s.setLiveUserProfileState);

  const isOpen = useGlobalData((s) => s.isOpen);
  const setIsOpen = useGlobalData((s) => s.setIsOpen);
  const setSelectedPage = useGlobalData((s) => s.setSelectedPage);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");

  const [year, month, day] = (userProfile?.birthday || "--").split("-");

  const [name, setName] = useState(userProfile?.name);
  const [birthMonth, setBirthMonth] = useState(month);
  const [birthDay, setBirthDay] = useState(day);
  const [birthYear, setBirthYear] = useState(year);
  const [gender, setGender] = useState(userProfile?.gender);
  const [height_cm, setHeight_cm] = useState(userProfile?.height_cm);
  const [feet, setFeet] = useState(userProfile?.height_ft_in?.feet);
  const [inches, setInches] = useState(userProfile?.height_ft_in?.inches);

  const [heightUnit, setHeightUnit] = useState(userProfile?.preferredHeightUnit);
  const [weightUnit, setWeightUnit] = useState(userProfile?.preferredWeightUnit);

  //NEW UNITS OF MEASURE
  const [volumeUnit, setVolumeUnit] = useState(userProfile?.preferredVolumeUnit);
  const [foodUnit, setFoodUnit] = useState(userProfile?.preferredFoodUnit);


  const [String_height_cm, setString_Height_cm] = useState(toSafeString(height_cm));
  const [String_feet, setString_Feet] = useState(toSafeString(feet));
  const [String_inches, setString_Inches] = useState(toSafeString(inches));

  const setBodySyncPage = useGlobalData((s) => s.setBodySyncPage);


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const FinalBirthday = `${birthYear}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`;
    // 🧠 Calculate age directly from birth values
    const birthY = Number(birthYear);
    const birthM = Number(birthMonth);
    const birthD = Number(birthDay);
    const today = new Date();

    let age = today.getFullYear() - birthY;
    const monthDiff = today.getMonth() + 1 - birthM;
    const dayDiff = today.getDate() - birthD;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }


    //const calculatedHeightCm = parseInt(finalFeet, 10) * 30.48 + parseInt(finalInches, 10) * 2.54;
    let final_feet = 0;
    let final_inches = 0;
    let final_height_cm = 0;

    if (heightUnit === "cm") {

      const Number_height_cm = parseInt(String_height_cm, 10) || 0

      const Height_cm_conversion_Inches = Number_height_cm / 2.54;
      final_feet = Math.floor(Height_cm_conversion_Inches / 12);
      final_inches = Math.round(Height_cm_conversion_Inches % 12);

      final_height_cm = Number_height_cm

    }


    if (heightUnit === "ft/in") {

      const Number_feet = parseInt(String_feet, 10) || 0
      const Number_inches = parseInt(String_inches, 10) || 0

      const Height_inches_conversion_inches = (Number_feet * 12) + Number_inches

      final_height_cm = Height_inches_conversion_inches * 2.54;

      final_feet = Number_feet
      final_inches = Number_inches

    }


    const userId = auth.currentUser!.uid;
    const userRef = doc(db, "users", userId,);

    try {
      await setDoc(userRef, {
        name,
        birthday: FinalBirthday,
        age,
        preferredHeightUnit: heightUnit,
        preferredWeightUnit: weightUnit,
        preferredVolumeUnit: volumeUnit,
        preferredFoodUnit: foodUnit,
        gender,
        height_cm: final_height_cm,
        height_ft_in: {
          feet: final_feet,
          inches: final_inches,
        }

      }, { merge: true });

      setStatus("success");

      setUserProfileSTORE({
        ...(getGlobalDataState().userProfileSTORE as UserProfile),
        name,
        birthday: FinalBirthday,
        age,
        preferredHeightUnit: heightUnit,
        preferredWeightUnit: weightUnit,
        preferredVolumeUnit: volumeUnit,
        preferredFoodUnit: foodUnit,
        gender,
        height_cm: final_height_cm,
        height_ft_in: {
          feet: final_feet,
          inches: final_inches,
        },
      });

      setLiveUserProfileState({
        ...(getGlobalDataState().userProfileSTORE as UserProfile),
        name,
        birthday: FinalBirthday,
        age,
        preferredHeightUnit: heightUnit,
        preferredWeightUnit: weightUnit,
        preferredVolumeUnit: volumeUnit,
        preferredFoodUnit: foodUnit,
        gender,
        height_cm: final_height_cm,
        height_ft_in: {
          feet: final_feet,
          inches: final_inches,
        },
      });

    } catch (error) {
      setStatus("failiure");
    }
  };


  useEffect(() => {
    if (status === "success") {
      const timeout = setTimeout(() => {
        setBodySyncPage("landing");
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [status, router]);


  return (

    <div className="flex items-center justify-center min-h-[80px] flex-col">


      <div className="text-center text-3xl  font-semibold pt-1 pulse-glow">Modify Biometrics</div>





      <div className="text-left w-full rounded-xl px-3 pt-1 mb-10">
        <p className=" text-md text-white font-semibold">
          Name
        </p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-1 mb-1 rounded bg-gray-800/70 text-white"
        />
        <p className="text-white font-semibold text-md">
          Gender
        </p>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-1 mb-1 rounded bg-gray-800/70 text-white"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className="text-white font-semibold text-md">
          Birthday
        </p>
        <div className="flex gap-2 mb-1">
          <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} className="w-full p-1 rounded bg-gray-800/70 text-white">
            <option value="">Month</option>
            {[...Array(12)].map((_, i) => {
              const month = (i + 1).toString().padStart(2, "0");
              return <option key={i} value={month}>{month}</option>;
            })}
          </select>
          <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)} className="w-full p-1 rounded bg-gray-800/70 text-white">
            <option value="">Day</option>
            {[...Array(31)].map((_, i) => {
              const day = (i + 1).toString().padStart(2, "0");
              return <option key={i} value={day}>{day}</option>;
            })}
          </select>
          <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className="w-full p-1 rounded bg-gray-800/70 text-white">
            <option value="">Year</option>
            {[...Array(100)].map((_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={i} value={year.toString()}>{year}</option>;
            })}
          </select>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-2 ">
          <div>
            <p className="text-white flex pt-1 font-semibold text-md ">
              Height Unit
            </p>
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              className="w-full p-1 mb-1 rounded bg-gray-800/70 text-white"
            >
              <option value="cm">Centimeters</option>
              <option value="ft/in">Feet & Inches</option>
            </select>
          </div>
          <div>
            <p className="text-white flex pt-1 font-semibold text-md ">
              Weight Unit
            </p>
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="w-full p-1 mb-1 rounded bg-gray-800/70 text-white"
            >
              <option value="lbs">Pounds</option>
              <option value="kg">Kilograms</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-2 ">
          <div>
            <p className="text-white flex pt-1 font-semibold text-md ">
              Volume Unit
            </p>
            <select
              value={volumeUnit}
              onChange={(e) => setVolumeUnit(e.target.value)}
              className="w-full p-1 mb-1 rounded bg-gray-800/70 text-white"
            >
              <option value="ml">Milliliters</option>
              <option value="oz">Ounces</option>
            </select>
          </div>
          <div>
            <p className="text-white flex pt-1 font-semibold text-md ">
              Food Unit
            </p>
            <select
              value={foodUnit}
              onChange={(e) => setFoodUnit(e.target.value)}
              className="w-full p-1 mb-1 rounded bg-gray-800/70 text-white"
            >
              <option value="g">Grams</option>
              <option value="oz">Ounces</option>
            </select>
          </div>
        </div>


        <p className="text-white font-semibold text-md">
          Set Height ({heightUnit === "cm" ? "cm" : "ft/in"})
        </p>

        {heightUnit === "cm" ? (
          <input
            type="number"
            placeholder={`Height (${heightUnit})`}
            value={String_height_cm}
            onChange={(e) => setString_Height_cm(e.target.value)}
            className="w-full p-1 rounded bg-gray-800/70 text-white"
            min="30"
            max="280"
          />
        ) : (
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Feet"
              value={String_feet}
              onChange={(e) => setString_Feet(e.target.value)}
              className="w-1/2 p-1 rounded bg-gray-800/70 text-white"
              min="0"
            />
            <input
              type="number"
              placeholder="Inches"
              value={String_inches}
              onChange={(e) => setString_Inches(e.target.value)}
              className="w-1/2 p-1 rounded bg-gray-800/70 text-white"
              min="0"
              max="11"
            />
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 items-center pt-2 w-full max-w-md flex justify-center z-30">

          <button onClick={() => {
            setBodySyncPage("landing");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
            type="button"

            className="text-xl bg-white text-black hover:bg-indigo-300/50 px-4 py-3 w-full rounded-lg font-semibold glowing-purple-button"
          >
            Return
          </button>


          <button
            onClick={handleSubmit}
            className="max-w-md w-full bg-white text-xl text-black px-4 py-4 rounded-xl font-semibold hover:bg-gray-300 transition glowing-button"
            disabled={saving}
          >
            Sync
          </button>
        </div>
      </div>
    </div>
  );
}