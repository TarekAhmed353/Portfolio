import type { Project } from "./types";

// Screenshots go in /public/projects (added in step 8).
export const projects: Project[] = [
  {
    slug: "bazardor",
    featured: true,
    name: "BazarDor (বাজার দর)",
    tagline: "Today's grocery prices across Bangladesh, in Bangla",
    image: "/projects/bazardor.png",
    description:
      "A Bangla website for checking today's prices of everyday groceries in Bangladesh. The home page shows which items got more expensive today and which got cheaper, every category has its own sortable page, and each product compares its price across 12 markets around the country. Product pages sit behind a login with email, Google and GitHub sign-in.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "DaisyUI 5",
      "BetterAuth",
      "MongoDB Atlas",
      "Vercel",
    ],
    features: [
      "Today's 6 biggest price rises and 6 biggest drops on the home page",
      "A scrolling price ticker under the navbar",
      "Category pages with price sorting",
      "Market-wise price table with lowest, highest and average price",
      "Email, Google and GitHub login with protected product and profile pages",
    ],
    liveUrl: "https://bazardor-tarek.vercel.app",
    repoUrl: "https://github.com/TarekAhmed353/PH-Seventh-Assignment",
    challenges: [
      "Prices are shown in Bengali digits, so sorting the displayed text put ১২০ before ৯৫. I sort on the real numbers and only convert to Bengali digits when rendering.",
      "Signed-out visitors who open a product get sent to the sign-in page. After logging in they have to land back on that same product instead of the home page, so the original URL travels through the whole login flow.",
      "The price API has a rate limit. When it's hit, the site falls back to a saved copy of the same data and the pages keep working.",
      "Product icons are emoji, and Windows didn't show them reliably, so I added a colour emoji font.",
    ],
    improvements: [
      "Price history charts so you can see how a product's price moved over the past weeks.",
      "A watchlist that alerts you when a product drops below a price you set.",
      "A panel for trusted contributors to update market prices.",
      "An English version of the site alongside the Bangla one.",
    ],
  },
  {
    slug: "bandup",
    featured: true,
    name: "BandUp",
    tagline: "An AI-powered IELTS preparation platform",
    image: "/projects/bandup.png",
    description:
      "An IELTS preparation platform built as a team project with Ishmam Hussain. Students take reading and listening tests that are scored on the server, learn vocabulary with flashcards and quizzes, and get AI feedback on their writing and speaking from Google's Gemini API. A dashboard tracks progress against a target band, and an admin panel lets staff manage every passage, test, prompt and student account.",
    techStack: [
      "Node.js",
      "Express",
      "MySQL",
      "Supabase",
      "Google Gemini API",
      "JWT auth",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "Render",
    ],
    features: [
      "Reading and listening tests scored on the server",
      "AI band-score feedback on essays and recorded speaking answers",
      "Vocabulary flashcards and quizzes with new, learning and mastered tracking",
      "A dashboard with progress charts, a target band and an exam date",
      "An admin panel for managing passages, tests, prompts, vocabulary and students",
    ],
    liveUrl: "https://bandup-52ay.onrender.com",
    repoUrl: "https://github.com/IshmamHussain/BandUp/tree/master/client",
    myRole:
      "Collaborator, focused on the frontend. I built the admin panel and the speaking module pages, made UI improvements across the client, and helped wire up the Gemini API for AI essay grading.",
    liveNote:
      "Hosted on a free plan, so the first visit can take up to a minute while the server wakes up.",
    challenges: [
      "The admin panel manages six kinds of content, and writing a separate table, form and delete dialog for each would have meant the same code six times. One shared CRUD module builds every admin page from a small config of columns and fields.",
      "The speaking module records answers in the browser with the MediaRecorder API. Chromium defaults to a video WebM container, so the recorder asks for an audio format explicitly and falls back from Opus WebM to plain WebM to MP4 depending on what the browser supports.",
      "Test answers never leave the server. The pages only receive passages and questions, and scoring happens in the API, so nobody can read the answers from the page source.",
      "My admin panel and speaking module work landed while Ishmam was changing the same pages, and merging it meant resolving conflicts across 18 files.",
      "The free hosting plans set hard limits: only 2 accounts can register per hour, and the server sleeps when idle.",
    ],
    improvements: [
      "Full timed mock tests that cover all four modules in one sitting.",
      "Study plans that adapt to each student's weakest module.",
      "Pronunciation feedback for the speaking module.",
      "Moving to paid hosting to remove the sign-up limit and the slow first load.",
    ],
  },
  {
    slug: "fitlog",
    name: "FitLog",
    tagline: "A workout library with a daily plan builder",
    image: "/projects/fitlog.png",
    description:
      "A dark, no-nonsense workout library. You can browse twelve lifts, open any of them for sets, reps and step-by-step instructions, build a plan for today with up to five lifts, and keep a separate list of lifts to try later. Both lists survive a page reload.",
    techStack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS 4",
      "DaisyUI 5",
      "react-hot-toast",
      "Vercel",
    ],
    features: [
      "Workout cards with muscle groups, equipment, duration, calories and rating",
      "A details page for every workout with numbered instructions",
      "Today's plan capped at five lifts, plus a separate Save for later list",
      "Live stats for total exercises, minutes and calories in the plan",
      "Sorting the plan by duration, calories or rating",
    ],
    liveUrl: "https://fitlog-tarek.vercel.app",
    repoUrl: "https://github.com/TarekAhmed353/PH-Sixth-Assignment",
    challenges: [
      "The plan and saved lists live in localStorage, which only exists in the browser. The effect that saves the lists also ran on the very first render, while they were still empty, and wiped the stored data. An isLoaded flag now stops it from saving until the stored lists have been read.",
      "Adding a lift can fail in two ways: it's already in the plan, or the plan already has five. The add function returns which case happened so each one gets its own toast message.",
      "If the workout API is down or rate limited, the app falls back to a local copy of the data instead of showing an empty page.",
    ],
    improvements: [
      "A workout history that records completed lifts by date.",
      "User accounts so the plan syncs across devices instead of living in one browser.",
      "Custom workouts that users can add themselves.",
      "A rest timer between sets.",
    ],
  },
  {
    slug: "cpu-scheduling-simulator",
    name: "CPU Scheduling Simulator",
    tagline: "See how 8 CPU scheduling algorithms handle the same processes",
    image: "/projects/cpu-scheduling-simulator.png",
    description:
      "An interactive tool for my Operating Systems course that shows how different CPU scheduling algorithms handle the same set of processes. You add processes with their arrival time, burst time and priority, pick an algorithm, and get a Gantt chart with waiting, turnaround and response times. A compare mode runs every algorithm at once and puts the results side by side.",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "Netlify"],
    features: [
      "8 algorithms: FCFS, SJF, SRTF, Round Robin, both Priority variants, HRRN and MLFQ",
      "A Gantt chart generated for every run",
      "Average waiting, turnaround and response time, CPU utilisation and throughput",
      "Side-by-side comparison of all algorithms with bar charts",
      "Ready queue trace for Round Robin",
    ],
    liveUrl: "https://cpuschedulingsimulator353.netlify.app",
    repoUrl:
      "https://github.com/TarekAhmed353/CPU-SCHEDULING-SIMULATOR-OS-mini-project-",
    challenges: [
      "Preemptive algorithms like SRTF and preemptive Priority can switch processes at any time unit, so the simulation has to step through time one unit at a time instead of running each process to completion.",
      "MLFQ needs several queues with their own time quantum, and processes that use up their quantum move down a level. Getting that bookkeeping right took the most testing.",
      "There's no chart library. The Gantt chart and the comparison bars are built from plain HTML and CSS.",
    ],
    improvements: [
      "An animated step-by-step playback of the Gantt chart.",
      "I/O bursts so processes can block and come back.",
      "Exporting results to CSV or PDF.",
      "Saving and loading process sets.",
    ],
  },
  {
    slug: "dev-stack-builder",
    name: "Dev Stack Builder",
    tagline: "Pick technologies and build your own web dev stack",
    image: "/projects/dev-stack-builder.png",
    description:
      "A single-page React app for browsing web development technologies and putting together a personal stack. You choose from fourteen technologies across frontend, backend, database, language, styling, DevOps and tooling, and your picks build up in a live sidebar.",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "DaisyUI 5",
      "React Toastify",
      "Netlify",
    ],
    features: [
      "Adding a technology to the stack, with duplicates blocked",
      "A live sidebar with a count of selected technologies",
      "Removing one item or clearing the whole stack",
      "A toast notification for every action",
    ],
    liveUrl: "https://ph5-dev-stack-builder-tarek.netlify.app",
    repoUrl: "https://github.com/TarekAhmed353/PH-Fifth-Assignment",
    challenges: [
      "The cards and the sidebar have to agree at all times. Adding a technology disables its card, and removing it from the sidebar has to enable the card again straight away.",
      "The technology list loads from a JSON file, so the fetch sits in a useEffect with an empty dependency array. Fetching in the component body would set state on every render and loop forever.",
    ],
    improvements: [
      "Saving stacks and sharing them with a link.",
      "Search and category filters for the technology list.",
      "More technologies, with short notes on when to use each one.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
