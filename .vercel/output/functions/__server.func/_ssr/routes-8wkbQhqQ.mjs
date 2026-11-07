import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Settings, r as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-8wkbQhqQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAREER_IDS = /* @__PURE__ */ new Set([
	"architect",
	"mechanical",
	"chef",
	"cyber",
	"it"
]);
var STYLES = /* @__PURE__ */ new Set([
	"see",
	"try",
	"read",
	"short"
]);
var PACES = /* @__PURE__ */ new Set([
	"full",
	"three-quarter",
	"part"
]);
var KEY = "pathbook-snapshot";
function cleanSnapshot(input) {
	const raw = input && typeof input === "object" ? input : {};
	const careerId = typeof raw.careerId === "string" && CAREER_IDS.has(raw.careerId) ? raw.careerId : null;
	const doneByCareer = {};
	if (raw.doneByCareer && typeof raw.doneByCareer === "object") for (const [key, value] of Object.entries(raw.doneByCareer)) {
		if (!CAREER_IDS.has(key) || !Array.isArray(value)) continue;
		doneByCareer[key] = value.filter((item) => typeof item === "string").slice(0, 200);
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
		doneByCareer
	};
}
function loadLocalProgress() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return null;
		return cleanSnapshot(JSON.parse(raw));
	} catch {
		return null;
	}
}
function saveLocalProgress(input) {
	const snap = cleanSnapshot(input);
	localStorage.setItem(KEY, JSON.stringify(snap));
}
function detectDevice() {
	if (typeof window === "undefined") return "phone";
	const width = window.innerWidth;
	const ua = navigator.userAgent;
	const iPad = /iPad/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
	const coarse = window.matchMedia("(pointer: coarse)").matches;
	if (width < 700) return "phone";
	if (iPad || coarse && width < 1200) return "tablet";
	return "computer";
}
function useDevice() {
	const [device, setDevice] = (0, import_react.useState)("phone");
	(0, import_react.useEffect)(() => {
		const apply = () => {
			const next = detectDevice();
			setDevice(next);
			document.documentElement.dataset.device = next;
		};
		apply();
		const pointer = window.matchMedia("(pointer: coarse)");
		window.addEventListener("resize", apply);
		pointer.addEventListener("change", apply);
		return () => {
			window.removeEventListener("resize", apply);
			pointer.removeEventListener("change", apply);
		};
	}, []);
	return device;
}
function pageFrame(device) {
	if (device === "tablet") return {
		main: "min-h-screen bg-desk px-6 py-8 text-ink",
		sheet: "relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl flex-col rounded-page border border-rule bg-paper px-8 pt-16 pb-10 shadow-[0_18px_50px_rgba(60,51,40,0.12)]"
	};
	if (device === "computer") return {
		main: "min-h-screen bg-desk px-8 py-10 text-ink",
		sheet: "relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col rounded-page border border-rule bg-paper px-10 pt-16 pb-10 shadow-[0_18px_50px_rgba(60,51,40,0.12)]"
	};
	return {
		main: "min-h-screen bg-desk text-ink",
		sheet: "relative mx-auto flex min-h-screen w-full max-w-none flex-col bg-paper px-5 pt-16 pb-8"
	};
}
var PLANS = {
	architect: {
		program: "A.S. Architectural Design and Construction Technology · code 26034 · 66 credits",
		pace: "Six terms if you study full time, on the Fall 2024 sequence guide. A licensed architect still needs a professional degree after MDC.",
		terms: [
			{
				label: "Term 1",
				credits: "12 credits",
				courses: [
					{
						code: "ARC 1115",
						name: "Architectural Communications 1"
					},
					{
						code: "ARC 1126C",
						name: "Architectural Drawing 1"
					},
					{
						code: "ARC 2701",
						name: "History of Architecture 1"
					},
					{
						code: "MAC 1105",
						name: "College Algebra"
					}
				]
			},
			{
				label: "Term 2",
				credits: "15 credits",
				courses: [
					{
						code: "ARC 1301",
						name: "Architectural Design 1"
					},
					{
						code: "ARC 2461",
						name: "Architectural Materials and Construction 1"
					},
					{
						code: "ARC 2171",
						name: "Computer Aided Drafting 1"
					},
					{
						code: "ENC 1101",
						name: "English Composition 1"
					}
				]
			},
			{
				label: "Term 3",
				credits: "7 credits",
				courses: [{
					code: "AMH or POS",
					name: "One social science: AMH 2010, AMH 2020, or POS 2041"
				}, {
					code: "Elective",
					name: "One ARC, BCT, BCN, or CGS 1060C course"
				}]
			},
			{
				label: "Term 4",
				credits: "12 credits",
				courses: [
					{
						code: "ARC 1128",
						name: "Architectural Drawing 2"
					},
					{
						code: "ARC 2056",
						name: "Computer Aided Architectural Presentation"
					},
					{
						code: "ARC 2172",
						name: "Computer Aided Drafting 2"
					}
				]
			},
			{
				label: "Term 5",
				credits: "14 credits",
				courses: [
					{
						code: "ARC 2053",
						name: "Architectural Computer Applications"
					},
					{
						code: "ARC 2681",
						name: "Environmental Technology"
					},
					{
						code: "BCT 2760",
						name: "Building Code Regulations"
					},
					{
						code: "Elective",
						name: "One more ARC, BCT, BCN, or CGS 1060C course"
					}
				]
			},
			{
				label: "Term 6",
				credits: "6 credits",
				courses: [
					{
						code: "Humanities",
						name: "One humanities course, such as ARH 1000 or HUM 1020"
					},
					{
						code: "Science",
						name: "One natural science, such as PHY 2053"
					},
					{
						code: "CSP or CGS 1060C",
						name: "Computer Skills Placement, or Introduction to Computer Technology"
					}
				]
			}
		],
		entry: [{
			name: "No architect license yet",
			when: "You can work as a drafter or designer in a firm with this degree. You may not call yourself an architect until you are licensed."
		}, {
			name: "Florida architect license",
			when: "Not an MDC exam. After a professional degree, open a record at ncarb.org, log your hours, and sign up for the exam sections there."
		}],
		credentials: [{
			name: "Design portfolio",
			when: "Build it during the drawing and design courses. Transfer schools ask for it."
		}],
		struggles: [
			"Studio classes run long, and the room can be loud, bright, and crowded.",
			"Critiques put your work in front of the class. Feedback can feel personal even when it is about the drawing.",
			"Deadlines stack. A project that looks almost done can still need many quiet hours.",
			"Switching from a detail to the whole building, and back, is constant.",
			"Group work depends on shared files and meetings that move fast."
		]
	},
	mechanical: {
		program: "A.A. Engineering – Mechanical pathway · code 10911 · 60 credits",
		pace: "Six terms if you start in College Algebra and study full time, on the Fall 2024 sequence guide. Earlier math adds terms.",
		terms: [
			{
				label: "Term 1",
				credits: "13 credits",
				courses: [
					{
						code: "ENC 1101",
						name: "English Composition 1"
					},
					{
						code: "EGN 1008C",
						name: "Introduction to Engineering"
					},
					{
						code: "Humanities",
						name: "One humanities course"
					},
					{
						code: "MAC 1105",
						name: "College Algebra"
					},
					{
						code: "SLS 1106",
						name: "First Year Experience Seminar"
					}
				]
			},
			{
				label: "Term 2",
				credits: "14 credits",
				courses: [
					{
						code: "ENC 1102",
						name: "English Composition 2"
					},
					{
						code: "Social science",
						name: "AMH 2010, AMH 2020, or POS 2041"
					},
					{
						code: "CHM 1045",
						name: "General Chemistry and Qualitative Analysis"
					},
					{
						code: "CHM 1045L",
						name: "General Chemistry lab"
					},
					{
						code: "MAC 1140",
						name: "Pre-Calculus Algebra"
					}
				]
			},
			{
				label: "Term 3",
				credits: "3 credits",
				courses: [{
					code: "MAC 1114",
					name: "Trigonometry"
				}]
			},
			{
				label: "Term 4",
				credits: "14 credits",
				courses: [
					{
						code: "MAC 2311",
						name: "Calculus and Analytical Geometry 1"
					},
					{
						code: "Social science",
						name: "A second social science"
					},
					{
						code: "Speech",
						name: "One oral communication course, such as SPC 2608"
					},
					{
						code: "PHY 1025",
						name: "Basic Physics"
					}
				]
			},
			{
				label: "Term 5",
				credits: "12 credits",
				courses: [
					{
						code: "Humanities",
						name: "A second humanities course"
					},
					{
						code: "MAC 2312",
						name: "Calculus and Analytical Geometry 2"
					},
					{
						code: "PHY 2048",
						name: "Physics with Calculus 1"
					},
					{
						code: "PHY 2048L",
						name: "Physics with Calculus 1 lab"
					}
				]
			},
			{
				label: "Term 6",
				credits: "4 credits",
				courses: [{
					code: "MAC 2313",
					name: "Calculus and Analytical Geometry 3"
				}]
			},
			{
				label: "Before you transfer",
				credits: "Ask an advisor",
				courses: [
					{
						code: "MAP 2302",
						name: "Differential Equations"
					},
					{
						code: "PHY 2049",
						name: "Physics with Calculus 2"
					},
					{
						code: "PHY 2049L",
						name: "Physics with Calculus 2 lab"
					},
					{
						code: "COP 2270",
						name: "C for Engineers"
					},
					{
						code: "EGN 2312",
						name: "Engineering Mechanics – Statics"
					}
				]
			}
		],
		entry: [
			{
				name: "No license required for a first engineering job",
				when: "You can work under a licensed engineer before you have your own license."
			},
			{
				name: "Fundamentals of Engineering exam",
				when: "Not an MDC exam. Near the end of the bachelor’s degree, register at ncees.org and take it at Pearson VUE."
			},
			{
				name: "Professional Engineer exam",
				when: "Years after the FE exam, if you want to sign and seal your own work."
			}
		],
		credentials: [{
			name: "Computer Skills Placement, or CGS 1060C",
			when: "Take CGS 1060C at MDC, or take the Computer Skills Placement test at an MDC testing center. Ask advising which one your plan uses."
		}],
		struggles: [
			"Math is every term, and a timed test can hide what you actually know.",
			"Labs have several steps at once. Missing one early step breaks the later ones.",
			"Problem sets are long. Starting is often harder than the math itself.",
			"Group projects assume you can jump into someone else’s half-finished work.",
			"Small calculation errors matter, and catching them takes a second, slower pass."
		]
	},
	chef: {
		program: "A.S. Culinary Arts Management · code 22031 · 60 credits",
		pace: "Six terms if you study full time, on the Fall 2024 sequence guide.",
		terms: [
			{
				label: "Term 1",
				credits: "12 credits",
				courses: [
					{
						code: "ENC 1101",
						name: "English Composition 1"
					},
					{
						code: "FSS 1200",
						name: "Culinary Terminology and Procedures"
					},
					{
						code: "FSS 1202C",
						name: "Food Production 1 – Fundamental Skills"
					},
					{
						code: "HFT 1212",
						name: "Safety and Sanitation"
					}
				]
			},
			{
				label: "Term 2",
				credits: "12 credits",
				courses: [
					{
						code: "Social science",
						name: "AMH 2010, AMH 2020, or POS 2041"
					},
					{
						code: "FSS 1204C",
						name: "Food Production 2 – American Regional Cuisine"
					},
					{
						code: "FSS 1246C",
						name: "Basic Baking – Foundational Skills"
					},
					{
						code: "MGF 1130",
						name: "Mathematical Thinking"
					}
				]
			},
			{
				label: "Term 3",
				credits: "9 credits",
				courses: [
					{
						code: "CCT or CGS 1060C",
						name: "Computer Competency Test, or Introduction to Computer Technology"
					},
					{
						code: "HFT 1220",
						name: "Supervision and Personnel Management"
					},
					{
						code: "FSS 2248C",
						name: "Garde Manger"
					},
					{
						code: "HUN 1201",
						name: "Essentials of Human Nutrition"
					}
				]
			},
			{
				label: "Term 4",
				credits: "12 credits",
				courses: [
					{
						code: "BSC 1005",
						name: "General Education Biology"
					},
					{
						code: "FSS 1801",
						name: "Culinary Sustainability and Practices"
					},
					{
						code: "FSS 2242C",
						name: "International Cuisines"
					},
					{
						code: "HFT 1454",
						name: "Food and Beverage Cost Controls"
					}
				]
			},
			{
				label: "Term 5",
				credits: "8 credits",
				courses: [
					{
						code: "ACG 1403",
						name: "Excel for Business"
					},
					{
						code: "FSS 2205C",
						name: "Food Production 3 – Contemporary Cuisine"
					},
					{
						code: "FSS 2381",
						name: "Culinary Management Internship"
					}
				]
			},
			{
				label: "Term 6",
				credits: "7 credits",
				courses: [{
					code: "PHI 2010",
					name: "Introduction to Philosophy"
				}, {
					code: "FSS 2940",
					name: "Culinary Management Externship"
				}]
			}
		],
		entry: [
			{
				name: "Florida food-handler training",
				when: "HFT 1212 at MDC teaches this. It does not give you the certificate. Buy ServSafe Food Handler at servsafe.com and take it on your own, unless the advisor says this term’s class includes the exam."
			},
			{
				name: "ServSafe Manager",
				when: "The higher certificate. Register yourself at servsafe.com and book a proctored exam. Ask the culinary advisor if MDC has a sitting. If not, you do it on your own. Take it before you graduate."
			},
			{
				name: "No state chef license",
				when: "Florida does not license chefs. The American Culinary Federation Certified Culinarian credential is optional, not required to get hired."
			}
		],
		credentials: [{
			name: "College Credit Certificate: Chef Apprentice",
			when: "Not a separate exam. You earn it by finishing the marked courses at MDC."
		}, {
			name: "College Credit Certificate: Culinary Arts Management Operations",
			when: "Not a separate exam. You earn it by finishing the marked courses at MDC."
		}],
		struggles: [
			"A working kitchen is hot, loud, and full of smells and timers at the same time.",
			"Service does not pause. Directions are often short and shouted.",
			"Shifts start early, run late, or both. Sleep and meals get irregular.",
			"You are on your feet, and the pace can change in a minute.",
			"One ticket has many steps. Dropping one step is easy when the line speeds up."
		]
	},
	cyber: {
		program: "A.S. Cybersecurity · code 25079 · 60 credits",
		pace: "Five terms if you study full time, on the Spring 2025 sequence guide. It continues into the Bachelor of Science in Cybersecurity at MDC.",
		terms: [
			{
				label: "Term 1",
				credits: "15 credits",
				courses: [
					{
						code: "CGS 1060C",
						name: "Introduction to Computer Technology and Applications"
					},
					{
						code: "CTS 1120",
						name: "Cybersecurity Fundamentals"
					},
					{
						code: "CTS 1134",
						name: "Networking Technologies"
					},
					{
						code: "MAC 1105 or STA 2023",
						name: "College Algebra or Statistical Methods"
					}
				]
			},
			{
				label: "Term 2",
				credits: "15 credits",
				courses: [
					{
						code: "CGS 1700",
						name: "Introduction to Operating Systems"
					},
					{
						code: "CIS 1531",
						name: "Introduction to Secure Scripting"
					},
					{
						code: "CTS 1111",
						name: "Linux+"
					},
					{
						code: "ENC 1101",
						name: "English Composition 1"
					}
				]
			},
			{
				label: "Term 3",
				credits: "6 credits",
				courses: [{
					code: "Social science",
					name: "AMH 2010, AMH 2020, or POS 2041"
				}, {
					code: "Science",
					name: "One natural science"
				}]
			},
			{
				label: "Term 4",
				credits: "12 credits",
				courses: [
					{
						code: "CET 2880C",
						name: "Digital Forensics"
					},
					{
						code: "CIS 2350",
						name: "Cybersecurity Analysis"
					},
					{
						code: "CTS 2314",
						name: "Network Defense and Countermeasures"
					}
				]
			},
			{
				label: "Term 5",
				credits: "12 credits",
				courses: [{
					code: "Electives",
					name: "9 credits chosen with an advisor"
				}, {
					code: "Humanities",
					name: "One humanities course"
				}]
			}
		],
		entry: [
			{
				name: "No Florida license",
				when: "You do not need a state license to work in cybersecurity."
			},
			{
				name: "CompTIA Security+",
				when: "The exam employers most often ask for first. CTS 1120 prepares you. Buy it from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA Network+",
				when: "Often asked with Security+. CTS 1134 prepares you. Buy it from CompTIA and schedule it at Pearson VUE."
			}
		],
		credentials: [
			{
				name: "CompTIA Network+",
				when: "CTS 1134 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA Security+",
				when: "CTS 1120 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA Linux+",
				when: "CGS 1700 and CTS 1111 prepare you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA CySA+",
				when: "CIS 2350 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "Certified Network Defender",
				when: "CTS 2314 prepares you. Buy the exam from EC-Council and schedule it at a test center."
			}
		],
		struggles: [
			"Screens, logs, and alerts can run for hours with very little change of scene.",
			"An incident can demand a fast switch from quiet reading to urgent decisions.",
			"Certification exams are timed. Knowing the material is not the same as finishing the clock.",
			"The tools and the threats change, so last term’s notes do not stay finished.",
			"On-call work can interrupt sleep and plans with little warning."
		]
	},
	it: {
		program: "A.S. Computer Information Technology · code 25055 · 60 credits",
		pace: "Five terms if you study full time, on the Fall 2024 sequence guide. It can continue into the Bachelor of Science in Information Systems Technology.",
		terms: [
			{
				label: "Term 1",
				credits: "14 credits",
				courses: [
					{
						code: "ENC 1101",
						name: "English Composition 1"
					},
					{
						code: "CTS 1134 or CTS 1650",
						name: "Networking Technologies, or CCNA 1"
					},
					{
						code: "MAC 1105 or STA 2023",
						name: "College Algebra or Statistical Methods"
					},
					{
						code: "CGS 1060C",
						name: "Introduction to Computer Technology and Applications"
					}
				]
			},
			{
				label: "Term 2",
				credits: "15 credits",
				courses: [
					{
						code: "Humanities",
						name: "One humanities course"
					},
					{
						code: "CGS 1560",
						name: "A+ Computer Operating Systems"
					},
					{
						code: "CTS 1328",
						name: "Supporting Microsoft Clients"
					},
					{
						code: "Elective",
						name: "4 credits chosen with an advisor"
					}
				]
			},
			{
				label: "Term 3",
				credits: "6 credits",
				courses: [{
					code: "Social science",
					name: "AMH 2010, AMH 2020, or POS 2041"
				}, {
					code: "Science",
					name: "One natural science"
				}]
			},
			{
				label: "Term 4",
				credits: "12 credits",
				courses: [
					{
						code: "CTS 1131",
						name: "A+ Computer Essentials and Support"
					},
					{
						code: "CTS 2148C",
						name: "IT Project Management"
					},
					{
						code: "CTS 2153",
						name: "Supporting Windows Users and Applications"
					}
				]
			},
			{
				label: "Term 5",
				credits: "13 credits",
				courses: [{
					code: "CGS 2108",
					name: "Advanced Desktop Applications"
				}, {
					code: "Electives",
					name: "9 credits chosen with an advisor"
				}]
			}
		],
		entry: [
			{
				name: "No Florida license",
				when: "You do not need a state license to work in IT support or consulting."
			},
			{
				name: "CompTIA A+",
				when: "The usual first exam for help desk. CGS 1560 and CTS 1131 prepare you. Buy it from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA Network+",
				when: "Add this for a network job. CTS 1134 prepares you. Buy it from CompTIA and schedule it at Pearson VUE."
			}
		],
		credentials: [
			{
				name: "CompTIA Network+",
				when: "CTS 1134 prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA A+",
				when: "CGS 1560 and CTS 1131 prepare you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "CompTIA Project+",
				when: "CTS 2148C prepares you. Buy the exam from CompTIA and schedule it at Pearson VUE."
			},
			{
				name: "Microsoft Modern Desktop Administrator Associate",
				when: "CTS 1328 and CTS 2153 prepare you. Sign up through Microsoft, then schedule at Pearson VUE."
			},
			{
				name: "College Credit Certificate: Help Desk Support Technician",
				when: "Not a separate exam. You earn it by finishing the marked courses at MDC."
			},
			{
				name: "College Credit Certificate: Information Technology Support",
				when: "Not a separate exam. You earn it by finishing the marked courses at MDC."
			}
		],
		struggles: [
			"Tickets arrive unfinished, and the next one starts before the last one feels done.",
			"You explain the same problem to a frustrated person, often more than once.",
			"The work jumps from a password reset to a network outage in one afternoon.",
			"Meetings and messages interrupt the part of the job that needs quiet focus.",
			"Some problems have no clear end, so done has to be defined out loud."
		]
	}
};
var CREDITS = {
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
	"MAC 1105 or STA 2023": 3
};
var STAY_TOGETHER = [
	["FSS 1200", "FSS 1202C"],
	["CHM 1045", "CHM 1045L"],
	["PHY 2048", "PHY 2048L"],
	["PHY 2049", "PHY 2049L"]
];
var MUST_FINISH_FIRST = {
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
	"FSS 2248C": [
		["FSS 1200"],
		["FSS 1202C"],
		["FSS 1246C"]
	],
	"FSS 1801": [["FSS 2248C"]],
	"FSS 2242C": [
		["FSS 1204C"],
		["FSS 1246C"],
		["FSS 2248C"]
	],
	"FSS 2205C": [["FSS 2242C"]],
	"FSS 2381": [["FSS 2205C"]],
	"CGS 1560": [["CGS 1060C"]],
	"CTS 1328": [["CGS 1060C"]],
	"CTS 1131": [["CGS 1560"]],
	"CTS 2153": [["CTS 1328"]],
	"CGS 2108": [["CGS 1060C"]],
	"CIS 2350": [["CTS 1120"], ["CTS 1134"]],
	"CTS 2314": [["CTS 1120"], ["CTS 1134"]]
};
function blockingPrereqs(course, doneKeys, onPlan) {
	const groups = MUST_FINISH_FIRST[course.code];
	if (!groups) return [];
	const doneCodes = new Set(doneKeys.map((key) => key.split("|")[0]));
	const missing = [];
	for (const group of groups) {
		const present = group.filter((code) => onPlan.has(code));
		if (present.length === 0) continue;
		if (!present.some((code) => doneCodes.has(code))) missing.push(present.join(" or "));
	}
	return missing;
}
function courseNeeds(course) {
	return {
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
		"CTS 1120": "A networking class first is recommended, not required."
	}[course.code] ?? null;
}
function courseCredits(course) {
	if (course.name.startsWith("Advisor-chosen")) return 3;
	if (CREDITS[course.code] != null) return CREDITS[course.code];
	if (course.code === "Electives") return 9;
	if (course.code === "Elective") return 4;
	if (course.code.startsWith("CCT") || course.code.startsWith("CSP")) return 0;
	return 3;
}
function expand(course) {
	if (course.code !== "Electives") return [course];
	return [
		1,
		2,
		3
	].map((part) => ({
		code: "Elective",
		name: `Advisor-chosen elective, ${part} of 3`
	}));
}
function termsForPace(plan, pace, transferring) {
	const source = transferring ? plan.terms.filter((term) => term.label !== "Before you transfer") : plan.terms;
	if (pace === "full") return source;
	const cap = pace === "three-quarter" ? 9 : 6;
	const flat = source.flatMap((term) => term.courses).flatMap(expand);
	const bins = [];
	let current = [];
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
		courses
	}));
}
function graduationLine(termCount) {
	const months = termCount * 4;
	const years = Math.floor(months / 12);
	const extra = months % 12;
	return `${termCount} terms, ${years === 0 ? `about ${extra} months` : extra === 0 ? `about ${years} ${years === 1 ? "year" : "years"}` : `about ${years} ${years === 1 ? "year" : "years"} and ${extra} months`}, if you start in the fall and keep going through fall, spring, and summer.`;
}
function afterDegree(careerId) {
	if (careerId === "architect") return "That finishes the MDC associate degree. A professional architecture degree comes after it.";
	if (careerId === "mechanical") return "That finishes the MDC associate degree. The engineering bachelor’s comes after you transfer.";
	if (careerId === "cyber") return "That finishes the associate degree. The bachelor’s in cybersecurity at MDC comes after it.";
	if (careerId === "it") return "That finishes the associate degree. A bachelor’s in information systems comes after it if you continue.";
	return null;
}
var ACCESS_STEP = {
	action: "Contact ACCESS at your campus and ask them to put your accommodations in place.",
	short: "Ask your campus ACCESS office to set up your accommodations.",
	explain: "ACCESS is the Miami Dade College office that sets up accommodations. Email the office at the campus where you take classes. Ask what they need from you before the term starts, so the accommodations are ready when classes begin.",
	done: "ACCESS has your request, and you know what they still need from you.",
	time: "Before the first day of class. Start as soon as you register.",
	alongside: "Write down the campus office you emailed and the date you sent it."
};
var CAREERS = [
	{
		id: "architect",
		name: "Architect",
		line: "Drawings, buildings, and a long license path.",
		start: "Starts with design classes at Miami Dade College.",
		steps: [
			{
				action: "Enroll in Architectural Design and Construction Technology.",
				short: "Start the architecture associate degree at MDC.",
				explain: "Start the Associate in Science in Architectural Design and Construction Technology. The program code is 26034. An advisor sets the first term: Architectural Communications, Architectural Drawing 1, History of Architecture, and College Algebra. This degree lets you work as a drafter. It does not make you a licensed architect.",
				done: "You are registered for that first term, and the program name is written down.",
				time: "See an advisor first. Then register before the last day listed on this page.",
				alongside: "Save the program map before you leave campus.",
				support: "Tell the advisor about classroom support you have used before, so the first studio can be set up ahead of time."
			},
			{
				action: "Finish drawing, design, and the first CAD class.",
				short: "Finish the first drawing, design, and CAD classes.",
				explain: "The next terms are Architectural Design 1, Materials and Construction, and Computer Aided Drafting 1. The portfolio starts here, not later. Save one finished drawing from each class in the same term you turn it in. A firm asks for that folder. The transcript does not show the drawings.",
				done: "Those classes are passed, and you can show one drawing from each.",
				time: "The next terms on the sequence guide.",
				alongside: "Photograph each finished drawing the week it is graded.",
				support: "If studio hours run long, ask about a lab time or a quieter station before the term fills up."
			},
			{
				action: "Take building code and presentation when the sequence reaches them.",
				short: "Take code and presentation in their terms.",
				explain: "Building Code Regulations and the computer presentation classes are already on the degree sequence. Take them in the term the guide lists. Save the presentation file that term. You do not add a separate software class later. These are the classes that let you talk about code and show work on a screen.",
				done: "The code class and a computer presentation class are passed, and the file is saved.",
				time: "The later terms of the associate degree.",
				alongside: "Put the presentation file in the same folder as the drawings."
			},
			{
				action: "The portfolio is finished when the studios are finished.",
				short: "The portfolio closes with the last studio.",
				explain: "There is no extra portfolio semester. When the last studio is graded, the folder should already hold one piece from each class plus the digital presentation. That is what you send with a transfer application or a drafter application.",
				done: "The folder has one piece from each finished studio, plus the digital presentation.",
				time: "A few minutes after each critique, then one review before you apply.",
				alongside: "Add the piece the same week the project is graded."
			},
			{
				action: "Finish the associate degree, then the professional degree.",
				short: "Finish the A.S., then transfer for the architecture degree.",
				explain: "Finish the Associate in Science at MDC. A licensed architect still needs a professional degree after that. In Miami, Florida International University is a common next school. Ask which of these credits transfer before you take extras. You can work in a firm as a drafter while that degree is still ahead.",
				done: "The associate degree is posted, and you have applied to the next architecture program.",
				time: "About two years full time at MDC, then the bachelor’s program.",
				alongside: "Order an official transcript the week you apply.",
				support: "Ask the next school’s access office to receive your accommodation history before classes start."
			},
			{
				action: "After the professional degree, open the license record.",
				short: "Start the license record after the professional degree.",
				explain: "MDC does not give the architect exam. After the professional degree, open an NCARB record at ncarb.org. That is where hours are logged and exam sections are scheduled. Starting the record early is the edge. Classmates who wait have the degree and no hour log.",
				done: "The NCARB record is open, or you have a written date to open it.",
				time: "After the professional degree. The license itself takes several more years.",
				alongside: "Save the login and the next exam date in the same folder as the portfolio."
			}
		]
	},
	{
		id: "mechanical",
		name: "Mechanical engineer",
		line: "Machines, heat, motion — math first, then a university degree.",
		start: "Starts with math and science at Miami Dade College.",
		steps: [
			{
				action: "Start the mechanical engineering pathway at MDC.",
				short: "Enroll in the engineering associate pathway.",
				explain: "Start the Associate in Arts pathway for mechanical engineering. The program code is 10911. Miami Dade College does not give the bachelor’s degree. An advisor sets the first term: English, Introduction to Engineering, College Algebra, and the first-year seminar.",
				done: "You are registered on that pathway, not in a random set of classes.",
				time: "See an advisor first. Then register before the last day listed on this page.",
				alongside: "Save the pathway name and the transfer school you are aiming at.",
				support: "Mention accommodations you have used, especially for timed math tests, before the term starts."
			},
			{
				action: "Finish chemistry, precalculus, and trigonometry.",
				short: "Finish chemistry and the math before calculus.",
				explain: "The sequence next takes General Chemistry with the lab, Pre-Calculus Algebra, and Trigonometry. If placement puts you in an earlier math class, take it. It adds a term. It is still the school path. Engineering schools will not skip these.",
				done: "Chemistry, precalculus, and trigonometry are passed.",
				time: "The terms before calculus on your sequence guide.",
				alongside: "After each math exam, write the one topic to review before the next class."
			},
			{
				action: "Finish calculus and physics with calculus.",
				short: "Finish the calculus and physics sequence.",
				explain: "The pathway then runs Calculus 1, 2, and 3, Physics with Calculus 1 and 2, and both labs. These are the classes a university uses to decide if you are ready. A graduate who transfers without them repeats a year.",
				done: "Calculus 3 and Physics with Calculus 2 are passed, including the labs.",
				time: "Several terms. Earlier math makes it longer.",
				alongside: "Check the transfer guide once a term so a class is not left off."
			},
			{
				action: "The last MDC terms include statics, differential equations, and C.",
				short: "Finish statics, differential equations, and programming.",
				explain: "Engineering Mechanics – Statics, Differential Equations, and C for Engineers are on the MDC sequence for this pathway. They are the edge at transfer. Classmates who stop at the general education classes arrive with less of the first engineering year already done.",
				done: "Those three are passed, and you know which ones the next school accepts.",
				time: "The last terms of the associate pathway.",
				alongside: "Write down which credits the university accepted the week the list arrives.",
				support: "Ask the university access office to set up support before the first engineering exam."
			},
			{
				action: "Finish the associate pathway and transfer.",
				short: "Finish at MDC, then start the bachelor’s degree.",
				explain: "Finish the Associate in Arts on this pathway, then transfer into a Bachelor of Science in mechanical engineering. Florida International University is a common South Florida next school. Apply while one term is still left so there is no empty gap.",
				done: "The associate degree is posted, and you have an admission decision.",
				time: "About two years full time if math starts at College Algebra. Longer if it starts earlier.",
				alongside: "Order the official transcript the week you apply."
			},
			{
				action: "The last year of the bachelor’s degree includes the FE exam.",
				short: "The bachelor’s ends with the FE exam.",
				explain: "The Fundamentals of Engineering exam is not an MDC class. It belongs to the last year of the bachelor’s degree, before you apply for the first engineering job. Register at ncees.org and take it at Pearson VUE in that year. You do not wait until after you are hired to decide. Passing it lets you apply in Florida as an engineer intern.",
				done: "You have a test date, or a passing result.",
				time: "A few months of review in the last year of the bachelor’s degree.",
				alongside: "Put the test date on a calendar the day you register."
			}
		]
	},
	{
		id: "chef",
		name: "Chef",
		line: "Knives, heat, and a kitchen that stays usable while you cook.",
		start: "Starts in Culinary Arts at Miami Dade College.",
		steps: [
			{
				action: "Enroll in Culinary Arts Management at MDC.",
				short: "Start the culinary associate degree.",
				explain: "Apply for the Associate in Science in Culinary Arts Management. The program code is 22031. The first semester is three classes: Culinary Terminology, Food Production 1, and Safety and Sanitation. In the Food Production lab, clean while the food is still cooking. Wipe the board and wash the knife before the food goes on the plate.",
				done: "You are registered for that first term.",
				time: "First you apply and get accepted. Then register before the last day listed on this page. Those three classes take one semester.",
				alongside: "Save the acceptance email and the class schedule in one place.",
				support: "Ask about lab support before the first knife class: extra time, a written recipe, or a quieter station."
			},
			{
				action: "The first term includes the food-handler card.",
				short: "The first term includes the food-handler card.",
				explain: "Safety and Sanitation, HFT 1212, is a first-term class. The food-handler card belongs to that same term. The class teaches the rules and does not hand you the card. Buy ServSafe Food Handler at servsafe.com and take it while you are in HFT 1212, unless the advisor says the class includes the exam. You do not pick another time later.",
				done: "HFT 1212 is on your schedule, and the card is saved with the date it expires.",
				time: "The first term. The test itself is a few hours.",
				alongside: "Ask the culinary advisor in the first week whether the class includes the exam."
			},
			{
				action: "Production, baking, and garde manger post the Chef Apprentice certificate.",
				short: "Those courses post the Chef Apprentice certificate.",
				explain: "Food Production 2, Basic Baking, and Garde Manger are the next terms in the sequence. When a recipe says sauté, cook in a little fat until the food is soft and light gold. Finishing the marked courses posts the Chef Apprentice college credit certificate on your MDC transcript. There is no separate test and no extra term. Ask for it to be posted when those courses are done.",
				done: "Those classes are passed, and you have asked if the Chef Apprentice certificate is posted.",
				time: "The middle terms of the program.",
				alongside: "In each lab, clear the board before you plate."
			},
			{
				action: "The last term includes ServSafe Manager.",
				short: "The last term includes ServSafe Manager.",
				explain: "The last part of the program is Supervision, Food and Beverage Cost Controls, the internship, and the externship. ServSafe Manager belongs in that same stretch, not after you graduate. Register at servsafe.com and book the proctored exam while those classes are on your schedule. Ask the culinary advisor if MDC has a sitting that term. Passing it makes you a Certified Food Protection Manager.",
				done: "The internship is on your transcript, and ServSafe Manager is passed.",
				time: "The last terms, including the exam in that same stretch.",
				alongside: "After each kitchen week, write one station you can now run.",
				support: "If the noise or pace is hard, ask for the same station for the first few shifts."
			},
			{
				action: "Finishing the degree posts the operations certificate.",
				short: "The degree posts the operations certificate.",
				explain: "The last step is finishing the Associate in Science. The Culinary Arts Management Operations college credit certificate posts from the marked courses. It is not another exam and not another semester. You leave with the degree, that certificate, the food-handler card from the first term, and ServSafe Manager from the last term.",
				done: "The degree is posted, the operations certificate shows, and both cards are saved with their dates.",
				time: "The end of the program. Full time is about two years.",
				alongside: "Check that the degree and both cards are in one folder."
			}
		]
	},
	{
		id: "cyber",
		name: "Cybersecurity specialist",
		line: "Protect systems. Start with how computers talk.",
		start: "Starts in cybersecurity classes at Miami Dade College.",
		steps: [
			{
				action: "Start the cybersecurity associate degree at MDC.",
				short: "Enroll in the cybersecurity associate degree.",
				explain: "Start the Associate in Science in Cybersecurity. The first term is Introduction to Computers, Cybersecurity Fundamentals, Networking Technologies, and math. Miami Dade College also offers a bachelor’s degree in cybersecurity after this one, so you can stay to finish.",
				done: "You are registered, and you know you are in the associate degree first.",
				time: "See an advisor first. Then register before the last day listed on this page.",
				alongside: "Write the degree name on the first page of your notes.",
				support: "Ask about exam time and a quiet room before the first quiz, not after a low score."
			},
			{
				action: "The networking and fundamentals terms include those exams.",
				short: "Those terms include Network+ and Security+.",
				explain: "Networking Technologies is the term for CompTIA Network+. Cybersecurity Fundamentals is the term for CompTIA Security+. Schedule each exam at Pearson VUE while you are in that class. The class does not hand you the card, and you do not save the exam for after graduation.",
				done: "Both classes are passed, and both exams are scheduled or passed.",
				time: "The early terms, then a few weeks of review for each exam.",
				alongside: "Schedule the exam date before you start the review.",
				support: "Request the testing accommodation when you book the exam. Testing centers need notice."
			},
			{
				action: "The Linux class term includes the Linux+ exam.",
				short: "The Linux term includes Linux+.",
				explain: "The next terms are operating systems, secure scripting, and Linux. CompTIA Linux+ belongs to the Linux class term, CTS 1111. Buy it from CompTIA and schedule it at Pearson VUE while that class is on your schedule.",
				done: "Those classes are passed, and Linux+ is scheduled or passed.",
				time: "The middle terms of the associate degree.",
				alongside: "Save each passing score in the same folder as your schedule."
			},
			{
				action: "The later security classes include their exams.",
				short: "Those later classes include their exams.",
				explain: "Cybersecurity Analysis is the term for CompTIA CySA+. Network Defense and Countermeasures is the term for the EC-Council Certified Network Defender exam. Schedule each one during that class. Ask if the term includes a voucher before you pay. You are not choosing a someday certificate. The class term is the time.",
				done: "Both classes are passed, and you have a date for at least one of the two exams.",
				time: "The later terms, plus review time for each exam.",
				alongside: "Ask the program if this term includes an exam voucher before you pay."
			},
			{
				action: "Finish the associate degree, then the bachelor’s if you stay.",
				short: "Finish the A.S., then the B.S. at MDC if you continue.",
				explain: "Finish the Associate in Science. The Bachelor of Science in Cybersecurity is offered at MDC after it. A first job beside the degree, such as help desk or a security operations internship, is the other edge. The certificates plus real tickets put you ahead of a graduate who only has classes.",
				done: "The associate degree is posted, and you know whether you are continuing to the bachelor’s.",
				time: "About two years full time for the associate degree. The bachelor’s is longer.",
				alongside: "Keep a private list of problems you solved. No customer names."
			}
		]
	},
	{
		id: "it",
		name: "IT consultant",
		line: "Solve a tech problem and explain it in plain language.",
		start: "Starts in information technology at Miami Dade College.",
		steps: [
			{
				action: "Start Computer Information Technology at MDC.",
				short: "Enroll in the IT associate degree.",
				explain: "Start the Associate in Science in Computer Information Technology. The program code is 25055. The first term is English, Introduction to Computers, Networking Technologies, and math. You can stay afterward for the Bachelor of Science in Information Systems Technology.",
				done: "You are registered in that associate program.",
				time: "See an advisor first. Then register before the last day listed on this page.",
				alongside: "Save the program map with your advisor’s name on it.",
				support: "Tell the advisor which classroom supports have helped you before."
			},
			{
				action: "The A+ classes include the A+ exam.",
				short: "Those classes include the A+ exam.",
				explain: "A+ Computer Operating Systems and A+ Computer Essentials are the terms for CompTIA A+. Schedule the exam at Pearson VUE while you are in the second of those classes. The classes do not hand you the card. The term is already on the plan, so you do not pick a later month.",
				done: "Both classes are passed, and A+ is scheduled or passed.",
				time: "The terms those classes appear, then a few weeks of review.",
				alongside: "Schedule the exam before you start the review.",
				support: "Request extra time or a quiet room when you book the exam."
			},
			{
				action: "Each later class includes its own exam.",
				short: "Each later class includes its exam.",
				explain: "Networking Technologies is the term for CompTIA Network+. IT Project Management is the term for CompTIA Project+. The two Windows support classes are the term for the Microsoft Modern Desktop Administrator exam. Schedule each exam during its class. CompTIA exams are bought from CompTIA. The Microsoft exam starts at Microsoft, then Pearson VUE.",
				done: "Each of those classes is passed, and each exam is scheduled in that class’s term.",
				time: "Across the middle and later terms.",
				alongside: "Keep each score with your class schedule."
			},
			{
				action: "The marked courses post the college certificates.",
				short: "Those courses post the college certificates.",
				explain: "The Help Desk Support Technician certificate and the Information Technology Support certificate are part of this degree. MDC posts them when the marked courses are finished. There is no extra exam and no extra term. Ask which of your classes count, and check that each certificate shows before the last term ends.",
				done: "You have asked which courses count, and you know whether each certificate is posted.",
				time: "The same terms as the degree. Confirm it before the last term ends.",
				alongside: "Write the certificate names next to the courses that earn them."
			},
			{
				action: "Finish the associate degree ready to be hired.",
				short: "Graduate with the degree and the certificates.",
				explain: "Finish the Associate in Science. You can continue into the Bachelor of Science in Information Systems Technology at MDC. By then the path has already included A+, Network+, Project+, and the Microsoft exam, each in the term of its class, plus the college certificates the courses post.",
				done: "The degree is posted, and the exam results are saved with it.",
				time: "About five terms full time, on the sequence guide.",
				alongside: "Read your two-sentence offer, or the job you want, to someone outside tech."
			}
		]
	}
];
function careerById(id) {
	const found = CAREERS.find((career) => career.id === id);
	if (!found) throw new Error("Unknown career");
	return found;
}
/** Three answers, only the five careers already in the book. Not a personality test. */
function suggestCareers(interest, school, work) {
	if (interest === "make" && school === "transfer") return [{
		id: "architect",
		reason: work === "during" ? "You want to make things people can see, and you can start that at MDC, then transfer. Office work can begin before the degree is finished." : "You want to make things people can see. Architecture starts at MDC and continues at a university."
	}];
	if (interest === "make") return [{
		id: "chef",
		reason: "You want to make something real, and culinary arts can be finished at MDC. Kitchen shifts can start while you are still in class."
	}];
	if (interest === "fix" && school === "transfer") return [{
		id: "mechanical",
		reason: work === "during" ? "You like figuring out how things work. Mechanical engineering starts with math and science at MDC, then a university degree, with a summer of hands-on work along the way." : "You like figuring out how things work. Mechanical engineering starts at MDC and needs a university degree after that."
	}];
	if (interest === "fix") return [{
		id: "cyber",
		reason: "You like how systems work, and cybersecurity can be finished at MDC — including a bachelor’s — with a first tech job while you study."
	}];
	const it = {
		id: "it",
		reason: work === "during" ? "You want to help people use technology. An IT degree at MDC can include a support job while you are still in school." : "You want to help people use technology. An IT degree at MDC leads to one clear first service after you finish."
	};
	if (school === "transfer") return [it];
	return [it, {
		id: "cyber",
		reason: "Cybersecurity is the other path you can finish at MDC if you would rather protect systems than explain them."
	}];
}
var STYLE_ORDER = [
	"see",
	"try",
	"read",
	"short"
];
var STYLE_LABEL = {
	see: "See it",
	try: "Try it",
	read: "Read it",
	short: "Short"
};
var ADVISORS = [
	["Kendall", "Kadvise@mdc.edu"],
	["Hialeah", "Hiadvisement@mdc.edu"],
	["Homestead", "Hadvisement@mdc.edu"],
	["Medical", "Madvisement@mdc.edu"],
	["Meek", "meekstudentservices@mdc.edu"],
	["North", "Anorth@mdc.edu"],
	["Padrón", "Padvisement@mdc.edu"],
	["West", "Westadvisement@mdc.edu"],
	["Wolfson", "wadvisement@mdc.edu"]
];
var CAMPUS_FIT = {
	architect: {
		campus: "Kendall",
		why: "Kendall has the School of Architecture and Interior Design. The drawing and design labs are based there, so that is the better chance of a seat.",
		person: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128."
	},
	mechanical: {
		campus: "Kendall",
		why: "Kendall houses the School of Engineering, Technology and Design. The later engineering classes are more likely to be open there. Early English and math can be taken closer to home.",
		person: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128."
	},
	chef: {
		campus: "Wolfson",
		why: "The culinary labs are at the Miami Culinary Institute on the Wolfson Campus, downtown. That is the campus that runs this degree.",
		person: "MDC Works at Wolfson lists Moses Washington, room 4102-06, 305-237-3876."
	},
	cyber: {
		campus: "North",
		why: "North Campus publishes this associate degree as a program you can start there. Kendall is where the later bachelor’s courses were added. For these classes, North is the clearer seat.",
		person: "MDC Works at North lists Maria Sincere, room 1101-04, 305-237-1056."
	},
	it: {
		campus: "Kendall",
		why: "Kendall houses the School of Engineering, Technology and Design, so the A+ and networking labs are more likely to be open there. Padrón also lists this kind of program. Compare both schedules.",
		person: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128."
	}
};
var CAREER_HELP = {
	Kendall: "MDC Works at Kendall lists Bernard Krogh, room R243, 305-237-2128.",
	Hialeah: "MDC Works at Hialeah lists Kadijah Belle, room 2101, 305-237-8881.",
	Homestead: "MDC Works at Homestead lists Bernard Krogh, room A115, 305-237-2128.",
	Medical: "MDC Works at the Medical Campus lists Kadijah Belle, room 1101-A, 305-237-3959.",
	Meek: "Meek does not list a separate MDC Works person. This email goes to Meek student services.",
	North: "MDC Works at North lists Maria Sincere, room 1101-04, 305-237-1056.",
	Padrón: "MDC Works at Padrón lists Maria Sincere, room 1107-06, 305-237-6508.",
	West: "MDC Works at West lists Yvonne Malavé, room 1332, 305-237-8925.",
	Wolfson: "MDC Works at Wolfson is room 4102, 305-237-9675."
};
var ACCESS_OFFICES = [
	["Kendall", "kaccess@mdc.edu"],
	["Hialeah", "hialeahaccess@mdc.edu"],
	["Homestead", "haccess@mdc.edu"],
	["Medical", "maccessservices@mdc.edu"],
	["Meek", ""],
	["North", "naccess@mdc.edu"],
	["Padrón", "paccess@mdc.edu"],
	["West", "WestAccess@mdc.edu"],
	["Wolfson", "waccess@mdc.edu"]
];
function Home() {
	const [screen, setScreen] = (0, import_react.useState)("cover");
	const [careerId, setCareerId] = (0, import_react.useState)(null);
	const [usedAccommodations, setUsedAccommodations] = (0, import_react.useState)(false);
	const [style, setStyle] = (0, import_react.useState)("read");
	const [showExplain, setShowExplain] = (0, import_react.useState)(true);
	const [learnStep, setLearnStep] = (0, import_react.useState)(0);
	const [prefer, setPrefer] = (0, import_react.useState)("read");
	const [stepIndex, setStepIndex] = (0, import_react.useState)(0);
	const [dyslexic, setDyslexic] = (0, import_react.useState)(false);
	const [textSize, setTextSize] = (0, import_react.useState)("regular");
	const [speak, setSpeak] = (0, import_react.useState)(false);
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [fitStep, setFitStep] = (0, import_react.useState)(0);
	const [fitFrom, setFitFrom] = (0, import_react.useState)("cover");
	const [interest, setInterest] = (0, import_react.useState)(null);
	const [school, setSchool] = (0, import_react.useState)(null);
	const [work, setWork] = (0, import_react.useState)(null);
	const [doneCourses, setDoneCourses] = (0, import_react.useState)([]);
	const [campus, setCampus] = (0, import_react.useState)("Kendall");
	const [ready, setReady] = (0, import_react.useState)(false);
	const device = useDevice();
	const frame = pageFrame(device);
	const career = careerId ? careerById(careerId) : null;
	const steps = career ? usedAccommodations ? [ACCESS_STEP, ...career.steps] : career.steps : [];
	const onCourses = Boolean(career && stepIndex === steps.length);
	const step = onCourses ? void 0 : steps[stepIndex];
	const total = career ? steps.length + 1 : 0;
	const headline = (0, import_react.useMemo)(() => {
		if (!step) return "";
		if (style === "short") return step.short;
		return step.action;
	}, [style, step]);
	const matches = interest && school && work ? suggestCareers(interest, school, work) : [];
	(0, import_react.useEffect)(() => {
		const on = localStorage.getItem("pathbook-reading") === "dyslexic";
		const savedSize = localStorage.getItem("pathbook-size");
		const size = savedSize === "small" || savedSize === "large" ? savedSize : "regular";
		const savedSpeak = localStorage.getItem("pathbook-speak") === "on";
		setDyslexic(on);
		setTextSize(size);
		setSpeak(savedSpeak);
		document.documentElement.dataset.reading = on ? "dyslexic" : "book";
		document.documentElement.dataset.size = size;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!careerId) return;
		try {
			const saved = JSON.parse(localStorage.getItem(`pathbook-courses-${careerId}`) ?? "[]");
			setDoneCourses(Array.isArray(saved) ? saved.filter((item) => typeof item === "string") : []);
		} catch {
			setDoneCourses([]);
		}
	}, [careerId]);
	(0, import_react.useEffect)(() => {
		const snap = loadLocalProgress();
		if (snap) {
			for (const [id, list] of Object.entries(snap.doneByCareer)) localStorage.setItem(`pathbook-courses-${id}`, JSON.stringify(list));
			localStorage.setItem("pathbook-pace", snap.pace);
			const campusName = ADVISORS.some(([name]) => name === snap.campus) ? snap.campus : "Kendall";
			setCampus(campusName);
			setUsedAccommodations(snap.usedAccommodations);
			setStyle(snap.style);
			setShowExplain(snap.showExplain);
			if (snap.careerId) {
				const picked = careerById(snap.careerId);
				setCareerId(picked.id);
				setStepIndex(Math.min(snap.stepIndex, picked.steps.length));
				setDoneCourses(snap.doneByCareer[picked.id] ?? []);
				setScreen("path");
			}
		}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const handle = window.setTimeout(() => {
			const doneByCareer = {};
			for (const id of [
				"architect",
				"mechanical",
				"chef",
				"cyber",
				"it"
			]) try {
				const raw = JSON.parse(localStorage.getItem(`pathbook-courses-${id}`) ?? "[]");
				if (!Array.isArray(raw)) continue;
				const list = raw.filter((item) => typeof item === "string");
				if (list.length > 0) doneByCareer[id] = list;
			} catch {}
			if (careerId) doneByCareer[careerId] = doneCourses;
			saveLocalProgress({
				careerId,
				usedAccommodations,
				style,
				showExplain,
				pace: localStorage.getItem("pathbook-pace") ?? "full",
				campus,
				stepIndex,
				doneByCareer
			});
		}, 500);
		return () => window.clearTimeout(handle);
	}, [
		ready,
		careerId,
		usedAccommodations,
		style,
		showExplain,
		campus,
		stepIndex,
		doneCourses
	]);
	function replaceCourses(next) {
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
	function setReading(nextDyslexic) {
		setDyslexic(nextDyslexic);
		document.documentElement.dataset.reading = nextDyslexic ? "dyslexic" : "book";
		localStorage.setItem("pathbook-reading", nextDyslexic ? "dyslexic" : "book");
	}
	function setSize(next) {
		setTextSize(next);
		document.documentElement.dataset.size = next;
		localStorage.setItem("pathbook-size", next);
	}
	function setReadAloud(next) {
		setSpeak(next);
		localStorage.setItem("pathbook-speak", next ? "on" : "off");
		if (!next) stopSpoken();
	}
	(0, import_react.useEffect)(() => {
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
				speakWithElevenLabs(text, () => mine === request);
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
	function startFit(from) {
		setFitFrom(from);
		setFitStep(0);
		setInterest(null);
		setSchool(null);
		setWork(null);
		setScreen("fit");
	}
	function answerFit(choice) {
		if (fitStep === 0) {
			setInterest(choice);
			setFitStep(1);
			return;
		}
		if (fitStep === 1) {
			setSchool(choice);
			setFitStep(2);
			return;
		}
		setWork(choice);
		setScreen("matches");
	}
	function pickCareer(id) {
		setCareerId(id);
		setCampus(CAMPUS_FIT[id].campus);
		setStepIndex(0);
		setUsedAccommodations(false);
		setStyle("read");
		setScreen("question");
	}
	function answerAccommodations(yes) {
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
	function answerLearn(choice) {
		if (learnStep === 0) {
			setPrefer(choice);
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
		const next = explain ? prefer : prefer === "read" ? "short" : prefer;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: frame.main,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: frame.sheet,
			"data-speak-root": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Settings",
					"data-nospeak": true,
					onClick: () => setSettingsOpen((open) => !open),
					className: "absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
						size: 18,
						"aria-hidden": "true"
					})
				}),
				settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-nospeak": true,
					className: "absolute top-16 right-4 left-4 z-10 rounded-2xl border border-rule bg-paper p-4 shadow-[0_12px_30px_rgba(42,47,147,0.18)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-sage uppercase",
							children: "Reading"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: "Font"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReading(false),
								className: `h-11 rounded-full border text-sm font-semibold ${dyslexic ? "border-rule" : "border-neon bg-neon text-paper"}`,
								children: "Book"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReading(true),
								className: `h-11 rounded-full border text-sm font-semibold ${dyslexic ? "border-neon bg-neon text-paper" : "border-rule"}`,
								children: "Open Sans"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm font-semibold",
							children: "Size"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid grid-cols-3 gap-2",
							children: [
								["small", "Small"],
								["regular", "Regular"],
								["large", "Large"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSize(id),
								className: `h-11 rounded-full border text-sm font-semibold ${textSize === id ? "border-neon bg-neon text-paper" : "border-rule"}`,
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm font-semibold",
							children: "Read aloud"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Select the words you want heard."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReadAloud(false),
								className: `h-11 rounded-full border text-sm font-semibold ${speak ? "border-rule" : "border-neon bg-neon text-paper"}`,
								children: "Off"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setReadAloud(true),
								className: `h-11 rounded-full border text-sm font-semibold ${speak ? "border-neon bg-neon text-paper" : "border-rule"}`,
								children: "On"
							})]
						}),
						career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2 border-t border-rule pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setSettingsOpen(false);
									setScreen("list");
								},
								className: "text-left text-sm font-semibold text-sage",
								children: "See every step"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setSettingsOpen(false);
									openCourses();
								},
								className: "text-left text-sm font-semibold text-sage",
								children: "Course timeline"
							})]
						})
					]
				}),
				screen === "cover" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-wide text-sage",
							children: "Miami Dade College"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: `mt-10 font-display leading-none font-medium text-ink ${device === "phone" ? "text-5xl" : "text-6xl"}`,
							children: "Major Spark"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-xl text-muted italic",
							children: "notaminor.study"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-16 bg-rule" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-8 text-lg leading-relaxed text-ink ${device === "phone" ? "max-w-xs" : "max-w-lg"}`,
							children: "A clear path from your first class at Miami Dade College to a first job. Pick a career, or answer three questions if you are not sure yet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: `mt-6 text-lg leading-relaxed text-ink italic font-semibold ${device === "phone" ? "max-w-xs" : "max-w-lg"}`,
							children: ["“A spark, no matter how big or small, is the first step to lighting your way to a brighter tomorrow.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-2 text-sm font-normal not-italic text-muted",
								children: "Andrea Price"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-col gap-3 pt-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setScreen("careers"),
								className: "h-12 w-full rounded-full bg-neon text-base font-semibold text-paper shadow-neon",
								children: "I know the career"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => startFit("cover"),
								className: "h-12 w-full rounded-full border border-neon text-base font-semibold text-sage",
								children: "Help me choose"
							})]
						})
					]
				}),
				screen === "careers" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: "Choose one",
							title: "Where do you want to go?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => startFit("careers"),
							className: "mt-6 h-12 w-full rounded-full border border-neon text-base font-semibold text-sage",
							children: "Not sure yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-2",
							children: CAREERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => pickCareer(item.id),
								className: "w-full rounded-2xl border border-rule bg-paper px-4 py-4 text-left transition-colors hover:bg-paper-deep",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-2xl leading-tight",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm leading-snug text-muted",
									children: item.line
								})]
							}) }, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
							className: "mt-6",
							onClick: () => setScreen("cover"),
							children: "Back"
						})
					]
				}),
				screen === "fit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: `Question ${fitStep + 1} of 3`,
							title: fitStep === 0 ? "What sounds most like you?" : fitStep === 1 ? "How long do you want school to last?" : "When do you want to start working?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-col gap-3",
							children: (fitStep === 0 ? [
								["make", "Making things I can see"],
								["fix", "Figuring out how things work"],
								["help", "Helping people use technology"]
							] : fitStep === 1 ? [["mdc", "Finish at Miami Dade College"], ["transfer", "I can transfer for a longer degree"]] : [["during", "While I am still in school"], ["after", "After I finish"]]).map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => answerFit(id),
								className: "rounded-2xl border border-rule px-4 py-4 text-left font-display text-2xl leading-tight",
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
							className: "mt-auto pt-8",
							onClick: () => fitStep === 0 ? setScreen(fitFrom) : setFitStep((stepNumber) => stepNumber - 1),
							children: "Back"
						})
					]
				}),
				screen === "matches" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: "A place to start",
							title: "This might fit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: "Not a perfect match. Just a path that lines up with what you said."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-3",
							children: matches.map((match) => {
								const item = careerById(match.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => pickCareer(match.id),
									className: "w-full rounded-2xl border border-rule px-4 py-4 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-2xl leading-tight",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-sm leading-relaxed text-muted",
										children: match.reason
									})]
								}) }, match.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
							className: "mt-6",
							onClick: () => setScreen("careers"),
							children: "See all five"
						})
					]
				}),
				screen === "question" && career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: career.name,
							title: "One question before the steps."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed",
							children: "Have you had, or do you have, accommodations in school?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => answerAccommodations(true),
								className: "h-12 rounded-full bg-neon text-base font-semibold text-paper shadow-neon",
								children: "Yes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => answerAccommodations(false),
								className: "h-12 rounded-full border border-neon bg-paper text-base font-semibold text-sage",
								children: "No"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
							className: "mt-auto pt-8",
							onClick: () => setScreen("careers"),
							children: "Choose a different career"
						})
					]
				}),
				screen === "learn" && career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: `Question ${learnStep + 1} of 3`,
							title: learnStep === 0 ? "When you learn something new, what helps most?" : learnStep === 1 ? "When a page has a lot of words…" : "School words, like “internship”…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: "Same path either way. This only changes how the step is written."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-col gap-3",
							children: (learnStep === 0 ? [
								["see", "Seeing what finished looks like"],
								["try", "Trying one small piece myself"],
								["read", "Reading it in plain words"]
							] : learnStep === 1 ? [["stop", "I stop and come back later"], ["stay", "I can stay if the words are clear"]] : [["explain", "Tell me what they mean"], ["skip", "I already know them"]]).map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => answerLearn(id),
								className: "rounded-2xl border border-rule px-4 py-4 text-left font-display text-2xl leading-tight",
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
							className: "mt-auto pt-8",
							onClick: () => learnStep === 0 ? setScreen("question") : setLearnStep((stepNumber) => stepNumber - 1),
							children: "Back"
						})
					]
				}),
				screen === "path" && career && (step || onCourses) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-sage uppercase",
								children: career.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: career.start
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: cycleStyle,
								className: `shrink-0 rounded-full border border-rule px-3 py-2 text-xs font-semibold tracking-wide text-ink uppercase ${usedAccommodations && !onCourses ? "" : "hidden"}`,
								children: STYLE_LABEL[style]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `flex flex-1 flex-col py-6 ${onCourses ? "" : "justify-center"}`,
							children: [step && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl leading-[1.15] font-medium",
									children: headline
								}),
								style === "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed",
									children: plainStep(step, true)
								}),
								style === "see" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed",
									children: plainStep(step, showExplain)
								}),
								style === "try" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 space-y-4 text-base leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.short }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.alongside }),
										showExplain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.explain })
									]
								}),
								style === "short" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed",
									children: asSentence(step.time)
								}),
								style === "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-sm leading-relaxed text-muted",
									children: asSentence(step.alongside)
								}),
								style === "see" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-sm leading-relaxed text-muted",
									children: asSentence(step.alongside)
								}),
								usedAccommodations && step.support && step !== ACCESS_STEP && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink",
									children: step.support
								}),
								career && step === career.steps[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterDates, {}),
								step === ACCESS_STEP && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-muted",
										children: ["Campus", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: campus,
											onChange: (event) => setCampus(event.target.value),
											className: "mt-1 h-11 w-full rounded-full border border-rule bg-paper px-4 text-ink",
											children: ACCESS_OFFICES.map(([name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: name,
												children: name
											}, name))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: accessMailto(campus),
										className: "mt-3 flex h-12 items-center justify-center rounded-full bg-neon text-center text-sm font-semibold text-paper shadow-neon",
										children: accessMailto(campus).startsWith("mailto:") ? "Email ACCESS" : "See ACCESS offices"
									})]
								})
							] }), onCourses && career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampusNote, {
								careerId: career.id,
								selected: campus
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseChecklist, {
								careerId: career.id,
								transferring: school === "transfer",
								withSupport: usedAccommodations,
								done: doneCourses,
								onReplace: replaceCourses
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-rule pt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-center text-sm text-muted",
									children: [
										"Step ",
										stepIndex + 1,
										" of ",
										total
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStepIndex((index) => Math.max(0, index - 1)),
										disabled: stepIndex === 0,
										className: "h-12 rounded-full border border-rule text-sm font-semibold disabled:opacity-40",
										children: "Previous"
									}), onCourses && career ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: advisorMailto(campus, career.name, PLANS[career.id].program),
										className: "flex h-12 items-center justify-center rounded-full bg-neon text-center text-sm font-semibold text-paper shadow-neon",
										children: "Email an advisor"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStepIndex((index) => Math.min(total - 1, index + 1)),
										className: "h-12 rounded-full bg-neon text-sm font-semibold text-paper shadow-neon",
										children: stepIndex === steps.length - 1 ? "Your classes" : "Next step"
									})]
								}),
								onCourses && career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-3 block text-sm text-muted",
										children: ["Campus for these classes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: campus,
											onChange: (event) => setCampus(event.target.value),
											className: "mt-1 h-11 w-full rounded-full border border-rule bg-paper px-4 text-ink",
											children: ADVISORS.map(([name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: name,
												children: name
											}, name))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: careerMailto(campus, career.name, PLANS[career.id].program),
										className: "mt-3 flex h-12 items-center justify-center rounded-full border border-ink text-center text-sm font-semibold text-ink",
										children: ["Email career help at ", campus]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: careerPerson(campus, career.id)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
											onClick: restart,
											children: "Start over"
										})
									})
								] })
							]
						})
					]
				}),
				screen === "plan" && career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: "On-time plan",
							title: career.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink",
							children: PLANS[career.id].program
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: PLANS[career.id].pace
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 flex flex-col gap-5",
							children: PLANS[career.id].terms.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-wide text-sage uppercase",
								children: [
									term.label,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-rule",
										children: " · "
									}),
									term.credits
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 flex flex-col gap-2",
								children: term.courses.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: [course.code, ". "]
									}), course.name]
								}, course.code + course.name))
							})] }, term.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-2xl",
							children: "To get into the field"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-3",
							children: PLANS[career.id].entry.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: [item.name, ". "]
								}), item.when]
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 font-display text-2xl",
							children: "During the program"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-3",
							children: PLANS[career.id].credentials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: [item.name, ". "]
								}), item.when]
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xs leading-relaxed text-muted",
							children: "Taken from Miami Dade College’s full-time course sequence guides. A lower math or English placement adds terms. Confirm the current guide with an advisor. This is not a degree audit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
								onClick: () => setScreen("list"),
								children: "Back to the steps"
							})
						})
					]
				}),
				screen === "list" && career && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-1 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
							kicker: STYLE_LABEL[style],
							title: career.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: career.start
						}),
						usedAccommodations && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-ink",
							children: "Feasible with support. Extra time or written steps can make a term longer. They do not remove the career."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 flex flex-col gap-5",
							children: steps.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setStepIndex(index);
									setScreen("path");
								},
								className: "w-full text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xl leading-snug",
										children: [
											index + 1,
											". ",
											item.action
										]
									}),
									style === "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-relaxed text-muted",
										children: item.explain
									}),
									style === "see" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-relaxed text-muted",
										children: item.done
									}),
									style === "try" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-relaxed text-muted",
										children: item.alongside
									}),
									style === "short" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-relaxed text-muted",
										children: item.short
									}),
									usedAccommodations && item.support && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm leading-relaxed text-gold",
										children: item.support
									})
								]
							}) }, item.action))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xs leading-relaxed text-muted",
							children: "A starting map, not an official degree audit. Confirm classes, transfer rules, and timing with an MDC advisor."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
								onClick: () => setScreen("path"),
								children: "Back to this step"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextButton, {
								onClick: openCourses,
								children: "Course timeline"
							})]
						})
					]
				})
			]
		})
	});
}
function accessMailto(campus) {
	const email = ACCESS_OFFICES.find(([name]) => name === campus)?.[1];
	if (!email) return "https://www.mdc.edu/access/hours-and-locations/";
	const subject = "Accommodations for my classes";
	const body = `Hello,\n\nI take classes at the ${campus} Campus. I have had accommodations in school. Please tell me how to get them put in place before the term starts.\n\nThank you.`;
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function careerPerson(campus, careerId) {
	if (campus === "Wolfson" && careerId === "chef") return "MDC Works at Wolfson lists Moses Washington, room 4102-06, 305-237-3876.";
	if (campus === "Wolfson" && (careerId === "cyber" || careerId === "it" || careerId === "mechanical")) return "MDC Works at Wolfson lists Christian Ortega, room 4102-02, 305-237-7864.";
	return CAREER_HELP[campus];
}
function careerMailto(campus, careerName, program) {
	const email = ADVISORS.find(([name]) => name === campus)?.[1] ?? "Kadvise@mdc.edu";
	const subject = `Career help for ${careerName}`;
	const body = `Hello,\n\nI am in ${program}. Some of my classes are at the ${campus} Campus. Please help me with jobs or internships in this field.\n\nThank you.`;
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function CampusNote({ careerId, selected }) {
	const fit = CAMPUS_FIT[careerId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-base leading-relaxed text-ink",
			children: [
				"The fuller set of classes is more likely at ",
				fit.campus,
				" Campus. ",
				fit.why
			]
		}), selected !== fit.campus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: [
				"You picked ",
				selected,
				". If a class is offered there, the advisor email and career help both go to ",
				selected,
				"."
			]
		})]
	});
}
function advisorMailto(campus, careerName, program) {
	const email = ADVISORS.find(([name]) => name === campus)?.[1] ?? "Kadvise@mdc.edu";
	const pace = localStorage.getItem("pathbook-pace");
	const paceLabel = pace === "part" ? "part time" : pace === "three-quarter" ? "3/4 time" : "full time";
	const subject = `Help registering for classes: ${careerName}`;
	const body = `Hello,\n\nI am planning ${program}. I want to study ${paceLabel}. Please help me register for the classes I still need.\n\nThank you.`;
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function CourseChecklist({ careerId, transferring, withSupport, done, onReplace }) {
	const plan = PLANS[careerId];
	const [pace, setPace] = (0, import_react.useState)("full");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("pathbook-pace");
		if (saved === "full" || saved === "three-quarter" || saved === "part") setPace(saved);
	}, []);
	function choosePace(next) {
		setPace(next);
		localStorage.setItem("pathbook-pace", next);
	}
	const terms = termsForPace(plan, pace, transferring);
	const keys = terms.flatMap((term) => term.courses.map((course) => courseKey(course.code, course.name)));
	const onPlan = new Set(keys.map((key) => key.split("|")[0]));
	const finished = keys.filter((key) => done.includes(key)).length;
	const percent = keys.length === 0 ? 0 : Math.round(finished / keys.length * 100);
	const later = afterDegree(careerId);
	function withoutDependents(next) {
		let current = next;
		for (let guard = 0; guard < 12; guard += 1) {
			const drop = new Set(current.filter((key) => {
				const course = courseByKey(terms, key);
				return course != null && blockingPrereqs(course, current, onPlan).length > 0;
			}));
			if (drop.size === 0) return current;
			current = current.filter((key) => !drop.has(key));
		}
		return current;
	}
	function toggle(course) {
		const key = courseKey(course.code, course.name);
		if (done.includes(key)) {
			onReplace(withoutDependents(done.filter((item) => item !== key)));
			return;
		}
		if (blockingPrereqs(course, done, onPlan).length > 0) return;
		onReplace([...done, key]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-4xl leading-[1.15] font-medium",
			children: "Your classes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-relaxed text-muted",
			children: plan.program
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid grid-cols-3 gap-2",
			children: [
				["full", "Full time"],
				["three-quarter", "3/4 time"],
				["part", "Part time"]
			].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => choosePace(id),
				className: `h-11 rounded-full border text-sm font-semibold ${pace === id ? "border-neon bg-neon text-paper" : "border-rule"}`,
				children: label
			}, id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm leading-relaxed",
			children: [
				graduationLine(terms.length),
				pace === "full" ? " This matches the full-time sequence guide." : pace === "three-quarter" ? " Same classes, about 9 credits a term." : " Same classes, about 6 credits a term.",
				" ",
				"Skipping summers, or starting in a lower math or English class, makes it longer."
			]
		}),
		later && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed",
			children: later
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-6 font-display text-2xl",
			children: "What it takes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed",
			children: "Finish this program, then meet the field requirements below. The job asks for the same degree and the same exams either way."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-col gap-2",
			children: plan.entry.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold",
					children: [item.name, ". "]
				}), item.when]
			}, item.name))
		}),
		plan.credentials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-col gap-2",
			children: plan.credentials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-sm leading-relaxed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold",
					children: [item.name, ". "]
				}), item.when]
			}, item.name))
		}),
		withSupport && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed",
				children: "Accommodations can add time. They do not remove a class, a certificate, or the job. Check in with the advisor who sets up your accommodations before the term starts. Ask which of these classes and exams can include extra time, a quieter room, or written directions."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-display text-2xl",
				children: "What can be hard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed",
				children: "Some neurodivergent students run into these in this field. They are common, not a verdict. The degree and the job stay the same."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: plan.struggles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm leading-relaxed",
					children: item
				}, item))
			})
		] }),
		transferring && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm leading-relaxed",
			children: "You said you may finish at another school. Ask that school which of these credits they accept before you count on them. Finishing your A.A. or A.S. at Miami Dade College first usually makes the transfer smoother."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm leading-relaxed",
			children: [percent, "% of the way through."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 h-2 overflow-hidden rounded-full bg-rule",
			role: "progressbar",
			"aria-valuenow": percent,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-label": "Percent of classes finished",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-neon",
				style: { width: `${percent}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "Classes stay in the order to take them. A note under a class names what has to come first, or what you take with it."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-6 flex flex-col gap-5",
			children: terms.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-wide text-sage uppercase",
				children: [
					term.label,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-rule",
						children: " · "
					}),
					term.credits
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-col gap-2",
				children: term.courses.map((course) => {
					const key = courseKey(course.code, course.name);
					const checked = done.includes(key);
					const blocked = !checked && blockingPrereqs(course, done, onPlan).length > 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggle(course),
						disabled: blocked,
						"aria-pressed": checked,
						className: `flex w-full items-start gap-3 text-left ${blocked ? "cursor-not-allowed opacity-40" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${checked ? "border-neon bg-neon text-paper" : "border-ink bg-paper"}`,
							"aria-hidden": "true",
							children: checked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 12,
								strokeWidth: 3
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: [course.code, ". "]
								}),
								course.name,
								courseNeeds(course) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-muted",
									children: courseNeeds(course)
								})
							]
						})]
					}) }, key);
				})
			})] }, term.label))
		})
	] });
}
function courseByKey(terms, key) {
	for (const term of terms) for (const course of term.courses) if (courseKey(course.code, course.name) === key) return course;
	return null;
}
function courseKey(code, name) {
	return `${code}|${name}`;
}
function Header({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs tracking-wide text-sage uppercase",
		children: kicker
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-2 font-display text-4xl leading-none font-medium",
		children: title
	})] });
}
function TextButton({ children, onClick, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `text-sm font-semibold text-sage underline decoration-rule underline-offset-4 ${className}`,
		children
	});
}
var TERM_DATES = [
	{
		name: "Spring 2027",
		opens: "2026-04-20",
		showUntil: "2027-04-09",
		sessions: [
			{
				id: "16",
				label: "16-week",
				starts: "2027-01-04",
				ends: "2027-04-30",
				refund: "2027-01-08",
				withdraw: "2027-03-12"
			},
			{
				id: "14",
				label: "14-week",
				starts: "2027-01-19",
				ends: "",
				refund: "2027-01-25",
				withdraw: "2027-03-18"
			},
			{
				id: "12",
				label: "12-week",
				starts: "2027-02-01",
				ends: "",
				refund: "2027-02-04",
				withdraw: "2027-03-31"
			},
			{
				id: "8",
				label: "First 8-week",
				starts: "2027-01-04",
				ends: "",
				refund: "2027-01-07",
				withdraw: "2027-02-05"
			},
			{
				id: "8b",
				label: "Second 8-week",
				starts: "2027-03-01",
				ends: "",
				refund: "2027-03-05",
				withdraw: "2027-04-09"
			},
			{
				id: "end",
				label: "Weekend",
				starts: "",
				ends: "",
				refund: "2027-01-12",
				withdraw: "2027-03-16"
			}
		]
	},
	{
		name: "Summer 2027",
		opens: "2026-11-02",
		showUntil: "2027-07-15",
		sessions: [
			{
				id: "12",
				label: "12-week",
				starts: "2027-05-10",
				ends: "2027-07-30",
				refund: "2027-05-13",
				withdraw: "2027-06-29"
			},
			{
				id: "10",
				label: "10-week",
				starts: "2027-05-24",
				ends: "2027-07-30",
				refund: "2027-05-27",
				withdraw: ""
			},
			{
				id: "8",
				label: "First 8-week",
				starts: "2027-05-10",
				ends: "2027-07-02",
				refund: "2027-05-13",
				withdraw: "2027-06-04"
			},
			{
				id: "8b",
				label: "Second 8-week",
				starts: "2027-06-07",
				ends: "2027-07-30",
				refund: "2027-06-10",
				withdraw: "2027-07-09"
			},
			{
				id: "6",
				label: "First 6-week",
				starts: "2027-05-10",
				ends: "2027-06-18",
				refund: "2027-05-12",
				withdraw: "2027-06-03"
			},
			{
				id: "6b",
				label: "Second 6-week",
				starts: "2027-06-21",
				ends: "2027-07-30",
				refund: "2027-06-23",
				withdraw: "2027-07-15"
			},
			{
				id: "end",
				label: "Weekend",
				starts: "2027-05-14",
				ends: "",
				refund: "2027-05-18",
				withdraw: "2027-06-30"
			}
		]
	},
	{
		name: "Fall 2027",
		opens: "2027-04-19",
		showUntil: "2027-08-31",
		sessions: []
	}
];
function dateOnly(iso) {
	const [year, month, day] = iso.split("-").map(Number);
	return new Date(year, month - 1, day);
}
function endOf(iso) {
	const date = dateOnly(iso);
	date.setHours(23, 59, 59, 999);
	return date;
}
function writtenDate(iso) {
	return dateOnly(iso).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function RegisterDates() {
	const now = /* @__PURE__ */ new Date();
	const choices = TERM_DATES.filter((term) => now <= endOf(term.showUntil)).flatMap((term) => term.sessions.filter((session) => !session.withdraw || now <= endOf(session.withdraw)).map((session) => ({
		key: `${term.name}-${session.id}`,
		label: `${term.name}, ${session.label}`,
		session
	})));
	const [picked, setPicked] = (0, import_react.useState)(choices[0]?.key ?? "");
	const selected = choices.find((choice) => choice.key === picked) ?? choices[0];
	if (!selected) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 text-base",
		children: "The dates saved here have passed."
	});
	const { session } = selected;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 text-base leading-relaxed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm text-muted",
				children: ["Class length", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: selected.key,
					onChange: (event) => setPicked(event.target.value),
					className: "mt-1 h-11 w-full rounded-full border border-rule bg-paper px-4 text-base text-ink",
					children: choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: choice.key,
						children: choice.label
					}, choice.key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3",
				children: [session.starts ? `Starts ${writtenDate(session.starts)}. ` : "", session.ends ? `Ends ${writtenDate(session.ends)}.` : "The end date is not posted for this length."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: now <= endOf(session.refund) ? `Full refund by ${writtenDate(session.refund)}.` : "The full-refund date has passed." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: session.withdraw ? `A W, instead of a grade, by ${writtenDate(session.withdraw)}.` : "The W date is not posted yet." })
		]
	});
}
var spokenAudio = null;
var spokenUrl = null;
function stopSpoken() {
	window.speechSynthesis?.cancel();
	spokenAudio?.pause();
	spokenAudio = null;
	if (spokenUrl) URL.revokeObjectURL(spokenUrl);
	spokenUrl = null;
}
async function speakWithElevenLabs(text, stillCurrent) {
	try {
		const response = await fetch("/api/speak", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ text })
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
		utter.rate = .95;
		window.speechSynthesis.speak(utter);
	}
}
function plainStep(step, withExplain) {
	const done = step.done.trim().replace(/\.+$/, "");
	const doneLower = done.charAt(0).toLowerCase() + done.slice(1);
	const time = step.time.trim().replace(/\.+$/, "");
	const timeLine = time.includes(".") ? `${time}.` : `This takes ${time.charAt(0).toLowerCase()}${time.slice(1)}.`;
	return `${withExplain ? `${step.explain} ` : ""}You are finished with this step when ${doneLower}. ${timeLine}`;
}
function asSentence(value) {
	const text = value.trim();
	return /[.!?]$/.test(text) ? text : `${text}.`;
}
//#endregion
export { Home as component };
