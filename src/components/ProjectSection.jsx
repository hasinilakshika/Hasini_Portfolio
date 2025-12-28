import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Flora Shop Mobile App",
    description:
      "A clean and elegant Flora Shop mobile app UI featuring smooth transitions, intuitive interactions, and a refreshing floral theme to create a delightful user experience.",
    image: `${import.meta.env.BASE_URL}projects/flora_app.jpg`,
    tags: ["figma", "ui/ux", "mobile app"],
    demoUrl:
      "https://www.figma.com/proto/vyWE9TEZpQx7rMnQM0U8K5/Mobile-Application-2nd-Year-Project-UI-Design",
  },
  {
    id: 2,
    title: "Financial Tracking App",
    description:
      "A clean financial tracking app UI designed to simplify expense monitoring through clear data visualization.",
    image: `${import.meta.env.BASE_URL}projects/finance.jpg`,
    tags: ["figma", "ui/ux", "kotlin", "mobile app"],
    githubUrl: "https://github.com/hasinilakshika/financial_tracking_app",
  },
  {
    id: 3,
    title: "SL Post Website",
    description:
      "A modern Sri Lanka Post website UI redesign focused on usability and clear navigation.",
    image: `${import.meta.env.BASE_URL}projects/postal_website.jpg`,
    tags: ["figma", "ui/ux", "website"],
    demoUrl:
      "https://www.figma.com/proto/0niRvOIyAuQCYIni7uQ0H8/HCI-3rd-Year-Project-UI-Design",
  },
  {
    id: 4,
    title: "Online Safari Booking Website",
    description:
      "A web-based platform that allows users to browse safari packages and manage reservations.",
    image: `${import.meta.env.BASE_URL}projects/safari.jpg`,
    tags: ["web", "MongoDB", "Express", "React", "Tailwind", "Node"],
    githubUrl: "https://github.com/Dilshan-Nadeeranga/SAFARI_GO",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience.",
    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,
    tags: ["web", "React", "Tailwind"],
    githubUrl: "https://github.com/hasinilakshika/Hasini_Portfolio",
    demoUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          UI/UX design and full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="
                relative group rounded-xl overflow-hidden
                bg-card border border-transparent
                transition-all duration-500
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
              "
            >
              {}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 text-xs font-medium rounded-full
                        bg-purple-500/10 text-purple-400
                        border border-purple-500/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-purple-400 transition"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-purple-400 transition"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* GLOW LAYER */}
              <div className="
                pointer-events-none absolute inset-0 rounded-xl
                opacity-0 group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br from-purple-500/10 via-transparent to-transparent
              " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
