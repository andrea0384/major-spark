export type PathSnapshot = {
  careerId: string | null;
  usedAccommodations: boolean;
  style: string;
  showExplain: boolean;
  pace: string;
  campus: string;
  stepIndex: number;
  doneByCareer: Record<string, string[]>;
};

const CAREER_IDS = new Set(["architect", "mechanical", "chef", "cyber", "it"]);
const STYLES = new Set(["see", "try", "read", "short"]);
const PACES = new Set(["full", "three-quarter", "part"]);
const KEY = "pathbook-snapshot";

export function cleanSnapshot(input: unknown): PathSnapshot {
  const raw = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const careerId = typeof raw.careerId === "string" && CAREER_IDS.has(raw.careerId) ? raw.careerId : null;
  const doneByCareer: Record<string, string[]> = {};
  if (raw.doneByCareer && typeof raw.doneByCareer === "object") {
    for (const [key, value] of Object.entries(raw.doneByCareer as Record<string, unknown>)) {
      if (!CAREER_IDS.has(key) || !Array.isArray(value)) continue;
      doneByCareer[key] = value.filter((item): item is string => typeof item === "string").slice(0, 200);
    }
  }
  const stepIndex = typeof raw.stepIndex === "number" && raw.stepIndex >= 0 ? Math.floor(raw.stepIndex) : 0;
  return {
    careerId,
    usedAccommodations: raw.usedAccommodations === true,
    style: typeof raw.style === "string" && STYLES.has(raw.style) ? raw.style : "read",
    showExplain: raw.showExplain !== false,
    pace: typeof raw.pace === "string" && PACES.has(raw.pace) ? raw.pace : "full",
    campus: typeof raw.campus === "string" ? raw.campus.slice(0, 40) : "Kendall",
    stepIndex: Math.min(stepIndex, 40),
    doneByCareer,
  };
}

export function loadLocalProgress(): PathSnapshot | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return cleanSnapshot(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveLocalProgress(input: unknown) {
  const snap = cleanSnapshot(input);
  localStorage.setItem(KEY, JSON.stringify(snap));
}
