import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#Education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ active section id (without #)
  const [activeId, setActiveId] = useState("hero");

  // ✅ Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scrollspy (highlights active item while scrolling)
  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));

    const onScroll = () => {
      const offset = 140; // adjust based on your navbar height (120-180 works)
      const scrollPos = window.scrollY + offset;

      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveId(current);
    };

    // run once at start
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Set active based on URL hash on first load (optional)
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) setActiveId(hash);
  }, []);

  const linkClass = (id) =>
    cn(
      "transition-colors duration-300",
      activeId === id
        ? "text-primary font-medium"
        : "text-foreground/80 hover:text-primary"
    );

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5 bg"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
          onClick={() => setActiveId("hero")}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Hasini Lakshika </span>
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={linkClass(id)}
                onClick={() => setActiveId(id)}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkClass(id)}
                  onClick={() => {
                    setActiveId(id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
