import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center px-4 pt-28 md:pt-32 "
>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Hasini 
              </span>{" "}
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
            Lakshika
              </span>
            </h1>

            <p className="text-lg md:text-base text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
             I am an Information Technology undergraduate pursuing a BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT), with a strong interest in building practical, efficient, and user-focused technology solutions.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button inline-block">
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-78 md:h-80 rounded-full border-4 border-primary overflow-hidden shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}projects/hasini.png`}   
                alt="Hasini Lakshika Rajapaksha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
