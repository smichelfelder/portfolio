import type { CaseStudy, CaseSlug } from "./types";

const IBPM: CaseStudy = {
  slug: "ibpm-platform",
  title: "iBPM Platform Redesign",
  subtitle: "Making a heavy BPM platform feel light",
  tagline:
    "Redesigning a complex B2B manufacturing platform for 16 enterprise clients, on mobile, tablet and an industrial smartwatch.",
  year: "2023–Present",
  company: "Workerbase",
  role: "Senior Product Designer (sole designer)",
  duration: "Ongoing, 18+ months",
  team: "1 PM, 6 engineers, 2 implementation engineers",
  tags: ["B2B SaaS", "Enterprise", "Cross-platform", "AI Workflows", "Design System"],
  heroImage: {
    src: "/projects/ibpm/hero.png",
    alt: "iBPM workflow builder canvas with process nodes",
    w: 892,
    h: 842,
  },
  thumbnail: {
    src: "/projects/ibpm/thumb.png",
    alt: "iBPM Platform thumbnail",
    w: 1393,
    h: 786,
  },
  shortDescription:
    "Redesign of a complex B2B manufacturing platform used by 16 enterprise clients, including Porsche, thyssenkrupp, Bosch and GKN. I owned the design end to end, from mobile and tablet to an industrial smartwatch.",
  metrics: [
    { value: "16", label: "Enterprise clients" },
    { value: "4", label: "Form factors shipped" },
    { value: "92%", label: "Of users blocked by legacy UX" },
  ],
  context:
    "Workerbase's iBPM platform helps manufacturers like Porsche, thyssenkrupp, Bosch and GKN run work on the shop floor. When I joined, the product was powerful but heavy. Operators kept backtracking to finish a task, supervisors couldn't see what was blocked, and implementation engineers spent weeks configuring rules that should take hours. I came in as the first dedicated designer.",
  objectives: [
    "Cut the time supervisors spend reacting to blocked workflows",
    "Let operators finish a task on the device they're already holding",
    "Make AI agents legible: operators should see what the agent decided and why",
    "One design system for mobile, tablet, web and smartwatch",
  ],
  scoping:
    "With the PM, I split the redesign into three waves: shop-floor surfaces first (operator tablet and smartwatch), then supervisor dashboards, then the configuration tooling for implementation engineers. We pushed analytics screens back so the high-frequency surfaces landed sooner. I co-wrote the requirements and ran sprint planning for the design track, which also put me in roadmap and prioritization meetings.",
  challenges: [
    "Four form factors with very different ergonomics: a tablet on a workbench, a smartwatch used with safety gloves, a wide monitor on a supervisor's desk",
    "Latency-sensitive flows on industrial Wi-Fi, where every extra screen costs time",
    "Each enterprise customer had its own workflows, and the platform had to adapt without forking the design system",
    "AI agents making decisions mid-workflow that operators needed to trust and be able to override",
  ],
  research: {
    quantitative: [
      { value: "92%", label: "Of operators blocked by legacy navigation", note: "Internal survey, n=128" },
      { value: "58%", label: "Of issues never reached supervisors", note: "Workflow telemetry" },
      { value: "16h", label: "Avg. weekly time supervisors lost reacting to blockers" },
      { value: "83%", label: "Of complex tasks done in one attempt after the redesign" },
    ],
    quantitativeNote:
      "I ran a mixed-methods study at three sites in Germany: shadowing on the shop floor, structured interviews with supervisors and an analysis of workflow telemetry from the existing platform.",
    qualitative:
      "Two patterns kept coming up. Operators avoided escalating problems because the escalation UI was buried, and supervisors didn't trust statuses because they lagged behind reality. Both came from the same root cause: broken feedback loops between roles.",
    personas: [
      {
        name: "Agustín López",
        role: "Workshop Owner / Senior Operator",
        bio: "Runs an 8-person maintenance team at a Tier-1 automotive supplier. He took over the workshop three years ago and is still untangling his predecessor's tribal knowledge.",
        needs: [
          "See at a glance where his team is stuck",
          "Reassign work on the fly when someone calls in sick",
          "Hand context to the next shift without an end-of-day email",
        ],
        painPoints: [
          "The legacy dashboard hid blockers two tabs deep",
          "Couldn't see in real time which AI suggestions had been overridden",
          "Smartwatch alerts were so noisy he muted them, then missed the important ones",
        ],
        motivations: [
          "Earn his team's trust by not pushing fires onto them",
          "Hit OEE targets without burning out the floor",
        ],
      },
    ],
  },
  process: [
    {
      title: "Mapping every workflow",
      body:
        "Before any pixels, I mapped every recurring task type across the 16 customers. Four archetypes covered about 80% of flows, so we designed for those instead of for every customer's edge case.",
      image: {
        src: "/projects/ibpm/process-ia.png",
        alt: "Screens from the legacy platform",
        w: 1513,
        h: 892,
        caption: "The legacy platform we started from. Building a flow meant knowing Python.",
      },
    },
    {
      title: "Cross-platform IA",
      body:
        "I rebuilt the information architecture around what the operator does, not around the data model. The watch shows the next action. The tablet shows the active task plus the next two. The supervisor's web view shows the whole queue, with the AI's confidence on each suggestion.",
    },
    {
      title: "Making the AI legible",
      body:
        "Every AI step shows the agent's reasoning in plain language, the inputs it used and a one-tap override. The override always wins, and the agent learns from it.",
    },
    {
      title: "Designing in production React",
      body:
        "Once flows were validated, I skipped high-fidelity Figma and built screens directly in production React with shadcn/ui and Tailwind. That removed a whole handoff round, and the engineers and I iterated together in PR reviews.",
      image: {
        src: "/projects/ibpm/process-react.png",
        alt: "Create-workflow modal in the redesigned platform",
        w: 1393,
        h: 787,
        caption: "Creating a workflow: one modal, only the fields you need to get started.",
      },
    },
  ],
  decisions: [
    {
      decision: "One design system for mobile, tablet, web and smartwatch",
      rationale:
        "Customers set up the same workflow across devices, and inconsistent affordances were the #2 complaint. A single token-based system gave supervisors and operators a shared mental model.",
      tradeoff:
        "The smartwatch lost a few custom micro-interactions. Operators only used it to confirm or reject, and the shared system handled that well.",
    },
    {
      decision: "AI suggestions show the 'why' inline, never in a tooltip",
      rationale:
        "People stop trusting a system that feels like a black box. Inline reasoning costs two lines of UI and keeps operators on board.",
      tradeoff:
        "Denser tablet screens, which we handled with progressive disclosure on secondary fields.",
    },
    {
      decision: "Wireframe in Figma, ship in production React",
      rationale:
        "As the only designer, I couldn't keep a pixel-perfect Figma file and a React codebase in sync. Production React became the source of truth.",
      tradeoff:
        "PMs lost their tidy Figma page for stakeholders. We replaced it with Storybook previews on every PR.",
    },
  ],
  solution: [
    {
      title: "Workflow overview",
      description:
        "Every workflow is a card with its status, so supervisors can spot what's blocked without opening each one.",
      image: {
        src: "/projects/ibpm/solution-dashboard.png",
        alt: "Workflow overview with status cards",
        w: 1393,
        h: 787,
      },
      caption: "Finding the blocked workflow went from minutes to seconds.",
    },
    {
      title: "No-code workflow builder",
      description:
        "Add a stage, then set its ID, label, type, icon and color in a side panel. No Python required.",
      image: {
        src: "/projects/ibpm/solution-tablet.png",
        alt: "Workflow builder with node properties panel",
        w: 1393,
        h: 786,
      },
    },
    {
      title: "Readable flow canvas",
      description:
        "Branches read left to right, with zoom and a minimap for large processes and export to PDF or JSON.",
      image: {
        src: "/projects/ibpm/solution-watch.png",
        alt: "Workflow builder canvas",
        w: 1393,
        h: 779,
      },
    },
  ],
  outcomes: [
    { value: "83%", label: "Of complex tasks completed in one attempt", note: "vs. 41% on legacy" },
    { value: "6 mo", label: "Shorter avg. enterprise rollout", note: "Faster onboarding, less custom UI" },
    { value: "0", label: "Customer regressions on the unified design system" },
  ],
  reflections:
    "The hardest part wasn't the cross-platform work. It was getting the OK to remove features customers had asked for years ago. Negotiating that with sales and customer success taught me a lot about product. If I started over, I'd invest in the implementation engineers' tooling earlier, since that's where most rollout pain still is.",
  next: { slug: "digital-checklists", title: "Digital Checklists" },
};

const DIGITAL_CHECKLISTS: CaseStudy = {
  slug: "digital-checklists",
  title: "Digital Checklists",
  subtitle: "The front door to shop-floor digitalization",
  tagline:
    "A WYSIWYG form builder that lets factories move paper checklists into Workerbase in minutes, no workflow engine required.",
  year: "2024–2025",
  company: "Workerbase",
  role: "Senior Product Designer",
  duration: "Initial launch + usability cycle (Jun–Jul 2025)",
  team: "1 PM, engineering squad, implementation & customer success",
  tags: ["B2B SaaS", "Manufacturing", "Form Builder", "WYSIWYG", "Adoption"],
  heroImage: {
    src: "/projects/digital-checklists/hero.png",
    alt: "Checklist editor with a number input and advanced flagging criteria",
    w: 1512,
    h: 982,
  },
  thumbnail: {
    src: "/projects/digital-checklists/solution-checklist-flagging.png",
    alt: "Digital Checklists editor thumbnail",
    w: 1512,
    h: 982,
  },
  shortDescription:
    "Workerbase's digital forms: a WYSIWYG checklist builder that replaced paper on the shop floor, became the entry point to digitalization and cut creation time in half for simple cases.",
  metrics: [
    { value: "-50%", label: "Creation time for simple cases" },
    { value: "1000s", label: "Of forms created" },
    { value: "100s", label: "Of daily shop-floor users" },
  ],
  context:
    "Most factories still do inspections, maintenance rounds and quality checks on paper. Workerbase already had Work Instructions, a powerful engine for multi-step, branching processes. But building one meant thinking in nodes and logic. Advanced users loved it. New customers who just wanted to digitize a paper checklist got stuck before publishing anything. They needed a smaller first step, something as familiar as the paper form it replaced.",
  objectives: [
    "Let a new user digitize a paper checklist in minutes, with no training",
    "WYSIWYG editing: what you build is what the worker sees",
    "Lower the stakes of publishing with safe versions, easy rollback and no broken forms in the field",
    "Make it obvious when to use Forms and when to use Work Instructions",
  ],
  scoping:
    "Forms would be the on-ramp, with Work Instructions still there for the complex stuff. Linear, single-page checklists went to Forms. Branching, multi-step processes stayed in Work Instructions. That line kept the builder simple enough to stay WYSIWYG. After launch, a usability cycle (June to July 2025) covered what adoption data and customer feedback pointed to: form actions, version history, flagging and conditional logic, custom keys, inserting steps mid-form, units on number inputs and multiple signatures.",
  challenges: [
    "Two tools that both 'digitize a process', so users needed to know which one to pick",
    "Keeping a WYSIWYG editor simple while supporting flagging, conditions and signatures",
    "Forms are live in production. Editing and publishing could never break what workers were filling in that shift",
    "Users ranged from first-time digitalization leads to implementation engineers fluent in the full workflow engine",
  ],
  research: {
    qualitative:
      "I interviewed customers starting out with digitalization and our implementation team, and audited how real paper checklists were structured. Almost all were linear: questions, a few checkboxes, a number to record, a signature at the end. Capability wasn't the blocker, the mental model was. Work Instructions asked people to think like process designers, and they wanted to think like someone filling in a sheet of paper. A competitive analysis of connected-worker and inspection tools (SafetyCulture, Tulip, Poka, Parsable) and general form builders backed this up. The products that win early adoption get people to a published checklist fast with a document-like editor and reveal logic gradually. Tools that lead with app-building power win later, with experts. That's exactly the split between our Forms and Work Instructions.",
  },
  process: [
    {
      title: "Paper as the benchmark",
      body:
        "We collected real paper checklists from customers and used them as the test: if someone couldn't rebuild their own sheet in a few minutes, the builder was too complex. That led to the WYSIWYG canvas, an element bar at the bottom of the form and settings in a side panel instead of modals.",
    },
    {
      title: "Drawing the line between Forms and Work Instructions",
      body:
        "The hardest part was positioning. I mapped the jobs each tool did best and turned them into clear entry points in the document library, consistent naming and in-product guidance, so people could pick the right tool without reading docs.",
    },
    {
      title: "Basic and advanced modes",
      body:
        "Flagging and conditions make a digital checklist better than paper, and they're also where builders get messy. Every logic feature has a basic mode for the common case and an advanced mode with AND/OR criteria and groups. New users only see complexity when they go looking for it.",
    },
    {
      title: "Making publishing safe",
      body:
        "Forms run live on the shop floor, so versioning had to feel safe. A versions panel shows what's published, what's a draft and who changed what, plus a full history per version: created, published, superseded, unpublished.",
      image: {
        src: "/projects/digital-checklists/process-version-history.png",
        alt: "Version history dialog showing created, published, superseded and unpublished events",
        w: 552,
        h: 556,
        caption: "Each version keeps its own audit trail, so publishing never feels final.",
      },
    },
    {
      title: "Usability cycle after launch",
      body:
        "Once forms were in use, we focused on the friction customers reported most: adding steps mid-form, units on number inputs, multiple signatures, import/export between environments and editable element keys for integrations.",
      image: {
        src: "/projects/digital-checklists/process-add-step.png",
        alt: "Hover affordance for adding a step between two existing questions",
        w: 1512,
        h: 982,
        caption: "Adding a step between existing questions, one of the most requested fixes.",
      },
    },
  ],
  decisions: [
    {
      decision: "A separate, simpler tool instead of a 'lite mode' of Work Instructions",
      rationale:
        "A lite mode would have kept the node-based mental model that was blocking new users. A separate WYSIWYG tool let us design for the paper-checklist case with no compromises.",
      tradeoff:
        "Two tools to explain, so we invested in clear positioning and entry points.",
    },
    {
      decision: "Basic and advanced modes for every piece of logic",
      rationale:
        "Most flags are a simple 'between 5 and 15'. Leading with AND/OR groups would have scared off the exact users we wanted to win.",
      tradeoff:
        "More states to design and build. New users stay in basic, and power users are one click from what they need.",
    },
    {
      decision: "Auto-generated element keys, editable with a warning",
      rationale:
        "Keys connect form data to databases and integrations. Generating them saves most users a step. Experts can still edit them, with duplicate validation and a clear warning.",
      tradeoff:
        "One extra confirmation for advanced users, and far fewer broken integrations.",
    },
  ],
  solution: [
    {
      title: "Document library",
      description:
        "Forms grouped by the resource they belong to, with publish status and version visible at a glance, plus copy, export, unpublish and import.",
      image: {
        src: "/projects/digital-checklists/solution-library.png",
        alt: "Document library listing checklists with version and publish status",
        w: 1524,
        h: 982,
      },
    },
    {
      title: "WYSIWYG checklist editor",
      description:
        "The canvas looks like the form the worker will fill in. Elements come from a single bar, and settings live in a side panel with General and Flagging tabs.",
      image: {
        src: "/projects/digital-checklists/solution-checklist-flagging.png",
        alt: "Checklist editor with flagging settings in the side panel",
        w: 1512,
        h: 982,
      },
    },
    {
      title: "Conditional sections",
      description:
        "Sections show or hide based on earlier answers or flags, so one form adapts instead of splitting into many.",
      image: {
        src: "/projects/digital-checklists/solution-conditional.png",
        alt: "Section display options with conditions based on previous answers",
        w: 1512,
        h: 982,
      },
      caption: "Display logic lives in the side panel, so the canvas stays clean.",
    },
    {
      title: "Versions you can trust",
      description:
        "See what's live, what's a draft and who changed what. Create a version, publish or roll back without touching what workers are using right now.",
      image: {
        src: "/projects/digital-checklists/solution-versions.png",
        alt: "Document view with versions panel showing published and draft versions",
        w: 1524,
        h: 982,
      },
    },
    {
      title: "Element keys for integrations",
      description:
        "Keys are generated automatically and experts can edit them, with inline validation when a key is already taken.",
      image: {
        src: "/projects/digital-checklists/solution-custom-key.png",
        alt: "Element key field showing a duplicate key validation error",
        w: 1512,
        h: 982,
      },
    },
  ],
  outcomes: [
    { value: "-50%", label: "Creation time for simple cases", note: "vs. building them as Work Instructions" },
    { value: "1000s", label: "Of forms created by customers" },
    { value: "100s", label: "Of shop-floor users filling them in" },
  ],
  reflections:
    "People picked it up fast and actually liked using it. My main takeaway: positioning was harder than the UI. Explaining when to use a Form and when a Work Instruction mattered as much as any screen. Next time I'd build that guidance into the product earlier and design the path from a Form to a Work Instruction for when a process outgrows a checklist.",
  next: { slug: "guardiasya", title: "GuardiasYa" },
};

const GUARDIASYA: CaseStudy = {
  slug: "guardiasya",
  title: "GuardiasYa",
  subtitle: "Emergency room finder",
  tagline:
    "A mobile app to find the nearest open emergency room, designed from research to high-fidelity prototype.",
  year: "2023",
  company: "Personal Project",
  role: "UX/UI Designer",
  duration: "6 weeks",
  team: "Solo",
  tags: ["UX Case Study", "Mobile App", "User Research", "Healthcare"],
  heroImage: {
    src: "/projects/guardiasya/hero.png",
    alt: "GuardiasYa app screens",
    w: 752,
    h: 842,
  },
  thumbnail: {
    src: "/projects/guardiasya/thumb.png",
    alt: "GuardiasYa thumbnail",
    w: 1440,
    h: 900,
  },
  shortDescription:
    "A mobile app for finding an open emergency room fast. I did the full UX: research, personas, task flows, wireframes and high-fidelity screens.",
  metrics: [
    { value: "2", label: "Validated personas" },
    { value: "12", label: "User interviews" },
    { value: "5", label: "High-fidelity screens shipped" },
  ],
  context:
    "In Argentina, finding an open ER in the middle of the night is a gamble. Hospital pages are outdated, wait times change by the hour and there's no single place to check. People drive from one closed hospital to the next with a sick kid in the back seat. GuardiasYa started with something that happened to me and became a self-initiated case study: how do you design a health app that has to work the first time, for someone under stress?",
  objectives: [
    "Find the nearest ER that's open right now",
    "Show specialty and wait time before leaving home",
    "Work for people who are scared, tired or holding a child",
    "Build trust fast, because health apps rarely get a second chance",
  ],
  scoping:
    "I focused on one critical job: 'Find the closest open ER for the specialty I need, right now.' Anything outside that job (appointment booking, history, social login) was pushed to later. That kept the problem small enough to solve properly.",
  challenges: [
    "People in distress have very little attention to spare, so every extra tap hurts",
    "Healthcare data is fragmented and unreliable, and the UI has to be honest about that",
    "Trust signals matter more than aesthetics",
    "Two very different states to design for: planning ahead vs. an emergency right now",
  ],
  research: {
    quantitative: [
      { value: "12", label: "Interviews", note: "Parents and young adults" },
      { value: "78%", label: "Of users described past ER searches as 'panicked'" },
      { value: "5/10", label: "Avg. trust score for existing health apps" },
    ],
    qualitative:
      "Every person I interviewed described a moment where they didn't know whether to drive, call or wait. So the opportunity was bigger than putting ERs on a map. It was about taking one decision off their plate at the worst moment of their week.",
    personas: [
      {
        name: "David San Martín",
        role: "Software developer, dad of one",
        bio:
          "Just moved cities. He doesn't know which nearby hospitals handle pediatric emergencies, and his son catches everything going around daycare.",
        needs: [
          "Find the nearest ER with pediatrics, right now",
          "Trust that the wait time he sees is real",
          "Get directions without copying anything into another app",
        ],
        painPoints: [
          "Has driven to ERs that turned out to be closed",
          "Doesn't know which specialties each hospital actually covers at night",
        ],
        motivations: [
          "Be the calm parent in a crisis",
          "Not waste his sick kid's energy in a parking lot",
        ],
      },
      {
        name: "Agustina Pelaez Núñez",
        role: "Marketing manager, lives with a chronic condition",
        bio:
          "Lives with a recurring autoimmune condition and has had to find ERs in unfamiliar cities while traveling for work.",
        needs: [
          "Filter ERs by specialty (rheumatology, neurology, etc.)",
          "See wait time per specialty, not just per hospital",
          "Save preferred hospitals across cities",
        ],
        painPoints: [
          "Generic hospital finders don't show the right specialty",
          "Travel anxiety makes bad UX worse",
        ],
        motivations: [
          "Stay independent and in control while traveling",
        ],
      },
    ],
  },
  process: [
    {
      title: "Two task flows, one critical path",
      body:
        "I mapped two scenarios: 'Register and save preferences' and 'Find an ER by specialty under stress'. The stress path got most of the design effort, with a cap of 3 taps from opening the app to driving directions.",
      image: {
        src: "/projects/guardiasya/process-taskflows.png",
        alt: "Two side-by-side task flow diagrams",
        w: 1510,
        h: 1934,
        caption: "The stress path (right) got the focus. Registration moved behind a guest mode.",
      },
    },
    {
      title: "Low-fi sketches",
      body:
        "I sketched six options on paper for each critical screen, showed them to three interviewees and dropped any that needed explaining. If it needs a walkthrough, it won't work in a real emergency.",
      image: {
        src: "/projects/guardiasya/process-sketches.png",
        alt: "Paper sketches of major screens",
        w: 1392,
        h: 1454,
      },
    },
    {
      title: "Back to the interviewees",
      body:
        "I took wireframes back to four of the original interviewees. The biggest finding: people want to call before they drive. So every detail screen got a 'Call ER' button at the top.",
    },
  ],
  decisions: [
    {
      decision: "Guest mode by default, sign-up optional",
      rationale:
        "An ER finder that asks for an account in a crisis has already failed. Signing up unlocks saved hospitals and history, which can wait.",
      tradeoff:
        "Less personalization on the first visit and weaker engagement numbers. Fine for a health utility.",
    },
    {
      decision: "Specialty first, location second",
      rationale:
        "Interviews showed people knew what kind of help they needed before they cared which hospital. Flipping the usual order shortened the path for the most urgent case.",
      tradeoff:
        "A bit slower for people who just want the closest ER. A sticky 'Any specialty' filter covers them.",
    },
    {
      decision: "Honest wait times",
      rationale:
        "A wait time you can't trust is worse than none. Each ER shows when its data was updated and where it came from.",
      tradeoff:
        "Some screens feel less polished than competitors'. Here, trust matters more.",
    },
  ],
  solution: [
    {
      title: "Splash & onboarding",
      description: "Three skippable screens that load before the first interaction.",
      image: {
        src: "/projects/guardiasya/solution-onboarding.png",
        alt: "Splash and onboarding screens",
        w: 940,
        h: 900,
      },
    },
    {
      title: "Specialty-first search",
      description: "Pick a specialty and see ERs sorted by distance, wait time and data freshness.",
      image: {
        src: "/projects/guardiasya/solution-search.png",
        alt: "Search screen with specialty filter",
        w: 460,
        h: 900,
      },
    },
    {
      title: "ER detail",
      description: "Wait time, specialties, call and directions, and when the info was last updated.",
      image: {
        src: "/projects/guardiasya/solution-detail.png",
        alt: "ER detail screen",
        w: 940,
        h: 900,
      },
    },
  ],
  outcomes: [
    { value: "3 taps", label: "From app open to directions" },
    { value: "100%", label: "Of test participants finished the stress flow without help" },
    { value: "5", label: "High-fidelity screens, ready for engineering scoping" },
  ],
  reflections:
    "Healthcare UX is mostly about restraint. Whenever I wanted to add something, I asked myself: 'Would I want this with a sick kid in the back seat?' If not, it was out. Next I'd love to partner with a regional hospital network and test it with live data.",
  next: { slug: "moorea-ui-kit", title: "Moorea UI Kit" },
};

const MOOREA: CaseStudy = {
  slug: "moorea-ui-kit",
  title: "Moorea UI Kit",
  subtitle: "Multi-product design system",
  tagline:
    "A design system shared by six products at Sky Castle Studios, flexible enough for each brand without forking.",
  year: "2022",
  company: "Sky Castle Studios",
  role: "Lead Product Designer",
  duration: "9 months",
  team: "Me + 2 product designers, 4 engineers",
  tags: ["Design Systems", "UI Kit", "Component Library", "Scalability"],
  heroImage: {
    src: "/projects/moorea/hero.png",
    alt: "Moorea UI Kit overview: tokens, components, patterns",
    w: 932,
    h: 842,
  },
  thumbnail: {
    src: "/projects/moorea/thumb.png",
    alt: "Moorea UI Kit thumbnail",
    w: 1200,
    h: 900,
  },
  shortDescription:
    "A design system and UI kit for multiple products: color palettes, a component library, typography and interaction patterns that keep everything consistent as it grows.",
  metrics: [
    { value: "6", label: "Products on the system" },
    { value: "120+", label: "Components shipped" },
    { value: "9 mo", label: "From kickoff to v1 in production" },
  ],
  context:
    "Sky Castle was running six client products on six separate design files. New designers had to relearn patterns, and every new product reinvented them. I led the creation of Moorea, a shared foundation that still left room for the brand differences clients were paying for.",
  objectives: [
    "Halve the time from product kickoff to the first shippable screens",
    "Accessibility by default, without waiting for an audit",
    "Patterns flexible enough for each client without forking the system",
    "A 1:1 mapping between Figma and React components",
  ],
  scoping:
    "We released Moorea in three stages: tokens and primitives, then patterns (forms, tables, navigation), then templates per product vertical. I held templates back until the patterns were stable, which kept the system consistent.",
  challenges: [
    "Six brands with very different personalities. The system had to flex on color and density without forking",
    "Products were already live, so feature work couldn't stop for the migration",
    "Three designers in the studio, three opinions on every primitive",
    "Engineering needed a Figma library and a React library that stayed in sync",
  ],
  research: {
    quantitative: [
      { value: "60%", label: "Of components reused across ≥3 products by v1.5" },
      { value: "45%", label: "Fewer design-to-dev handoff comments per ticket" },
    ],
    qualitative:
      "Before writing a single token, I audited all six products. Buttons, modals and tables showed up everywhere, but each had drifted into its own dialect. That audit became the inventory for v1.",
  },
  process: [
    {
      title: "Tokens first",
      body:
        "I defined three token layers (primitive, semantic, component) before drawing any components. Each product's brand theme plugs into the semantic layer and leaves the primitives alone.",
      image: {
        src: "/projects/moorea/process-tokens.png",
        alt: "Three-layer token system diagram",
        w: 1600,
        h: 900,
        caption: "Primitive → semantic → component. Brand themes only override the semantic layer.",
      },
    },
    {
      title: "Patterns before components",
      body:
        "We documented how forms work before shipping a button. Patterns explained when to use each component, and that's the part designers ended up checking every day.",
    },
    {
      title: "Accessibility by default",
      body:
        "Every primitive comes with focus-visible states, semantic roles and color pairs that pass WCAG AA. I also built a Figma plugin that flagged token combinations under 4.5:1 right on the canvas.",
    },
    {
      title: "Governance",
      body:
        "I wrote a contribution model and ran 'system office hours' every two weeks. New patterns went from 'lab' to 'proposed' to 'shipped', with a clear owner at each step.",
    },
  ],
  decisions: [
    {
      decision: "Brand themes override semantic tokens, never primitives",
      rationale:
        "When a client wanted a bright orange CTA, we only had to change one semantic token. The primitive palette stayed the same, so nothing else drifted.",
      tradeoff:
        "Clients with strong opinions on radius or spacing felt boxed in. We added a small, curated set of per-product overrides.",
    },
    {
      decision: "Patterns before components",
      rationale:
        "A component without a pattern is just decoration. Patterns gave designers a way to compose, and gave engineers a reason to push back on off-pattern requests.",
      tradeoff:
        "v1 felt slow because we shipped fewer components per sprint. By v1.3 that flipped, and reuse went up because the primitives were stable.",
    },
    {
      decision: "One Figma library, one React library, one set of tokens",
      rationale:
        "Two sources of truth quickly become none. Tokens lived in JSON and fed both.",
      tradeoff:
        "Figma's variables lagged behind code in 2022, so typography needed a manual translation step until Figma caught up.",
    },
  ],
  solution: [
    {
      title: "Color palette",
      description: "Primary, neutral and extended ramps tuned for AA contrast.",
      image: {
        src: "/projects/moorea/solution-palette.png",
        alt: "Moorea color palettes",
        w: 1510,
        h: 2267,
      },
    },
    {
      title: "Component library",
      description: "Buttons, inputs, tables, date pickers and modals, all driven by tokens.",
      image: {
        src: "/projects/moorea/solution-components.png",
        alt: "Moorea components overview",
        w: 1512,
        h: 1689,
      },
    },
    {
      title: "Icon set",
      description: "120+ icons on a shared grid, with consistent strokes across weights.",
      image: {
        src: "/projects/moorea/solution-icons.png",
        alt: "Moorea icon set",
        w: 1512,
        h: 1086,
      },
    },
  ],
  outcomes: [
    { value: "2.4x", label: "Faster product kickoffs after v1" },
    { value: "60%", label: "Of components reused across products" },
    { value: "AA", label: "Contrast across the entire system by default" },
  ],
  reflections:
    "My biggest lesson: a design system falls apart when governance is informal. The patterns were the output, but the contribution model is what kept it alive. Next time I'd start the governance conversation on day one instead of patching it in around v1.2.",
  next: { slug: "leafnoise", title: "Leafnoise Website" },
};

const LEAFNOISE: CaseStudy = {
  slug: "leafnoise",
  title: "Leafnoise Website Redesign",
  subtitle: "B2B SaaS marketing site",
  tagline:
    "Redesign of Leafnoise's website, from stakeholder research to a system marketing can update on their own.",
  year: "2020–2021",
  company: "Leafnoise",
  role: "Head of Design & Culture",
  duration: "5 months",
  team: "Me + 1 designer, 2 engineers, marketing lead",
  tags: ["Website Redesign", "UX Strategy", "Stakeholder Research", "B2B Marketing"],
  heroImage: {
    src: "/projects/leafnoise/hero.png",
    alt: "Leafnoise website screens",
    w: 992,
    h: 842,
  },
  thumbnail: {
    src: "/projects/leafnoise/thumb.png",
    alt: "Leafnoise thumbnail",
    w: 1392,
    h: 912,
  },
  shortDescription:
    "Redesign of Leafnoise's website. I set the UX strategy, ran stakeholder research and designed the full site, including product pages, testimonials and contact flows.",
  metrics: [
    { value: "8", label: "Stakeholders aligned" },
    { value: "2", label: "Product lines unified" },
    { value: "+38%", label: "Demo request conversion" },
  ],
  context:
    "Leafnoise sold two different B2B SaaS products under one brand, but the website described them as if they were the same thing. Prospects got lost, and sales ended up running demos people could have done on their own. I led the redesign: strategy, stakeholder research, IA, visual system and the content model marketing would use after launch.",
  objectives: [
    "Position both products clearly while keeping one brand",
    "Get more qualified demo requests from organic traffic",
    "Let marketing ship campaign pages without engineering",
    "Set up a design language that can grow with new products",
  ],
  scoping:
    "I organized the project around three audiences: buyers looking at one product, buyers looking at the other and existing customers looking for resources. One navigation had to serve all three without them competing. The customer portal redesign was left for a later phase.",
  challenges: [
    "Two product lines with overlapping but different buyer personas",
    "Sales, marketing, customer success and engineering all had opinions on the homepage",
    "Content was scattered across the blog, docs and PDFs",
    "The CMS was rigid, so patterns had to work within its limits",
  ],
  research: {
    quantitative: [
      { value: "8", label: "Stakeholder interviews across departments" },
      { value: "14", label: "Customer interviews, current and churned" },
      { value: "3 wks", label: "From research to a validated IA" },
    ],
    qualitative:
      "Stakeholder research showed the homepage had turned into a compromise between every internal opinion, which made it useful to nobody. We reset the conversation by tying every decision to a specific, named buyer journey.",
  },
  process: [
    {
      title: "Stakeholder mapping",
      body:
        "I interviewed eight stakeholders from sales, marketing, CS, engineering and leadership. Everyone had a wishlist and they barely overlapped. I turned the interviews into three named buyer journeys and ran a workshop where the team prioritized them together.",
    },
    {
      title: "Sitemap & content model",
      body:
        "A focused sitemap with one entry per buyer journey replaced the old catch-all navigation. I designed the content model around marketing's CMS so they could ship campaign pages without engineering.",
      image: {
        src: "/projects/leafnoise/process-sitemap.png",
        alt: "Sitemap and content model diagram",
        w: 1600,
        h: 900,
      },
    },
    {
      title: "Modular page system",
      body:
        "Pages became combinations of about 20 reusable section blocks. Marketing could build a new landing page in a morning instead of waiting two sprints.",
    },
  ],
  decisions: [
    {
      decision: "Navigation by buyer journey, not by product",
      rationale:
        "Splitting by product made prospects figure out which one they needed. Splitting by job-to-be-done let the content do that work.",
      tradeoff:
        "Some stakeholders wanted each product line front and center. A/B tests on the navigation, measured against demo conversion, settled it.",
    },
    {
      decision: "20 reusable section blocks instead of custom pages",
      rationale:
        "Marketing's speed was the bottleneck, not visual novelty. Reuse won.",
      tradeoff:
        "Sales wanted custom landing pages with decks built in. We kept those out of the system and gave them a separate, lighter tool.",
    },
    {
      decision: "One design system for site and product",
      rationale:
        "Customers who logged into the product expected it to feel like the site. Shared tokens kept the brand consistent without forcing identical layouts.",
      tradeoff:
        "Product launches that wanted a 'fresh' look had to work within the system.",
    },
  ],
  solution: [
    {
      title: "Homepage",
      description: "Clear positioning for each buyer journey, with trust signals above the fold.",
      image: {
        src: "/projects/leafnoise/solution-home.png",
        alt: "Leafnoise homepage",
        w: 1392,
        h: 1712,
      },
    },
    {
      title: "Product pages",
      description: "Modular sections, customer proof and a built-in ROI calculator.",
      image: {
        src: "/projects/leafnoise/solution-products.png",
        alt: "Product pages",
        w: 1392,
        h: 1700,
      },
    },
    {
      title: "Customer stories",
      description: "A template so marketing can publish a customer story in a day.",
      image: {
        src: "/projects/leafnoise/solution-stories.png",
        alt: "Customer story template",
        w: 1392,
        h: 720,
      },
    },
  ],
  outcomes: [
    { value: "+38%", label: "Demo requests from organic", note: "vs. previous quarter" },
    { value: "70%", label: "Of new pages built by marketing without engineering" },
    { value: "1 brand", label: "Covering both product lines" },
  ],
  reflections:
    "Doing stakeholder interviews first felt slow when sales wanted screens yesterday, but it saved months of rework. What I'd revisit is the content model. A few blocks were too rigid, and marketing later wanted to remix them. Finding the balance between flexibility and constraints is something every design system runs into.",
  next: { slug: "ibpm-platform", title: "iBPM Platform Redesign" },
};

export const caseStudies: Record<CaseSlug, CaseStudy> = {
  "ibpm-platform": IBPM,
  "digital-checklists": DIGITAL_CHECKLISTS,
  guardiasya: GUARDIASYA,
  "moorea-ui-kit": MOOREA,
  leafnoise: LEAFNOISE,
};

export const caseStudySlugs: CaseSlug[] = [
  "ibpm-platform",
  "digital-checklists",
  "guardiasya",
  "moorea-ui-kit",
  "leafnoise",
];

export const caseStudyList: CaseStudy[] = caseStudySlugs.map(
  (slug) => caseStudies[slug],
);
