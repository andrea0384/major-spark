import type { CareerId } from "@/lib/paths";

export type PlanCourse = {
  code: string;
  name: string;
};

export type PlanTerm = {
  label: string;
  credits: string;
  courses: PlanCourse[];
};

export type PlanCredential = {
  name: string;
  when: string;
};

export type Plan = {
  program: string;
  pace: string;
  terms: PlanTerm[];
  entry: PlanCredential[];
  credentials: PlanCredential[];
  struggles: string[];
};

export const PLANS: Record<CareerId, Plan> = {
  architect: {
    program: "A.S. Architectural Design and Construction Technology · code 26034 · 66 credits",
    pace: "Six terms if you study full time, on the Fall 2024 sequence guide. A licensed architect still needs a professional degree after MDC.",
    terms: [
      {
        label: "Term 1",
        credits: "12 credits",
        courses: [
          { code: "ARC 1115", name: "Architectural Communications 1" },
          { code: "ARC 1126C", name: "Architectural Drawing 1" },
          { code: "ARC 2701", name: "History of Architecture 1" },
          { code: "MAC 1105", name: "College Algebra" },
        ],
      },
      {
        label: "Term 2",
        credits: "15 credits",
        courses: [
          { code: "ARC 1301", name: "Architectural Design 1" },
          { code: "ARC 2461", name: "Architectural Materials and Construction 1" },
          { code: "ARC 2171", name: "Computer Aided Drafting 1" },
          { code: "ENC 1101", name: "English Composition 1" },
        ],
      },
      {
        label: "Term 3",
        credits: "7 credits",
        courses: [
          { code: "AMH or POS", name: "One social science: AMH 2010, AMH 2020, or POS 2041" },
          { code: "Elective", name: "One ARC, BCT, BCN, or CGS 1060C course" },
        ],
      },
      {
        label: "Term 4",
        credits: "12 credits",
        courses: [
          { code: "ARC 1128", name: "Architectural Drawing 2" },
          { code: "ARC 2056", name: "Computer Aided Architectural Presentation" },
          { code: "ARC 2172", name: "Computer Aided Drafting 2" },
        ],
      },
      {
        label: "Term 5",
        credits: "14 credits",
        courses: [
          { code: "ARC 2053", name: "Architectural Computer Applications" },
          { code: "ARC 2681", name: "Environmental Technology" },
          { code: "BCT 2760", name: "Building Code Regulations" },
          { code: "Elective", name: "One more ARC, BCT, BCN, or CGS 1060C course" },
        ],
      },
      {
        label: "Term 6",
        credits: "6 credits",
        courses: [
          { code: "Humanities", name: "One humanities course, such as ARH 1000 or HUM 1020" },
          { code: "Science", name: "One natural science, such as PHY 2053" },
          { code: "CSP or CGS 1060C", name: "Computer Skills Placement, or Introduction to Computer Technology" },
        ],
      },
    ],
    entry: [
      {
        name: "No architect license yet",
        when: "You can work as a drafter or designer in a firm with this degree. You may not call yourself an architect until you are licensed.",
      },
      {
        name: "Florida architect license",
        when: "Not an MDC exam. After a professional degree, open a record at ncarb.org, log your hours, and sign up for the exam sections there.",
      },
    ],
    credentials: [
      {
        name: "Design portfolio",
        when: "Build it during the drawing and design courses. Transfer schools ask for it.",
      },
    ],
    struggles: [
      "Studio classes run long, and the room can be loud, bright, and crowded.",
      "Critiques put your work in front of the class. Feedback can feel personal even when it is about the drawing.",
      "Deadlines stack. A project that looks almost done can still need many quiet hours.",
      "Switching from a detail to the whole building, and back, is constant.",
      "Group work depends on shared files and meetings that move fast.",
    ],
  },
  mechanical: {
    program: "A.A. Engineering – Mechanical pathway · code 10911 · 60 credits",
    pace: "Six terms if you start in College Algebra and study full time, on the Fall 2024 sequence guide. Earlier math adds terms.",
    terms: [
      {
        label: "Term 1",
        credits: "13 credits",
        courses: [
          { code: "ENC 1101", name: "English Composition 1" },
          { code: "EGN 1008C", name: "Introduction to Engineering" },
          { code: "Humanities", name: "One humanities course" },
          { code: "MAC 1105", name: "College Algebra" },
          { code: "SLS 1106", name: "First Year Experience Seminar" },
        ],
      },
      {
        label: "Term 2",
        credits: "14 credits",
        courses: [
          { code: "ENC 1102", name: "English Composition 2" },
          { code: "Social science", name: "AMH 2010, AMH 2020, or POS 2041" },
          { code: "CHM 1045", name: "General Chemistry and Qualitative Analysis" },
          { code: "CHM 1045L", name: "General Chemistry lab" },
          { code: "MAC 1140", name: "Pre-Calculus Algebra" },
        ],
      },
      {
        label: "Term 3",
        credits: "3 credits",
        courses: [{ code: "MAC 1114", name: "Trigonometry" }],
      },
      {
        label: "Term 4",
        credits: "14 credits",
        courses: [
          { code: "MAC 2311", name: "Calculus and Analytical Geometry 1" },
          { code: "Social science", name: "A second social science" },
          { code: "Speech", name: "One oral communication course, such as SPC 2608" },
          { code: "PHY 1025", name: "Basic Physics" },
        ],
      },
      {
        label: "Term 5",
        credits: "12 credits",
        courses: [
          { code: "Humanities", name: "A second humanities course" },
          { code: "MAC 2312", name: "Calculus and Analytical Geometry 2" },
          { code: "PHY 2048", name: "Physics with Calculus 1" },
          { code: "PHY 2048L", name: "Physics with Calculus 1 lab" },
        ],
      },
      {
        label: "Term 6",
        credits: "4 credits",
        courses: [{ code: "MAC 2313", name: "Calculus and Analytical Geometry 3" }],
      },
      {
        label: "Before you transfer",
        credits: "Ask an advisor",
        courses: [
          { code: "MAP 2302", name: "Differential Equations" },
          { code: "PHY 2049", name: "Physics with Calculus 2" },
          { code: "PHY 2049L", name: "Physics with Calculus 2 lab" },
          { code: "COP 2270", name: "C for Engineers" },
          { code: "EGN 2312", name: "Engineering Mechanics – Statics" },
        ],
      },
    ],
    entry: [
      {
        name: "No license required for a first engineering job",
        when: "You can work under a licensed engineer before you have your own license.",
      },
      {
        name: "Fundamentals of Engineering exam",
        when: "Not an MDC exam. Near the end of the bachelor’s degree, register at ncees.org and take it at Pearson VUE.",
      },
      {
        name: "Professional Engineer exam",
        when: "Years after the FE exam, if you want to sign and seal your own work.",
      },
    ],
    credentials: [
      {
        name: "Computer Skills Placement, or CGS 1060C",
        when: "Take CGS 1060C at MDC, or take the Computer Skills Placement test at an MDC testing center. Ask advising which one your plan uses.",
      },
    ],
    struggles: [
      "Math is every term, and a timed test can hide what you actually know.",
      "Labs have several steps at once. Missing one early step breaks the later ones.",
      "Problem sets are long. Starting is often harder than the math itself.",
      "Group projects assume you can jump into someone else’s half-finished work.",
      "Small calculation errors matter, and catching them takes a second, slower pass.",
    ],
  },
  chef: {
    program: "A.S. Culinary Arts Management · code 22031 · 60 credits",
    pace: "Six terms if you study full time, on the Fall 2024 sequence guide.",
    terms: [
      {
        label: "Term 1",
        credits: "12 credits",
        courses: [
          { code: "ENC 1101", name: "English Composition 1" },
          { code: "FSS 1200", name: "Culinary Terminology and Procedures" },
          { code: "FSS 1202C", name: "Food Production 1 – Fundamental Skills" },
          { code: "HFT 1212", name: "Safety and Sanitation" },
        ],
      },
      {
        label: "Term 2",
        credits: "12 credits",
        courses: [
          { code: "Social science", name: "AMH 2010, AMH 2020, or POS 2041" },
          { code: "FSS 1204C", name: "Food Production 2 – American Regional Cuisine" },
          { code: "FSS 1246C", name: "Basic Baking – Foundational Skills" },
          { code: "MGF 1130", name: "Mathematical Thinking" },
        ],
      },
      {
        label: "Term 3",
        credits: "9 credits",
        courses: [
          { code: "CCT or CGS 1060C", name: "Computer Competency Test, or Introduction to Computer Technology" },
          { code: "HFT 1220", name: "Supervision and Personnel Management" },
          { code: "FSS 2248C", name: "Garde Manger" },
          { code: "HUN 1201", name: "Essentials of Human Nutrition" },
        ],
      },
      {
        label: "Term 4",
        credits: "12 credits",
        courses: [
          { code: "BSC 1005", name: "General Education Biology" },
          { code: "FSS 1801", name: "Culinary Sustainability and Practices" },
          { code: "FSS 2242C", name: "International Cuisines" },
          { code: "HFT 1454", name: "Food and Beverage Cost Controls" },
        ],
      },
      {
        label: "Term 5",
        credits: "8 credits",
        courses: [
          { code: "ACG 1403", name: "Excel for Business" },
          { code: "FSS 2205C", name: "Food Production 3 – Contemporary Cuisine" },
          { code: "FSS 2381", name: "Culinary Management Internship" },
        ],
      },
      {
        label: "Term 6",
        credits: "7 credits",
        courses: [
          { code: "PHI 2010", name: "Introduction to Philosophy" },
          { code: "FSS 2940", name: "Culinary Management Externship" },
        ],
      },
    ],
    entry: [
      {
        name: "Florida food-handler training",
        when: "HFT 1212 at MDC teaches this. It does not give you the certificate. Buy ServSafe Food Handler at servsafe.com and take it on your own, unless the advisor says this term’s class includes the exam.",
      },
      {
        name: "ServSafe Manager",
        when: "The higher certificate. Register yourself at servsafe.com and book a proctored exam. Ask the culinary advisor if MDC has a sitting. If not, you do it on your own. Take it before you graduate.",
      },
      {
        name: "No state chef license",
        when: "Florida does not license chefs. The American Culinary Federation Certified Culinarian credential is optional, not required to get hired.",
      },
    ],
    credentials: [
      {
        name: "College Credit Certificate: Chef Apprentice",
        when: "Not a separate exam. You earn it by finishing the marked courses at MDC.",
      },
      {
        name: "College Credit Certificate: Culinary Arts Management Operations",
        when: "Not a separate exam. You earn it by finishing the marked courses at MDC.",
      },
    ],
    struggles: [
      "A working kitchen is hot, loud, and full of smells and timers at the same time.",
      "Service does not pause. Directions are often short and shouted.",
      "Shifts start early, run late, or both. Sleep and meals get irregular.",
      "You are on your feet, and the pace can change in a minute.",
      "One ticket has many steps. Dropping one step is easy when the line speeds up.",
    ],
  },
  cyber: {
    program: "A.S. Cybersecurity · code 25079 · 60 credits",
    pace: "Five terms if you study full time, on the Spring 2025 sequence guide. It continues into the Bachelor of Science in Cybersecurity at MDC.",
    terms: [
      {
        label: "Term 1",
        credits: "15 credits",
        courses: [
          { code: "CGS 1060C", name: "Introduction to Computer Technology and Applications" },
          { code: "CTS 1120", name: "Cybersecurity Fundamentals" },
          { code: "CTS 1134", name: "Networking Technologies" },
          { code: "MAC 1105 or STA 2023", name: "College Algebra or Statistical Methods" },
        ],
      },
      {
        label: "Term 2",
        credits: "15 credits",
        courses: [
          { code: "CGS 1700", name: "Introduction to Operating Systems" },
          { code: "CIS 1531", name: "Introduction to Secure Scripting" },
          { code: "CTS 1111", name: "Linux+" },
          { code: "ENC 1101", name: "English Composition 1" },
        ],
      },
      {
        label: "Term 3",
        credits: "6 credits",
        courses: [
          { code: "Social science", name: "AMH 2010, AMH 2020, or POS 2041" },
          { code: "Science", name: "One natural science" },
        ],
      },
      {
        label: "Term 4",
        credits: "12 credits",
        courses: [
          { code: "CET 2880C", name: "Digital Forensics" },
          { code: "CIS 2350", name: "Cybersecurity Analysis" },
          { code: "CTS 2314", name: "Network Defense and Countermeasures" },
        ],
      },
      {
        label: "Term 5",
        credits: "12 credits",
        courses: [
          { code: "Electives", name: "9 credits chosen with an advisor" },
          { code: "Humanities", name: "One humanities course" },
        ],
      },
    ],
    entry: [
      {
        name: "No Florida license",
        when: "You do not need a state license to work in cybersecurity.",
      },
      {
        name: "CompTIA Security+",
        when: "The exam employers most often ask for first. CTS 1120 prepares you. Buy it from CompTIA and schedule it at Pearson VUE.",
      },
      {
        name: "CompTIA Network+",
        when: "Often asked with Security+. CTS 1134 prepares you. Buy it from CompTIA and schedule it at Pearson VUE.",
      },
    ],
    credentials: [
      { name: "CompTIA Network+", when: "CTS 1134 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      { name: "CompTIA Security+", when: "CTS 1120 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      { name: "CompTIA Linux+", when: "CGS 1700 and CTS 1111 prepare you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      { name: "CompTIA CySA+", when: "CIS 2350 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      { name: "Certified Network Defender", when: "CTS 2314 prepares you. Buy the exam from EC-Council and schedule it at a test center." },
    ],
    struggles: [
      "Screens, logs, and alerts can run for hours with very little change of scene.",
      "An incident can demand a fast switch from quiet reading to urgent decisions.",
      "Certification exams are timed. Knowing the material is not the same as finishing the clock.",
      "The tools and the threats change, so last term’s notes do not stay finished.",
      "On-call work can interrupt sleep and plans with little warning.",
    ],
  },
  it: {
    program: "A.S. Computer Information Technology · code 25055 · 60 credits",
    pace: "Five terms if you study full time, on the Fall 2024 sequence guide. It can continue into the Bachelor of Science in Information Systems Technology.",
    terms: [
      {
        label: "Term 1",
        credits: "14 credits",
        courses: [
          { code: "ENC 1101", name: "English Composition 1" },
          { code: "CTS 1134 or CTS 1650", name: "Networking Technologies, or CCNA 1" },
          { code: "MAC 1105 or STA 2023", name: "College Algebra or Statistical Methods" },
          { code: "CGS 1060C", name: "Introduction to Computer Technology and Applications" },
        ],
      },
      {
        label: "Term 2",
        credits: "15 credits",
        courses: [
          { code: "Humanities", name: "One humanities course" },
          { code: "CGS 1560", name: "A+ Computer Operating Systems" },
          { code: "CTS 1328", name: "Supporting Microsoft Clients" },
          { code: "Elective", name: "4 credits chosen with an advisor" },
        ],
      },
      {
        label: "Term 3",
        credits: "6 credits",
        courses: [
          { code: "Social science", name: "AMH 2010, AMH 2020, or POS 2041" },
          { code: "Science", name: "One natural science" },
        ],
      },
      {
        label: "Term 4",
        credits: "12 credits",
        courses: [
          { code: "CTS 1131", name: "A+ Computer Essentials and Support" },
          { code: "CTS 2148C", name: "IT Project Management" },
          { code: "CTS 2153", name: "Supporting Windows Users and Applications" },
        ],
      },
      {
        label: "Term 5",
        credits: "13 credits",
        courses: [
          { code: "CGS 2108", name: "Advanced Desktop Applications" },
          { code: "Electives", name: "9 credits chosen with an advisor" },
        ],
      },
    ],
    entry: [
      {
        name: "No Florida license",
        when: "You do not need a state license to work in IT support or consulting.",
      },
      {
        name: "CompTIA A+",
        when: "The usual first exam for help desk. CGS 1560 and CTS 1131 prepare you. Buy it from CompTIA and schedule it at Pearson VUE.",
      },
      {
        name: "CompTIA Network+",
        when: "Add this for a network job. CTS 1134 prepares you. Buy it from CompTIA and schedule it at Pearson VUE.",
      },
    ],
    credentials: [
      { name: "CompTIA Network+", when: "CTS 1134 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      { name: "CompTIA A+", when: "CGS 1560 and CTS 1131 prepare you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      { name: "CompTIA Project+", when: "CTS 2148C prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE." },
      {
        name: "Microsoft Modern Desktop Administrator Associate",
        when: "CTS 1328 and CTS 2153 prepare you. Sign up through Microsoft, then schedule at Pearson VUE.",
      },
      {
        name: "College Credit Certificate: Help Desk Support Technician",
        when: "Not a separate exam. You earn it by finishing the marked courses at MDC.",
      },
      {
        name: "College Credit Certificate: Information Technology Support",
        when: "Not a separate exam. You earn it by finishing the marked courses at MDC.",
      },
    ],
    struggles: [
      "Tickets arrive unfinished, and the next one starts before the last one feels done.",
      "You explain the same problem to a frustrated person, often more than once.",
      "The work jumps from a password reset to a network outage in one afternoon.",
      "Meetings and messages interrupt the part of the job that needs quiet focus.",
      "Some problems have no clear end, so done has to be defined out loud.",
    ],
  },
};

export type StudyPace = "full" | "three-quarter" | "part";

const CREDITS: Record<string, number> = {
  "ARC 1115": 2,
  "ARC 1126C": 4,
  "ARC 1128": 4,
  "ARC 1301": 4,
  "ARC 2053": 4,
  "ARC 2056": 4,
  "ARC 2171": 4,
  "ARC 2172": 4,
  "ARC 2461": 4,
  "ARC 2681": 3,
  "ARC 2701": 3,
  "BCT 2760": 3,
  "MAC 1105": 3,
  "MAC 1114": 3,
  "MAC 1140": 3,
  "MAC 2311": 5,
  "MAC 2312": 4,
  "MAC 2313": 4,
  "ENC 1101": 3,
  "ENC 1102": 3,
  "EGN 1008C": 3,
  "EGN 2312": 3,
  "SLS 1106": 1,
  "CHM 1045": 3,
  "CHM 1045L": 2,
  "PHY 1025": 3,
  "PHY 2048": 4,
  "PHY 2048L": 1,
  "PHY 2049": 4,
  "PHY 2049L": 1,
  "MAP 2302": 3,
  "COP 2270": 4,
  "FSS 1200": 3,
  "FSS 1202C": 3,
  "FSS 1204C": 3,
  "FSS 1246C": 3,
  "FSS 1801": 3,
  "FSS 2205C": 3,
  "FSS 2242C": 3,
  "FSS 2248C": 3,
  "FSS 2381": 4,
  "FSS 2940": 4,
  "HFT 1212": 3,
  "HFT 1220": 3,
  "HFT 1454": 3,
  "HUN 1201": 3,
  "MGF 1130": 3,
  "BSC 1005": 3,
  "PHI 2010": 3,
  "ACG 1403": 1,
  "CGS 1060C": 4,
  "CGS 1560": 4,
  "CGS 1700": 4,
  "CGS 2108": 4,
  "CIS 1531": 4,
  "CIS 2350": 4,
  "CTS 1111": 4,
  "CTS 1120": 4,
  "CTS 1131": 4,
  "CTS 1134": 4,
  "CTS 1328": 4,
  "CTS 2148C": 4,
  "CTS 2153": 4,
  "CTS 2314": 4,
  "CET 2880C": 4,
  "CTS 1134 or CTS 1650": 4,
  "MAC 1105 or STA 2023": 3,
};

const STAY_TOGETHER: Array<[string, string]> = [
  ["FSS 1200", "FSS 1202C"],
  ["CHM 1045", "CHM 1045L"],
  ["PHY 2048", "PHY 2048L"],
  ["PHY 2049", "PHY 2049L"],
];

const MUST_FINISH_FIRST: Record<string, string[][]> = {
  "ENC 1102": [["ENC 1101"]],
  "MAC 1140": [["MAC 1105"]],
  "MAC 1114": [["MAC 1105"]],
  "MAC 2311": [["MAC 1140"], ["MAC 1114"]],
  "MAC 2312": [["MAC 2311"]],
  "MAC 2313": [["MAC 2312"]],
  "MAP 2302": [["MAC 2312"]],
  "CHM 1045": [["MAC 1105"]],
  "PHY 1025": [["MAC 1105"]],
  "PHY 2048": [["MAC 2311"], ["PHY 1025"]],
  "PHY 2049": [["PHY 2048"], ["PHY 2048L"]],
  "ARC 2461": [["ARC 1126C"]],
  "ARC 2171": [["ARC 1126C", "ARC 2461"]],
  "ARC 1128": [["ARC 1126C"]],
  "ARC 2172": [["ARC 2171"]],
  "ARC 2681": [["ARC 1126C"]],
  "PHI 2010": [["ENC 1101"]],
  "FSS 1204C": [["FSS 1200"], ["FSS 1202C"]],
  "FSS 1246C": [["FSS 1200"], ["FSS 1202C"]],
  "FSS 2248C": [["FSS 1200"], ["FSS 1202C"], ["FSS 1246C"]],
  "FSS 1801": [["FSS 2248C"]],
  "FSS 2242C": [["FSS 1204C"], ["FSS 1246C"], ["FSS 2248C"]],
  "FSS 2205C": [["FSS 2242C"]],
  "FSS 2381": [["FSS 2205C"]],
  "CGS 1560": [["CGS 1060C"]],
  "CTS 1328": [["CGS 1060C"]],
  "CTS 1131": [["CGS 1560"]],
  "CTS 2153": [["CTS 1328"]],
  "CGS 2108": [["CGS 1060C"]],
  "CIS 2350": [["CTS 1120"], ["CTS 1134"]],
  "CTS 2314": [["CTS 1120"], ["CTS 1134"]],
};

export function blockingPrereqs(course: PlanCourse, doneKeys: string[], onPlan: Set<string>): string[] {
  const groups = MUST_FINISH_FIRST[course.code];
  if (!groups) return [];
  const doneCodes = new Set(doneKeys.map((key) => key.split("|")[0]));
  const missing: string[] = [];
  for (const group of groups) {
    const present = group.filter((code) => onPlan.has(code));
    if (present.length === 0) continue;
    if (!present.some((code) => doneCodes.has(code))) missing.push(present.join(" or "));
  }
  return missing;
}

export function courseNeeds(course: PlanCourse): string | null {
  const needs: Record<string, string> = {
    "ENC 1101": "May need a placement class before you can start.",
    "ENC 1102": "After ENC 1101.",
    "MAC 1105": "May need MAT 1033 or a placement class first.",
    "MAC 1105 or STA 2023": "College Algebra may need MAT 1033 first. Statistics may need MAT 1033 or MGF 1131.",
    "MAC 1140": "After MAC 1105.",
    "MAC 1114": "After MAC 1105.",
    "MAC 2311": "After precalculus and trigonometry.",
    "MAC 2312": "After MAC 2311.",
    "MAC 2313": "After MAC 2312.",
    "MAP 2302": "After MAC 2312.",
    "MGF 1130": "May need a placement class first.",
    "CHM 1045": "After MAC 1105, and CHM 1025 or a chemistry placement. Take with the lab.",
    "CHM 1045L": "Take with CHM 1045.",
    "PHY 1025": "After MAC 1105.",
    "PHY 2048": "After MAC 2311 and a first physics class. Take with the lab.",
    "PHY 2048L": "Take with PHY 2048.",
    "PHY 2049": "After PHY 2048 and its lab. Take with PHY 2049L.",
    "PHY 2049L": "Take with PHY 2049.",
    "ARC 1301": "Take with or after ARC 1115.",
    "ARC 2461": "After ARC 1126C.",
    "ARC 2171": "After ARC 1126C or ARC 2461.",
    "ARC 1128": "After ARC 1126C.",
    "ARC 2172": "After ARC 2171.",
    "ARC 2681": "After ARC 1126C.",
    "PHI 2010": "After ENC 1101.",
    "FSS 1200": "Take with FSS 1202C.",
    "FSS 1202C": "Take with FSS 1200.",
    "FSS 1204C": "After FSS 1200 and FSS 1202C.",
    "FSS 1246C": "After FSS 1200 and FSS 1202C.",
    "FSS 2248C": "After FSS 1200, FSS 1202C, and FSS 1246C.",
    "FSS 1801": "After FSS 2248C.",
    "FSS 2242C": "After the earlier food-production, baking, and garde manger classes.",
    "FSS 2205C": "After FSS 2242C and the earlier production classes.",
    "FSS 2381": "After FSS 2205C.",
    "CGS 1560": "After CGS 1060C, or if you already have computer experience.",
    "CTS 1328": "After CGS 1060C, or if you already have computer experience.",
    "CTS 1131": "After CGS 1560.",
    "CTS 2153": "After CTS 1328.",
    "CGS 2108": "After CGS 1060C.",
    "CIS 2350": "After CTS 1120 and CTS 1134.",
    "CTS 2314": "After CTS 1120 and CTS 1134.",
    "CTS 1120": "A networking class first is recommended, not required.",
  };
  return needs[course.code] ?? null;
}

export function courseCredits(course: PlanCourse): number {
  if (course.name.startsWith("Advisor-chosen")) return 3;
  if (CREDITS[course.code] != null) return CREDITS[course.code];
  if (course.code === "Electives") return 9;
  if (course.code === "Elective") return 4;
  if (course.code.startsWith("CCT") || course.code.startsWith("CSP")) return 0;
  return 3;
}

function expand(course: PlanCourse): PlanCourse[] {
  if (course.code !== "Electives") return [course];
  return [1, 2, 3].map((part) => ({
    code: "Elective",
    name: `Advisor-chosen elective, ${part} of 3`,
  }));
}

export function termsForPace(plan: Plan, pace: StudyPace, transferring: boolean): PlanTerm[] {
  const source = transferring
    ? plan.terms.filter((term) => term.label !== "Before you transfer")
    : plan.terms;
  if (pace === "full") return source;

  const cap = pace === "three-quarter" ? 9 : 6;
  const flat = source.flatMap((term) => term.courses).flatMap(expand);
  const bins: PlanCourse[][] = [];
  let current: PlanCourse[] = [];
  let credits = 0;

  for (let index = 0; index < flat.length; index += 1) {
    const course = flat[index];
    const next = flat[index + 1];
    const pair = next != null && STAY_TOGETHER.some(([first, second]) => course.code === first && next.code === second);
    const block = pair ? [course, next] : [course];
    const blockCredits = block.reduce((sum, item) => sum + courseCredits(item), 0);
    if (current.length > 0 && credits + blockCredits > cap) {
      bins.push(current);
      current = [];
      credits = 0;
    }
    current.push(...block);
    credits += blockCredits;
    if (pair) index += 1;
  }
  if (current.length > 0) bins.push(current);

  return bins.map((courses, index) => ({
    label: `Term ${index + 1}`,
    credits: `${courses.reduce((sum, course) => sum + courseCredits(course), 0)} credits`,
    courses,
  }));
}

export function graduationLine(termCount: number): string {
  const months = termCount * 4;
  const years = Math.floor(months / 12);
  const extra = months % 12;
  const span =
    years === 0
      ? `about ${extra} months`
      : extra === 0
        ? `about ${years} ${years === 1 ? "year" : "years"}`
        : `about ${years} ${years === 1 ? "year" : "years"} and ${extra} months`;
  return `${termCount} terms, ${span}, if you start in the fall and keep going through fall, spring, and summer.`;
}

export function afterDegree(careerId: CareerId): string | null {
  if (careerId === "architect") {
    return "That finishes the MDC associate degree. A professional architecture degree comes after it.";
  }
  if (careerId === "mechanical") {
    return "That finishes the MDC associate degree. The engineering bachelor’s comes after you transfer.";
  }
  if (careerId === "cyber") {
    return "That finishes the associate degree. The bachelor’s in cybersecurity at MDC comes after it.";
  }
  if (careerId === "it") {
    return "That finishes the associate degree. A bachelor’s in information systems comes after it if you continue.";
  }
  return null;
}
