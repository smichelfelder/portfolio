import type { LucideIcon } from "lucide-react";
import {
  Code,
  Compass,
  Component,
  FileText,
  Lightbulb,
  Map,
  MessagesSquare,
  Network,
  Package,
  Sparkles,
  Users,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siClaude,
  siCursor,
  siFigma,
  siReact,
  siShadcnui,
  siStorybook,
  siTailwindcss,
  siVercel,
} from "simple-icons";

type Skill = { label: string; icon: LucideIcon | SimpleIcon };

const groups: { category: string; items: Skill[] }[] = [
  {
    category: "Product & Leadership",
    items: [
      { label: "Product Strategy", icon: Compass },
      { label: "Product Ownership", icon: Package },
      { label: "Roadmap & Sprints", icon: Map },
      { label: "Requirements Writing", icon: FileText },
      { label: "Team Leadership", icon: Users },
    ],
  },
  {
    category: "Design",
    items: [
      { label: "Design Systems", icon: Component },
      { label: "Design Thinking", icon: Lightbulb },
      { label: "User Research", icon: MessagesSquare },
      { label: "Information Architecture", icon: Network },
      { label: "Figma", icon: siFigma },
    ],
  },
  {
    category: "Build & AI",
    items: [
      { label: "AI-first Design", icon: Sparkles },
      { label: "Claude Code", icon: siClaude },
      { label: "Cursor", icon: siCursor },
      { label: "React", icon: siReact },
      { label: "shadcn/ui", icon: siShadcnui },
      { label: "Tailwind", icon: siTailwindcss },
      { label: "Storybook", icon: siStorybook },
      { label: "Vercel", icon: siVercel },
      { label: "HTML/CSS/JS", icon: Code },
    ],
  },
];

function SkillIcon({ icon }: { icon: Skill["icon"] }) {
  if ("path" in icon) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="size-4" strokeWidth={1.75} aria-hidden />;
}

export function Toolkit() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {groups.map((group) => (
        <div
          key={group.category}
          className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8 py-8"
        >
          <h3 className="font-medium pt-2">{group.category}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <li
                key={skill.label}
                className="chip inline-flex items-center gap-2 rounded-full bg-surface pl-3 pr-4 py-2 text-sm"
              >
                <span className="text-accent">
                  <SkillIcon icon={skill.icon} />
                </span>
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
