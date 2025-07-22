import { UserProfile, PulseSettingsData } from "../../../Global/BodySyncManifest";
import {
  PULSE_DROP_IDS,
  PulseDropId
} from "../../../OverViewComponents/PulseDrops/Data/pulseDropIds";

export type PulseDropType = "system" | "update" | "birthday" | "tutorial";

export interface PulseDropDefinition {
  id: PulseDropId;
  component: React.FC;
  type: PulseDropType;
  condition: (profile: UserProfile, pulseSettings: PulseSettingsData) => boolean;
  version?: number; // optional for versioned drops
}
