export type CareerId = "architect" | "mechanical" | "chef" | "cyber" | "it";

export type Step = {
  action: string;
  short: string;
  explain: string;
  done: string;
  time: string;
  alongside: string;
  support?: string;
};

export type Career = {
  id: CareerId;
  name: string;
  line: string;
  start: string;
  steps: Step[];
};

export const ACCESS_STEP: Step = {
  action: "Contact ACCESS at your campus and ask them to put your accommodations in place.",
  short: "Ask your campus ACCESS office to set up your accommodations.",
  explain:
    "ACCESS is the Miami Dade College office that sets up accommodations. Email the office at the campus where you take classes. Ask what they need from you before the term starts, so the accommodations are ready when classes begin.",
  done: "ACCESS has your request, and you know what they still need from you.",
  time: "Before the first day of class. Start as soon as you register.",
  alongside: "Write down the campus office you emailed and the date you sent it.",
};

export const CAREERS: Career[] = [
  {
    id: "architect",
    name: "Architect",
    line: "Drawings, buildings, and a long license path.",
    start: "Starts with design classes at Miami Dade College.",
    steps: [
      {
        action: "Enroll in Architectural Design and Construction Technology.",
        short: "Start the architecture associate degree at MDC.",
        explain:
          "Start the Associate in Science in Architectural Design and Construction Technology. The program code is 26034. An advisor sets the first term: Architectural Communications, Architectural Drawing 1, History of Architecture, and College Algebra. This degree lets you work as a drafter. It does not make you a licensed architect.",
        done: "You are registered for that first term, and the program name is written down.",
        time: "See an advisor first. Then register before the last day listed on this page.",
        alongside: "Save the program map before you leave campus.",
        support:
          "Tell the advisor about classroom support you have used before, so the first studio can be set up ahead of time.",
      },
      {
        action: "Finish drawing, design, and the first CAD class.",
        short: "Finish the first drawing, design, and CAD classes.",
        explain:
          "The next terms are Architectural Design 1, Materials and Construction, and Computer Aided Drafting 1. The portfolio starts here, not later. Save one finished drawing from each class in the same term you turn it in. A firm asks for that folder. The transcript does not show the drawings.",
        done: "Those classes are passed, and you can show one drawing from each.",
        time: "The next terms on the sequence guide.",
        alongside: "Photograph each finished drawing the week it is graded.",
        support:
          "If studio hours run long, ask about a lab time or a quieter station before the term fills up.",
      },
      {
        action: "Take building code and presentation when the sequence reaches them.",
        short: "Take code and presentation in their terms.",
        explain:
          "Building Code Regulations and the computer presentation classes are already on the degree sequence. Take them in the term the guide lists. Save the presentation file that term. You do not add a separate software class later. These are the classes that let you talk about code and show work on a screen.",
        done: "The code class and a computer presentation class are passed, and the file is saved.",
        time: "The later terms of the associate degree.",
        alongside: "Put the presentation file in the same folder as the drawings.",
      },
      {
        action: "The portfolio is finished when the studios are finished.",
        short: "The portfolio closes with the last studio.",
        explain:
          "There is no extra portfolio semester. When the last studio is graded, the folder should already hold one piece from each class plus the digital presentation. That is what you send with a transfer application or a drafter application.",
        done: "The folder has one piece from each finished studio, plus the digital presentation.",
        time: "A few minutes after each critique, then one review before you apply.",
        alongside: "Add the piece the same week the project is graded.",
      },
      {
        action: "Finish the associate degree, then the professional degree.",
        short: "Finish the A.S., then transfer for the architecture degree.",
        explain:
          "Finish the Associate in Science at MDC. A licensed architect still needs a professional degree after that. In Miami, Florida International University is a common next school. Ask which of these credits transfer before you take extras. You can work in a firm as a drafter while that degree is still ahead.",
        done: "The associate degree is posted, and you have applied to the next architecture program.",
        time: "About two years full time at MDC, then the bachelor’s program.",
        alongside: "Order an official transcript the week you apply.",
        support:
          "Ask the next school’s access office to receive your accommodation history before classes start.",
      },
      {
        action: "After the professional degree, open the license record.",
        short: "Start the license record after the professional degree.",
        explain:
          "MDC does not give the architect exam. After the professional degree, open an NCARB record at ncarb.org. That is where hours are logged and exam sections are scheduled. Starting the record early is the edge. Classmates who wait have the degree and no hour log.",
        done: "The NCARB record is open, or you have a written date to open it.",
        time: "After the professional degree. The license itself takes several more years.",
        alongside: "Save the login and the next exam date in the same folder as the portfolio.",
      },
    ],
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
        explain:
          "Start the Associate in Arts pathway for mechanical engineering. The program code is 10911. Miami Dade College does not give the bachelor’s degree. An advisor sets the first term: English, Introduction to Engineering, College Algebra, and the first-year seminar.",
        done: "You are registered on that pathway, not in a random set of classes.",
        time: "See an advisor first. Then register before the last day listed on this page.",
        alongside: "Save the pathway name and the transfer school you are aiming at.",
        support:
          "Mention accommodations you have used, especially for timed math tests, before the term starts.",
      },
      {
        action: "Finish chemistry, precalculus, and trigonometry.",
        short: "Finish chemistry and the math before calculus.",
        explain:
          "The sequence next takes General Chemistry with the lab, Pre-Calculus Algebra, and Trigonometry. If placement puts you in an earlier math class, take it. It adds a term. It is still the school path. Engineering schools will not skip these.",
        done: "Chemistry, precalculus, and trigonometry are passed.",
        time: "The terms before calculus on your sequence guide.",
        alongside: "After each math exam, write the one topic to review before the next class.",
      },
      {
        action: "Finish calculus and physics with calculus.",
        short: "Finish the calculus and physics sequence.",
        explain:
          "The pathway then runs Calculus 1, 2, and 3, Physics with Calculus 1 and 2, and both labs. These are the classes a university uses to decide if you are ready. A graduate who transfers without them repeats a year.",
        done: "Calculus 3 and Physics with Calculus 2 are passed, including the labs.",
        time: "Several terms. Earlier math makes it longer.",
        alongside: "Check the transfer guide once a term so a class is not left off.",
      },
      {
        action: "The last MDC terms include statics, differential equations, and C.",
        short: "Finish statics, differential equations, and programming.",
        explain:
          "Engineering Mechanics – Statics, Differential Equations, and C for Engineers are on the MDC sequence for this pathway. They are the edge at transfer. Classmates who stop at the general education classes arrive with less of the first engineering year already done.",
        done: "Those three are passed, and you know which ones the next school accepts.",
        time: "The last terms of the associate pathway.",
        alongside: "Write down which credits the university accepted the week the list arrives.",
        support:
          "Ask the university access office to set up support before the first engineering exam.",
      },
      {
        action: "Finish the associate pathway and transfer.",
        short: "Finish at MDC, then start the bachelor’s degree.",
        explain:
          "Finish the Associate in Arts on this pathway, then transfer into a Bachelor of Science in mechanical engineering. Florida International University is a common South Florida next school. Apply while one term is still left so there is no empty gap.",
        done: "The associate degree is posted, and you have an admission decision.",
        time: "About two years full time if math starts at College Algebra. Longer if it starts earlier.",
        alongside: "Order the official transcript the week you apply.",
      },
      {
        action: "The last year of the bachelor’s degree includes the FE exam.",
        short: "The bachelor’s ends with the FE exam.",
        explain:
          "The Fundamentals of Engineering exam is not an MDC class. It belongs to the last year of the bachelor’s degree, before you apply for the first engineering job. Register at ncees.org and take it at Pearson VUE in that year. You do not wait until after you are hired to decide. Passing it lets you apply in Florida as an engineer intern.",
        done: "You have a test date, or a passing result.",
        time: "A few months of review in the last year of the bachelor’s degree.",
        alongside: "Put the test date on a calendar the day you register.",
      },
    ],
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
        explain:
          "Apply for the Associate in Science in Culinary Arts Management. The program code is 22031. The first semester is three classes: Culinary Terminology, Food Production 1, and Safety and Sanitation. In the Food Production lab, clean while the food is still cooking. Wipe the board and wash the knife before the food goes on the plate.",
        done: "You are registered for that first term.",
        time: "First you apply and get accepted. Then register before the last day listed on this page. Those three classes take one semester.",
        alongside: "Save the acceptance email and the class schedule in one place.",
        support:
          "Ask about lab support before the first knife class: extra time, a written recipe, or a quieter station.",
      },
      {
        action: "The first term includes the food-handler card.",
        short: "The first term includes the food-handler card.",
        explain:
          "Safety and Sanitation, HFT 1212, is a first-term class. The food-handler card belongs to that same term. The class teaches the rules and does not hand you the card. Buy ServSafe Food Handler at servsafe.com and take it while you are in HFT 1212, unless the advisor says the class includes the exam. You do not pick another time later.",
        done: "HFT 1212 is on your schedule, and the card is saved with the date it expires.",
        time: "The first term. The test itself is a few hours.",
        alongside: "Ask the culinary advisor in the first week whether the class includes the exam.",
      },
      {
        action: "Production, baking, and garde manger post the Chef Apprentice certificate.",
        short: "Those courses post the Chef Apprentice certificate.",
        explain:
          "Food Production 2, Basic Baking, and Garde Manger are the next terms in the sequence. When a recipe says sauté, cook in a little fat until the food is soft and light gold. Finishing the marked courses posts the Chef Apprentice college credit certificate on your MDC transcript. There is no separate test and no extra term. Ask for it to be posted when those courses are done.",
        done: "Those classes are passed, and you have asked if the Chef Apprentice certificate is posted.",
        time: "The middle terms of the program.",
        alongside: "In each lab, clear the board before you plate.",
      },
      {
        action: "The last term includes ServSafe Manager.",
        short: "The last term includes ServSafe Manager.",
        explain:
          "The last part of the program is Supervision, Food and Beverage Cost Controls, the internship, and the externship. ServSafe Manager belongs in that same stretch, not after you graduate. Register at servsafe.com and book the proctored exam while those classes are on your schedule. Ask the culinary advisor if MDC has a sitting that term. Passing it makes you a Certified Food Protection Manager.",
        done: "The internship is on your transcript, and ServSafe Manager is passed.",
        time: "The last terms, including the exam in that same stretch.",
        alongside: "After each kitchen week, write one station you can now run.",
        support:
          "If the noise or pace is hard, ask for the same station for the first few shifts.",
      },
      {
        action: "Finishing the degree posts the operations certificate.",
        short: "The degree posts the operations certificate.",
        explain:
          "The last step is finishing the Associate in Science. The Culinary Arts Management Operations college credit certificate posts from the marked courses. It is not another exam and not another semester. You leave with the degree, that certificate, the food-handler card from the first term, and ServSafe Manager from the last term.",
        done: "The degree is posted, the operations certificate shows, and both cards are saved with their dates.",
        time: "The end of the program. Full time is about two years.",
        alongside: "Check that the degree and both cards are in one folder.",
      },
    ],
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
        explain:
          "Start the Associate in Science in Cybersecurity. The first term is Introduction to Computers, Cybersecurity Fundamentals, Networking Technologies, and math. Miami Dade College also offers a bachelor’s degree in cybersecurity after this one, so you can stay to finish.",
        done: "You are registered, and you know you are in the associate degree first.",
        time: "See an advisor first. Then register before the last day listed on this page.",
        alongside: "Write the degree name on the first page of your notes.",
        support:
          "Ask about exam time and a quiet room before the first quiz, not after a low score.",
      },
      {
        action: "The networking and fundamentals terms include those exams.",
        short: "Those terms include Network+ and Security+.",
        explain:
          "Networking Technologies is the term for CompTIA Network+. Cybersecurity Fundamentals is the term for CompTIA Security+. Schedule each exam at Pearson VUE while you are in that class. The class does not hand you the card, and you do not save the exam for after graduation.",
        done: "Both classes are passed, and both exams are scheduled or passed.",
        time: "The early terms, then a few weeks of review for each exam.",
        alongside: "Schedule the exam date before you start the review.",
        support:
          "Request the testing accommodation when you book the exam. Testing centers need notice.",
      },
      {
        action: "The Linux class term includes the Linux+ exam.",
        short: "The Linux term includes Linux+.",
        explain:
          "The next terms are operating systems, secure scripting, and Linux. CompTIA Linux+ belongs to the Linux class term, CTS 1111. Buy it from CompTIA and schedule it at Pearson VUE while that class is on your schedule.",
        done: "Those classes are passed, and Linux+ is scheduled or passed.",
        time: "The middle terms of the associate degree.",
        alongside: "Save each passing score in the same folder as your schedule.",
      },
      {
        action: "The later security classes include their exams.",
        short: "Those later classes include their exams.",
        explain:
          "Cybersecurity Analysis is the term for CompTIA CySA+. Network Defense and Countermeasures is the term for the EC-Council Certified Network Defender exam. Schedule each one during that class. Ask if the term includes a voucher before you pay. You are not choosing a someday certificate. The class term is the time.",
        done: "Both classes are passed, and you have a date for at least one of the two exams.",
        time: "The later terms, plus review time for each exam.",
        alongside: "Ask the program if this term includes an exam voucher before you pay.",
      },
      {
        action: "Finish the associate degree, then the bachelor’s if you stay.",
        short: "Finish the A.S., then the B.S. at MDC if you continue.",
        explain:
          "Finish the Associate in Science. The Bachelor of Science in Cybersecurity is offered at MDC after it. A first job beside the degree, such as help desk or a security operations internship, is the other edge. The certificates plus real tickets put you ahead of a graduate who only has classes.",
        done: "The associate degree is posted, and you know whether you are continuing to the bachelor’s.",
        time: "About two years full time for the associate degree. The bachelor’s is longer.",
        alongside: "Keep a private list of problems you solved. No customer names.",
      },
    ],
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
        explain:
          "Start the Associate in Science in Computer Information Technology. The program code is 25055. The first term is English, Introduction to Computers, Networking Technologies, and math. You can stay afterward for the Bachelor of Science in Information Systems Technology.",
        done: "You are registered in that associate program.",
        time: "See an advisor first. Then register before the last day listed on this page.",
        alongside: "Save the program map with your advisor’s name on it.",
        support: "Tell the advisor which classroom supports have helped you before.",
      },
      {
        action: "The A+ classes include the A+ exam.",
        short: "Those classes include the A+ exam.",
        explain:
          "A+ Computer Operating Systems and A+ Computer Essentials are the terms for CompTIA A+. Schedule the exam at Pearson VUE while you are in the second of those classes. The classes do not hand you the card. The term is already on the plan, so you do not pick a later month.",
        done: "Both classes are passed, and A+ is scheduled or passed.",
        time: "The terms those classes appear, then a few weeks of review.",
        alongside: "Schedule the exam before you start the review.",
        support: "Request extra time or a quiet room when you book the exam.",
      },
      {
        action: "Each later class includes its own exam.",
        short: "Each later class includes its exam.",
        explain:
          "Networking Technologies is the term for CompTIA Network+. IT Project Management is the term for CompTIA Project+. The two Windows support classes are the term for the Microsoft Modern Desktop Administrator exam. Schedule each exam during its class. CompTIA exams are bought from CompTIA. The Microsoft exam starts at Microsoft, then Pearson VUE.",
        done: "Each of those classes is passed, and each exam is scheduled in that class’s term.",
        time: "Across the middle and later terms.",
        alongside: "Keep each score with your class schedule.",
      },
      {
        action: "The marked courses post the college certificates.",
        short: "Those courses post the college certificates.",
        explain:
          "The Help Desk Support Technician certificate and the Information Technology Support certificate are part of this degree. MDC posts them when the marked courses are finished. There is no extra exam and no extra term. Ask which of your classes count, and check that each certificate shows before the last term ends.",
        done: "You have asked which courses count, and you know whether each certificate is posted.",
        time: "The same terms as the degree. Confirm it before the last term ends.",
        alongside: "Write the certificate names next to the courses that earn them.",
      },
      {
        action: "Finish the associate degree ready to be hired.",
        short: "Graduate with the degree and the certificates.",
        explain:
          "Finish the Associate in Science. You can continue into the Bachelor of Science in Information Systems Technology at MDC. By then the path has already included A+, Network+, Project+, and the Microsoft exam, each in the term of its class, plus the college certificates the courses post.",
        done: "The degree is posted, and the exam results are saved with it.",
        time: "About five terms full time, on the sequence guide.",
        alongside: "Read your two-sentence offer, or the job you want, to someone outside tech.",
      },
    ],
  },
];

export function careerById(id: CareerId): Career {
  const found = CAREERS.find((career) => career.id === id);
  if (!found) throw new Error("Unknown career");
  return found;
}

export type Interest = "make" | "fix" | "help";
export type SchoolPlan = "mdc" | "transfer";
export type WorkTiming = "during" | "after";

export type Suggestion = {
  id: CareerId;
  reason: string;
};

/** Three answers, only the five careers already in the book. Not a personality test. */
export function suggestCareers(
  interest: Interest,
  school: SchoolPlan,
  work: WorkTiming,
): Suggestion[] {
  if (interest === "make" && school === "transfer") {
    return [
      {
        id: "architect",
        reason:
          work === "during"
            ? "You want to make things people can see, and you can start that at MDC, then transfer. Office work can begin before the degree is finished."
            : "You want to make things people can see. Architecture starts at MDC and continues at a university.",
      },
    ];
  }

  if (interest === "make") {
    return [
      {
        id: "chef",
        reason:
          "You want to make something real, and culinary arts can be finished at MDC. Kitchen shifts can start while you are still in class.",
      },
    ];
  }

  if (interest === "fix" && school === "transfer") {
    return [
      {
        id: "mechanical",
        reason:
          work === "during"
            ? "You like figuring out how things work. Mechanical engineering starts with math and science at MDC, then a university degree, with a summer of hands-on work along the way."
            : "You like figuring out how things work. Mechanical engineering starts at MDC and needs a university degree after that.",
      },
    ];
  }

  if (interest === "fix") {
    return [
      {
        id: "cyber",
        reason:
          "You like how systems work, and cybersecurity can be finished at MDC — including a bachelor’s — with a first tech job while you study.",
      },
    ];
  }

  const it: Suggestion = {
    id: "it",
    reason:
      work === "during"
        ? "You want to help people use technology. An IT degree at MDC can include a support job while you are still in school."
        : "You want to help people use technology. An IT degree at MDC leads to one clear first service after you finish.",
  };

  if (school === "transfer") return [it];

  return [
    it,
    {
      id: "cyber",
      reason:
        "Cybersecurity is the other path you can finish at MDC if you would rather protect systems than explain them.",
    },
  ];
}
