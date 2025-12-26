import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
   {
    id: 1,
    title: "BSc (Hons) in Information Technology Specializing in Information Technology",
    institute: "Sri Lanka Institute of Information Technology (SLIIT)",
    year: "2023-Present",

  },

   {
    id: 2,
    title: "Diploma in English",
    institute: "Buddhist and Pali University of Sri Lanka",
    year: "2022",
   
  },

   {
    id: 3,
    title: "Certificate Course in Information Technology",
    institute: "Mahapola Ports and Maritime Academy",
    year: "2019",
   
  },

  {
    id: 4,
    title: "Advanced Level",
    institute: "Co/Gothami Balika Vidyalaya",
    year: "2013 – 2021",
   
  },

 
 
  
];

export const EduSection = () => {
  return (
    <section
      id="Education"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
           <span className="text-primary">Education</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12">
          My academic background and professional learning journey.
        </p>

        <div className="space-y-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center bg-card p-6 rounded-xl shadow-xs hover:shadow-md transition"

            >
              <div className="mb-3">
  <div className="p-3 rounded-full bg-primary/10 text-primary">
    <GraduationCap size={22} />
  </div>
</div>


              <div>
                <span className="text-sm text-primary font-semibold">
                  {item.year}
                </span>

                <h3 className="text-lg font-semibold mt-1">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-muted-foreground">
                  {item.institute}
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
