import { requireAuth } from "@auth0/auth0-tanstack-start-react/client";
import type { Auth0RouterContext } from "@auth0/auth0-tanstack-start-react/types";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { isSchoolEmail } from "@/lib/school-email";
import { Check, Settings } from "lucide-react";
import { AuthButtons } from "@/components/auth-buttons";
import { loadLocalProgress, saveLocalProgress, type PathSnapshot } from "@/lib/progress";
import { pageFrame, useDevice } from "@/lib/device";
import { PLANS, afterDegree, blockingPrereqs, courseNeeds, graduationLine, termsForPace, type StudyPace } from "@/lib/plans";
import { useEffect, useMemo, useState } from "react";
import {
  CAREERS,
  careerById,
  ACCESS_STEP,
  suggestCareers,
  type CareerId,
  type Interest,
  type SchoolPlan,
  type WorkTiming,
} from "@/lib/paths";

export const Route = createFileRoute("/app")({
  beforeLoad: ({ context }: { context: { auth0: Auth0RouterContext } }) => {
    requireAuth({ loginPath: "/", returnTo: "/app" })({ context });
    if (!isSchoolEmail(context.auth0.user?.email)) {
      throw redirect({ to: "/", search: { denied: "school" } });
    }
  },
  component: Home,
});

type Screen = "cover" | "careers" | "fit" | "matches" | "question" | "learn" | "path" | "list" | "plan";
type TextSize = "small" | "regular" | "large";
type Style = "see" | "try" | "read" | "short";

const STYLE_ORDER: Style[] = ["see", "try", "read", "short"];
const STYLE_LABEL: Record<Style, string> = {
  see: "See it",
  try: "Try it",
  read: "Read it",
  short: "Short",
};

const ADVISORS = [
  ["Kendall", "Kadvise@mdc.edu"],
  ["Hialeah", "Hiadvisement@mdc.edu"],
  ["Homestead", "Hadvisement@mdc.edu"],
  ["Medical", "Madvisement@mdc.edu"],
  ["Meek", "meekstudentservices@mdc.edu"],
  ["North", "Anorth@mdc.edu"],
  ["Padrón", "Padvisement@mdc.edu"],
  ["West", "Westadvisement@mdc.edu"],
  ["Wolfson", "wadvisement@mdc.edu"],
] as const;

const CAMPUS_FIT: Record<
  CareerId,
  { campus: (typeof ADVISORS)[number][0]; why: string; person: string }
> = {
  architect: {
    campus: "Kendall",
    why: "Kendall has the School of Architecture and Interior Design. The drawing and design labs are based there, so that is the better chance of a seat.",
    person: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128.",
  },
  mechanical: {
    campus: "Kendall",
    why: "Kendall houses the School of Engineering, Technology and Design. The later engineering classes are more likely to be open there. Early English and math can be taken closer to home.",
    person: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128.",
  },
  chef: {
    campus: "Wolfson",
    why: "The culinary labs are at the Miami Culinary Institute on the Wolfson Campus, downtown. That is the campus that runs this degree.",
    person: "MDC Works at Wolfson lists Moses Washington, room 4102-06, 305-237-3876.",
  },
  cyber: {
    campus: "North",
    why: "North Campus publishes this associate degree as a program you can start there. Kendall is where the later bachelor’s courses were added. For these classes, North is the clearer seat.",
    person: "MDC Works at North lists Maria Sincere, room 1101-04, 305-237-1056.",
  },
  it: {
    campus: "Kendall",
    why: "Kendall houses the School of Engineering, Technology and Design, so the A+ and networking labs are more likely to be open there. Padrón also lists this kind of program. Compare both schedules.",
    person: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128.",
  },
};

const CAREER_HELP: Record<(typeof ADVISORS)[number][0], string> = {
  Kendall: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128.",
  Hialeah: "MDC Works at Hialeah lists Kadijah Belle, room 2101, 305-237-8881.",
  Homestead: "MDC Works at Homestead lists Bernard Krogh, room A115, 305-237-2128.",
  Medical: "MDC Works at the Medical Campus lists Kadijah Belle, room 1101-A, 305-237-3959.",
  Meek: "Meek does not list a separate MDC Works person. This email goes to Meek student services.",
  North: "MDC Works at North lists Maria Sincere, room 1101-04, 305-237-1056.",
  Padrón: "MDC Works at Padrón lists Maria Sincere, room 1107-06, 305-237-6508.",
  West: "MDC Works at West lists Yvonne Malavé, room 1332, 305-237-8925.",
  Wolfson: "MDC Works at Wolfson is room 4102, 305-237-9675.",
};

const ACCESS_OFFICES = [
  ["Kendall", "kaccess@mdc.edu"],
  ["Hialeah", "hialeahaccess@mdc.edu"],
  ["Homestead", "haccess@mdc.edu"],
  ["Medical", "maccessservices@mdc.edu"],
  ["Meek", ""],
  ["North", "naccess@mdc.edu"],
  ["Padrón", "paccess@mdc.edu"],
  ["West", "WestAccess@mdc.edu"],
  ["Wolfson", "waccess@mdc.edu"],
] as const;

function Home() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [careerId, setCareerId] = useState<CareerId | null>(null);
  const [usedAccommodations, setUsedAccommodations] = useState(false);
  const [style, setStyle] = useState<Style>("read");
  const [showExplain, setShowExplain] = useState(true);
  const [learnStep, setLearnStep] = useState(0);
  const [prefer, setPrefer] = useState<Exclude<Style, "short">>("read");
  const [stepIndex, setStepIndex] = useState(0);
  const [dyslexic, setDyslexic] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>("regular");
  const [speak, setSpeak] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [fitStep, setFitStep] = useState(0);
  const [fitFrom, setFitFrom] = useState<"cover" | "careers">("cover");
  const [interest, setInterest] = useState<Interest | null>(null);
  const [school, setSchool] = useState<SchoolPlan | null>(null);
  const [work, setWork] = useState<WorkTiming | null>(null);
  const [doneCourses, setDoneCourses] = useState<string[]>([]);
  const [campus, setCampus] = useState<(typeof ADVISORS)[number][0]>("Kendall");
  const [ready, setReady] = useState(false);
  const device = useDevice();
  const frame = pageFrame(device);

  const career = careerId ? careerById(careerId) : null;
  const steps = career ? (usedAccommodations ? [ACCESS_STEP, ...career.steps] : career.steps) : [];
  const onCourses = Boolean(career && stepIndex === steps.length);
  const step = onCourses ? undefined : steps[stepIndex];
  const total = career ? steps.length + 1 : 0;

  const headline = useMemo(() => {
    if (!step) return "";
    if (style === "short") return step.short;
    return step.action;
  }, [style, step]);

  const matches = interest && school && work ? suggestCareers(interest, school, work) : [];

  useEffect(() => {
    const on = localStorage.getItem("pathbook-reading") === "dyslexic";
    const savedSize = localStorage.getItem("pathbook-size");
    const size: TextSize = savedSize === "small" || savedSize === "large" ? savedSize : "regular";
    const savedSpeak = localStorage.getItem("pathbook-speak") === "on";
    setDyslexic(on);
    setTextSize(size);
    setSpeak(savedSpeak);
    document.documentElement.dataset.reading = on ? "dyslexic" : "book";
    document.documentElement.dataset.size = size;
  }, []);

  useEffect(() => {
    if (!careerId) return;
    try {
      const saved = JSON.parse(localStorage.getItem(`pathbook-courses-${careerId}`) ?? "[]");
      setDoneCourses(Array.isArray(saved) ? saved.filter((item) => typeof item === "string") : []);
    } catch {
      setDoneCourses([]);
    }
  }, [careerId]);

  useEffect(() => {
    const snap = loadLocalProgress();
    if (snap) {
      for (const [id, list] of Object.entries(snap.doneByCareer)) {
        localStorage.setItem(`pathbook-courses-${id}`, JSON.stringify(list));
      }
      localStorage.setItem("pathbook-pace", snap.pace);
      const campusName = ADVISORS.some(([name]) => name === snap.campus) ? snap.campus : "Kendall";
      setCampus(campusName as (typeof ADVISORS)[number][0]);
      setUsedAccommodations(snap.usedAccommodations);
      setStyle(snap.style as Style);
      setShowExplain(snap.showExplain);
      if (snap.careerId) {
        const picked = careerById(snap.careerId as CareerId);
        setCareerId(picked.id);
        setStepIndex(Math.min(snap.stepIndex, picked.steps.length));
        setDoneCourses(snap.doneByCareer[picked.id] ?? []);
        setScreen("path");
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const handle = window.setTimeout(() => {
      const doneByCareer: Record<string, string[]> = {};
      for (const id of ["architect", "mechanical", "chef", "cyber", "it"]) {
        try {
          const raw = JSON.parse(localStorage.getItem(`pathbook-courses-${id}`) ?? "[]");
          if (!Array.isArray(raw)) continue;
          const list = raw.filter((item): item is string => typeof item === "string");
          if (list.length > 0) doneByCareer[id] = list;
        } catch {
          /* ignore a bad saved list */
        }
      }
      if (careerId) doneByCareer[careerId] = doneCourses;
      const snap: PathSnapshot = {
        careerId,
        usedAccommodations,
        style,
        showExplain,
        pace: localStorage.getItem("pathbook-pace") ?? "full",
        campus,
        stepIndex,
        doneByCareer,
      };
      saveLocalProgress(snap);
    }, 500);
    return () => window.clearTimeout(handle);
  }, [ready, careerId, usedAccommodations, style, showExplain, campus, stepIndex, doneCourses]);

  function replaceCourses(next: string[]) {
    if (!careerId) return;
    setDoneCourses(next);
    localStorage.setItem(`pathbook-courses-${careerId}`, JSON.stringify(next));
  }

  function openCourses() {
    if (!career) return;
    setStepIndex(steps.length);
    setScreen("path");
    setSettingsOpen(false);
  }

  function setReading(nextDyslexic: boolean) {
    setDyslexic(nextDyslexic);
    document.documentElement.dataset.reading = nextDyslexic ? "dyslexic" : "book";
    localStorage.setItem("pathbook-reading", nextDyslexic ? "dyslexic" : "book");
  }

  function setSize(next: TextSize) {
    setTextSize(next);
    document.documentElement.dataset.size = next;
    localStorage.setItem("pathbook-size", next);
  }

  function setReadAloud(next: boolean) {
    setSpeak(next);
    localStorage.setItem("pathbook-speak", next ? "on" : "off");
    if (!next) stopSpoken();
  }

  useEffect(() => {
    if (!speak) return;
    let last = "";
    let timer = 0;
    let request = 0;
    function readSelection() {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const text = window.getSelection()?.toString().replace(/\s+/g, " ").trim() ?? "";
        if (!text || text === last) return;
        last = text;
        const mine = ++request;
        stopSpoken();
        void speakWithElevenLabs(text, () => mine === request);
      }, 250);
    }
    document.addEventListener("mouseup", readSelection);
    document.addEventListener("touchend", readSelection);
    return () => {
      window.clearTimeout(timer);
      request += 1;
      document.removeEventListener("mouseup", readSelection);
      document.removeEventListener("touchend", readSelection);
      stopSpoken();
    };
  }, [speak]);

  function startFit(from: "cover" | "careers") {
    setFitFrom(from);
    setFitStep(0);
    setInterest(null);
    setSchool(null);
    setWork(null);
    setScreen("fit");
  }

  function answerFit(choice: string) {
    if (fitStep === 0) {
      setInterest(choice as Interest);
      setFitStep(1);
      return;
    }
    if (fitStep === 1) {
      setSchool(choice as SchoolPlan);
      setFitStep(2);
      return;
    }
    setWork(choice as WorkTiming);
    setScreen("matches");
  }

  function pickCareer(id: CareerId) {
    setCareerId(id);
    setCampus(CAMPUS_FIT[id].campus);
    setStepIndex(0);
    setUsedAccommodations(false);
    setStyle("read");
    setScreen("question");
  }

  function answerAccommodations(yes: boolean) {
    setUsedAccommodations(yes);
    if (yes) {
      setLearnStep(0);
      setScreen("learn");
      return;
    }
    setStyle("read");
    setShowExplain(true);
    setScreen("path");
  }

  function answerLearn(choice: string) {
    if (learnStep === 0) {
      setPrefer(choice as Exclude<Style, "short">);
      setLearnStep(1);
      return;
    }
    if (learnStep === 1) {
      const nextPrefer = choice === "stop" ? "short" : prefer;
      if (choice === "stop") {
        setStyle("short");
        setShowExplain(false);
        setStepIndex(0);
        setScreen("path");
        return;
      }
      setPrefer(nextPrefer === "short" ? prefer : nextPrefer);
      setLearnStep(2);
      return;
    }
    const explain = choice === "explain";
    const next: Style = explain ? prefer : prefer === "read" ? "short" : prefer;
    setShowExplain(explain && next !== "short");
    setStyle(next);
    setStepIndex(0);
    setScreen("path");
  }

  function cycleStyle() {
    const next = STYLE_ORDER[(STYLE_ORDER.indexOf(style) + 1) % STYLE_ORDER.length];
    setStyle(next);
    if (next === "short") setShowExplain(false);
  }

  function restart() {
    setScreen("cover");
    setCareerId(null);
    setUsedAccommodations(false);
    setStyle("read");
    setShowExplain(true);
    setLearnStep(0);
    setFitStep(0);
    setInterest(null);
    setSchool(null);
    setWork(null);
    setStepIndex(0);
    setSettingsOpen(false);
    window.speechSynthesis?.cancel();
    stopSpoken();
  }

  return (
    <main className={frame.main}>
      <div className={frame.sheet} data-speak-root>
        <div className="absolute top-4 left-4 z-10" data-nospeak>
          <AuthButtons bar />
        </div>
        <button
          type="button"
          aria-label="Settings"
          data-nospeak
          onClick={() => setSettingsOpen((open) => !open)}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink"
        >
          <Settings size={18} aria-hidden="true" />
        </button>
        {settingsOpen && (
          <div
            data-nospeak
            className="absolute top-16 right-4 left-4 z-10 rounded-2xl border border-rule bg-paper p-4 shadow-[0_12px_30px_rgba(42,47,147,0.18)]"
          >
            <p className="text-xs tracking-wide text-sage uppercase">Reading</p>
            <p className="mt-3 text-sm font-semibold">Font</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setReading(false)}
                className={`h-11 rounded-full border text-sm font-semibold ${dyslexic ? "border-rule" : "border-neon bg-neon text-paper"}`}
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setReading(true)}
                className={`h-11 rounded-full border text-sm font-semibold ${dyslexic ? "border-neon bg-neon text-paper" : "border-rule"}`}
              >
                Open Sans
              </button>
            </div>
            <p className="mt-4 text-sm font-semibold">Size</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(
                [
                  ["small", "Small"],
                  ["regular", "Regular"],
                  ["large", "Large"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSize(id)}
                  className={`h-11 rounded-full border text-sm font-semibold ${textSize === id ? "border-neon bg-neon text-paper" : "border-rule"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold">Read aloud</p>
            <p className="mt-1 text-sm text-muted">Select the words you want heard.</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setReadAloud(false)}
                className={`h-11 rounded-full border text-sm font-semibold ${speak ? "border-rule" : "border-neon bg-neon text-paper"}`}
              >
                Off
              </button>
              <button
                type="button"
                onClick={() => setReadAloud(true)}
                className={`h-11 rounded-full border text-sm font-semibold ${speak ? "border-neon bg-neon text-paper" : "border-rule"}`}
              >
                On
              </button>
            </div>
            {career && (
              <div className="mt-4 flex flex-col gap-2 border-t border-rule pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSettingsOpen(false);
                    setScreen("list");
                  }}
                  className="text-left text-sm font-semibold text-sage"
                >
                  See every step
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSettingsOpen(false);
                    openCourses();
                  }}
                  className="text-left text-sm font-semibold text-sage"
                >
                  Course timeline
                </button>
              </div>
            )}
          </div>
        )}
        {screen === "cover" && (
          <section className="flex flex-1 flex-col">
            <p className="font-display text-sm tracking-wide text-sage">Miami Dade College</p>
            <h1 className={`mt-10 font-display leading-none font-medium text-ink ${device === "phone" ? "text-5xl" : "text-6xl"}`}>
              Major Spark
            </h1>
            <p className="mt-4 font-display text-xl text-muted italic">notaminor.study</p>
            <div className="mt-8 h-px w-16 bg-rule" />
            <p className={`mt-8 text-lg leading-relaxed text-ink ${device === "phone" ? "max-w-xs" : "max-w-lg"}`}>
              A clear path from your first class at Miami Dade College to a first job. Pick a career, or answer three questions if you are not sure yet.
            </p>
            <blockquote className={`mt-6 text-lg leading-relaxed text-ink italic font-semibold ${device === "phone" ? "max-w-xs" : "max-w-lg"}`}>
              “A spark, no matter how big or small, is the first step to lighting your way to a brighter tomorrow.”
              <footer className="mt-2 text-sm font-normal not-italic text-muted">Andrea Price</footer>
            </blockquote>
            <div className="mt-auto flex flex-col gap-3 pt-12">
              <button
                type="button"
                onClick={() => setScreen("careers")}
                className="h-12 w-full rounded-full bg-neon text-base font-semibold text-paper shadow-neon"
              >
                I know the career
              </button>
              <button
                type="button"
                onClick={() => startFit("cover")}
                className="h-12 w-full rounded-full border border-neon text-base font-semibold text-sage"
              >
                Help me choose
              </button>
            </div>
          </section>
        )}

        {screen === "careers" && (
          <section className="flex flex-1 flex-col">
            <Header kicker="Choose one" title="Where do you want to go?" />
            <button
              type="button"
              onClick={() => startFit("careers")}
              className="mt-6 h-12 w-full rounded-full border border-neon text-base font-semibold text-sage"
            >
              Not sure yet
            </button>
            <ul className="mt-6 flex flex-col gap-2">
              {CAREERS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => pickCareer(item.id)}
                    className="w-full rounded-2xl border border-rule bg-paper px-4 py-4 text-left transition-colors hover:bg-paper-deep"
                  >
                    <span className="block font-display text-2xl leading-tight">{item.name}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{item.line}</span>
                  </button>
                </li>
              ))}
            </ul>
            <TextButton className="mt-6" onClick={() => setScreen("cover")}>
              Back
            </TextButton>
          </section>
        )}

        {screen === "fit" && (
          <section className="flex flex-1 flex-col">
            <Header
              kicker={`Question ${fitStep + 1} of 3`}
              title={
                fitStep === 0
                  ? "What sounds most like you?"
                  : fitStep === 1
                    ? "How long do you want school to last?"
                    : "When do you want to start working?"
              }
            />
            <div className="mt-6 flex flex-col gap-3">
              {(fitStep === 0
                ? [
                    ["make", "Making things I can see"],
                    ["fix", "Figuring out how things work"],
                    ["help", "Helping people use technology"],
                  ]
                : fitStep === 1
                  ? [
                      ["mdc", "Finish at Miami Dade College"],
                      ["transfer", "I can transfer for a longer degree"],
                    ]
                  : [
                      ["during", "While I am still in school"],
                      ["after", "After I finish"],
                    ]
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => answerFit(id)}
                  className="rounded-2xl border border-rule px-4 py-4 text-left font-display text-2xl leading-tight"
                >
                  {label}
                </button>
              ))}
            </div>
            <TextButton
              className="mt-auto pt-8"
              onClick={() =>
                fitStep === 0 ? setScreen(fitFrom) : setFitStep((stepNumber) => stepNumber - 1)
              }
            >
              Back
            </TextButton>
          </section>
        )}

        {screen === "matches" && (
          <section className="flex flex-1 flex-col">
            <Header kicker="A place to start" title="This might fit." />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Not a perfect match. Just a path that lines up with what you said.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {matches.map((match) => {
                const item = careerById(match.id);
                return (
                  <li key={match.id}>
                    <button
                      type="button"
                      onClick={() => pickCareer(match.id)}
                      className="w-full rounded-2xl border border-rule px-4 py-4 text-left"
                    >
                      <span className="block font-display text-2xl leading-tight">{item.name}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted">{match.reason}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <TextButton className="mt-6" onClick={() => setScreen("careers")}>
              See all five
            </TextButton>
          </section>
        )}

        {screen === "question" && career && (
          <section className="flex flex-1 flex-col">
            <Header kicker={career.name} title="One question before the steps." />
            <p className="mt-6 text-lg leading-relaxed">
              Have you had, or do you have, accommodations in school?
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => answerAccommodations(true)}
                className="h-12 rounded-full bg-neon text-base font-semibold text-paper shadow-neon"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => answerAccommodations(false)}
                className="h-12 rounded-full border border-neon bg-paper text-base font-semibold text-sage"
              >
                No
              </button>
            </div>
            <TextButton className="mt-auto pt-8" onClick={() => setScreen("careers")}>
              Choose a different career
            </TextButton>
          </section>
        )}

        {screen === "learn" && career && (
          <section className="flex flex-1 flex-col">
            <Header
              kicker={`Question ${learnStep + 1} of 3`}
              title={
                learnStep === 0
                  ? "When you learn something new, what helps most?"
                  : learnStep === 1
                    ? "When a page has a lot of words…"
                    : "School words, like “internship”…"
              }
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Same path either way. This only changes how the step is written.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {(learnStep === 0
                ? [
                    ["see", "Seeing what finished looks like"],
                    ["try", "Trying one small piece myself"],
                    ["read", "Reading it in plain words"],
                  ]
                : learnStep === 1
                  ? [
                      ["stop", "I stop and come back later"],
                      ["stay", "I can stay if the words are clear"],
                    ]
                  : [
                      ["explain", "Tell me what they mean"],
                      ["skip", "I already know them"],
                    ]
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => answerLearn(id)}
                  className="rounded-2xl border border-rule px-4 py-4 text-left font-display text-2xl leading-tight"
                >
                  {label}
                </button>
              ))}
            </div>
            <TextButton
              className="mt-auto pt-8"
              onClick={() =>
                learnStep === 0 ? setScreen("question") : setLearnStep((stepNumber) => stepNumber - 1)
              }
            >
              Back
            </TextButton>
          </section>
        )}

        {screen === "path" && career && (step || onCourses) && (
          <section className="flex flex-1 flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs tracking-wide text-sage uppercase">{career.name}</p>
                <p className="mt-1 text-sm text-muted">{career.start}</p>
              </div>
              <button
                type="button"
                onClick={cycleStyle}
                className={`shrink-0 rounded-full border border-rule px-3 py-2 text-xs font-semibold tracking-wide text-ink uppercase ${usedAccommodations && !onCourses ? "" : "hidden"}`}
              >
                {STYLE_LABEL[style]}
              </button>
            </div>

            <div className={`flex flex-1 flex-col py-6 ${onCourses ? "" : "justify-center"}`}>
              {step && (
                <>
              <h2 className="font-display text-4xl leading-[1.15] font-medium">{headline}</h2>
              {style === "read" && (
                <p className="mt-6 text-base leading-relaxed">{plainStep(step, true)}</p>
              )}
              {style === "see" && (
                <p className="mt-6 text-base leading-relaxed">{plainStep(step, showExplain)}</p>
              )}
              {style === "try" && (
                <div className="mt-6 space-y-4 text-base leading-relaxed">
                  <p>{step.short}</p>
                  <p>{step.alongside}</p>
                  {showExplain && <p>{step.explain}</p>}
                </div>
              )}
              {style === "short" && <p className="mt-6 text-base leading-relaxed">{asSentence(step.time)}</p>}
              {style === "read" && (
                <p className="mt-6 text-sm leading-relaxed text-muted">{asSentence(step.alongside)}</p>
              )}
              {style === "see" && (
                <p className="mt-6 text-sm leading-relaxed text-muted">{asSentence(step.alongside)}</p>
              )}
              {usedAccommodations && step.support && step !== ACCESS_STEP && (
                <p className="mt-3 text-sm leading-relaxed text-ink">{step.support}</p>
              )}
              {career && step === career.steps[0] && <RegisterDates />}
              {step === ACCESS_STEP && (
                <div className="mt-6">
                  <label className="block text-sm text-muted">
                    Campus
                    <select
                      value={campus}
                      onChange={(event) => setCampus(event.target.value as (typeof ADVISORS)[number][0])}
                      className="mt-1 h-11 w-full rounded-full border border-rule bg-paper px-4 text-ink"
                    >
                      {ACCESS_OFFICES.map(([name]) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <a
                    href={accessMailto(campus)}
                    className="mt-3 flex h-12 items-center justify-center rounded-full bg-neon text-center text-sm font-semibold text-paper shadow-neon"
                  >
                    {accessMailto(campus).startsWith("mailto:") ? "Email ACCESS" : "See ACCESS offices"}
                  </a>
                </div>
              )}
                </>
              )}
              {onCourses && career && (
                <>
                  <CampusNote careerId={career.id} selected={campus} />
                  <CourseChecklist
                  careerId={career.id}
                  transferring={school === "transfer"}
                  withSupport={usedAccommodations}
                  done={doneCourses}
                  onReplace={replaceCourses}
                  />
                </>
              )}
            </div>

            <div className="border-t border-rule pt-4">
              <p className="text-center text-sm text-muted">
                Step {stepIndex + 1} of {total}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStepIndex((index) => Math.max(0, index - 1))}
                  disabled={stepIndex === 0}
                  className="h-12 rounded-full border border-rule text-sm font-semibold disabled:opacity-40"
                >
                  Previous
                </button>
                {onCourses && career ? (
                  <a
                    href={advisorMailto(campus, career.name, PLANS[career.id].program)}
                    className="flex h-12 items-center justify-center rounded-full bg-neon text-center text-sm font-semibold text-paper shadow-neon"
                  >
                    Email an advisor
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setStepIndex((index) => Math.min(total - 1, index + 1))}
                    className="h-12 rounded-full bg-neon text-sm font-semibold text-paper shadow-neon"
                  >
                    {stepIndex === steps.length - 1 ? "Your classes" : "Next step"}
                  </button>
                )}
              </div>
              {onCourses && career && (
                <>
                <label className="mt-3 block text-sm text-muted">
                  Campus for these classes
                  <select
                    value={campus}
                    onChange={(event) => setCampus(event.target.value as (typeof ADVISORS)[number][0])}
                    className="mt-1 h-11 w-full rounded-full border border-rule bg-paper px-4 text-ink"
                  >
                    {ADVISORS.map(([name]) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </label>
                <a
                  href={careerMailto(campus, career.name, PLANS[career.id].program)}
                  className="mt-3 flex h-12 items-center justify-center rounded-full border border-ink text-center text-sm font-semibold text-ink"
                >
                  Email career help at {campus}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-muted">{careerPerson(campus, career.id)}</p>
                <div className="mt-4 text-center">
                  <TextButton onClick={restart}>Start over</TextButton>
                </div>
                </>
              )}
            </div>
          </section>
        )}

        {screen === "plan" && career && (
          <section className="flex flex-1 flex-col">
            <Header kicker="On-time plan" title={career.name} />
            <p className="mt-3 text-sm leading-relaxed text-ink">{PLANS[career.id].program}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{PLANS[career.id].pace}</p>
            <ol className="mt-6 flex flex-col gap-5">
              {PLANS[career.id].terms.map((term) => (
                <li key={term.label}>
                  <p className="text-xs tracking-wide text-sage uppercase">
                    {term.label}
                    <span className="text-rule"> · </span>
                    {term.credits}
                  </p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {term.courses.map((course) => (
                      <li key={course.code + course.name} className="text-sm leading-relaxed">
                        <span className="font-semibold">{course.code}. </span>
                        {course.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 font-display text-2xl">To get into the field</h3>
            <ul className="mt-3 flex flex-col gap-3">
              {PLANS[career.id].entry.map((item) => (
                <li key={item.name} className="text-sm leading-relaxed">
                  <span className="font-semibold">{item.name}. </span>
                  {item.when}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-2xl">During the program</h3>
            <ul className="mt-3 flex flex-col gap-3">
              {PLANS[career.id].credentials.map((item) => (
                <li key={item.name} className="text-sm leading-relaxed">
                  <span className="font-semibold">{item.name}. </span>
                  {item.when}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-muted">
              Taken from Miami Dade College’s full-time course sequence guides. A lower math or English placement adds terms. Confirm the current guide with an advisor. This is not a degree audit.
            </p>
            <div className="mt-6">
              <TextButton onClick={() => setScreen("list")}>Back to the steps</TextButton>
            </div>
          </section>
        )}

        {screen === "list" && career && (
          <section className="flex flex-1 flex-col">
            <Header
              kicker={STYLE_LABEL[style]}
              title={career.name}
            />
            <p className="mt-2 text-sm text-muted">{career.start}</p>
            {usedAccommodations && (
              <p className="mt-3 text-sm leading-relaxed text-ink">
                Feasible with support. Extra time or written steps can make a term longer. They do not remove the career.
              </p>
            )}
            <ol className="mt-6 flex flex-col gap-5">
              {steps.map((item, index) => (
                <li key={item.action}>
                  <button
                    type="button"
                    onClick={() => {
                      setStepIndex(index);
                      setScreen("path");
                    }}
                    className="w-full text-left"
                  >
                    <span className="font-display text-xl leading-snug">
                      {index + 1}. {item.action}
                    </span>
                    {style === "read" && (
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{item.explain}</span>
                    )}
                    {style === "see" && (
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{item.done}</span>
                    )}
                    {style === "try" && (
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{item.alongside}</span>
                    )}
                    {style === "short" && (
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{item.short}</span>
                    )}
                    {usedAccommodations && item.support && (
                      <span className="mt-1 block text-sm leading-relaxed text-gold">{item.support}</span>
                    )}
                  </button>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs leading-relaxed text-muted">
              A starting map, not an official degree audit. Confirm classes, transfer rules, and timing with an MDC advisor.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <TextButton onClick={() => setScreen("path")}>Back to this step</TextButton>
              <TextButton onClick={openCourses}>Course timeline</TextButton>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function accessMailto(campus: (typeof ADVISORS)[number][0]) {
  const email = ACCESS_OFFICES.find(([name]) => name === campus)?.[1];
  if (!email) return "https://www.mdc.edu/access/hours-and-locations/";
  const subject = "Accommodations for my classes";
  const body = `Hello,\n\nI take classes at the ${campus} Campus. I have had accommodations in school. Please tell me how to get them put in place before the term starts.\n\nThank you.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function careerPerson(campus: (typeof ADVISORS)[number][0], careerId: CareerId) {
  if (campus === "Wolfson" && careerId === "chef") {
    return "MDC Works at Wolfson lists Moses Washington, room 4102-06, 305-237-3876.";
  }
  if (campus === "Wolfson" && (careerId === "cyber" || careerId === "it" || careerId === "mechanical")) {
    return "MDC Works at Wolfson lists Christian Ortega, room 4102-02, 305-237-7864.";
  }
  return CAREER_HELP[campus];
}

function careerMailto(campus: (typeof ADVISORS)[number][0], careerName: string, program: string) {
  const email = ADVISORS.find(([name]) => name === campus)?.[1] ?? "Kadvise@mdc.edu";
  const subject = `Career help for ${careerName}`;
  const body = `Hello,\n\nI am in ${program}. Some of my classes are at the ${campus} Campus. Please help me with jobs or internships in this field.\n\nThank you.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function CampusNote({
  careerId,
  selected,
}: {
  careerId: CareerId;
  selected: (typeof ADVISORS)[number][0];
}) {
  const fit = CAMPUS_FIT[careerId];
  return (
    <div className="mb-6">
      <p className="text-base leading-relaxed text-ink">
        The fuller set of classes is more likely at {fit.campus} Campus. {fit.why}
      </p>
      {selected !== fit.campus && (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          You picked {selected}. If a class is offered there, the advisor email and career help both go to {selected}.
        </p>
      )}
    </div>
  );
}

function advisorMailto(campus: (typeof ADVISORS)[number][0], careerName: string, program: string) {
  const email = ADVISORS.find(([name]) => name === campus)?.[1] ?? "Kadvise@mdc.edu";
  const pace = localStorage.getItem("pathbook-pace");
  const paceLabel = pace === "part" ? "part time" : pace === "three-quarter" ? "3/4 time" : "full time";
  const subject = `Help registering for classes: ${careerName}`;
  const body = `Hello,\n\nI am planning ${program}. I want to study ${paceLabel}. Please help me register for the classes I still need.\n\nThank you.`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function CourseChecklist({
  careerId,
  transferring,
  withSupport,
  done,
  onReplace,
}: {
  careerId: CareerId;
  transferring: boolean;
  withSupport: boolean;
  done: string[];
  onReplace: (next: string[]) => void;
}) {
  const plan = PLANS[careerId];
  const [pace, setPace] = useState<StudyPace>("full");

  useEffect(() => {
    const saved = localStorage.getItem("pathbook-pace");
    if (saved === "full" || saved === "three-quarter" || saved === "part") setPace(saved);
  }, []);

  function choosePace(next: StudyPace) {
    setPace(next);
    localStorage.setItem("pathbook-pace", next);
  }

  const terms = termsForPace(plan, pace, transferring);
  const keys = terms.flatMap((term) => term.courses.map((course) => courseKey(course.code, course.name)));
  const onPlan = new Set(keys.map((key) => key.split("|")[0]));
  const finished = keys.filter((key) => done.includes(key)).length;
  const percent = keys.length === 0 ? 0 : Math.round((finished / keys.length) * 100);
  const later = afterDegree(careerId);

  function withoutDependents(next: string[]) {
    let current = next;
    for (let guard = 0; guard < 12; guard += 1) {
      const drop = new Set(
        current.filter((key) => {
          const course = courseByKey(terms, key);
          return course != null && blockingPrereqs(course, current, onPlan).length > 0;
        }),
      );
      if (drop.size === 0) return current;
      current = current.filter((key) => !drop.has(key));
    }
    return current;
  }

  function toggle(course: { code: string; name: string }) {
    const key = courseKey(course.code, course.name);
    if (done.includes(key)) {
      onReplace(withoutDependents(done.filter((item) => item !== key)));
      return;
    }
    if (blockingPrereqs(course, done, onPlan).length > 0) return;
    onReplace([...done, key]);
  }

  return (
    <div>
      <h2 className="font-display text-4xl leading-[1.15] font-medium">Your classes</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{plan.program}</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {(
          [
            ["full", "Full time"],
            ["three-quarter", "3/4 time"],
            ["part", "Part time"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => choosePace(id)}
            className={`h-11 rounded-full border text-sm font-semibold ${pace === id ? "border-neon bg-neon text-paper" : "border-rule"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed">
        {graduationLine(terms.length)}
        {pace === "full"
          ? " This matches the full-time sequence guide."
          : pace === "three-quarter"
            ? " Same classes, about 9 credits a term."
            : " Same classes, about 6 credits a term."}{" "}
        Skipping summers, or starting in a lower math or English class, makes it longer.
      </p>
      {later && <p className="mt-2 text-sm leading-relaxed">{later}</p>}
      <h3 className="mt-6 font-display text-2xl">What it takes</h3>
      <p className="mt-2 text-sm leading-relaxed">
        Finish this program, then meet the field requirements below. The job asks for the same degree and the same exams either way.
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {plan.entry.map((item) => (
          <li key={item.name} className="text-sm leading-relaxed">
            <span className="font-semibold">{item.name}. </span>
            {item.when}
          </li>
        ))}
      </ul>
      {plan.credentials.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {plan.credentials.map((item) => (
            <li key={item.name} className="text-sm leading-relaxed">
              <span className="font-semibold">{item.name}. </span>
              {item.when}
            </li>
          ))}
        </ul>
      )}
      {withSupport && (
        <>
          <p className="mt-4 text-sm leading-relaxed">
            Accommodations can add time. They do not remove a class, a certificate, or the job. Check in with the advisor who sets up your accommodations before the term starts. Ask which of these classes and exams can include extra time, a quieter room, or written directions.
          </p>
          <h3 className="mt-6 font-display text-2xl">What can be hard</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Some neurodivergent students run into these in this field. They are common, not a verdict. The degree and the job stay the same.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {plan.struggles.map((item) => (
              <li key={item} className="text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
      {transferring && (
        <p className="mt-4 text-sm leading-relaxed">
          You said you may finish at another school. Ask that school which of these credits they accept before you count on them. Finishing your A.A. or A.S. at Miami Dade College first usually makes the transfer smoother.
        </p>
      )}
      <p className="mt-4 text-sm leading-relaxed">{percent}% of the way through.</p>
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-rule"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Percent of classes finished"
      >
        <div className="h-full rounded-full bg-neon" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-4 text-sm text-muted">
        Classes stay in the order to take them. A note under a class names what has to come first, or what you take with it.
      </p>
      <ol className="mt-6 flex flex-col gap-5">
        {terms.map((term) => (
          <li key={term.label}>
            <p className="text-xs tracking-wide text-sage uppercase">
              {term.label}
              <span className="text-rule"> · </span>
              {term.credits}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {term.courses.map((course) => {
                const key = courseKey(course.code, course.name);
                const checked = done.includes(key);
                const blocked = !checked && blockingPrereqs(course, done, onPlan).length > 0;
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => toggle(course)}
                      disabled={blocked}
                      aria-pressed={checked}
                      className={`flex w-full items-start gap-3 text-left ${blocked ? "cursor-not-allowed opacity-40" : ""}`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${checked ? "border-neon bg-neon text-paper" : "border-ink bg-paper"}`}
                        aria-hidden="true"
                      >
                        {checked && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="text-sm leading-relaxed">
                        <span className="font-semibold">{course.code}. </span>
                        {course.name}
                        {courseNeeds(course) && (
                          <span className="mt-1 block text-muted">{courseNeeds(course)}</span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

function courseByKey(terms: { courses: { code: string; name: string }[] }[], key: string) {
  for (const term of terms) {
    for (const course of term.courses) {
      if (courseKey(course.code, course.name) === key) return course;
    }
  }
  return null;
}

function courseKey(code: string, name: string) {
  return `${code}|${name}`;
}

function Header({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header>
      <p className="text-xs tracking-wide text-sage uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl leading-none font-medium">{title}</h2>
    </header>
  );
}

function TextButton({
  children,
  onClick,
  className = "",
}: {
  children: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-sm font-semibold text-sage underline decoration-rule underline-offset-4 ${className}`}
    >
      {children}
    </button>
  );
}

const TERM_DATES = [
  {
    name: "Spring 2027",
    opens: "2026-04-20",
    showUntil: "2027-04-09",
    sessions: [
      { id: "16", label: "16-week", starts: "2027-01-04", ends: "2027-04-30", refund: "2027-01-08", withdraw: "2027-03-12" },
      { id: "14", label: "14-week", starts: "2027-01-19", ends: "", refund: "2027-01-25", withdraw: "2027-03-18" },
      { id: "12", label: "12-week", starts: "2027-02-01", ends: "", refund: "2027-02-04", withdraw: "2027-03-31" },
      { id: "8", label: "First 8-week", starts: "2027-01-04", ends: "", refund: "2027-01-07", withdraw: "2027-02-05" },
      { id: "8b", label: "Second 8-week", starts: "2027-03-01", ends: "", refund: "2027-03-05", withdraw: "2027-04-09" },
      { id: "end", label: "Weekend", starts: "", ends: "", refund: "2027-01-12", withdraw: "2027-03-16" },
    ],
  },
  {
    name: "Summer 2027",
    opens: "2026-11-02",
    showUntil: "2027-07-15",
    sessions: [
      { id: "12", label: "12-week", starts: "2027-05-10", ends: "2027-07-30", refund: "2027-05-13", withdraw: "2027-06-29" },
      { id: "10", label: "10-week", starts: "2027-05-24", ends: "2027-07-30", refund: "2027-05-27", withdraw: "" },
      { id: "8", label: "First 8-week", starts: "2027-05-10", ends: "2027-07-02", refund: "2027-05-13", withdraw: "2027-06-04" },
      { id: "8b", label: "Second 8-week", starts: "2027-06-07", ends: "2027-07-30", refund: "2027-06-10", withdraw: "2027-07-09" },
      { id: "6", label: "First 6-week", starts: "2027-05-10", ends: "2027-06-18", refund: "2027-05-12", withdraw: "2027-06-03" },
      { id: "6b", label: "Second 6-week", starts: "2027-06-21", ends: "2027-07-30", refund: "2027-06-23", withdraw: "2027-07-15" },
      { id: "end", label: "Weekend", starts: "2027-05-14", ends: "", refund: "2027-05-18", withdraw: "2027-06-30" },
    ],
  },
  {
    name: "Fall 2027",
    opens: "2027-04-19",
    showUntil: "2027-08-31",
    sessions: [],
  },
];

function dateOnly(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function endOf(iso: string) {
  const date = dateOnly(iso);
  date.setHours(23, 59, 59, 999);
  return date;
}

function writtenDate(iso: string) {
  return dateOnly(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function RegisterDates() {
  const now = new Date();
  const choices = TERM_DATES.filter((term) => now <= endOf(term.showUntil)).flatMap((term) =>
    term.sessions
      .filter((session) => !session.withdraw || now <= endOf(session.withdraw))
      .map((session) => ({
        key: `${term.name}-${session.id}`,
        label: `${term.name}, ${session.label}`,
        session,
      })),
  );
  const [picked, setPicked] = useState(choices[0]?.key ?? "");
  const selected = choices.find((choice) => choice.key === picked) ?? choices[0];
  if (!selected) {
    return <p className="mt-6 text-base">The dates saved here have passed.</p>;
  }
  const { session } = selected;
  return (
    <div className="mt-6 text-base leading-relaxed">
      <label className="block text-sm text-muted">
        Class length
        <select
          value={selected.key}
          onChange={(event) => setPicked(event.target.value)}
          className="mt-1 h-11 w-full rounded-full border border-rule bg-paper px-4 text-base text-ink"
        >
          {choices.map((choice) => (
            <option key={choice.key} value={choice.key}>
              {choice.label}
            </option>
          ))}
        </select>
      </label>
      <p className="mt-3">
        {session.starts ? `Starts ${writtenDate(session.starts)}. ` : ""}
        {session.ends ? `Ends ${writtenDate(session.ends)}.` : "The end date is not posted for this length."}
      </p>
      <p>
        {now <= endOf(session.refund)
          ? `Full refund by ${writtenDate(session.refund)}.`
          : "The full-refund date has passed."}
      </p>
      <p>
        {session.withdraw ? `A W, instead of a grade, by ${writtenDate(session.withdraw)}.` : "The W date is not posted yet."}
      </p>
    </div>
  );
}

let spokenAudio: HTMLAudioElement | null = null;
let spokenUrl: string | null = null;

function stopSpoken() {
  window.speechSynthesis?.cancel();
  spokenAudio?.pause();
  spokenAudio = null;
  if (spokenUrl) URL.revokeObjectURL(spokenUrl);
  spokenUrl = null;
}

async function speakWithElevenLabs(text: string, stillCurrent: () => boolean) {
  try {
    const response = await fetch("/api/speak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!stillCurrent()) return;
    if (!response.ok) throw new Error("fallback");
    const blob = await response.blob();
    if (!stillCurrent()) return;
    spokenUrl = URL.createObjectURL(blob);
    spokenAudio = new Audio(spokenUrl);
    await spokenAudio.play();
  } catch {
    if (!stillCurrent() || !window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  }
}

function plainStep(step: { explain: string; done: string; time: string }, withExplain: boolean) {
  const done = step.done.trim().replace(/\.+$/, "");
  const doneLower = done.charAt(0).toLowerCase() + done.slice(1);
  const time = step.time.trim().replace(/\.+$/, "");
  const timeLine = time.includes(".") ? `${time}.` : `This takes ${time.charAt(0).toLowerCase()}${time.slice(1)}.`;
  const lead = withExplain ? `${step.explain} ` : "";
  return `${lead}You are finished with this step when ${doneLower}. ${timeLine}`;
}

function asSentence(value: string) {
  const text = value.trim();
  return /[.!?]$/.test(text) ? text : `${text}.`;
}
