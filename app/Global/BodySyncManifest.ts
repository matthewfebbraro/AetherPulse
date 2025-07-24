export type GlobalSTORE = {

  //USERID INFO
  userProfileSTORE: UserProfile | null;
  setUserProfileSTORE: (profile: UserProfile | ((prev: UserProfile | null) => UserProfile)) => void;

  //SYNC STORE
  syncHistorySTORE: SyncsFlatMap | null;
  setSyncHistorySTORE: (data: SyncsFlatMap | ((prev: SyncsFlatMap | null) => SyncsFlatMap)) => void;

  latestSyncSTORE: any | null;
  setLatestSyncSTORE: (sync: any) => void;

  //FITNESS SYNC STORE
  fitnessHistorySTORE: FitnessFlatMap | null;
  setFitnessHistorySTORE: (data: FitnessFlatMap | ((prev: FitnessFlatMap | null) => FitnessFlatMap)) => void;

  latestFitnessSyncSTORE: any | null;
  setLatestFitnessSyncSTORE: (sync: any) => void;

  //NUTRITION SYNC STORE
  nutritionHistorySTORE: NutritionFlatMap | null;
  setNutritionHistorySTORE: (data: NutritionFlatMap | ((prev: NutritionFlatMap | null) => NutritionFlatMap)) => void;

  latestNutritionSyncSTORE: any | null;
  setLatestNutritionSyncSTORE: (sync: any) => void;

  defaultsAdded: boolean;
  setDefaultsAdded: (value: boolean) => void;

};

export type GlobalSTATE = {

  liveUserProfileState: UserProfile | null;
  setLiveUserProfileState: (profile: UserProfile | null | ((prev: UserProfile | null) => UserProfile | null)) => void;


  //FITNESS INFO
  // temporaryFitnessSync: any | null;
  // setTemporaryFitnessSync: (data: {
  //    profileSlot: string;
  //   bodygroup: string;
  /// }) => void;


  workoutSessionData: WorkoutSessionData;
  setWorkoutSessionData: (
    updater: WorkoutSessionData | ((prev: WorkoutSessionData) => WorkoutSessionData)
  ) => void;

  //activeSessionStatus: boolean;
  // setActiveSessionStatus: (value: boolean) => void;

  //OVERVIEW INFO
  selectedSector2: string;
  setSelectedSector2: (value: string) => void;

  //NUTRITION TYPES
  nutritionPage: string;
  setNutritionPage: (value: string) => void;

  //BODYSYNC TYPES
  bodySyncPage: string;
  setBodySyncPage: (value: string) => void;

  pageDefault: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;

  HomeDefault: string;
  selectedHomePage: string;
  setSelectedHomePage: (value: string) => void;

  //CONTROL HUB INFO
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;

  //SYNC INFO
  hasDawnSyncedToday: boolean;
  setHasDawnSyncedToday: (value: boolean) => void;

  hasDuskSyncedToday: boolean;
  setHasDuskSyncedToday: (value: boolean) => void;

  hasFitnessSyncedToday: boolean;
  setHasFitnessSyncedToday: (value: boolean) => void;

};

//FITNESS TRACKER TYPES
export type FitnessSyncData = {
  id: string;
  date: string;
  quarterId: string;
  split: string;
  bodygroup: string;
  whichProfile: string;
  completed: boolean;
  StartTime: any;
  EndTime: any;
  sessionData: WorkoutSessionData;
  fitnessSync: Boolean;
  token?: string;
};

export type WorkoutSessionData = {
  movements: MovementEntry[];
};

export type MovementEntry = {
  name: string;
  sets: SetEntry[];
};

export type SetEntry = {
  setId: string;
  reps: number;
  liftWeight_lbs?: number;
  liftWeight_kg?: number;
  isDropset?: boolean;
  parentSetId?: string;
  locked?: boolean;
};

////////SYNCS MAPS
//FIRESTORE SYNCS MAP
export type SyncQuarterDocument = {
  [dateId: string]: SyncData;
};

//SYNC HISTORY MAP
export type SyncsFlatMap = {
  [dateId: string]: SyncData;
};

////////////FITNESS MAPS
// FIRESTORE FITNESS MAP
export type FitnessQuarterDocument = {
  [dateId: string]: FitnessSyncData;
};

// FITNESS HISTORY MAP
export type FitnessFlatMap = {
  [dateId: string]: FitnessSyncData;
};

////////////NUTRITION MAPS
// FIRESTORE FITNESS MAP
export type NutritionQuarterDocument = {
  [dateId: string]: NutritionSyncData;
};

// NUTRITION HISTORY MAP
export type NutritionFlatMap = {
  [dateId: string]: NutritionSyncData;
};




//LATEST SYNC
export type SyncData = {
  id: string;
  date: string;
  quarterId: string;
  weight_lbs?: number;
  weight_kg?: number;
  sleepQuality?: number;
  sleepDuration?: number;
  steps?: number;
  exerciseMinutes?: number;
  exerciseIntensity?: string;
  recoveryMacros?: any[];
  activeMacros?: any[];
  vitamins?: any[];
  minerals?: any[];
  recoveryTDEE?: string;
  activeTDEE?: string;
  dawnSync?: boolean;
  duskSync?: boolean;
  dawnTimestamp?: any;
  duskTimestamp?: any;
  updatedAt?: any;
  token?: string;
};

////??????
export type GoalSyncData = {
  liftWeight_lbs: number;
  liftWeight_kg: number;
  movements: any[];
};

//NUTRITION SYNC DATA
export type NutritionSyncData = {
  id: string;
  date: string;
  quarterId: string;
  totalWater_ml: number;
  totalWater_oz: number;
  nutritionSync: boolean;
  meals: any[];
  updatedAt?: any;
  token?: string;
};

//USER PROFILE SETTINGS DATA
//CUSTOM SETTINGS
export type CustomSettingsData = {
  background: string;
  navIcon: string;
  lightMode: boolean;
};

//FITNESS SETTINGS
export type FitnessSettingsData = {
  currentSplit: string;
  lastBodygroup: string;
  lastMovements: String;
  fitnessToken: boolean;
  activeSession: boolean;
  totalWorkouts: number;
  totalPRs: number;
};

export type LiftIndexData = {
  [bodygroup: string]: BodygroupProfile;
};


//BODYGROUP PROFILE INFO
export type BodygroupProfile = {
  profile1?: Profile;
  profile2?: Profile;
  profile3?: Profile;
};

//LIFT PROFILE INFO
export type Profile = {
  name: string;
  movements: string[];
};

//DAILY GOAL SETTINGS
export type DailyGoalSettingsData = {
  dailyGoalToken: boolean;
};

//NUTRITION SETTINGS
export type NutritionSettingsData = {
  calorieGoal: number;
  waterGoal_ml: number;
  waterGoal_oz: number;
  nutritionToken: boolean;
};

//PULSE DROP SETTINGS
export type PulseMemoryData = {
  v1_welcomeDrop: boolean;
  v2_updateDrop1: boolean;
  Thanks4UpgradeDrop: boolean;
};

export type PulseSettingsData = {
  pulseMemory: PulseMemoryData;
  receivePulseDrops: boolean;
  tutorialDrops: boolean;
  motivationDrops: boolean;
  humourDrops: boolean;
};

// THE ONE AND ONLY USER PROFILE
export type UserProfile = {
  name: string;
  age: number;
  email: string;
  birthday: string;
  gender: string;

  height_cm: number;
  height_ft_in: {
    feet: number;
    inches: number;
  };
  preferredHeightUnit: string;
  preferredWeightUnit: string;
  preferredVolumeUnit: string;
  preferredFoodUnit: string;

  lastKnownWeight_lbs: number;
  lastKnownWeight_kg: number;

  //SETTINGS
  customSettings?: CustomSettingsData;
  fitnessSettings?: FitnessSettingsData;
  dailyGoalSettings?: DailyGoalSettingsData;
  nutritionSettings?: NutritionSettingsData;
  pulseSettings?: PulseSettingsData;

  isPaid: boolean;
  token: boolean;

  //COLLECTIONS
  latestSync?: SyncData;
  latestFitnessSync?: FitnessSyncData;
};


export const defaultProfile: UserProfile = {
  name: "",
  age: 0,
  email: "",
  birthday: "",
  gender: "",

  height_cm: 0,
  height_ft_in: {
    feet: 0,
    inches: 0,
  },
  preferredHeightUnit: "cm",
  preferredWeightUnit: "kg",
  preferredVolumeUnit: "ml",
  preferredFoodUnit: "g",

  lastKnownWeight_lbs: 0,
  lastKnownWeight_kg: 0,

  isPaid: false,
  token: true,

  customSettings: {
    background: "",
    navIcon: "",
    lightMode: true,
  },

  fitnessSettings: {
    currentSplit: "None",
    lastBodygroup: "None",
    lastMovements: "None",
    fitnessToken: false,
    activeSession: false,
    totalWorkouts: 0,
    totalPRs: 0,
     },

  dailyGoalSettings: {
    dailyGoalToken: false,
  },

  nutritionSettings: {
    calorieGoal: 0,
    waterGoal_ml: 0,
    waterGoal_oz: 0,
    nutritionToken: false,
  },
  pulseSettings: {
    pulseMemory: {
      v1_welcomeDrop: true,
      v2_updateDrop1: true,
      Thanks4UpgradeDrop: true,
    },
    receivePulseDrops: true,
    tutorialDrops: true,
    motivationDrops: true,
    humourDrops: true,
  },

};