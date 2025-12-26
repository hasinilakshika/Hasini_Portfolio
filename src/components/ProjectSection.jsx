import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Flower Pot",
    description:
      "A clean and elegant Flora Shop mobile app UI featuring smooth transitions, intuitive interactions, and a refreshing floral theme to create a delightful user experience.",
    image: "/projects/flora_app.jpg",
    tags: ["figma", "ui/ux", "mobile app"],
    demoUrl: "https://www.figma.com/proto/vyWE9TEZpQx7rMnQM0U8K5/Mobile-Application-2nd-Year-Project-UI-Design?page-id=0%3A1&node-id=1-909&p=f&viewport=321%2C176%2C0.21&t=mpNsLbdlCUb28cGy-1&scaling=scale-down&content-scaling=fixed",
  },

  {
    id: 2,
    title: "Financial Tracking App",
    description:
      "A clean financial tracking app UI designed to simplify expense monitoring through clear data visualization, intuitive navigation, and a structured layout.",
    image: "/projects/finance.jpg",
    tags: ["figma", "ui/ux", "mobile app"],
   githubUrl: "https://github.com/hasinilakshika/financial_tracking_app",
  },

  {
    id: 3,
    title: "SL Post Website",
    description:
      "A modern Sri Lanka Post website UI redesign focused on improving usability, clear information hierarchy, and smoother navigation for essential postal services.",
    image: "/projects/postal_website.jpg",
    tags: ["figma", "ui/ux", "website"],
    demoUrl: "https://www.figma.com/proto/0niRvOIyAuQCYIni7uQ0H8/HCI-3rd-Year-Project-UI-Design?page-id=0%3A1&node-id=20-5402&p=f&viewport=304%2C133%2C0.02&t=kOOl6cLJu9UrRPr3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=20%3A5402",
  },

  {
    id: 4,
    title: "Online Safari Booking Website",
    description:
      "A web-based platform that allows users to browse safari packages, make bookings, and manage reservations online.",
    image: "/projects/safari.jpg",
    tags: ["web", "MongoDB", "Express.js", "React", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience using modern web technologies.",
    image: "/projects/portfolio.png",
    tags: ["web", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/hasinilakshika/Hasini_Portfolio
",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          UI/UX design and full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
