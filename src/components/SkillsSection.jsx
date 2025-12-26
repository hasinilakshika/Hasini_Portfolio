import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML / CSS", logo: "/logos/HTML.jpg", category: "frontend" },
  { name: "JavaScript", logo: "/logos/js.jpg", category: "frontend" },
  { name: "React", logo: "/logos/React.jpg", category: "frontend" },
  { name: "Tailwind CSS", logo: "/logos/Tailwind_CSS.jpg", category: "frontend" },

  // Backend
  { name: "Node.js", logo: "/logos/node.jpg", category: "backend" },
  { name: "Express.js", logo: "/logos/express_js.jpg", category: "backend" },
  { name: "MongoDB", logo: "/logos/mongo_db.jpg", category: "backend" },
  { name: "SQL", logo: "/logos/my_sql.jpg", category: "backend" },

  // Tools
  { name: "Git", logo: "/logos/git_hub.jpg", category: "tools" },
  { name: "Figma", logo: "/logos/Figma.jpg", category: "tools" },
  { name: "VS Code", logo: "/logos/vscode.jpg", category: "tools" },
  { name: "Android Studio", logo: "/logos/android_studio.jpg", category: "tools" },
  { name: "Power BI", logo: "/logos/power_bi.jpg", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {skills
            .filter(
              (skill) =>
                activeCategory === "all" ||
                skill.category === activeCategory
            )
            .map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                 className="w-15 h-15 p-2 bg-white rounded-xl object-contain shadow-sm hover:shadow-md transition"

                />
                <span className="text-xs text-muted-foreground text-center">
                  {skill.name}
                </span>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
